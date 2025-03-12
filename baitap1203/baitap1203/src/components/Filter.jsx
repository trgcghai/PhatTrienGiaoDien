import React from 'react'

import filter from '../assets/filter.png'
import arrowUp from '../assets/352469_arrow_up_icon.png'

const Filter = () => {
    return (
        <div className='flex-[3] border border-gray-300 rounded-lg p-3'>
            <p className='text-xl font-bold flex items-center gap-2 mb-4'>
                <img src={filter} className='w-[30px]' alt="" />
                <p>FILTER</p>
            </p>
            <div>
                <p className='flex items-center justify-between'>
                    <p className='text-lg font-semibold'>Type</p>
                    <img src={arrowUp} className='w-[30px]' alt="" />
                </p>
                <div className='grid grid-cols-2 grid-rows-4 gap-4 py-3'>
                    {['Pan-fried', 'Stir-fried', 'Grilled', 'Roasted', 'Sauteed', 'Baked', 'Steamed', 'Stewed'].map(item => {
                        return (
                            <div key={item} className='flex gap-2 items-center'>
                                <input type="checkbox" className='accent-main' name="" id="" />
                                <p>{item}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='border border-gray-300 mb-3'></div>
            <div>
                <p className='flex items-center justify-between'>
                    <p className='text-lg font-semibold'>Time</p>
                    <img src={arrowUp} className='w-[30px]' alt="" />
                </p>
                <input type="range" name="" id="" className='w-full accent-main focus:outline-none outline-none border-0 rounded bg-main-light' />
            </div>
            <div className='border border-gray-300 mb-3'></div>
            <p className='flex items-center justify-between'>
                <p className='text-lg font-semibold'>Rating</p>
                <img src={arrowUp} className='w-[30px]' alt="" />
            </p>
            <div>
                <div className='py-2 flex items-center gap-2'>
                    <input type="checkbox" className='accent-main' name="" id="" />
                    <label htmlFor="">⭐⭐⭐⭐⭐</label>
                </div>
                <div className='py-2 flex items-center gap-2'>
                    <input type="checkbox" className='accent-main' name="" id="" />
                    <label htmlFor="">⭐⭐⭐⭐</label>
                </div>
                <div className='py-2 flex items-center gap-2'>
                    <input type="checkbox" className='accent-main' name="" id="" />
                    <label htmlFor="">⭐⭐⭐</label>
                </div>
                <div className='py-2 flex items-center gap-2'>
                    <input type="checkbox" className='accent-main' name="" id="" />
                    <label htmlFor="">⭐⭐</label>
                </div>
                <div className='py-2 flex items-center gap-2'>
                    <input type="checkbox" className='accent-main' name="" id="" />
                    <label htmlFor="">⭐</label>
                </div>
            </div>
        </div>
    )
}

export default Filter