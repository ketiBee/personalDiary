import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogOutBtn from './logout_button';
import '../style/header_style.css'




const HeaderNav = ({posts}) => {

    
return (
  <nav className='home_navbar'>

      <div className="container-fluid">             
                
          <Link to="/homepage" className='header_title'>My Personal Diary</Link>
          <LogOutBtn />
        
     </div>
  </nav>   


)};

export default HeaderNav;