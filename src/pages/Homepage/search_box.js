import React, { useState } from 'react';
import '../style/articles_style.css'



const SearchBox = (props) => {
   return (
    <div className="search-box">
       
        <input className="form-control"
           type="search" 
           placeholder={props.placeholder}
           aria-label="Search"
           onChange={props.handleChange}
        />
     </div>
    

    
  )
}

export default SearchBox;