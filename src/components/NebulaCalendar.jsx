import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useRef } from 'react'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

export const NebulaCalendar = () => {

  const width = useRef([window.innerWidth, window.innerHeight]).current[0];

  const myEventsList = [
  ];

  const handleEventClick = (event) => {
    console.log(event.cohort);
    
    window.open(event.event_pdf_filepath);
  };

  

  return (
    <div>
      <Calendar
            localizer={localizer}
            defaultDate={moment().toDate()}
            defaultView="month"
            events={myEventsList}
            style={{ height: "100vh", backgroundColor:"#f4d8c8"}}
            onSelectEvent={handleEventClick}
            eventPropGetter={event => {
              if (event.group=="elem") {
                return { style: { backgroundColor: "#002e36" } };
              } else {
                return { style: { backgroundColor: "#76a5af" } };
              };
              
          }}
          />
    </div>
    )
  
}