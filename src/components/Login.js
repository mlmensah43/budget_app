import React from 'react';
import '../css/Login.css';




function toggler (props){
    if(props.page === 'login'){
        return(
            <div className="Login">
                {/* Toggles betwween log in and sign up
                Adds new user to database */}
                <form className="flex-col">
                    <div className="flex-col login-inputs">
                        <input className="form-login" placeholder="Email Address"></input>
                        <input className="form-signup" placeholder="Password" type="password"></input>
                    </div>
    
                    <div className="submit">
                        <button>Login</button>
                    </div>       
                </form>
            </div>
        );

    }

    else if(props.page === 'signup'){
        return(
            <div>
                <form className="flex-col">

                    <div className="flex-col login-inputs">
                        <input className="form-login" placeholder="Full Name"></input>
                        <input className="form-login" placeholder="Email Address"></input>
                        <input className="form-signup" placeholder="Password" type="password"></input>
                        <input className="form-signup" placeholder="Confirm Password" type="password"></input>
                    </div>
    
                    <div className="submit">
                        <button>Sign up</button>
                    </div>       
                </form>
            </div>
        );
    }
}




function Login (props) {

    // login = () =>{
    //     console.log("login");
    //     // this.setState({page: 'signup'})
    //         return(
    //             <div>
    //                 <form className="flex-col">
    //                     <div className="flex-row login-header-row">
    //                         <button className="login-header" >Login</button>
    //                         <button className="login-header signup-40" >Sign up</button>
    //                     </div>
    //                     <div className="flex-col login-inputs">
    //                         <input className="form-login" placeholder="Email Address"></input>
    //                         <input className="form-signup" placeholder="Password" type="password"></input>
    //                     </div>
        
    //                     <div className="submit">
    //                         <button>Login</button>
    //                     </div>       
    //                 </form>
    //             </div>
    //         );
    // }


    // signUp = () =>{
    //     console.log("signup");
    //         return(
    //             <div>
    //                 <form className="flex-col">
    //                     {/* <div className="flex-row login-header-row">
    //                         <button className="login-header" >Login</button>
    //                         <button className="login-header signup-40" >Sign up</button>
    //                     </div> */}
    //                     <div className="flex-col login-inputs">
    //                         <input className="form-login" placeholder="Full Name"></input>
    //                         <input className="form-login" placeholder="Email Address"></input>
    //                         <input className="form-signup" placeholder="Password" type="password"></input>
    //                         <input className="form-signup" placeholder="Confirm Password" type="password"></input>
    //                     </div>
        
    //                     <div className="submit">
    //                         <button>Sign up</button>
    //                     </div>       
    //                 </form>
    //             </div>
    //         );
    // }
    



        return( 
            <div>
                {toggler(props)}
            </div>
            
        ); 
}

export default Login;
