import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useRef } from 'react'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

export const NebulaCalendar = () => {

  const width = useRef([window.innerWidth, window.innerHeight]).current[0];

  const myEventsList = [
    {
      cohort:"nebula",
      title: "test event",
      start: moment().toDate(),
      end: moment().add(1, "day"),
      allDay: false,
      event_pdf_filepath: "myPdf.pdf",
      
    },
    {
      cohort:"nebula",
      title: "test event 2",
      start: moment("07/15/2023", "MM/DD/YYYY").toDate(),
      end: moment("07/19/2023", "MM/DD/YYYY").toDate(),
      allDay: false,
      event_pdf_filepath: "myPdf.pdf",
      
    },
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
              return { style: { backgroundColor: "#002e36" } };
          }}
          />
    </div>
    )
  
}