import './App.css'
import divider from "./assets/pattern-divider-desktop.svg"
import dice from "./assets/icon-dice.svg"
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState({
    slip: {
      adivce: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
      id: 117
    }
  })

  function getData() {
    fetch("https://api.adviceslip.com/advice", { method: "GET" })
      .then((resp) => resp.json())
      .then((resp_json) => {
        setData(resp_json)
      }).catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getData()
  }, [])



  return (
    <div className='w-screen h-screen bg-dblue flex justify-center items-center'>
      <div className='w-1/3 h-fit p-10 rounded-xl bg-blue flex flex-col items-center gap-7 relative max-[850px]:w-[90%]'>
        <span className='text-turq font-semibold text-xs tracking-[0.25rem]'>ADVICE #{data.slip.id}</span>
        <div className='text-white font-bold text-2xl text-center'>
          {data.slip.advice}
        </div>
        <img src={divider} className='w-full mb-8' />

        <button className='bg-turq rounded-full aspect-square  flex items-center justify-center p-5 absolute bottom-0 translate-y-1/2'
          onClick={() => { console.log("clicked"); getData() }}>
          <img src={dice} alt='dice-img' className='' />
        </button>



      </div>
    </div>
  )
}

export default App

