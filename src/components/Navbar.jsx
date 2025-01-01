import { motion } from "framer-motion"
function Navbar() {
  return (
    <>
    <nav className='h-80 items-center top-0 w-full flex flex-col bg-gradient-to-b from-pink-600 via-pink-500 to-[#F4D5D3]'>
      <motion.div 
      initial={{
        opacity: 0.01
      }}
      animate={{
        opacity:1
        
      }}
      transition={{
        duration: 3,
        ease: 'anticipate'
      }}
      style={{boxShadow: "10px 10px black"}}
      className="mt-6 h-40  text-slate-400 bg-gradient-to-r rounded-xl flex flex-col items-center from-slate-800 to-slate-700 w-1/2">
         <div className="mt-2 text-rose-700 text-lg font-extrabold">HAPPY BIRTHDAY TO YOU DEAR </div> 
         <div className=" mx-5 text-amber-400">First of all,Love you alots. I know that yesterday has been especially Rough for you. But atleast today, we can truly enjoy the day together. I hope that i am able to bring a smile to my Sweetheart's Gorgeous face</div> 
      </motion.div>

    </nav>

    </>
  )
}

export default Navbar