import React, { useState } from 'react'
import arrowDown from '../assets/arrow_down.svg'
import mapImg from '../assets/map.png'
const Dostavka = () => {
  const akkardion = [
    {
      isOpen: false,
      title: "У наших курьеров всегда должна быть сдача!",
      text: "Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам"
    },
    {
      isOpen: false,
      title: "Вам что-то не довезли?", text: "Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам"
    },
    {
      isOpen: true,
      title: "Не понравился продукт?", text: "Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам"
    },
    {
      isOpen: false,
      title: "Если появились замечания", text: "Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам"
    },
    {
      isOpen: false,
      title: "Оплата Visa, MasterCard и МИР", text: "Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам"
    },
    {
      isOpen: false,
      title: "Реквизиты", text: "Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам"
    },
  ]
  return (
    <div className='containerb grid grid-cols-2 py-10 gap-5 max-md:flex max-md:flex-col max-md:'>
      <h1 className="text-white giliroy-700 text-3xl before:content-[''] before:w-0.5 before:h-10 before:bg-graygreen flex items-center gap-x-5 mb-12 col-start-1 col-end-3">
        Условия доставки
      </h1>

      <ul>
        {akkardion.map((item, index) => {
          const [open, setOpen] = useState(item.isOpen)
          const openAkkardion = (e) => {
            const find = akkardion.find((r, i) => i === e)
            console.log(find);
            akkardion[e].isOpen = true
            setOpen(true)
          }
          return (
            <li onClick={() => openAkkardion(index)} key={index} className={`bg-newGray rounded-xl relative mb-5 last:mb-0 transition-all flex items-center justify-between overflow-hidden flex-col ${open ? "h-52" : "h-16"}`}>
              <div className={`rounded-xl w-full h-16 px-4 py-5  bg-gradient-to-br from-graygreen to-darkenGrayGrenn text-white giliroy-200 text-lg flex items-center justify-between`}>
                <h2>{item.title}</h2>
                <img src={arrowDown} className={`${open ? "rotate-180" : ""} transition-all`} alt="arrow down svg" />
              </div>
              <p className='absolute top-20 px-5 text-white text-base giliroy-200'>{item.text}</p>
            </li>
          )
        })}
      </ul>

      <img src={mapImg} className='h-full w-full object-cover rounded-xl' alt="map img" />

      <div className="w-1/2 col-start-1 col-end-3 flex items-center justify-between max-md:w-full max-md:flex max-md:flex-col max-md:items-start">
        <span className='text-22 giliroy-500 text-white flex flex-col items-start justify-between max-md:text-xl max-sm:text-base'>График работы доставки:
          <span className='text-gray giliroy-200'>с 10:00-21:00</span></span>
        <span className='text-22 giliroy-500 text-white flex flex-col items-start justify-between max-md:text-xl max-sm:text-base'>График работы кафе:
          <span className='text-gray giliroy-200'>
            с 08:00-21:00</span></span>
      </div>

      <div className="w-1/2 col-start-1 flex flex-col items-start justify-between max-md:w-full">
        <span className='text-white giliroy-700 text-22 max-md:text-xl'>Минимальный заказ:</span>
        <p className='text-gray giliroy-200 text-22 max-md:text-xl max-sm:text-base'>Бесплатная доставка пешим курьером при сумме заказа от 400 ₽
          Доставка оператором такси от любой суммы заказа - по тарифам
          перевозчика.</p>
      </div>
    </div>
  )
}

export default Dostavka