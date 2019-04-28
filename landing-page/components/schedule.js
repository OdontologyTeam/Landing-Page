import React from 'react'

const Schedule = (props) => {
  const { day, time } = props
  return (
    <p className="text">
      {day}
      <span className="time">{time}</span>
    </p>
  )
}

export default Schedule