import React, { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import DesktopHome from './DesktopHome';
import MobileHome from './MobileHome';

const Home = () => {
  const [history, setHistory] = useState([42, 13, 7, 69]);

  return (
    <>
      <BrowserView>
        <DesktopHome history={history} setHistory={setHistory} />
      </BrowserView>
      <MobileView>
        <MobileHome history={history} />
      </MobileView>
    </>
  )
};

export default Home;
