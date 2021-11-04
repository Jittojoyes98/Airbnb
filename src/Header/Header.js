import React from 'react'
import './Header.css' 
import SearchIcon from '@mui/icons-material/Search';
import { ExpandMore}from '@mui/icons-material';
import LanguageIcon from '@mui/icons-material/Language';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <div className="header">
            <Link to="/">
            <img className="header__icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"/>
            </Link>
            <div className="header__centre">
                <input type="text"/>
                <SearchIcon/>
            </div>
            <div className="header__right">
                <p>Become a Host</p>
                <LanguageIcon/>
                <ExpandMore/>
                <Avatar/>
            </div>
        </div>
    );
}

export default Header