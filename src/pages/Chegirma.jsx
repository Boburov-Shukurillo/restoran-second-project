import React from 'react'
import { chegirma } from '../data'
import Map from '../components/Map'

const Chegirma = () => {
    return (
        <>
            <div className='containerb py-20 flex flex-col'>
                <h1 className="text-white giliroy-700 text-3xl before:content-[''] before:w-1 before:h-10 before:bg-graygreen flex items-center gap-x-5 mb-12">
                    АКЦИИ
                </h1>
                <div className="w-full h-0.5 mb-20 bg-gradient-to-r from-perfectGray">.</div>
                <ul className='grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:w-2/3 self-center max-400:w-full'>
                    {chegirma.map((item) => {
                        return <li key={item.id} className=' bg-newGray rounded-xl flex flex-col items-center justify-between'>
                            <img src={item.imgUrl} className='w-full h-1/2 max-xl:h-1/3 max-lg:h-1/2' alt={item.name + " img"} />
                            <div className="py-4 px-6 flex flex-col isolate justify-between gap-y-2">
                                <h2 className='giliroy-700 text-lg text-white max-lg:text-sm'>{item.name}</h2>
                                <p className='text-sm giliroy-200 text-gray max-xl:text-xs'>{item.description}</p>
                                <p className='text-sm giliroy-200 text-graygreen max-xl:text-xs'>{item.to}</p></div>
                        </li>
                    })}
                </ul>
            </div>
            <Map />
        </>
    )
}

export default Chegirma