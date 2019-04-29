import React from 'react'

const About = (props) => {
  const { name } = props

  return (
    <div className="contenedor">
      <div className="padre">
        <div className="izq">
          <h2>{name}</h2>
          <p>
            Especialista en endodoncia capacitada para prevenir, diagnosticar, pronosticar y tratar las anomalías pulpare, 
            perirradiculares y trauma dento alveolar en pacientes pediátricos, adultos y geriátricos. Preparada para realizar trabajo
            interdisciplinario con las demás especialidades de la odontología,
            utilizando tecnología de punta. Capacitada para realizar actividades
            investigativas teniendo como principios las guías científicas y metodológias
            para aportar nuevos conocimientos a la especialidad.
          </p>
        </div>
        <div className="der">
          <img
            src="../static/portrait.jpg"
          />
        </div>
      </div>
      <style jsx>
        {`
          .contenedor {
            background-color: white !important;
            margin-top: 5em;
          }

          .padre {
            display: flex;
            /*flex-wrap: wrap;*/
            padding-bottom: 5em;
            padding: 2%;
            justify-content: center;
          }

          .izq {
            width: 100%;
            max-width: 600px;
            font-family: "Roboto";
            text-align: center;
            position: relative;
            left: 6em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            top: -3.5em;
          }

          h2 {
            text-align: center;
            max-width: 500px;
            font-weight: bold;
            font-size: 2.2em;
            margin-top: -2.8em;
          }

          p {
            margin-top: 1.1em;
            text-align: left;
            max-width: 500px;
            line-height: 1.7;
            padding: 0.8em;
          }

          .der {
            width: 100%;
            max-width: 600px;
            text-align: center;
          }

          img {
            width: 100%;
            margin: auto;
            max-width: 350px;
            max-height: 500px;
            border-radius: 5px;
            -webkit-box-shadow: 0px 7px 33px 3px rgba(0, 0, 0, 0.28);
            -moz-box-shadow: 0px 7px 33px 3px rgba(0, 0, 0, 0.28);
            box-shadow: 0px 7px 33px 3px rgba(0, 0, 0, 0.28);
          }

          @media screen and (max-width: 1199px) {
            .contenedor .padre .izq {
              position: static;
              max-width: 1200px;
              padding: 1%;    
            }

            h2 {
              text-align: center;
            }

            p {
              text-align: justify;
            }

            .der {
              max-width: 1200px;
              margin-top: 1em;
            }
          }

          @media screen and (max-width: 958px) {
            .contenedor {
              background-color: white !important;
              margin-top: 5em;
            }

            .contenedor .padre {
              flex-wrap: wrap;
            }

            .contenedor .padre .izq h2 {
              margin-top: 0.01em;
            }

            .contenedor .padre .izq p {
              max-width: 600px;
              margin: auto;
              margin-top: 2em;
            }

            .contenedor .padre .der {
              padding-bottom: 5em;
            }
          }
        `}
      </style>
    </div>
  )
}

export default About
