import React from 'react'
import Modal from '../../modules/Modal/Modal'
import CardSlider from '../../organisms/Card Slider/CardSlider'
import './Section.css'
function Section() {
    return (
        <main>
            <div >                
                <h1>Recent new</h1>                
            </div>
            <div className="hello">
                <Modal></Modal>
                <Modal/>
                <Modal/>
                <Modal/>
                <CardSlider/>
            </div>
                
                 
        </main>
    )
}

export default Section
