import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

export const NebulaCalendar = () => {

    const myEventsList = [
    {
      cohort:"nebula",
      group:"elem",
      title: "Shiny Pennies",
      start: moment("08/12/2023 12:00 PM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("08/12/2023 1:00 PM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nebula_pdfs/Shiny Pennies.pdf",
    },
    {
      cohort:"nebula",
      group:"elem",
      title: "Volcano (Baking Soda and Vinegar)",
      start: moment("08/19/2023 12:00 PM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("08/19/2023 1:00 PM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "nebula_pdfs/Baking Soda and Vinegar.pdf",
    },
    {
      cohort:"nebula",
      group:"elem",
      title: "Spacetime/Gravity Model",
      start: moment("08/26/2023 12:00 PM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("08/26/2023 1:00 PM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nebula_pdfs/Spacetime Gravity Model.pdf",
    }
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
