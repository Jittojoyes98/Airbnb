import './SearchResult.css'
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
      <div className="searchresult">
        <img src={img} alt=""/>
        <FavoriteBorderIcon className="searchresult__heart"/>
        <div className="searchresult__info">
            <div className="searchresult__infoTo">
                <p>{location}</p>
                <h3>{title}</h3>
                <p>__</p>
                <p>{description}</p>
            </div>
            <div className="searchresult__infoBo">
                <div className="searchresult__stars">
                    <StarIcon className="searchresult__star"/>
                    <p><strong>{star}</strong></p>
                </div>
                <div className="searchresult__price">
                    <h2>{price}</h2>
                    <p>{total}</p>
                </div>
                
            </div>
        </div>
      </div>
    );
  }
  
  export default SearchResult;