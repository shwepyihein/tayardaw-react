import React from 'react'
import logo from '../../../logo.svg'
import './image.css'
export default function Image() {
    return (
        <div className="img"> 
            <img id="myImg" src={logo} alt="Snow" ></img>
        </div>
    )
}
