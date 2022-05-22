import React from 'react'

function Form({formName}) {
  return (
    <form action="submit">
        <h2 className='form-header'>{formName ? formName : "SAZINĀTIES AR MUMS"}</h2>
        <div className="input-container">
            <input type="text" placeholder='Vārds, Uzvārds*' 
            className='name-article' />
            <input type="text" placeholder='E-pasts*' 
            className='email-article' />
            <input type="text" placeholder='Telefons*' 
            className='phone-article' />
            <input type="text" placeholder='Jautājums, vai komentārs*' className='comment-article' />
        </div>
        <p>* obligāti aizpildāmie lauki</p>

        <label className="container">
            <input type="checkbox"/>
            <span className="checkmark"></span>
            Piekrītu, ka mani dati tiks izmantoti likumdošanā noteiktā kārtībā un tiks saglabāti līdz brīdim, kamēr tas būs nepieciešams.
        </label>
        <div className="button-container">
          <input type="button" value="Sūtīt" />
        </div>
    </form>
  )
}

export default Form