import React from 'react'
import './Search.css'
export default function Search() {
    return (
        
         <div className="search">
	        <input type="text" className="searchbox" placeholder="Search"/>
	        <button type="submit" className="searchbtn"><i className="icon icon-sharpicons-search"></i></button>
        </div>
        
    )
}
