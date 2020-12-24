import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useMutation, useSubscription } from '@apollo/react-hooks';
import { BrowserView, MobileView } from 'react-device-detect';
import DesktopHome from './DesktopHome';
import MobileHome from './MobileHome';

const GetBingoHistory = gql`
  subscription GetBingoHistory {
    bingo(order_by: { created_at: desc }) {
      id
      history(order_by: { created_at: desc }) {
        number
      }
      tickets {
        id
        user_id
        numbers
      }
    }
  }
`;

const AddNumberToBingo = gql`
  mutation AddNumberToBingo($bingo: Int!, $number: Int!) {
      insert_bingo_number(objects: { bingo_id: $bingo, number: $number }) {
          affected_rows
          returning {
              bingo_id
              number
          }
      }
  }
`;

const CreateUserOnBingo = gql`
  mutation CreateUserOnBingo($name: String!) {
    insert_bingo_user(objects: { name: $name }) {
      affected_rows
      returning {
        id
        name
      }
    }
  }
`;

const BingoAction = gql`
    mutation BingoAction {
        insert_bingo(objects: {}) {
            affected_rows
        }
    }
`;

const Home = () => {
  const [user, setUser] = useState(null);
  const [addToBingo] = useMutation(AddNumberToBingo);
  const [bingoAction] = useMutation(BingoAction);
  const [createUser] = useMutation(CreateUserOnBingo);
  const { data } = useSubscription(GetBingoHistory);
  const bingo = data?.bingo[0] || {};
  const bingoId = data?.bingo[0].id;
  const history = bingo?.history?.map(({ number }) => number) || [];
  const tickets = bingo?.tickets?.
      filter(({ user_id }) => user_id === user.id)
      .map(({ id, numbers }) => ({ id, numbers: JSON.parse(numbers) })) || [];
  const setHistory = async (number) => {
    await addToBingo({ variables: { bingo: bingo.id, number } });
  };
  const newBingo = async () => {
    await bingoAction();
  };

  useEffect(() => {
    (async () => {
      const savedUser = localStorage.getItem('user');
      if (!savedUser) {
        const result = await createUser({ variables: { name: 'teste' } });
        const createdUser = result.data?.insert_bingo_user?.returning?.[0];
        localStorage.setItem('user', JSON.stringify(createdUser));
        setUser(createdUser);
      } else {
        setUser(JSON.parse(savedUser));
      }
    })();
  }, [createUser]);

  return (
    <>
      <BrowserView>
        <DesktopHome
          history={history}
          setHistory={setHistory}
          newBingo={newBingo}
        />
      </BrowserView>
      <MobileView>
        <MobileHome history={history} tickets={tickets} bingoId={bingoId} />
      </MobileView>
    </>
  );
};

export default Home;
