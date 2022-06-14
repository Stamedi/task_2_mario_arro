import React from 'react'
import { useState } from 'react'

function Form({ formName }) {
  const [sendMail, setSendMail] = useState(false)

  return (
    <form action="submit">
        <h2 className='form-header'>{formName ? formName : "SAZINĀTIES AR MUMS"}</h2>
        <div className={window.location.pathname.includes('uznemejiem') ? "input-container uznemejiem-input-padding": "input-container"}>
            <input type="text" placeholder='Vārds, Uzvārds*' 
            className='name-article' />
            <input type="text" placeholder='E-pasts*' 
            className='email-article' />
            {window.location.pathname.includes('uznemejiem') &&  <input type="text" placeholder='Uzņēmuma nosaukums*' className='company-article' />}
            <input type="text" placeholder='Telefons*' 
            className='phone-article' />
            <input type="text" placeholder='Jautājums, vai komentārs*' className='comment-article' />
        </div>
        
        {
          sendMail
          ?
            <div className="sent-mail-container">
              <h3>Paldies, ka sapņo!</h3>
              <p>Ja Tavs sapnis tiks izvēlēts, mēs ar Tevi sazināsimies.</p>
            </div>
          :
            <>
              <p className={window.location.pathname.includes('uznemejiem') ? "uznemejiem-form-padding" : ''}>* obligāti aizpildāmie lauki</p>
            
              <label className="container">
                  <input type="checkbox"/>
                  <span className="checkmark"></span>
                  Piekrītu, ka mani dati tiks izmantoti likumdošanā noteiktā kārtībā un tiks saglabāti līdz brīdim, kamēr tas būs nepieciešams.
              </label>
              <div className="button-container">
              <input type="button" value="Sūtīt" onClick={() => setSendMail(!sendMail)} />
              </div>
            </>
        }
    </form>
  )
}

export default Form