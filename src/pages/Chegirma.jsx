import React from 'react'
import { chegirma } from '../data'
import Map from '../components/Map'

const Chegirma = () => {
    return (
        <>
            <div className='containerb py-20'>
            <h1 className="text-white giliroy-700 text-3xl before:content-[''] before:w-1 before:h-10 before:bg-graygreen flex items-center gap-x-5 mb-12">
            АКЦИИ
          </h1>
                <div className="w-full h-0.5 mb-20 bg-gradient-to-r from-perfectGray">.</div>
                <ul className='grid grid-cols-3 gap-10'>
                    {chegirma.map((item) => {
                        return <li key={item.id} className='bg-newGray rounded-xl'>
                            <img src={item.imgUrl} alt="" />
                            <div className="py-4 px-6 flex flex-col isolate justify-between gap-y-2">
                                <h2 className='giliroy-700 text-lg text-white'>{item.name}</h2>
                                <p className='text-sm giliroy-200 text-white'>{item.description}</p>
                                <p className='text-sm giliroy-200 text-graygreen'>{item.to}</p></div>
                        </li>
                    })}
                </ul>
            </div>
            <Map />
        </>
    )
}

export default Chegirma