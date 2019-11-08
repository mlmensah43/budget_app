import React from 'react';
import '../css/App.css'
import '../css/Transactions.css';
import { tsPropertySignature } from '@babel/types';


function displayTransaction(place, location, amount, date, type){
    return(
        <div>
            <li className="transaction flex-row">
                <div className="flex-col">
                    <span>{place}</span>
                    <span className="info">{location}</span>
                </div>
                <div className="flex-col">
                    <span className={type}>{amount}</span>
                    <span className="info">{date}</span>
                </div>
            </li>
        </div>
    );
}

function Transactions(props) {
  return (
    <div className="Transactions">

        {/* Add Transaction to database and display transaction(s) */}
        {/* Added comment to test commit */}

        <div className="transactions flex-col">

                <div className="box-header flex-row">
                    <span className="title">{props.title}</span>
                    <div><button><img className="icon" src={require("../images/edit.png")} alt="edit"></img></button></div>
                </div>

                <div className="filters flex-row">
                    <div><button className="filter">All</button></div>
                    <div><button className="filter income filter-off">Income</button></div>
                    <div><button className="filter expense filter-off">Expense</button></div>
                </div>

                <div className="gray-box">
                    <ul>
                        {displayTransaction('McDonalds', 'Smyrna, TN', '8.78', 'Oct. 31', 'expense')}
                        {displayTransaction('Marble\'s Slab', 'Murfreesboro, TN', '12.65', 'Oct. 31', 'expense')}
                    </ul>
                </div>

        </div>
    </div>
  );
}

export default Transactions;
