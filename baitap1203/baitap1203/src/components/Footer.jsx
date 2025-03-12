import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#1D2128] p-8 grid grid-cols-4 gap-20'>
            <div className='col-span-2'>
                <div className='space-y-2 mb-40'>
                    <p className='text-lg font-bold text-white'>About us</p>
                    <p className='text-lg text-white'>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                    <div className='flex gap-4'>
                        <input placeholder='Enter your email' className='rounded-lg p-2 border bg-white w-[500px]' type="text" name="" id="" />
                        <button className='p-2 rounded-lg bg-[#F44B87FF] w-[100px] text-white'>Send</button>
                    </div>
                </div>
                <div className='gap-4'>
                    <img className='inline-block' src="/src/assets/chefify.png" alt="" />
                    <span className='w-[150px] ml-4 text-md text-white'>2023 Chefify Company</span>
                    <span className='w-[150px] ml-4 text-md text-white'>Terms of Service | Privacy Policy</span>
                </div>
            </div>
            <div>
                <div className='space-y-2 mb-20' >
                    <p className='text-lg font-bold text-white'>Learn More</p>
                    <p className='text-lg text-white'>Our Cooks</p>
                    <p className='text-lg text-white'>See Our Features</p>
                    <p className='text-lg text-white'>FAQ</p>
                </div>

                <div className='space-y-2' >
                    <p className='text-lg font-bold text-white'>Shop</p>
                    <p className='text-lg text-white'>Gift Subscription</p>
                    <p className='text-lg text-white'>Send Us Feedback</p>
                </div>
            </div>
            <div className='space-y-3'>
                <p className='text-lg font-bold text-white'>Recipes</p>
                {["What to Cook This Week", "Pasta", "Dinner", "Healthy", "Vegetarian", "Vegan", "Christmas"].map(item => (
                    <p className='text-lg text-white' key={item}>{item}</p>
                ))}
            </div>
        </div>
    )
}

export default Footer