import React from 'react';
import '../css/App.css';

function Logo() {
  return (
    <div className="Logos">

      <div className="logo flex-row">
        <div><img src={require("../images/calculator.png")} alt="logo"></img></div>
      </div>
      
    </div>
  );
}

export default Logo;
