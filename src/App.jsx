import './App.css'
import divider from "./assets/pattern-divider-desktop.svg"
import dice from "./assets/icon-dice.svg"

function App() {
  return (
    <div className='w-screen h-screen bg-dblue flex justify-center items-center'>
      <div className='w-1/3 h-fit p-10 rounded-xl bg-blue flex flex-col items-center gap-7 relative'>
        <span className='text-turq font-semibold text-xs tracking-[0.25rem]'>ADVICE #117</span>
        <div className='text-white font-bold text-2xl text-center'>
        "It is easy to sit up and take notice, what's difficult is getting up and taking action."
        </div>
        <img src={divider} className='w-full mb-8' />

        <button className='bg-turq rounded-full aspect-square  flex items-center justify-center p-5 absolute bottom-0 translate-y-1/2'>
          <img src={dice} alt='dice-img' className='' />
        </button>



      </div>
    </div>
  )
}

export default App
