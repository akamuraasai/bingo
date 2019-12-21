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

const Home = () => {
  const [addToBingo] = useMutation(AddNumberToBingo);
  const { data } = useSubscription(GetBingoHistory);
  const history = data?.bingo[0]?.history?.map(({ number }) => number) || [];
  const setHistory = async (number) => {
    await addToBingo({ variables: { bingo: 1, number } });
  }

  return (
    <>
      <BrowserView>
        <DesktopHome history={history} setHistory={setHistory} />
      </BrowserView>
      <MobileView>
        <MobileHome history={history} />
      </MobileView>
    </>
  );
};

export default Home;
