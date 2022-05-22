import React from 'react'
import vid from '../assets/img/sapnuBankaVid.jpg'
import play_btn from '../assets/img/playBtn.svg'
import sun from '../assets/img/sapnuBanka1.svg'
import mountain from '../assets/img/sapnuBanka2.svg'
import glasses from '../assets/img/sapnuBanka3.png'
import island from '../assets/img/sapnuBanka4.png'
import speaker from '../assets/img/sapnuBanka5.jpg'
import people from '../assets/img/sapnuBanka6.jpg'
import rainbow from '../assets/img/sapnuBanka7.png'

function SapnuBanka() {
  return (
    <section className='sapnu-banka-container'>
      <h1>SAPŅU BANKA</h1>
      <div className="sb-video-container">
        <img src={vid} alt="" className='sb-video' />
        <img src={play_btn} alt=""  className='sb-play-btn'/>
      </div>

      <article className='merkis-container'>
        <h2>MĒRĶIS</h2>
        <div className='merkis1'>
          <img src={sun} alt="" />
          <p>Palīdzēt Latvijas un citu valstu sabiedrības locekļiem gūt panākumus personiskajā dzīvē un piepildīt dzīves sapņus, tādējādi, veicinot visas sabiedrības labklājību un kopējo laimes indeksu</p>
        </div>
        <div className='merkis2'> 
          <p className='merkis2-before'>Palīdzēt Latvijas un citu valstu sabiedrības locekļiem īstenot sapņus un idejas, kuras ir balstītas uz pasaules un cilvēces ilgtspējīgu attīstību, tai skaitā izglītošanos un tālākizglītību</p>
          <img src={mountain} alt="" />
          <p className='merkis2-after'>Palīdzēt Latvijas un citu valstu sabiedrības locekļiem īstenot sapņus un idejas, kuras ir balstītas uz pasaules un cilvēces ilgtspējīgu attīstību, tai skaitā izglītošanos un tālākizglītību</p>
        </div>

        <div className='merkis3'>
        <img src={glasses} alt="" />
          <p>Piesaistīt juridisko un fizisko personu intelektuālos un finanšu resursus sapņu realizācijai</p>
        </div>
      </article>

      <article className='misija-container'>
        <h2>MISIJA</h2>
        <p>SparkleHeart ir Latvijā un pasaulē atpazīts zīmols</p>
        <div className="sb-ripped-container">
        <img src={island} alt="" />
        <p>Tavai zināšanai, sapņus mēs krājam visu gadu, lai maijā, kad visa pasaule zied, izvēlētos pašus iedvesmojošākos. </p>
        </div>
        <h2>SAPŅUS ATLASĪS</h2>
        <div className="sapnus-atlasis-container">
          <div className='sapnus-atl-l'>
            <img src={speaker} alt="" />
            <p>Publiskais cilvēku balsojums mājas lapā</p>
          </div>
          <div className='sapnus-atl-r'>
            <img src={people} alt="" />
            <p>Īpaši izveidota komisija, kur tiek pieaicināti arī SP sadarbības partneri</p>
          </div>
        </div>

        <div className="sb-ripped-container">
          <img src={rainbow} alt="" />
          <p>Galvenais kritērijs, lai sapni izvēlētos, ir, vai to realizējot, mēs padarīsim pasauli labāku. Un pasauli labāku var padarīt gan lielas, gan mazas lietas</p>
        </div>
      </article>
      
      <article className='sb-choise-container'>
      <div className="left-cont">
          <h3>VĒLIES PIEPILDĪT SAVU SAPNI?</h3>
          <button className='sapnotajiem'>Sapņotājiem</button>
      </div>
      <div className="right-cont">
          <h3>VĒLIES PALĪDZĒT KĀDĀM PIEPILDĪT SAPNI?</h3>
          <button>Uzņēmējiem</button>
      </div>
    </article>

    </section>
    
  )
}

export default SapnuBanka