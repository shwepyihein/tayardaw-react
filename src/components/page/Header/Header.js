import React from 'react'
import Search from '../../atoms/search/Search'
import './Header.css'
import Logo from '../../../logo.svg';
export default function Header() {
    return (
        <nav>
            <div className="header">
               <div className="inner-header">
                         <div className="header-logo">
                            <img src={Logo}></img>                                                                                                
                        </div>        
                        <Search/>    
                 </div>               
            </div>
        </nav>
    )
}
