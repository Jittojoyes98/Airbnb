// import { Search } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useState } from 'react'
import './Banner.css' 
import Search from '../Search/Search';
import { useHistory } from 'react-router';
function Banner(){
    const history=useHistory();
    const [searchDate,setSearchDate]=useState(false);
    return(
        <div className="banner">
            <div className="banner__search">
                {searchDate && <Search/>}
                <Button onClick={()=>setSearchDate(!searchDate)} className="banner__searchButton" variant="outlined">
                    {searchDate ? "Hide":"Search Dates"}
                </Button>

            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>
                <Button variant="outlined" onClick={()=>history.push('/search')}>Explore Nearby</Button>
            </div>
        </div>
    );
}

export default Banner