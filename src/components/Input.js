import React from 'react';
import '../css/App.css';
import '../css/Input.css'

function Input() {
  return (
    <div className="Input flex-row">

        {/* Input form adds new transaction to database */}

        <div className="input flex-row">
            <input placeholder="Transaction Name"></input
            <button><img className="input-icon" src={require("../images/add.png")} alt="edit"></img></button>
            <input className="amount" placeholder="Amount"></input>
            <button><img className="input-icon" src={require("../images/calendar.png")} alt="edit"></img></button>
            
        </div>
      
    </div>
  );
}

export default Input;
