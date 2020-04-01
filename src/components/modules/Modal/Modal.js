import React from 'react'
import Image from '../../atoms/image/Image'
import Name from '../../atoms/namebox/Name'
import Play from '../../atoms/button/Button'
import './Modal.css'
export default function Modal() {
    return (
        <div className="modal">
            <Image/>            
            <Name/>
            <Play/>
            <div className="modal-bottom">
            </div>
        </div>
    )
}
