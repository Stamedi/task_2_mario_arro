import React from 'react'
import { useState, useRef } from 'react'
import arrowDown from '../assets/img/arrowDown.png'
import marker from '../assets/img/marker.png'
import { GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import { useMemo } from 'react'


function SapnusAtbalsta() {
  const estuves = [
    {
      name: "Kozy Eats",
      number: "27 383 833",
      address: "Blaumaņa iela 34, Rīga",
      lat:56.951957640969574,
      lng:24.125666922127454,
    },
    {
      name: "Late Night Munchies",
      number: "22 333 839",
      address: "Peldu iela 21, Centra rajons, Rīga",
      lat: 56.946223706386434,
      lng: 24.107916307029736
    },
    {
      name: "Otto Pusdienu Restorāns",
      number: "26 661 151",
      address: "Lielā iela 17, Jelgava",
      lat: 56.6508,
      lng: 23.7193
    },
    {
      name: "Kafe Picērija",
      number: "20 319 837",
      address: "Akadēmijas iela 4, Jelgava",
      lat: 56.6506,
      lng: 23.7289
    },
    {
      name: "Niko A",
      number: "65 024 894",
      address: "Brīvības iela 23, Ogre",
      lat: 56.8183,
      lng: 24.6057
    },
    {
      name: "Kafejnīca Ilze",
      number: "26 543 080",
      address: "Brīvības iela 25, Ogre",
      lat: 56.8187,
      lng: 24.6059
    },
]
  const [showDropdownL, setShowDropdownL] = useState(false)
  const [showDropdownR, setShowDropdownR] = useState(false)
  const [currentPilseta, setCurrentPilseta] = useState({ map: {lat: 56.9496, lng: 24.1052}})
  const [currentWindow, setCurrentWindow] = useState(null)
  let [currentVeids, setCurrentVeids] = useState('')
  const pilsetas = [
    {name: "Rīga", map: {lat: 56.9496, lng: 24.1052}},
    {name:  "Jelgava", map: {lat: 56.6511, lng: 23.7214}},
    {name:  "Ogre", map: {lat: 56.8147, lng: 24.6045}}
  ]
  
  const veids = ["Ēdināšana"]
  const { isLoaded } = useLoadScript ({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
  })
  const selectCloseL = (name, map) => {
    setShowDropdownL(!showDropdownL)
    setCurrentPilseta({
        name: name,
        map: map
    })
  }
  const selectCloseR = (veids) => {
    setShowDropdownR(!showDropdownR)
    setCurrentVeids(veids)
  }
  const options = useMemo(() => ({
    mapId: "d57ec3a1ae08b18b",
    gestureHandling: "cooperative",
    disableDefaultUI: true,
    zoomControl: true,
    clickableIcons: false,
  }), [])


  return (
    <div className='sapnus-atbalsta-container'>
    <h1>SAPŅUS ATBALSTA</h1>
    <p>Sadarbības partneri ir uzņēmumi, kuri savā preču vai pakalpojumu ikdienā ir integrējuši SparkleHeart zīmolu un dala ar to konkrētu daļu savu ienākumu.</p>
    <div className="custom-select">
    <div className="select-l">
    <p>Uzņemuma atrašanas vieta</p>

      <div className="dropdown-wrapper">
        <div className="select-btn" onClick={() => setShowDropdownL(!showDropdownL)}>
          <p>{currentPilseta.name === undefined ? "Izvēlies" : currentPilseta.name}</p>
          <span className='custom-arrow'><img src={arrowDown} alt="" /></span>
        </div>
        {
          showDropdownL
          ?
          <div className="content">
          <hr/>
            <ul className="options">
              {pilsetas.map((pilseta) => 
                <li key={pilseta.name} onClick={() => selectCloseL(pilseta.name, pilseta.map)}>{pilseta.name}</li>
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
                <li key={veids} onClick={() => selectCloseR(veids)}>{veids}</li>
              )}
            </ul>
          </div>
          :
          <div></div>
        }
      </div>
    </div>
    </div>
    <div className="karte-container">
    {isLoaded ?
      <GoogleMap
      options={options}
      zoom={13}
      center={currentPilseta.map}
      mapContainerClassName="map-container">
      {currentVeids === "Ēdināšana" &&
        estuves.map((estuve) => 
        <Marker key={estuve.name} position={{lat: estuve.lat, lng: estuve.lng}} icon={marker} className="marker" clickable={true}
        onClick={() =>  setCurrentWindow(estuve)}
        />
      )
      }
        { currentWindow && (
          <div className='contact-info'>
            <img src={currentWindow.logo} alt="" />
            <div className="contact-info-r">
              <p className='cross' onClick={() => setCurrentWindow(null)} >&#65336;</p>
              <h3>{currentWindow.name}</h3>
              <p>{currentWindow.number}</p>
              <p>{currentWindow.address}</p>
            </div>
          </div>
        )
        }
      </GoogleMap>
      :
      <h3>Loading Map...</h3>
    }
    </div>
    </div>
  )
}

export default SapnusAtbalsta
