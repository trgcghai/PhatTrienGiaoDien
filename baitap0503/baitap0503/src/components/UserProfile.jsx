import React from 'react'
import avatar from '../assets/Avatar.png'

const UserProfile = () => {
    return (
        <div className='mt-12'>
            <p className='px-2 text-3xl font-bold mb-6' style={{ fontFamily: "serif" }}>Emma Gonzalez's Recipe Box</p>

            <div className='flex items-center gap-4 jutify-between'>
                <img src={avatar} alt="" className='rounded-full flex-1 aspect-square' />
                <div className='flex-[7]'>
                    <p
                        className='text-[#424955FF]'
                    >Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times.
                        She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles,
                        Emma now resides in New York City, where she explores a wide range of culinary delights.
                    </p>
                    <div className='mt-10'>
                        <span className='text-lg text-[#F44B87FF]'>6.5k Subscribes</span>
                        <button className='text-lg rounded-md bg-[#F44B87FF] text-white px-4 py-2 ml-8 w-[100px]'>
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile