import React from 'react'
import ListServices from './listServices'

const Services = (props) => {
  const { name } = props
  return (
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
  )
}

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
    img:'mouth.png',
    alt: 'Rehabilitación Oral',
    title: 'Rehabilitación Oral',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
              expedita perspiciatis
              labore`
  },
  {
    id: 5,
    img:'gum.png',
    alt: 'Periodoncia',
    title: 'Periodoncia',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
              expedita perspiciatis
              labore`
  },
  {
    id: 6,
    img:'tooth.png',
    alt: 'Cirugía',
    title: 'Cirugía',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
              expedita perspiciatis
              labore`
  }
]

export default Services
