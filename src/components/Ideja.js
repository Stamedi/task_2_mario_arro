import React from 'react'
import rippedTop from '../assets/img/ripped_2.svg'
import rippedBot from '../assets/img/ripped_3.svg'
import arrowLeft from '../assets/img/arrowLeft.svg'
import arrowRight from '../assets/img/arrowRight.svg'


function Ideja() {
  return (
    <div className='ideja-container'>
        <section className='ideja-header'>
            <h1>IDEJA</h1>
            <p>Juris Gogulis ir pasaules iedvesmots mākslinieks–horeogrāfs un režisors, kura ikdiena aizrit radot aizkustinošus un iedvesmojošus radošus projektus. Juris ir pārliecināts, ka ir vērts ticēt katram savam sapnim un censties to īstenot. Kā smejas pats - daudzu draugu sapņiem viņš tic vairāk, nekā viņi paši!</p>
        </section>
        <section className='ideja-main'>
            <div className="ideja-pic-container">
                <img src={rippedTop} alt="" className='top-ripped' />
                <img src={rippedBot} alt="" className='bot-ripped' />
                <h3>“Kopš 3 gadu vecuma mani ir audzinājusi mamma, pēc viņas piemēra esmu sapratis, cik sieviete ir spēcīga un varoša. Vēlos atlīdzināt un izveidot platformu, kurā satikties un palīdzēt cilvēkiem piepildīt savus sapņus.”</h3>
                
            </div>
            <div className="quote-container">
                <h3>Ken Ludden </h3>
                <span>Director, Margot Fonteyn Academy of Ballet</span>
                <p>For it is Juris work that is the 
                light the human race needs so badly these days. His vision is inspired and talent is beyond measure.</p>
                <div className='arrow-container'>
                    <img src={arrowLeft} alt="" />
                    <img src={arrowRight} alt="" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Ideja