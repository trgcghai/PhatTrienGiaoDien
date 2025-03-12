import React from 'react'

const DishCard = ({ name, cookTime, imgUrl }) => {
    return (
        <div className='rounded-lg border-[0.5px] border-gray overflow-hidden'>
            <img src={imgUrl} className='w-full scale-110' alt="" />
            <div className='p-4'>
                <div className='flex justity-between gap-4 items-center mb-6 h-16'>
                    <p className='font-bold text-lg'>{name}</p>
                    <button className='rounded-full w-[40px] p-2 aspect-square border border-main text-main'>
                        <img src="/src/assets/save.png" alt="" />
                    </button>
                </div>
                <span className='text-main bg-main-light p-2 rounded-full text-center w-[100px]'>{cookTime} minute</span>
            </div>
        </div>
    )
}

export default DishCard