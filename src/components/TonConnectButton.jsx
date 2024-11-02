import React, { useEffect } from 'react';
import { TonConnect } from '@tonconnect/sdk';

const TonConnectButton = () => {
  useEffect(() => {
    const tonConnect = new TonConnect();
    tonConnect.createConnectButton('#connect-button');
  }, []);

  return <div id="connect-button"></div>;
};

export default TonConnectButton;
