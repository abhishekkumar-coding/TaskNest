import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; 


function CalendarSection() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="w-[] relative bottom-14 bg-[#3F4057] p-3 rounded-lg shadow-lg mt-8">
      <h2 className="text-white text-2xl font-bold text-center mb-3">Calendar</h2>

      <div className="flex justify-center">
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="custom-calendar rounded-lg"
        />
      </div>

    </div>
  );
}

export default CalendarSection;
