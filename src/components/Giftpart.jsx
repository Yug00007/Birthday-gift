import { animationControls, motion, useAnimationControls } from "framer-motion"
import { useRef } from "react";


function Giftpart() {

    const controls = useAnimationControls();
    const controlHeart = useAnimationControls();
    const handleHover=()=>{
        controls.start('boop')
        controlHeart.start('boophearts')




    }
    const handleLeave=()=>{
        controls.start('initial')
        controlHeart.start('initial')
    }

  return (
    <div 
    className="w-full flex justify-evenly flex-row">
    <motion.img className="absolute left-0"
    
    src="./cat.png"

    initial={{
        x:"-100px",
        opacity:0.2
    }}
    
    animate={{
        x:0,
        opacity: 1
    }}
    transition={{
        duration: 3,
        ease: 'easeOut'
    }}
    
    />
      







    <div
    onMouseEnter={handleHover}
    onMouseLeave={handleLeave}
    >
    <motion.img
    variants={{
        initial: {
            y: "0px",
            x: "0px",
            rotate: "0deg",
        },
        boop: {
            y: "-80px",
            x: "80px",
            rotate: "45deg",

        }
    }}
    initial= "initial"
    animate={controls}
    className="z-20 mix-blend-multiply"
    src="./box2.png"></motion.img>
    <motion.img className="z-10" src="./hearts3.png"
    variants={{
        initial: {
            scale: 0,
            y: "100px",
            display: "none"
            
        },
        boophearts: {
            scale: 1,
            y: "-100px",
            display: "block"

        }
    }}
    initial='initial'
    animate={controlHeart}
    />
    <motion.img className='z-20 mix-blend-multiply'src="./box1.png"/>
    </div>
    <motion.img className="absolute right-0 w-60 h-60 mix-blend-multiply rounded-2xl"
        initial={{
            x:"100px",
            opacity:0.2
        }}
        
        animate={{
            x:0,
            opacity: 1
        }}
        transition={{
            duration: 3,
            ease: 'easeOut'
        }}
        src="./right-rabbit.jpg"

    /> 
        

  </div>
  )
}

export default Giftpart