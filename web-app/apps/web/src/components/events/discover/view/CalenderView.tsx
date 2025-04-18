import React from "react";
import { render } from "react-dom";
import events from "./events";
import {
  Calendar,
  Views,
  DateLocalizer,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const App = () => (
  <Calendar
    length={1}
    events={events}
    localizer={localizer}
    style={{ height: 1000 }}
  />
);

export default App;
