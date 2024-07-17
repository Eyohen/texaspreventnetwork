import React from 'react'
import umbrella from '../assets/umbrella.jpeg'
import { FaLongArrowAltRight } from "react-icons/fa";

const BlogCard = () => {
  return (
    <div className=''>
        <img src={umbrella} className='object-cover max-w-[350px] min-w-[350px] h-[180px]' />

        <p className='font-bold text-[22px] py-2 w-[320px]'>The Unseen of spending three years at Pixelgrade</p>
        <p className='text-gray-500 w-[320px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

        <div className='flex items-center py-3'>
        <p className='font-semibold min-w-[150px]'>Continue Reading </p><div className='mt-1'><FaLongArrowAltRight /></div>
        </div>

    </div>
  )
}

export default BlogCard