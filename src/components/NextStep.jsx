import React from 'react'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import { SlGraduation } from "react-icons/sl";
import { MdOutlineSlowMotionVideo } from "react-icons/md";




const NextStep = () => {
  return (
    <div className='bg-white'>
          <div className='flex justify-center gap-x-12'>

        <div className='flex justify-center gap-x-3'>
            <div className='flex flex-col gap-y-3'>
            <div className='rounded-lg max-w-[150px] h-[200px]'><img src={image2} className='object-cover rounded-lg max-w-[150px] h-[200px]' /></div>
            <div className='bg-green-500 rounded-lg px-3 py-4'>
                <p className='text-white font-semibold text-center'>7 years of</p>
                <p className='text-white font-thin text-center'>Experiences</p>
            </div>
            </div>

            <div className='flex flex-col gap-y-3'>
            <div className='border rounded-lg px-3 py-4'>
                <p className='text-violet-900 font-bold text-center'>300+</p>
                <p className='text-violet-900 font-thin text-center'>Positive Reviews</p>
            </div>
            <div className='rounded-lg max-w-[150px] h-[200px]'><img src={image3} className='object-cover rounded-lg max-w-[150px] h-[200px]' /></div>
            </div>
        </div>


        <div>
            <p className='font-thin text-sm'>WHAT'S OUR MAIN GOAL</p>
            <p className='font-bold text-violet-900 text-2xl max-w-[550px] mt-1'>Take The Next Step Toward Your Personal Life With TexasPreventiveNetwork</p>
            <p className='font-normal text-gray-800 text-md max-w-[550px] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>

              <div className='flex flex-col gap-y-2 mt-3'>


          <div className='flex gap-x-3'>
            <div className='bg-blue-600 rounded-md px-3 py-3 w-[50px]'><SlGraduation size={25} color='white'/></div>
            <div>
            <p className='font-semibold'>Learn From the Professional</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div>
            </div>

            <div className='flex gap-x-3'>
            <div className='bg-blue-600 rounded-md px-3 py-3 w-[50px]'><MdOutlineSlowMotionVideo size={25} color='white' /></div>
            <div>
            <p className='font-semibold'>Video Tutorial</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div>
            </div>
            </div>


           
        </div>




        </div>
    </div>
  )
}

export default NextStep