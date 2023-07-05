import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './header';
import '../style/editpost_style.css';
import axios from 'axios';

const EditPost = (props) => {

    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [message, setMessage] = useState("");
    const [fileName, setFileName] = useState("");

    const history=useHistory();
    
    const onChangeFile = e => {
        setFileName(e.target.files[0]);
    };

    const onPost = e => {
        e.preventDefault()

       

        const formData = new FormData();

        formData.append("title", title);
        formData.append("article", article);
        formData.append("articleIMG", fileName);

        axios.put(`http://localhost:5000/app/update/${props.match.params.id}`, formData, {
            withCredentials: true
        })
            .then(res => setMessage(res.data))
            .catch(err => {console.log(err)}) 

        history.push('/homepage');
    };

    useEffect(() => {
        axios
            .get(`http://localhost:5000/app/${props.match.params.id}`, {
                withCredentials: true
            })
            .then(res => [
                
                setTitle(res.data.title),
                setArticle(res.data.article),
                setFileName(res.data.articleIMG)

                
            ])
            .catch(err => console.log('Error kod dohvata: ' +err));
        
            
    }, [props]);
    
    return (
    <div>
        <Header />
        <div className="edit_post_form">
            <h1>Edit Post</h1>
            <span className="message">{message}</span>
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
                        onChange={e => setArticle(e.target.value)}>

                        </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="file">Choose post image</label>
                    <input type="file" 
                            filename="articleIMG" 
                            className="form-control-file" 
                            onChange={onChangeFile}
                    />

                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    </div>
    )
}


export default EditPost;