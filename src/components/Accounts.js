import React from 'react';
import '../css/App.css';
import '../css/Accounts.css'

function displayAccount(account, amount, type){
    return(
        <div className="account">
            <li className="flex-row">
                <span>{account}</span>
                <span className={type}>{amount}</span>
            </li>
        </div>
    );
}


function Accounts(props) {
  return (
    <div className="Accounts">

        {/* Add Account to database and display account(s) */}

        <div className="accounts flex-col">

            <div className="box-header flex-row">
                <span className="title">{props.title}</span>
                <div><button><img className="icon" src={require("../images/edit.png")} alt="edit"></img></button></div>
            </div>

            <div className="gray-box">
                <ul>
                    {displayAccount('Checking', '1,878','income')}
                    {displayAccount('Savings','7,265','income')}
                </ul>
            </div>
        </div>
        
      
    </div>
  );
}

export default Accounts;
