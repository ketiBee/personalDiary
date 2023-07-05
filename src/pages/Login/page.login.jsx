import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import '../style/signup_style.css'
import AuthContext from '../../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    async function  userLogin(e) {
        e.preventDefault() 

        const logged = {
            email,                   
            password
        };

        setEmail("");
        setPassword("");
        

        await axios.post("http://localhost:5000/app/login", logged, {
            withCredentials: true
        })
        .then(response => console.log(response.data))
        
        await getLoggedIn();
        history.push("/homepage");
    } 

   return ( 
        <div className="login_page">
            <nav>
                <h1 className="title-navbar">My Personal Diary</h1>
            </nav>
            
            <div className = 'container my-5'>
            
                <div className = 'form-div'>
                <h3>Login</h3>
                    <form onSubmit={userLogin}>
                        <input type = 'text'
                        placeholder = 'Email'
                        onChange = {(e) => setEmail(e.target.value)}
                        value = {email}
                        className = 'form-control form-group'
                        />

                        <input type = 'password'
                        placeholder = 'Password'
                        onChange = {(e) => setPassword(e.target.value)}
                        value = {password}
                        className = 'form-control form-group'
                        />

                        <input type = 'submit' 
                        className = 'btn btn-danger btn-block'
                        value = 'Login'
                        />
                    </form>
                </div>
            </div>
  
        </div>
         );
}
 
export default Login;