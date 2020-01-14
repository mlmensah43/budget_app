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
        users: '',
        password: ''
    }

    toggle = (x) =>{
        this.setState({login: x})
    }

    setPassword = (x) =>{
        this.setState({password: x})
    }

    componentDidMount(){
        this.fetchUsers().catch(err => {
            console.error(err)
        })
    }

    

    async fetchUsers(){
        const response = await fetch('/api');
        const data = await response.json();
        this.setState({users: data});

        // fetch('http://localhost:4000/api')
        // .then(response => response.json())
        // .then(({data})=>{
        //     console.log(data);
        // })
        // .catch(err => {console.log(err)})
        
    }

    test = () =>{
        //console.log(this.state.users[0].password)
    }

    handleLogin = (event) => {
        event.preventDefault();
        const target = event.target
        //console.log(this.state.users[0].email)

        for(let user of this.state.users){
            if(target[0].value === user.email){

                if(target[1].value === user.password){
                    alert('Login succesful');
                    //redirect!
                }
                else{
                    alert('Invalid login credentials(password)')
                }
            }
            else{
                alert('Invalid login credentials(email)')
            }
        }
        
    }

    handleSignUp = (event) =>{
        event.preventDefault();
        const target = event.target

        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: target[0].value,
                last_name: target[1].value,
                email: target[2].value,
                password: target[3].value
            })
        };
        fetch('/api', options);

    }


    showForm = () =>{
        // login
        if(this.state.login === true){
            return(
                <div className="Login">
                    
                    <form onSubmit={this.handleLogin} className="flex-col">
                        <div className="flex-col login-inputs">
                            <input type="email" name="email" className="input-else" placeholder="Email Address" required></input>
                            <input type="password" name="password" className="input-else" placeholder="Password" required></input>
                        </div>
        
                        <div className="submit">
                            <button type="submit">Login</button>
                        </div>       
                    </form>
                </div>
            );
        }

        //signup
        else if(this.state.login === false){
            return(
                <div>
                    <form onSubmit={this.handleSignUp} className="flex-col">

                        <div className="flex-col login-inputs">
                            <div className="flex-row input-names">
                                <div><input type="text" name="first_name" className="input-name" placeholder="First Name" required></input></div>
                                <div><input type="text" name="last_name" className="input-name" placeholder="Last Name" required></input></div>
                            </div>
                            <input className="input-else" type="email" name="email" placeholder="Email Address" required></input>
                            <input onChange={event => this.setPassword(event.target.value)} className="input-else" type="password" name="password" id="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input>
                            <input className="input-else" type="password" placeholder="Confirm Password" pattern={this.state.password}  title="Passwords do not match" required></input>
                        </div>
        
                        <div className="submit">
                            <button type="submit">Sign up</button>
                        </div>       
                    </form>
                </div>
            );
        }
    }


    render(){
        return( 
            <div className="Login flex-col">
                {/* Toggles between log in and sign up */}
                <div className="flex-row login-header-row">
                    <button className={`login-header ${this.state.login}`} onClick={()=> this.toggle(true)}>Login</button>
                    <button className={`login-header ${!this.state.login}`} onClick={()=> this.toggle(false)}>Sign up</button>
                </div>
                {this.showForm()}
                {this.test()}
            </div>
            
        ); 
    }

}

export default Login;
