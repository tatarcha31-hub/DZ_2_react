import './View.css';

const View = () => {
    const items = [
  {
    id: 1,
    title: "Ноутбук",
    category: "Электроника",
    price: 1200,
    image: "https://picsum.photos/300/200?random=1",
    inStock: true
  },
  {
    id: 2,
    title: "Смартфон",
    category: "Электроника",
    price: 900,
    image: "https://picsum.photos/300/200?random=2",
    inStock: true
  },
  {
    id: 3,
    title: "Наушники",
    category: "Аксессуары",
    price: 150,
    image: "https://picsum.photos/300/200?random=3",
    inStock: false
  },
  {
    id: 4,
    title: "Клавиатура",
    category: "Компьютеры",
    price: 80,
    image: "https://picsum.photos/300/200?random=4",
    inStock: true
  },
  {
    id: 5,
    title: "Мышь",
    category: "Компьютеры",
    price: 45,
    image: "https://picsum.photos/300/200?random=5",
    inStock: true
  },
  {
    id: 6,
    title: "Монитор",
    category: "Компьютеры",
    price: 320,
    image: "https://picsum.photos/300/200?random=6",
    inStock: false
  },
  {
    id: 7,
    title: "Принтер",
    category: "Офис",
    price: 250,
    image: "https://picsum.photos/300/200?random=7",
    inStock: true
  },
  {
    id: 8,
    title: "Планшет",
    category: "Электроника",
    price: 650,
    image: "https://picsum.photos/300/200?random=8",
    inStock: true
  },
  {
    id: 9,
    title: "Колонка",
    category: "Аудио",
    price: 180,
    image: "https://picsum.photos/300/200?random=9",
    inStock: true
  },
  {
    id: 10,
    title: "Камера",
    category: "Фото",
    price: 1100,
    image: "https://picsum.photos/300/200?random=10",
    inStock: false
  },
  {
    id: 11,
    title: "Часы",
    category: "Гаджеты",
    price: 400,
    image: "https://picsum.photos/300/200?random=11",
    inStock: true
  },
  {
    id: 12,
    title: "Роутер",
    category: "Сеть",
    price: 95,
    image: "https://picsum.photos/300/200?random=12",
    inStock: true
  },
  {
    id: 13,
    title: "Микрофон",
    category: "Аудио",
    price: 130,
    image: "https://picsum.photos/300/200?random=13",
    inStock: false
  },
  {
    id: 14,
    title: "Веб-камера",
    category: "Видео",
    price: 70,
    image: "https://picsum.photos/300/200?random=14",
    inStock: true
  },
  {
    id: 15,
    title: "SSD",
    category: "Комплектующие",
    price: 160,
    image: "https://picsum.photos/300/200?random=15",
    inStock: true
  },
  {
    id: 16,
    title: "Жесткий диск",
    category: "Комплектующие",
    price: 120,
    image: "https://picsum.photos/300/200?random=16",
    inStock: false
  },
  {
    id: 17,
    title: "Проектор",
    category: "Видео",
    price: 780,
    image: "https://picsum.photos/300/200?random=17",
    inStock: true
  },
  {
    id: 18,
    title: "Игровой джойстик",
    category: "Игры",
    price: 95,
    image: "https://picsum.photos/300/200?random=18",
    inStock: true
  },
  {
    id: 19,
    title: "Кресло",
    category: "Мебель",
    price: 350,
    image: "https://picsum.photos/300/200?random=19",
    inStock: true
  },
  {
    id: 20,
    title: "Стол",
    category: "Мебель",
    price: 500,
    image: "https://picsum.photos/300/200?random=20",
    inStock: false
  }
];
  return (
    <div className='mainBlock'>{items.map((item) => {
            console.log(item)

            return (
            <div className='block'>
                <div className='imgBlock'>
                    <img src={item.image} alt="photo" />
                </div>
                <div className='infoBlock'>
                    <p>{item.title}</p>
                    <p>{item.category}</p>
                    <p>{`Цена:${item.price}`}</p>
                    <p>{item.inStock}</p>
                </div>
            </div> )
        })}</div>
  )
}

export default View