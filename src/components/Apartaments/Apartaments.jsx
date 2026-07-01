import React from 'react'
import "./Apartaments.css"

const Apartaments = () => {
    const apartments = [
  {
    id: 1,
    title: "Однокомнатная квартира",
    city: "Минск",
    price: 65000,
    rooms: 1,
    premium: true,
  },
  {
    id: 2,
    title: "Двухкомнатная квартира",
    city: "Гродно",
    price: 82000,
    rooms: 2,
    premium: true,
  },
  {
    id: 3,
    title: "Студия",
    city: "Брест",
    price: 54000,
    rooms: 1,
    premium: true,
  },
  {
    id: 4,
    title: "Трехкомнатная квартира",
    city: "Гомель",
    price: 98000,
    rooms: 3,
    premium: true,
  },
  {
    id: 5,
    title: "Пентхаус",
    city: "Минск",
    price: 250000,
    rooms: 5,
    premium: true,
  },
  {
    id: 6,
    title: "Двухкомнатная квартира",
    city: "Витебск",
    price: 76000,
    rooms: 2,
    premium: false,
  },
  {
    id: 7,
    title: "Однокомнатная квартира",
    city: "Могилев",
    price: 58000,
    rooms: 1,
    premium: false,
  },
  {
    id: 8,
    title: "Студия",
    city: "Барановичи",
    price: 47000,
    rooms: 1,
    premium: false,
  },
  {
    id: 9,
    title: "Трехкомнатная квартира",
    city: "Пинск",
    price: 91000,
    rooms: 3,
    premium: false,
  },
  {
    id: 10,
    title: "Четырехкомнатная квартира",
    city: "Бобруйск",
    price: 115000,
    rooms: 4,
    premium: false,
  },
];
  return (
    <div className='mainBlock'>{apartments.map((item) => {
        return (
            <div key={item.id} className='blockk' onClick={(apartments) => {console.log(item); alert(item.title)}}>
                <p>{item.title}</p>
                <p>{item.city}</p>
                <p>{item.price}</p>
                <p>{item.rooms}</p>
            </div>
        )
    })}</div>
  )
}

export default Apartaments