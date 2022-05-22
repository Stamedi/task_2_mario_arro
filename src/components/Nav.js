import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/BlackLogo_3.svg'
import navIcon from '../assets/img/nav-icon.png'
import navCross from '../assets/img/navCross.png'

function Nav() {
    const [isOpen, setIsOpen ] = useState(false);
  return (
    <nav className="nav-container">   
        <div className="nav">
            <NavLink to="/" className="nav-logo" onClick={() => isOpen && setIsOpen(false)}>
                <img src={logo} alt="logo" />
            </NavLink>
            <div className={isOpen ? 'mobile-container' : ''}>
            <div className= {isOpen ? "mobile-nav-pages" : "nav-pages"}>
                {isOpen ? <p className="nav-lang">LV</p> : ''}
                <NavLink to="/ideja" 
                className={({isActive}) => isActive ? 'active-nav-page' : 'nav-page'} 
                onClick={() => setIsOpen(false)}>
                Ideja</NavLink>

                <NavLink to="/piesaki-sapni" 
                className={({isActive}) => isActive ? 'active-nav-page' : 'nav-page'}
                onClick={() => setIsOpen(false)} >
                Piesaki Sapni</NavLink>

                <NavLink to="/uznemejiem" 
                className={({isActive}) => isActive ? 'active-nav-page' : 'nav-page'}
                onClick={() => setIsOpen(false)}>
                Uzņēmējiem</NavLink>

                <NavLink to="/sapnu-banka" 
                className={({isActive}) => isActive ? 'active-nav-page' : 'nav-page'}
                onClick={() => setIsOpen(false)}>
                Sapņu banka</NavLink>

                <NavLink to="/sapnus-atbalsta" 
                className={({isActive}) => isActive ? 'active-nav-page' : 'nav-page'}
                onClick={() => setIsOpen(false)}>
                Sapņus atbalsta</NavLink>
                <NavLink to="/99-idevesmas-stasti" 
                className={({isActive}) => isActive ? 'active-nav-page' : 'nav-page'}
                onClick={() => setIsOpen(false)}>
                99 Iedvesmas stāsti</NavLink>
                {!isOpen ? <p className="nav-lang">LV</p> : ''}
            </div>
            </div>
            <img src={isOpen ? navCross : navIcon} alt="" onClick={() => setIsOpen(!isOpen)} className="nav-icon" />
        </div>
    </nav>
  )
}

export default Nav