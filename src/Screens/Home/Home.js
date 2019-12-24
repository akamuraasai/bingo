import React from 'react';
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

const BingoAction = gql`
    mutation BingoAction {
        insert_bingo(objects: {}) {
            affected_rows
        }
    }
`;

const Home = () => {
  const [addToBingo] = useMutation(AddNumberToBingo);
  const [bingoAction] = useMutation(BingoAction);
  const { data } = useSubscription(GetBingoHistory);
  const bingo = data?.bingo[0] || {};
  const history = bingo?.history?.map(({ number }) => number) || [];
  const setHistory = async (number) => {
    await addToBingo({ variables: { bingo: bingo.id, number } });
  };
  const newBingo = async () => {
    await bingoAction();
  };

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
        <MobileHome history={history} />
      </MobileView>
    </>
  );
};

export default Home;
