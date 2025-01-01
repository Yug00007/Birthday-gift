import Tilt from 'react-parallax-tilt';

function Timelinecard() {


const experiences= [{title:"Boards", description: "It was really chaotic time but i absolutely love how we tackled it together and managed to overcome the hardship."},
  {title:"Day we Met", description:"I cherish the day we met and talked for first time. Ironically, it was your birthday. Making this day even more memorable and special to me."},
  {title:"Birthday-1", description:"Your last birthday was full of panic and distress for you unfortunately due to boards and jee. But i love how serene and fun it was. As if it was best day of my life"},
  {title:"Whehe", description:"You already know how fun xyz is with you. heheeh~~~~~~~"},
  {title:"Voice", description:"I cant forget the day when i first heard your sweet as melody voice. It makes me forget all Distress and relaxes"},
  {title:"Today", description:"I hope that this birthday would be super memorable and fun for you. I couldnt make something too fancy due to sudden bank-works and funeral thingy. But we will enjoy today to the fullest"},
]



  return (
  <>
    <div className="text-slate-700 mx-10 text-[40px] font-bold"> Our Memories togetha:-</div>
    <div className='grid grid-cols-3 '>
      {experiences.map((experience)=>(
         <Tilt key={experience.title} tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.05}>
         <div className='flex flex-col bg-slate-800 text-violet-600 items-center rounded-lg h-80 w-80 mx-5 my-5 p-7'> 
           <div className='text-[28px]'>
             {experience.title}
           </div>
           <div className='mt-4 text-red-300'>{experience.description} </div>
        
         </div>
       
         </Tilt>
      ) 
      )}
     </div>
  </>
  )
}

export default Timelinecard