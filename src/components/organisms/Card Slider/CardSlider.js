import React from 'react';
import './CardSlider.css'
const CardSlider =()=>{
    return(
        <div>
        <div>
          <button onclick="openNav()">ONCLick</button>
          <button onclick="closeNav()">ONCLick</button>
        </div>
        <div id="mySidenav" className="player__container_wrapper">
          <div className="player__container">
            <div className="player__body">
              <div className="body__cover">              
                <img src="http://ecx.images-amazon.com/images/I/51XSHShbPiL.jpg" alt="Album cover" />
                <div className="range" />
              </div>
              <div className="body__info">
                <div className="info__album">The Hunting Party</div>
                <div className="info__song">Final Masquerade</div>
                <div className="info__artist">Linkin Park</div>
              </div>
              <div className="body__buttons">
                <ul className="list list--buttons">
                  <li><a href="#" className="list__link"><i className="fa fa-step-backward" /></a></li>
                  <li><a href="#" className="list__link"><i className="fa fa-play" /></a></li>
                  <li><a href="#" className="list__link"><i className="fa fa-step-forward" /></a></li>
                </ul>
              </div>
            </div>
            <div className="player__footer">
              <ul className="list list--footer">
                <li><a href="#" className="list__link"><i className="fa fa-heart-o" /></a></li>
                <li><a href="#" className="list__link"><i className="fa fa-random" /></a></li>
                <li><a href="#" className="list__link"><i className="fa fa-undo" /></a></li>
                <li><a href="#" className="list__link"><i className="fa fa-ellipsis-h" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CardSlider