import React from 'react';
import Logo from './Logo';
import Transactions from './Transactions';
import Accounts from './Accounts';
import Input from './Input';
import '../css/App.css'
import '../css/Summary.css';

let balance = '6,500';


function Summary() {
  return (
    <div className="Summary grid">

        {/* Toggles between summary page and budget page */}

        <Logo></Logo>

        <div className="balance flex-col">
            <div className="current-balance">Current Balance</div>
            <div className="balance actual-balance">{balance}</div>
        </div>

        <div className="page-title flex-row">
            <div className="balance">Summary</div>
            <img className="dropdown" alt='arrow' src={require('../images/expand.png')}></img>
        </div>

        <Input></Input>
        <Transactions></Transactions>
        <Accounts></Accounts>
        
    </div>
  );
}

export default Summary;
