import React, {useContext} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import AuthContext from '../../context/AuthContext';

function LogOutBtn() {
    
    const {getLoggedIn} = useContext(AuthContext);

    const history=useHistory();

   async function logOut() {
       await axios.get("http://localhost:5000/app/logout", {
           withCredentials:true
       });
       await getLoggedIn();
       history.push("/");
       
    }

    return (
        <button className="btn btn-danger" onClick={logOut}>
        Log Out
        </button>
    )
}

export default LogOutBtn;