import React, { useState } from "react";
import Calendar from "react-calendar";
function Calender() {
  const [date, setDate] = useState(new Date());
  const onChange= date=>{
    setDate(date);
  }

  return (
    
    <>
      <div className="w-96"  >
        <Calendar onChange={onChange} value={date} />
        {date.toString()}
      </div>
    </>
  );
}
export default Calender;
