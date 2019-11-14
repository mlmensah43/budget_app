import React from 'react';
import '../css/Login.css';
// import {
//     HashRouter as Router,
//     Route,
//     Link
//   } from "react-router-dom";



class Login extends React.Component {

    state={
        login: true,
        password: ''
    }

    componentDidMount(){
        // this.test();
    }

    toggle = (x) =>{
        this.setState({login: x})
    }




    async test(){
        // const response = await fetch('http://localhost:4000/api');
        // const users = await response;
        // console.log(users.password);
        fetch('https://budgetmlm.herokuapp.com/api')
        .then(response => response.json())
        .then(({data})=>{
            console.log(data[0].email);
        })
        .catch(err => {console.log(err)})
    }

    handleSignUp = () =>{

    }


    showForm = () =>{
        if(this.state.login === true){
            return(
                <div className="Login">
                    
                    <form className="flex-col">
                        <div className="flex-col login-inputs">
                            <input type="email" name="email" className="input-else" placeholder="Email Address" required></input>
                            <input type="password" name="password" className="input-else" placeholder="Password" required></input>
                        </div>
        
                        <div className="submit">
                            <button type="submit" onSubmit={(e)=> this.test(e)}>Login</button>
                        </div>       
                    </form>
                </div>
            );
        }

        else if(this.state.login === false){
            return(
                <div>
                    <form className="flex-col">

                        <div className="flex-col login-inputs">
                            <div className="flex-row input-names">
                                <div><input type="text" name="first_name" className="input-name" placeholder="First Name" required></input></div>
                                <div><input type="text" name="last_name" className="input-name" placeholder="Last Name" required></input></div>
                            </div>
                            {/* <input type="text" placeholder="Full Name" required></input> */}
                            <input className="input-else" type="email" name="email" placeholder="Email Address" required></input>
                            <input onChange={event => this.setPassword(event.target.value)} className="input-else" type="password" name="password" id="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input>
                            <input className="input-else" type="password" placeholder="Confirm Password" pattern={this.state.password}  title="Passwords do not match" required></input>
                        </div>
        
                        <div className="submit">
                            <button type="submit" onSubmit={()=> this.handleSignUp()}>Sign up</button>
                        </div>       
                    </form>
                </div>
            );
        }
    }

    setPassword = (x) =>{
        this.setState({password: x})
    }


    render(){
        return( 
            <div className="Login flex-col">
                {/* Toggles betwween log in and sign up 
                Adds new user to database */}
                <div className="flex-row login-header-row">
                    <button className={`login-header ${this.state.login}`} onClick={()=> this.toggle(true)}>Login</button>
                    <button className={`login-header ${!this.state.login}`} onClick={()=> this.toggle(false)}>Sign up</button>
                </div>
                {this.showForm()}
            </div>
            
        ); 
    }

}

export default Login;
