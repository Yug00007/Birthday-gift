import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
function Timeline() {

    const activities =[
        {title: "Morning Call", Subtitle:"BEEP BEEP", Description: "BEEP BEEP HEYO HEYO"},
        {title: "GAMEY >w<", Subtitle:"DTI", Description: "LOTS OF GAMES LESSS GOOOOOOOO >w<"},
        {title: "YT TOGETHA", Subtitle:"Casual chill", Description: "We will watch YT and chill >w<"},
        {title: "MOOSIC", Subtitle:"Lana Bot", Description: "We will listen lots of moosic and chill >w<"}
        ,{title:"SURPRISE", Subtitle:"hehehe", Description: ">:)"}
    ]



  return (
<VerticalTimeline lineColor="black">
   { activities.map((activity)=>(
<VerticalTimelineElement key={activity.title}
    className=" vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(142, 63, 252)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(235, 52, 88)' }}
    
    date="02-01-2025"
    iconStyle={{ background: 'rgb(252, 71, 122)', color: '#fff' }}
    icon= {
        <div className="flex mt-2 justify-center items-center">
            <img src="./icon2.png" className="w-[60%] h-[60%] object-contain"/>
        </div>
    }
  >
    <h3 className="vertical-timeline-element-title flex items-center justify-center   ">
        <div className="text-lg font-extrabold">{activity.title}</div></h3>
    <h4 className="vertical-timeline-element-subtitle flex items-center justify-center italic">
        <div>{activity.Subtitle}</div></h4>
    <p>
      {activity.Description}
    </p>
  </VerticalTimelineElement>
  )
   )
}
</VerticalTimeline>

)
}

export default Timeline