import React from 'react'

export default function navbar(props) {
  // Array of object of the navbar elements
  const navbarLinks = [
    {
      id: 1,
      title: 'Inicio',
    },
    {
      id: 2,
      title: 'Acerca',
    },
    {
      id: 3,
      title: 'Servicios',
    },
    {
      id: 4,
      title: 'Ubicación',
    },
    {
      id: 5,
      title: 'Contacto',
    }
  ]

  return (
    <header className="normal">
      <div className="contenedor">
        <nav>
          {
            navbarLinks.map((item) => (
              <li
                key={item.id.toString()}
              >
                <a>
                  {item.title}
                </a>
              </li>
            ))
          }
        </nav>
      </div>
      < style jsx>
        {`
          header {
            background-color: #00ccdb;  
          }
          
          .contenedor nav {
            max-width: 1200px;
            margin: auto;
            display: flex;
            padding: 1em 1.5em 1em 0;
            justify-content: flex-end;
          }


          li{
            list-style-type: none;
            padding: 1%;
            cursor: pointer;
          }

          li:nth-child(5){
            border: 1px solid white;
          }

          a{
            text-decoration: none;
            color: white;
            font-family: "Roboto";
            font-weight: 300;
            white-space: nowrap;
          }
        `}
      </style>
    </header>
  )
}
