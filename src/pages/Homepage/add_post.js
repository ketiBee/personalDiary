import React, {useState} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './header';
import '../style/addpost_style.css';
import axios from 'axios';

const AddPost = () => {
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [fileName, setFileName] = useState("")

    const history=useHistory();

    const onChangeFile = e => {
        setFileName(e.target.files[0]);
    }

    const onPost = e => {
        e.preventDefault()

        const formData = new FormData();

        formData.append("title", title);
        formData.append("article", article);
        formData.append("articleIMG", fileName);
      
       

        setTitle('');
        setArticle('');

        axios.post('http://localhost:5000/app/postArticle', formData, {
            withCredentials: true
        })
            .then(res => console.log(res.data))
            .catch(err => {console.log(err)}) 
        
        history.push('/homepage');
    };
    
    return (
    <div>
        <Header />
        <div className="add_post_form">
            <h1>Write a new diary post</h1>
            <form onSubmit={onPost} encType="multipart/form_data">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        value={title}
                        className="form-control" 
                        placeholder="Title" 
                        onChange={e => setTitle(e.target.value)}/>
               
                </div>
                <div className="form-group">
                    <label htmlFor="article">Article</label>
                    <textarea 
                        className="form-control" 
                        value={article}
                        placeholder="Article" 
                        rows="10"
                        onChange={e => setArticle(e.target.value)} 
                    />        
                </div>
                <div className="form-group">
                    <label htmlFor="file">Choose post image</label>
                    <input type="file" 
                            filename="articleIMG" 
                            className="form-control-file" 
                            onChange={onChangeFile}
                    />

                </div>
                <button type="submit" className="btn btn-danger">Post</button>
            </form>
        </div>
    </div>
    )
}

export default AddPost;