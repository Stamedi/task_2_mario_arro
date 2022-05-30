import React from 'react'
import footerLogo from '../assets/img/footerLogo.svg'
import fbLogo from '../assets/img/fbLogo.svg'
import igLogo from '../assets/img/igLogo.svg'

function Footer() {
  return (

    <footer className='footer-container'>
        <div className="footer-logo">
            <img src={footerLogo} alt="" />
            <h4>Juris Gogulis</h4>
            <p>© SparkleHeart 2020. Visas tiesības aizsargātas.</p>
        </div>
        <div className="footer-headers">
            <p>Ideja</p>
            <p>Piesaki Sapni</p>
            <p>Uzņēmējiem</p>
            <p>Sapņu banka</p>
            <p>Sapņus atbalsta</p>
            <p>Iedvesmas stāsti</p>
        </div>
        <div className="footer-account">
            <h4>Biedrība SparkleHeart</h4>
            <p>Reģistrācijas nr. 40008293119</p>
            <p>Banka: SWEDBANK A/S</p>
            <p>LV52HABA0551047652465</p>
        </div>
        <div className="footer-contact">
            <h4>Juris Gogulis</h4>
            <div className='footer-contacts-info'>
                <p>juris.gogulis@sparkleheart.org</p>
                <p>+37126890034</p>
                <p>Biķernieku iela 24a - 5, LV-1006</p>
                <p className='footer-contacts-rekviziti'>Skatīt rekvizītus</p>
            </div>
            <div className='footer-social'>
                <img src={fbLogo} alt="" className='footer-fb' />
                <img src={igLogo} alt="" className='footer-ig' />
                <p className='footer-tiesibas-mobile'>© SparkleHeart 2020. Visas tiesības aizsargātas.</p>
            </div>
            <p className='footer-privacy'>Privātuma politika</p>
        </div>
    </footer>
  )
}

export default Footer