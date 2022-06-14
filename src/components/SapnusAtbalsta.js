import React from 'react'
import { useState } from 'react'
import arrowDown from '../assets/img/arrowDown.png'
import AUCHLogo from '../assets/img/AUCHLogo.png'

function SapnusAtbalsta() {
  const [showDropdownL, setShowDropdownL] = useState(false)
  const [showDropdownR, setShowDropdownR] = useState(false)
  let [currentPilseta, setCurrentPilseta] = useState('')
  let [currentVeids, setCurrentVeids] = useState('')
  let pilsetas = ["Rīga", "Jelgava", "Ogre"]
  let veids = ["Ēdināšana"]


  return (
    <div className='sapnus-atbalsta-container'>
    <h1>SAPŅUS ATBALSTA</h1>
    <p>Sadarbības partneri ir uzņēmumi, kuri savā preču vai pakalpojumu ikdienā ir integrējuši SparkleHeart zīmolu un dala ar to konkrētu daļu savu ienākumu.</p>
    <div className="custom-select">
    <div className="select-l">
    <p>Uzņemuma atrašanas vieta</p>

      <div className="dropdown-wrapper">
        <div className="select-btn" onClick={() => setShowDropdownL(!showDropdownL)}>
          <p>{currentPilseta.length === 0 ? "Izvēlies" : currentPilseta}</p>
          <span className='custom-arrow'><img src={arrowDown} alt="" /></span>
        </div>
        {
          showDropdownL
          ?
          <div className="content">
          <hr/>
            <ul className="options">
              {pilsetas.map((pilseta) => 
                <li key={pilseta} onClick={() => setCurrentPilseta(currentPilseta = pilseta)}>{pilseta}</li>
              )}
            </ul>
          </div>
          :
          <div></div>
        }
      </div>
    </div>
    <div className="select-r">
      <p>Uzņēmuma veids</p>
        <div className="dropdown-wrapper">
        <div className="select-btn" onClick={() => setShowDropdownR(!showDropdownR)}>
          <p>{currentVeids.length === 0 ? "Izvēlies" : currentVeids}</p>
          <span className='custom-arrow'><img src={arrowDown} alt="" /></span>
        </div>
        {
          showDropdownR
          ?
          <div className="content">
          <hr/>
            <ul className="options">
              {veids.map((veids) => 
                <li key={veids} onClick={() => setCurrentVeids(currentVeids = veids)}>{veids}</li>
              )}
            </ul>
          </div>
          :
          <></>
        }
      </div>
    </div>
    </div>
    <div className="karte-container">
      <div className="contact-info">
        <img src={AUCHLogo} alt="" />

        <div className="contact-info-r">
          <h3>AUCH beauty home</h3>
          <p>+371 28361686, +371 23202079 auchbeauty@gmail.com Cēsu iela 20, Rīga</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SapnusAtbalsta



// <select name="" id="">
// <option value="0">Izvēlies</option>
// <option value="1">Rīga</option>
// <option value="2">Jelgava</option>
// <option value="3">Ogre</option>
// </select>
// <span className='custom-arrow'><img src={arrowDown} alt="" /></span>