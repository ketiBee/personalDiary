import React from 'react';
import { Link } from 'react-router-dom';
import '../style/firstpage_style.css';

function Firstpage() {
    return(
    <div className="firstpage-div">    
        <div className="firstpage-header">
            <h1 className="firstpage-font">My Personal Diary</h1>
        </div>

        <div className="firstpage_box">
          
                <p className="motivation">
                    To LIVE would be an awfully big ADVENTURE
                </p>
        
            
                <p className="purpose">
                    Life is full of memories that shouldn't be forgotten.
                    That is way our Personal Diary allows you to write
                    down your most memorable moments of life.
                    Create your acconut and join us in wonderful 
                    adventure called life.
                </p>
        

            <div className="container_register_box">
                <p>If you don't have an account, please sign up.</p>
                <Link to="/signup" className="navbar-brand btn btn-outline-danger my-3" >Sign Up</Link>
                <p>Already with an account? Great, lets log in!!</p>
                <Link to="/login" className="navbar-brand btn btn-outline-danger" >Log In</Link>
            </div>  
        </div>
    </div>    
    )
}

export default Firstpage;