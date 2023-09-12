import React from 'react'
import Calendar from 'react-calendar'
import Notification from './Notification'

function CalNoti() {
  return (
  <>
  <div  className={`text-white?"":"black"`}>
<Calendar/>
</div>
<div className=' bg-white '>
  <Notification/>
  </div>



</>  )
}

export default CalNoti