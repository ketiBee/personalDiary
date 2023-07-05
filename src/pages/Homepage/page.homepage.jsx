import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Header from './header';
import Articles from './articles';
import { Link, Route } from 'react-router-dom';
import EditPost from './edit_post';
import '../style/homepage_style.css'


function Homepage()  {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
         let mounted = true;

        if(mounted) {
        axios
            .get("http://localhost:5000/app/article", {
                withCredentials: true
            })
            .then(res => setPosts(res.data))
            .catch(error => console.log(error));
        }

        

        return () => mounted = false;
    });



    return (  
            <div>
                <Header posts={posts} />
                <div className='add_button'>
                    <Link to="/add_post" className="btn btn-dark my-5 add-post-button">Write diary post</Link>
                </div>
                <Articles posts={posts} />
                <Route path="/update/:id" 
                render={props => <EditPost {...props} posts={posts}/> }
                />
                
            
        
            </div>
        );
    }

 
export default Homepage;