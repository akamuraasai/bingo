import gql from 'graphql-tag';
import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LastNumbersBar } from '../';
import './MobileHeader.css';

const CreateTicketOnBingo = gql`
  mutation CreateTicketOnBingo($bingo_id: Int!, $user_id: Int!, $numbers: String!) {
    insert_bingo_tickets(objects: { bingo_id: $bingo_id, user_id: $user_id, numbers: $numbers }) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

const getNumbers = (numbers = []) => {
  const number = Math.floor(Math.random() * 75) + 1;
  if (numbers.length === 24) {
    return numbers;
  }

  return numbers.indexOf(number) === -1
    ? getNumbers([...numbers, number])
    : getNumbers(numbers);
};

let creating = false;

const generateTicket = (createTicket, bingo_id, hasTicket) => async () => {
  if (hasTicket) {
    alert('Somente uma cartela por pessoa!');
    return;
  }

  if (creating) {
    return;
  }

  creating = true;
  const generatedNumbers = getNumbers().sort((a, b) => a - b);
  const numbers = JSON.stringify(generatedNumbers);
  const user = localStorage.getItem('user');
  const { id: user_id } = JSON.parse(user);
  await createTicket({ variables: { bingo_id, user_id, numbers } });
  creating = false;
};

const MobileHeader = ({ history, bingoId, hasTicket }) => {
  const [createTicket] = useMutation(CreateTicketOnBingo);

  return (
    <header className="header-mobile">
      <h1 className="title-mobile">
        Bingo
        <span
          className="plus-button"
          onClick={generateTicket(createTicket, bingoId, hasTicket)}
        >
        +
      </span>
      </h1>
      <LastNumbersBar history={history} />
    </header>
  );
}

export default MobileHeader;
