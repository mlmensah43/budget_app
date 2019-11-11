import React from 'react';
import Logo from './Logo';
import Transactions from './Transactions';
import Accounts from './Accounts';
import Input from './Input';
import '../css/App.css'
import '../css/Main.css';
// import { thisExpression } from '@babel/types';

let balance = '6,500';


class Main extends React.Component {

    
    state={
        currentPage: 'Summary'
        // lastPage: 'Budget',
        // dropDownClicked: false
        
    }

    toggleSummary = () =>{
        this.setState({currentPage: 'Summary'})
    }

    toggleBudget = () =>{
        this.setState({currentPage: 'Budget'})
    }

    // toggleDropDown = () =>{
    //     this.setState({dropDownClicked: !this.state.dropDownClicked})
    // }

    // dropDown = () =>{
    //     if(this.state.dropDownClicked === true){
    //         return(
    //             <div>
    //                 <button onClick={this.toggle} className="option dropdown-menu page-title">{this.state.lastPage}</button>
    //             </div>
    //         );
    //     }
    //     else if(this.state.dropDownClicked === false){
    //         return;
    //     }
        
    // }

    showPage = () =>{
        if(this.state.currentPage === 'Summary'){
            return(
                <div className="flex-col">
                    <div className="right-col"><Input></Input></div>
                    <div className="right-col"><Transactions title="Recent Transactions"></Transactions></div>
                    <div className="right-col"><Accounts title="Account Balances"></Accounts></div>
                </div>
            );
        }
        else if(this.state.currentPage === 'Budget'){
            return(
                <div>
                    <div className="right-col"><Input></Input></div>
                    <div className="right-col"><Transactions title="Expected Transactions"></Transactions></div>
                    <div className="right-col"><Accounts title="Estimated Account Balances"></Accounts></div>
                </div>
            );
        }
    }

    render(){
        return (
            <div className="Main grid">

                {/* Toggles between summary page and budget page */}
                <div>
                    <Logo></Logo>
                </div>
                

                <div className="balance-area center-2 flex-col">
                    <div className="current-balance">Current Balance</div>
                    <div className="balance actual-balance">{balance}</div>
                </div>


                <div className="dropdown-area center-2 flex-row">
                    <div className="flex-col">
                        <div className="dropdown-menu flex-row">
                            <div className="page-title flex-col">
                                <button onClick={this.toggleSummary}><img className="icon-1" alt='summary' src={require('../images/merchant-account.png')}></img></button>
                                <button onClick={this.toggleSummary}>Summary</button>
                            </div>
                            <div  className="page-title flex-col">
                                <button onClick={this.toggleBudget}><img className="icon-1" alt='budget' src={require('../images/money-box.png')}></img></button>
                                <button onClick={this.toggleBudget}>Budget</button>
                            </div>
                            
                            {/* <button onClick={this.toggleDropDown}><img className="dropdown-arrow" alt='arrow' src={require('../images/expand.png')}></img></button> */}
                        </div>

                        {/* {this.dropDown()} */}
                    </div>
                </div>


                <div className="left">
                    {/* graphs */}
                </div>
                
                
                <div className="right">
                    {this.showPage()}
                </div>
                

                
                
            </div>
        );
    }
}

export default Main;
