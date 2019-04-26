import React from 'react'

const hero = (props) => {
  return (
    <section className="main">
      <div className="contenedor">
        <div className="sub">
          <div className="padre">
            <div className="izq">
              <h1>
                Doctora María Alejandra Manosalva Odontologa especialista en Endodoncia
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, ad! Quod expedita libero dicta
                numquam ducimus, error iure mollitia, aperiam eaque ipsa illo, molestiae maxime architecto!
                Vero, necessitatibus! Corrupti, qui?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, ad! Quod expedita libero dicta
                numquam ducimus, error
                iure mollitia, aperiam eaque ipsa illo, molestiae maxime architecto! Vero, necessitatibus!
                Corrupti, qui?
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
            padding: 0.8em;
            line-height: 1.7;
          }

          h1 {
            font-size: 1.6em;
            font-weight: 600;
          }

          p {
            margin-top: 1.7em;
            font-size: 1em;
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
        `}
      </style>
    </section>
  )
}

export default hero
