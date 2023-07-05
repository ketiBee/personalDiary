import React, { useState } from 'react';
import '../style/articles_style.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchBox from './search_box';

const Articles = ({posts}) => {
    
    
    const [article, setArticle] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

        //delete post
        const deleteArticle = id => {
            axios.delete(`http://localhost:5000/app/${id}`, {
                withCredentials: true
            })
            .then(res => alert(res.data))
            setArticle(article.filter(elem => elem._id !== id));
        }

        //search filter
        const filteredPosts = posts.filter( post => {
            return post.title.toLowerCase().includes(searchTerm.toLowerCase())
        })

        

    return (

   
    <div className="article_box">
       
        <SearchBox  placeholder="Search title..."
                    handleChange={e => setSearchTerm(e.target.value)}
        />
      

        {filteredPosts.map((article, key) => (
            <div className="cont_article" key={key}>
                
                <h2 className='article-title'>{article.title}</h2>
                <p className="parag-post">{article.article}</p>
                <img className="pic-post" src={`uploads/${article.articleIMG}`} alt="..." />
                
                <div className="row my-5">
                    <div className="col-sm-5 edit-box">
                        <Link to={`/update/${article._id}`} className="btn btn-outline-primary btn-sm edit-button">
                            Edit Post
                        </Link>
                    </div>
                    <div className="col-sm-5 delete-box">
                        <button onClick={() => deleteArticle(article._id)} className="btn btn-outline-danger btn-sm delete-button ">
                            Delete Post
                        </button>    
                    </div>   
                 </div>
                 <span className="badge badge-secondary p-2">
                 {article.date}
                </span>
            </div>
        ))};
    </div>
    
      
)}



export default Articles;