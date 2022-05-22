import React from 'react'
import video from '../assets/img/SparkleVideo_1.png'
import play_btn from '../assets/img/playBtn.svg'
import collage1 from '../assets/img/collage_1.png'
import collage2 from '../assets/img/collage_2.jpg'
import collage3 from '../assets/img/collage_3.jpg'
import collage4 from '../assets/img/collage_4.jpg'
import collage5 from '../assets/img/collage_5.jpg'
import ripped2 from '../assets/img/ripped_2.svg'
import ripped3 from '../assets/img/ripped_3.svg'
import teikumsLogo from '../assets/img/teikumsLogo.svg'
import semLogo from '../assets/img/semLogo.svg'
import citybeeLogo from '../assets/img/citybeeLogo.svg'
import linearisLogo from '../assets/img/linearisLogo.svg'
import Form from './Form'

function Home() {
  return (
    <div>
        <section className="header-section-home">
            <div className="video-container">
                <img src={video} alt="" className='home-video' />
                <img src={play_btn} alt="" className="header-play-btn" />
            </div>
            <p className="header-text">
                SparkleHeart ir biedrība, kas radīta, lai palīdzētu cilvēkiem piepildīt pat pārdrošākos sapņus. Šeit satiekas sapņotāji un viņu atbalstītāji - uzņēmumi, kas sniedz palīdzīgu roku, lai kopā pasauli padarītu par labāku vietu mums visiem.Mēs esam gatavi palīdzēt Tev piepildīt sapni. Kā pamats iedvesmai - tiek radīti arī 99 stāsti par Latvijas sievietēm.
            </p>
            <div className="collage-container">
            <img src={ripped2} alt="" className='collage-top-ripped' />
                <div className="header-collage">
                    <img src={collage1} alt="" className='collage1' />
                    <img src={collage2} alt="" className='collage2' />
                    <img src={collage3} alt="" className='collage3' />
                    <img src={collage4} alt=""  className='collage4'/>
                    <img src={collage5} alt="" className='collage5' />
                </div>
                <img src={ripped3} alt="" className='collage-bot-ripped' />
            </div>
        </section>

        <section className='main-section-home'>
            <article className='choise-container'>
                <div className="left-cont">
                    <h3>VĒLIES PIEPILDĪT SAVU SAPNI?</h3>
                    <button className='sapnotajiem'>Sapņotājiem</button>
                </div>
                <div className="right-cont">
                    <h3>VĒLIES PALĪDZĒT KĀDĀM PIEPILDĪT SAPNI?</h3>
                    <button>Uzņēmējiem</button>
                </div>
            </article>
            <Form/>
            <article className='atbalstitaji-container'>
                <h3>ATBALSTĪTĀJI</h3>
                <div className="logo-container">
                    <img src={teikumsLogo} alt="" />
                    <img src={semLogo} alt="" />
                    <img src={citybeeLogo} alt="" />
                    <img src={linearisLogo} alt="" />
                </div>
            </article>
        </section>
    </div>
  )
}

export default Home



