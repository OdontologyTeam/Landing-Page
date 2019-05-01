import React from 'react'

const hero = (props) => {
  const { name, subtitle } = props

  return (
    <section className="main">
      <div className="contenedor">
        <div className="sub">
          <div className="padre">
            <div className="izq">
              <h1 className="title">
                {name}
              </h1>
              <h3 className="title sub-title">{subtitle}</h3>
              <p>
                Odontóloga de la Universidad Santo Tomás de Bucaramanga, especialista en Endodoncia con más de 7 años de experiencia atendiendo casos de altos niveles de complejidad, donde se han logrado excelentes resultados.
              </p>
              <p className="paragraph">
                Brindo a mis pacientes la confianza y seguridad de obtener los resultados más profesionales en cualquier tipo de tratamiento odontológico, basándome en mi amplia experiencia profesional, mi carisma con las personas, el amor por lo que hago, la tecnología de punta que utilizo en mi consultorio y el acompañamiento de odontólogos especialistas en diferentes áreas para entregarle a mis pacientes solo lo mejor!
              </p>
              <button>Saber más</button>
            </div>
            <div className="der">
              <img
                src="../static/dentist.png"
                alt="Consultorio"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .main {
            position: relative;
            top: -0.2em;  
          }
          
          .contenedor {
            max-width: none;
            background-color: #00ccdb;
            z-index: 1;
            border-radius: 0 0 85% 85% / 30%;
          }

          .sub {
            max-width: 1200px;
            margin: auto;
          }

          .padre {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .izq {
            margin-top: 3em;
            flex-direction: column;
            text-align: right;
            width: 100%;
            max-width: 600px;
            color: white;
            font-family: "Roboto";
          }

          h1, p {
            text-align: left;
            line-height: 1.7;
          }
          
          h1 {
            font-size: 1.6em;
            font-weight: 600;
            padding: 20.48px 20.48px 0 20.48px;
          }
          
          .title {
            margin: 0;
          }
          
          .sub-title {
            padding: 0 20.48px 0 20.48px;
            text-align: left;
            line-height: 1.7;
          }
          
          p {
            padding: 0.8em;
            margin-top: 1.7em;
            font-size: 1em;
          }

          .paragraph {
            margin: 0;
          } 

          button {
            position: relative;
            top: 1em;
            left: -0.6em;
            background-color: transparent;
            border: 1px solid rgba(255, 255, 255, 0.637);
            color: white;
            font-family: "Roboto";
            padding: 0.8em 2em 0.8em 2em;
            transition: 1s linear;
            margin-bottom: 2em;
          }

          button:hover {
            background: white;
            color: black;
            cursor: pointer;
          }

          .der {
            width: 100%;
            max-width: 600px;
          }

          img {
            width: 100%;
            margin-bottom: 12em;
          }

          @media screen and (max-width: 750px) {
            .contenedor .padre {
              padding: 2%;
            }

            .der img {
              margin-top: 2em;
            }

            .contenedor .sub .padre .izq {
              margin-top: 0;
            }
          }
        `}
      </style>
    </section>
  )
}

export default hero
