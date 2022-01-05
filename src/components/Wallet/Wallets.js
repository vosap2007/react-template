/* eslint-disable */
import React, {useEffect, useState} from 'react';
import * as nearAPI from 'near-api-js';
import {updateWallet} from '../../state/near';
import {getContract, contractMethods, GAS} from '../../utils/near-utils';
const {
  KeyPair,
  utils: {
    PublicKey,
    format: {formatNearAmount},
  },
} = nearAPI;

export const Wallet = ({wallet, handleClose}) => {
  const [accountId, setAccountId] = useState('');
  const [proceeds, setProceeds] = useState('0');

  if (wallet && wallet.signedIn) {
    return (
      <>
        <h3>Wallet</h3>

        <p>Balance: {wallet.balance} N</p>
        <br />

        <button type="button" onClick={handleClose}>
          Close
        </button>
        <br />

        <button type="button" onClick={() => wallet.singOut()}>
          Sign Out
        </button>
      </>
    );
  }

  return (
    <>
      <button type="button" onClick={() => wallet.signIn()}>
        Connect Wallet
      </button>
    </>
  );
};
