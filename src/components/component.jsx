import { Link } from 'react-router-dom';
import { Calendar, dayjsLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from 'dayjs';

export default function Component() {
  const localizer = dayjsLocalizer(dayjs)
  return (
    <div style={{ height: "95vh" }}>

      <Calendar
        localizer={localizer}
      />
    </div>
  )
}