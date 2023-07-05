import React, { useContext } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/page.homepage';
import Login from './pages/Login/page.login';
import Signup from './pages/Signup/page.signup';
import AddPost from './pages/Homepage/add_post';
import EditPost from './pages/Homepage/edit_post';
import Firstpage from './pages/Firstpage/firstpage';
import AuthContext from './context/AuthContext';

function Router() {

    const {loggedIn} = useContext(AuthContext);

    return(
        
        <BrowserRouter>
        <Switch>
            {loggedIn === false && (
                <>
                <Route path={"/"} component={Firstpage} exact/>
                <Route path={"/signup"} component={Signup} />
                <Route path={"/login"} component={Login} />
                </>
            )}
            {loggedIn === true && (
                <>
               <Route path={"/homepage"} component={Homepage} exact/>
                <Route path={"/add_post"} component={AddPost} />
                <Route path={"/update/:id"} component={EditPost} />
                </>
            )}
           

           
            
        </Switch>
        </BrowserRouter>
       
    )
}

export default Router;