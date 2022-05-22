import React from 'react'
import Form from './Form'
import l_Icon from '../assets/img/piesakiSapniLIcon.svg'
import r_Icon from '../assets/img/piesakiSapniRIcon.svg'
import ripped2 from '../assets/img/ripped_2.svg'
import ripped3 from '../assets/img/ripped_3.svg'
import psCollage1 from '../assets/img/piesakiSapni1.jpg'
import psCollage2 from '../assets/img/piesakiSapni2.jpg'
import psCollage3 from '../assets/img/piesakiSapni3.jpg'
import psCollage4 from '../assets/img/piesakiSapni4.jpg'
import psCollage5 from '../assets/img/piesakiSapni5.jpg'


function PiesakiSapni() {
  return (
    <div className='piesaki-sapni-container'>
      <section className='piesaki-sapni-header'>
        <article>
          <h1>PIESAKI SAPNI</h1>
          <p>Tev ir iespēja pieteikt personīgo vai profesionālo sapni.</p>
        </article>
        <div className='sapnis-choise-container'>
          <div className='sapnis-choise-l-side'>
            <img src={l_Icon} alt="" />
            <h2>PERSONĪGAIS SAPNIS</h2>
            <p>Bērnības nepiepildītie sapņi... No sev piederoša svaigi spiestas sulas bāra uz Tērbatas ielas līdz iespējai satikties ar Džekiju Čanu.</p>
            <button>Piesaki sapni</button>
          </div>
          <div className='sapnis-choise-r-side'>
            <img src={r_Icon} alt="" />
            <h2>PROFESIONĀLAIS SAPNIS</h2>
            <p>Sapnis vai ideja, kura ir balstīta uz reģiona, pasaules vai cilvēku attīstību 4 virzienos - kultūra, izglītība, zinātne, ģimene jeb sociālā vide. Tā ir iespēja attīstīt ideju, kas uzlabotu ikdienas dzīves kvalitāti vai atrisinātu vietēja vai starptautiska līmeņa problēmu. Pastāsti, kāpēc Tev tas ir tik nozīmīgi?</p>
            <button>Piesaki sapni</button>
          </div>
        </div>

        <div className="ps-collage-container">
        <img src={ripped2} alt="" className='collage-top-ripped' />
            <div className="ps-header-collage">
                <img src={psCollage1} alt="" className='psCollage1' />
                <img src={psCollage2} alt="" className='psCollage2' />
                <img src={psCollage3} alt="" className='psCollage3' />
                <img src={psCollage4} alt="" className='psCollage4'/>
                <img src={psCollage5} alt="" className='psCollage5' />
            </div>
            <img src={ripped3} alt="" className='collage-bot-ripped' />
        </div>

      </section>
      <section className='form-section'>
        <Form/>
      </section>
    </div>
  )
}

export default PiesakiSapni