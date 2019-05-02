import React from 'react'

const Footer = (props) => {
  const { rights, owner } = props
  /**
   * TODO: add social media and also a link of the redontologos
   * Instagram 
   * Linkedin
   * redondontologos
   */ 
  return (
    <div className="footer">
      <div className="left">
        <p className="text">
          &copy; {rights}
        </p>
        <ul>
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>Red Odontólogos</li>
        </ul>
      </div>
      <div className="right">
        <p className="text">
          {owner}
        </p>
      </div>
      <style jsx>
        {`
          .footer {
            background-color: #2D2D2D;
            font-family: "Roboto";
            padding: 1em 5em !important;
            display: flex;
          }

          .right {
            width: 50%;
            text-align: right;
            color: #ffffff;
            align-self: center;
          }

          .left {
            width: 50%;
            text-align: left;
            color: #ffffff; 
            display: block;
          }

          @media screen and (max-width: 750px) {
            .footer {
              display: block;
            }

            .right, .left {
              width: 100%;
              margin-bottom: 1em;
              text-align: left;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Footer