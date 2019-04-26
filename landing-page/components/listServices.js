import React from 'react'

const listServices = (props) => {
  const { img, alt, title, content} = props
  return (
    <div className="caja">
      <div className="img">
        <img
          src={img}
          alt={alt}
        />
      </div>
      <div className="titulo">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <button>Ver más</button>
      
      <style jsx>
        {`
          .caja {
            padding: 1.5%;
            width: 100%;
            margin: 1%;
            margin: auto;
            margin-top: 1em;
            text-align: center;
            max-width: 350px;
            border-radius: 8px;
            border: 1px solid rgba(128, 128, 128, 0.5);
          }

          .caja .titulo h3, p {
            text-align: center;
            margin-top: 1em;
          }

          .caja .titulo p {
            color: rgba(0, 0, 0, 0.589);
            line-height: 1.7;
          }

          .caja button {
            background-color: transparent;
            border-color: transparent;
            margin-top: 1em;
            color: rgb(0, 191, 255);
            position: relative;
            left: 8em;
          }
        `}
      </style>
    </div>
  )
}

export default listServices
