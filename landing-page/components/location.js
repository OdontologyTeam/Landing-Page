import React from 'react'
import GoogleMapsReact from './googleMapsReact'
import Schedule from './schedule'

const location = (props) => {
  const { office, address, phone } = props
  return (
    <div className="location">
      <div className="map">
        <GoogleMapsReact isMakerShown />
      </div>
      <div className="box">
        <div className="content">
          <div className="tit">
            <div className="icon"></div>
            <div className="title">{ office }</div>
          </div>
          <div className="info">
            <label className="address">{ address }</label>
            <label className="phone">{ phone }</label>
          </div>
          <hr className="line" />
          <div className="schedule">
            {
              schedule.map(item => (
                <Schedule
                  key={item.id}
                  {...item}
                />
              ))
            }
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .location {
            font-weight: 300;
          }

          .box {
            width: 100%;
            position: absolute;
            margin-top: -20.5rem;
          }

          .content {
            max-width: 350px;
            margin: auto;
            padding: 1.5em;
            background-color: #fff;
            border-radius: 4px;
          }

          .tit {
            margin-bottom: 0.8em;
          }

          .tit .title {
            color: #00CCDB;
            text-align: left;
            margin-left: 1.5em;
            font-weight: bold !important;
          }

          .info {
            width: 100%;
            margin-bottom: 0.8em;
          }

          .info .address, .phone {
            width: 100%;
            display: block;
            margin-bottom: 0.5em;
            margin-left: 1.5em;
            text-align: left;
          }

          
        `}
      </style>
    </div>
  )
}

const schedule = [
  {
    id: 1,
    day: 'Lun - Vier',
    time: '09:00 - 16:00'
  },
  {
    id: 2,
    day: 'Sab - Festi',
    time: '10:00 - 13:00'
  }
]



export default location