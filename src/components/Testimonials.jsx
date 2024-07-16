import React from 'react'
import man from '../assets/man.jpg'

const Testimonials = () => {
  return (
    <div className='bg-gray-300 px-9 py-6'>
         <p className='text-3xl font-semibold'>Testimonials</p>
         <p className='max-w-[400px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
         <div>
                <div className='flex mt-4 gap-x-4'>
                <div className='rounded-full flex justify-center items-center'><img src="https://www.shutterstock.com/shutterstock/photos/1865153395/display_1500/stock-photo-portrait-of-young-smiling-woman-looking-at-camera-with-crossed-arms-happy-girl-standing-in-1865153395.jpg" className='w-16 h-16 rounded-full object-cover' /></div>
                <div>
                <p className='text-xl font-semibold'>Antonia Bells</p>
                <p className='font-semibold text-green-600'>Director Biography </p>
                </div>
                </div>
            </div>

    </div>
  )
}

export default Testimonials