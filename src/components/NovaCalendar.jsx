import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

export const NovaCalendar = () => {

  const myEventsList = [
    {
      cohort:"nova",
      group:"elem",
      title: "ES: Electric Oobleck (1)",
      start: moment("07/09/2023 10:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("07/09/2023 11:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/ES_07_09_07_11_electric_oobleck.pdf",
    },
    {
      cohort:"nova",
      group:"middle",
      title: "MS: Pendulum",
      start: moment("07/09/2023 11:30 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("07/09/2023 12:30 PM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/MS_07_09_pendulum.pdf",
    },
    {
      cohort:"nova",
      group:"elem",
      title: "ES: Electric Oobleck (2)",
      start: moment("07/11/2023 10:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("07/11/2023 11:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/ES_07_09_07_11_electric_oobleck.pdf",
    },
    {
      cohort:"nova",
      group:"elem",
      title: "ES: Lava Lamp (1)",
      start: moment("07/16/2023 10:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("07/16/2023 11:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/ES_07_16_07_18_lava_lamp.pdf",
    },
    {
      cohort:"nova",
      group:"middle",
      title: "MS: Fire Extinguisher",
      start: moment("07/16/2023 11:30 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("07/16/2023 12:30 PM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/MS_07_16_fire_extinguisher.pdf",
    },
    {
      cohort:"nova",
      group:"elem",
      title: "ES: Lava Lamp (2)",
      start: moment("07/18/2023 10:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("07/18/2023 11:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/ES_07_16_07_18_lava_lamp.pdf",
    },
    {
      cohort:"nova",
      group:"elem",
      title: "ES: Encryption and Decryption Activity (1)",
      start: moment("07/23/2023 10:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("07/23/2023 11:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/ES_07_23_07_25_encryption_and_decryption_activity.pdf",
    },
    {
      cohort:"nova",
      group:"middle",
      title: "MS: Public Key Cryptography Activity",
      start: moment("07/23/2023 11:30 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("07/23/2023 12:30 PM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/MS_07_23_public-key_cryptography.pdf",
    },
    {
      cohort:"nova",
      group:"elem",
      title: "ES: Encryption and Decryption Activity (2)",
      start: moment("07/25/2023 10:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("07/25/2023 11:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/ES_07_23_07_25_encryption_and_decryption_activity.pdf",
    },
    {
      cohort:"nova",
      group:"elem",
      title: "ES: Rock Candy (1)",
      start: moment("07/30/2023 10:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("07/30/2023 11:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/ES_07_30_08_01_rock_candy.pdf",
    },
    {
      cohort:"nova",
      group:"middle",
      title: "MS: Balloon-Powered Car",
      start: moment("07/30/2023 11:30 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("07/30/2023 12:30 PM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/MS_07_30_balloon-powered_car.pdf",
    },
    {
      cohort:"nova",
      group:"elem",
      title: "ES: Rock Candy (2)",
      start: moment("08/01/2023 10:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("08/01/2023 11:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/ES_07_30_08_01_rock_candy.pdf",
    },
    {
      cohort:"nova",
      group:"elem",
      title: "ES: Leaf Pigment Extraction (1)",
      start: moment("08/06/2023 10:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("08/06/2023 11:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/ES_08_06_08_08_leaf_pigment_extraction.pdf",
    },
    {
      cohort:"nova",
      group:"middle",
      title: "MS: Spectrometer",
      start: moment("08/06/2023 11:30 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("08/06/2023 12:30 PM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/MS_08_06_spectrometer.pdf",
    },
    {
      cohort:"nova",
      group:"elem",
      title: "ES: Leaf Pigment Extraction (2)",
      start: moment("08/08/2023 10:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("08/08/2023 11:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/ES_08_06_08_08_leaf_pigment_extraction.pdf",
    },
    {
      cohort:"nova",
      group:"elem",
      title: "ES: Sea Level Activity (1)",
      start: moment("08/13/2023 10:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("08/13/2023 11:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/ES_08_13_08_15_sea_level_activity.pdf",
    },
    {
      cohort:"nova",
      group:"middle",
      title: "MS: Osmosis",
      start: moment("08/13/2023 11:30 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("08/13/2023 12:30 PM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/MS_08_13_osmosis.pdf",
    },
    {
      cohort:"nova",
      group:"elem",
      title: "ES: Sea Level Activity (2)",
      start: moment("08/15/2023 10:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      end: moment("08/15/2023 11:00 AM", "MM/DD/YYYY h:mm A").toDate(),
      allDay: false,
      event_pdf_filepath: "/nova_pdfs/ES_08_13_08_15_sea_level_activity.pdf",
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
  // potential change
  )
}
