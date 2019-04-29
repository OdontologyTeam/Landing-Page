import React from 'react'

const Schedule = (props) => {
  const { day, time } = props
  return (
    <p className="text">
      {day}
      <span className="time">{time}</span>
      <style jsx>
        {`
          .text {
            font-weight: 600;
            margin-bottom: 0.5em;
          }

          .time {
            margin-left: 0.68em;
          }
        `}
      </style>
    </p>
  )
}

export default Schedule