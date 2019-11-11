import React from 'react';
import '../css/App.css'
import '../css/Transactions.css';
// import { tsPropertySignature } from '@babel/types';




class Transactions extends React.Component {
    
    state={
        filter: 'all'   
    }
  
    handleFilter = (x) =>{
        this.setState({filter: x})
    }

    displayTransaction = (place, location, amount, date, type) =>{
        if(this.state.filter === 'all'){
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
        else if(this.state.filter !== 'all' && type === this.state.filter){
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
        else{
            return;
        }
        
    }

    render(){
        return (
            <div className="Transactions">
        
                {/* Add Transaction to database and display transaction(s) */}
                {/* Added comment to test commit */}
        
                <div className="transactions flex-col">
        
                        <div className="box-header flex-row">
                            <span className="title">{this.props.title}</span>
                            <div><button><img className="icon" src={require("../images/edit.png")} alt="edit"></img></button></div>
                        </div>
        
                        <div className="filters flex-row">
                            <div><button onClick={()=> this.handleFilter('all')} className={`filter ${this.state.filter}-on`}>All</button></div>
                            <div><button onClick={()=> this.handleFilter('income')} className={`filter income ${this.state.filter}-on`}>Income</button></div>
                            <div><button onClick={()=> this.handleFilter('expense')} className={`filter expense ${this.state.filter}-on`}>Expense</button></div>
                        </div>
        
                        <div className="white-box">
                            <ul>
                                {this.displayTransaction('Accenture', 'Nashville, TN', '1256.65', 'Nov. 1', 'income')}
                                {this.displayTransaction('McDonalds', 'Smyrna, TN', '8.78', 'Oct. 31', 'expense')}
                                {this.displayTransaction('Marble\'s Slab', 'Murfreesboro, TN', '12.65', 'Oct. 31', 'expense')}
                            </ul>
                        </div>
        
                </div>
            </div>
          );
    }
    
}

export default Transactions;
