import React from 'react';
import Logo from './Logo';
import Login from './Login';
import '../css/Landing.css';



function Landing() {
  return (
    <div className="Landing grid">

        <div className="logo-hider-desktop"> 
            <Logo></Logo>
        </div>

        <div className="logo-hider-mobile center">
            <Logo></Logo>
        </div>


        <div className="center">
            <div className="subject">
                <div className="header">Budgeting Made Easy</div>
                <p>Manage your expenses and budget ahead for the months to come. Set up goals and use the extra funds for what you really want! </p>
            </div>
        </div>

        <div className="center">
            <div className="flex-col">
                <div className="flex-row login-header-row">
                    <button className="login-header " >Login</button>
                    <button className="login-header signup-40" >Sign up</button>
                </div>
                <Login page="login"></Login>
            </div>
        </div>

        <div className="center">
            <div className="flex-col subject-2">
                <div className="flex-row "><img className="subject-2-icon" src={require("../images/transactions.png")} alt="icon"></img><span>Track your spending</span></div>
                <div className="flex-row"><img className="subject-2-icon" src={require("../images/goal.png")} alt="icon"></img><span>Set your budgeting goals </span></div>
                <div className="flex-row"><img className="subject-2-icon" src={require("../images/graph.png")} alt="icon"></img><span>See the progress your making</span></div>
            </div> 
        </div>
        
    </div>
  );
}

export default Landing;
