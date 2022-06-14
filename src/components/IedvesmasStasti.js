import React, { useEffect } from 'react'
import { useState } from 'react'

function IedvesmasStasti() {

  const [showMore, setShowMore] = useState(false)
  const [windowWidth, detectW] = useState({
    winWidth: window.innerWidth
  })

  let arr = []
  let arr2 = []
  const detectSize = () => {
    detectW({
      winWidth: window.innerWidth
    })
  }

  for (let i = 1; i < 100; i++) {
      arr.push({id: i, pic: '', name: '', remind: ''})
  }
  for (let i = 1; i < 21; i++) {
    arr2.push({id: i, pic: '', name: '', remind: ''})
}
  arr[4].name = "Arta Balode"
  arr[17].remind = "Jauns stāsts tiks pievienots drīzumā"

  arr2[4].name = "Arta Balode"
  arr2[17].remind = "Jauns stāsts tiks pievienots drīzumā"



  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowWidth.winWidth])


  return (
    <div className='iedvesmas-stasti-container'>
      <h1>99 IEDVESMAS STĀSTI</h1>
      <p>Atklāj kādu no 99 aizraujošajiem stāstiem</p>

      {
        windowWidth.winWidth >= 1024
        ?
          <div className="iedvesmas-stasti-grid">
          {arr.map((num) =>       
              <div id={`num${num.id}`} className="single-pic-container" key={num.id}>
                <h2>{num.id}</h2>
                <h3>{num.name}</h3>
                <p>{num.remind}</p>
              </div>
            )}
          </div>
        :
          showMore 
          ?
            <div className="iedvesmas-stasti-grid">
            {arr.map((num) =>       
                <div id={`num${num.id}`} className="single-pic-container" key={num.id}>
                  <h2>{num.id}</h2>
                  <h3>{num.name}</h3>
                  <p>{num.remind}</p>
                </div>
              )}
            </div>
          :
            <div className="iedvesmas-stasti-grid-mob">
            {arr2.map((num) =>       
                <div id={`num${num.id}`} className="single-pic-container" key={num.id}>
                  <h2>{num.id}</h2>
                  <h3>{num.name}</h3>
                  <p>{num.remind}</p>
                </div>
              )}
            </div>
      }

      <button className='iedvesmas-stasti-btn' onClick={() => setShowMore(!showMore)}>
      {showMore ? "Skatīt mazāk" : "Skatīt vairāk"}</button>

      <div className="command-container">
        <div className="command-header">
          <h2>SPARKLE HEART KOMANDA</h2>
          <p>Radošā komanda, kura strādā ar projektu 99 un starptautiskām Sparkle Heart īsfilmām.</p>
        </div>
        <div className="command-section">
          <div className="juris">
            <div className="text-container">
              <h3>Juris Gogulis</h3>
              <p>Idejas ģenerators un režisors</p>
            </div>
          </div>
          <div className="girts">
            <div className="text-container">
              <h3>Ģirts Ceriņš</h3>
              <p>Operators un montāžas speciālists</p>
            </div>
          </div>
          <div className="janis">
            <div className="text-container">
              <h3>Jānis Zurģis</h3>
              <p>Animācijas un grafiskā dizaina meistars</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IedvesmasStasti