import './App.css'
import Giftpart from './components/Giftpart'
import Navbar from "./components/Navbar"
import Timeline from './components/Timeline'
import Timelinecard from './components/Timelinecard'
function App() {

  return (
    <>
      <Navbar/>
      <div className='bg-hero bg-no-repeat bg-cover'> 
      <Giftpart/>
      <Timeline/>
      <Timelinecard/>
      </div>
   
    </>
  )
}

export default App
