import React from 'react';
import '../css/App.css';
import '../css/Input.css'

function Input() {
  return (
    <div className="Input flex-row">

        {/* Input form adds new transaction to database */}

        <div className="input flex-row">
            <button><img className="input-item input-icon" src={require("../images/add.png")} alt="edit"></img></button>
            <input className="input-item" placeholder="Transaction Name"></input>
            
            <input className="input-item amount" placeholder="Amount"></input>
            <button><img className="input-item input-icon" src={require("../images/calendar.png")} alt="edit"></img></button>
            
        </div>
      
    </div>
  );
}

export default Input;
