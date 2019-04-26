import React from 'react'
import ListServices from './listServices'

const Services = (props) => {
  const { name } = props
  return (
    <section className="services">
      <div className="contenedor">
        <h2>{name}</h2>
        <div className="padre">
          {
            allServices.map(item => (
              <ListServices
              key={item.id}
              {...item}
              />
              ))
            }
        </div>
      </div>
      <style jsx>
        {`
          .services {
            background-color: #F8F8F8 !important;
          }
          .services .contenedor {
            padding-top: 2em;
            padding-bottom: 4em;
            text-align: center;
          }
          
          .services h2 {
            text-align: center;
            font-weight: bold;
            font-size: 2.2em;
          }

          .services button {
            margin-top: 3em;
            font-family: "Roboto";
            color: white;
            background-color: #00CCDB;
            border-color: transparent;
            padding: 0.8em 2.2em 0.8em 2.2em;
            cursor: pointer;
          }

          .services .padre {
            display: flex;
            margin-top: 2em;
            flex-wrap: wrap;
            padding: 1%;
          }

        `}
      </style>
    </section>
  )
}

// List of the services
const allServices = [
  {
    id: 1,
    img:'/static/molar.png',
    alt: 'Endodoncia',
    title: 'Endodoncia',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
              expedita perspiciatis
              labore`
  },
  {
    id: 2,
    img:'/static/implants.png',
    alt: 'Odontología General',
    title: 'General',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
              expedita perspiciatis
              labore`
  },
  {
    id: 3,
    img:'../static/records.png',
    alt: 'Ortodoncia',
    title: 'Ortodoncia',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
              expedita perspiciatis
              labore`
  },
  {
    id: 4,
    img:'../static/mouth.png',
    alt: 'Rehabilitación Oral',
    title: 'Rehabilitación Oral',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
              expedita perspiciatis
              labore`
  },
  {
    id: 5,
    img:'../static/gum.png',
    alt: 'Periodoncia',
    title: 'Periodoncia',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
              expedita perspiciatis
              labore`
  },
  {
    id: 6,
    img:'../static/tooth.png',
    alt: 'Cirugía',
    title: 'Cirugía',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
              expedita perspiciatis
              labore`
  }
]

export default Services
