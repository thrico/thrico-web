import { Button, Dropdown, MenuProps } from "antd";

import React from "react";
import { CalendarEvent } from "../../types/ts-types";
import {
  AppleOutlined,
  CalendarOutlined,
  GoogleCircleFilled,
  GoogleOutlined,
  YahooOutlined,
} from "@ant-design/icons";
import { SiMicrosoftoutlook } from "react-icons/si";
interface AddToCalendarButtonTooltipProps {
  calendarEvent: CalendarEvent;
}

export default function AddToCalendarButtonTooltip({
  calendarEvent,
}: AddToCalendarButtonTooltipProps) {
  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: <GoogleOutlined />,
      label: (
        <a href={generateGoogleCalendarUrl(calendarEvent)} target="_blank">
          Google Calendar
        </a>
      ),
    },
    {
      key: "2",
      icon: <AppleOutlined />,
      label: (
        <a href={generateIcsCalendarFile(calendarEvent)} target="_blank">
          Apple Calendar
        </a>
      ),
    },
    {
      key: "3",
      icon: <YahooOutlined />,
      label: (
        <a href={generateYahooCalendarUrl(calendarEvent)} target="_blank">
          Yahoo Calendar
        </a>
      ),
    },
    {
      key: "4",
      icon: <SiMicrosoftoutlook />,
      label: (
        <a href={generateIcsCalendarFile(calendarEvent)} target="_blank">
          Outlook Calendar
        </a>
      ),
    },

    {
      key: "4",
      icon: <SiMicrosoftoutlook />,
      label: (
        <a href={generateIcsCalendarFile(calendarEvent)} target="_blank">
          Thrico Calender
        </a>
      ),
    },
  ];
  return (
    <>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Button icon={<CalendarOutlined />}>Add To Calender</Button>
      </Dropdown>
    </>
  );
}
// utils

const MINUTE_IN_MS = 60 * 1000;

function getEndTime(calendarEvent: CalendarEvent) {
  return (
    calendarEvent.endDate ??
    addMinutesToDate(calendarEvent.startDate, calendarEvent.durationInMinutes)
  );
}

function formatDateForCalendarUrl(date: Date) {
  return date.toISOString().replace(/-|:|\.\d+/g, "");
}
function addMinutesToDate(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * MINUTE_IN_MS);
}

function generateGoogleCalendarUrl(calendarEvent: CalendarEvent) {
  const startDate = formatDateForCalendarUrl(calendarEvent.startDate);
  const endDate = formatDateForCalendarUrl(getEndTime(calendarEvent));

  const encodedUrl = encodeURI(
    [
      "https://www.google.com/calendar/render",
      "?action=TEMPLATE",
      `&text=${calendarEvent.title || ""}`,
      `&dates=${startDate || ""}`,
      `/${endDate || ""}`,
      // TODO: append video appointment link to description
      `&details=${
        `${calendarEvent.description}\n` + `https://cemkiray.com` || ""
      }`,
      `&location=${calendarEvent.address || ""}`,
      "&sprop=&sprop=name:",
    ].join("")
  );

  return encodedUrl;
}

// Generates ICS for Apple and Outlook calendars
function generateIcsCalendarFile(calendarEvent: CalendarEvent) {
  const startDate = formatDateForCalendarUrl(calendarEvent.startDate);
  const endDate = formatDateForCalendarUrl(getEndTime(calendarEvent));

  const encodedUrl = encodeURI(
    `data:text/calendar;charset=utf8,${[
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `URL:${document.URL}`, // TODO: insert video app url here
      `DTSTART:${startDate || ""}`,
      `DTEND:${endDate || ""}`,
      `SUMMARY:${calendarEvent.title || ""}`,
      `DESCRIPTION:${calendarEvent.description || ""}`,
      `LOCATION:${calendarEvent.address || ""}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n")}`
  );

  return encodedUrl;

  // return '<a class="' + eClass + '" target="_blank" href="' + href + '">' + calendarName + ' Calendar</a>';
}

function generateYahooCalendarUrl(calendarEvent: CalendarEvent) {
  const st = helpers.formatTime(calendarEvent.startDate);
  const duration = helpers.getEventDurationForYahoo(calendarEvent);

  const encodedUrl = encodeURI(
    [
      "http://calendar.yahoo.com/?v=60&view=d&type=20",
      `&title=${calendarEvent.title || ""}`,
      `&st=${st || ""}`,
      `&dur=${duration || ""}`,
      `&desc=${calendarEvent.description || ""}`,
      `&in_loc=${calendarEvent.address || ""}`,
    ].join("")
  );

  return encodedUrl;
}

const helpers = {
  formatTime(date: Date) {
    return date.toISOString().replace(/-|:|\.\d+/g, "");
  },
  getEventDurationForYahoo(calendarEvent: CalendarEvent) {
    const eventDuration = calendarEvent.endDate
      ? (calendarEvent.endDate.getTime() - calendarEvent.startDate.getTime()) /
        MINUTE_IN_MS
      : calendarEvent.durationInMinutes || 0;

    // Yahoo dates are crazy, we need to convert the duration from minutes to hh:mm
    const yahooHourDuration =
      eventDuration < 600
        ? `0${Math.floor(eventDuration / 60)}`
        : `${Math.floor(eventDuration / 60)}`;

    const yahooMinuteDuration =
      eventDuration % 60 < 10
        ? `0${eventDuration % 60}`
        : `${eventDuration % 60}`;

    const yahooEventDuration = yahooHourDuration + yahooMinuteDuration;

    return yahooEventDuration;
  },
};
