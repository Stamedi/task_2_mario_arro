import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='error-page-container'>
        <h1>404</h1>
        <h3>Lapa netika atrasta!</h3>
        <p>Radusies kāda tehniska kļūda, vai šī lapa vairs nav pieejama.</p>
        <Link to='/' className='error-page-button' onClick={() => window.scrollTo(0, 0)} >
        <button>Uz sākumlapu</button>
        </Link>
    </div>
  )
}

export default ErrorPage