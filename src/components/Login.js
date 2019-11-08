import React from 'react';
import '../css/Login.css';



class Login extends React.Component {

    state={
        login: true
    }

    toggle = (x) =>{
        this.setState({login: x})
    }

    handleLogin = () =>{

    }

    handleSignUp = () =>{

    }


    showForm = () =>{
        if(this.state.login === true){
            return(
                <div className="Login">
                    
                    <form className="flex-col">
                        <div className="flex-col login-inputs">
                            <input type="email" className="form-login" placeholder="Email Address" required></input>
                            <input type="password" className="form-signup" placeholder="Password" required></input>
                        </div>
        
                        <div className="submit">
                            <button type="submit" onSubmit={this.handleLogin}>Login</button>
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
                            <input type="text" placeholder="Full Name" required></input>
                            <input type="email" placeholder="Email Address" required></input>
                            <input type="password" placeholder="Password" required></input>
                            <input type="password" placeholder="Confirm Password" required></input>
                        </div>
        
                        <div className="submit">
                            <button type="submit" onSubmit={this.handleSignUp}>Sign up</button>
                        </div>       
                    </form>
                </div>
            );
        }
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
