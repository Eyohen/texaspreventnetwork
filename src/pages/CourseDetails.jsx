import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import angermanage from '../assets/angmnge.jpg'
import { TbCircleMinus, TbCirclePlus } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import man from '../assets/man.jpg'
import { GoDotFill } from "react-icons/go";

const CourseDetails = () => {
    const [toggle, setToggle] = useState(true);
    const [toggle2, setToggle2] = useState(true);
    const [toggle3, setToggle3] = useState(true);
  
    const handleToggle = () => {
      setToggle(!toggle);
    };
  
    const handleToggle2 = () => {
      setToggle2(!toggle2);
    };
  
    const handleToggle3 = () => {
      setToggle3(!toggle3);
    };
  return (
    <>
    <Navbar />
    <div className='relative'>

        <div className='bg-blue-500 w-full py-2'>
          <p className='text-white text-2xl font-semibold pt-10 pl-64'>Anger Management</p>
          <p className='text-white max-w-[900px] pl-64'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <div className='flex justify-start gap-x-2 pt-2 items-center pl-64'>
            <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' /> <FaStar color='orange' /> <p className='text-white font-medium'>Rate 4.8 by 345,000 respondes</p>   
            </div>
            <div className=' py-2 pl-64'>
                <div className='flex gap-x-3'>
                <img src="https://www.shutterstock.com/shutterstock/photos/1865153395/display_1500/stock-photo-portrait-of-young-smiling-woman-looking-at-camera-with-crossed-arms-happy-girl-standing-in-1865153395.jpg" className='w-12 h-12 rounded-full object-cover'  />
                <div>
                <p className='text-white text-xl font-semibold'>Andrew Iwe</p>
                <p className='font-normal text-white'>Counsellor</p>
                </div>
                </div>
            </div>
        </div>

       



<div>

  <div className=' px-64'>
  <p className='font-semibold text-2xl mt-16'>Overview</p>
  <p className='font-semibold text-2xl mt-9'>Course Description</p>
  <p className='text-gray-600 max-w-[800px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  <p className='font-semibold text-2xl mt-9'>Certification</p>
  <p className='text-gray-600 max-w-[800px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  <p className='font-semibold text-2xl mt-9'>Learning Outcomes</p>
<p className='flex items-center gap-x-2'><GoDotFill />Over 37 lectures and 55.5 hours of content!</p>
<p className='flex items-center gap-x-2'><GoDotFill />Information packed practical training starting from basics to advanced testing techniques.</p>
<p className='flex items-center gap-x-2'><GoDotFill />Best suitable for beginners to advanced level users and who learn faster when demonstrated.</p>
<p className='flex items-center gap-x-2'><GoDotFill />Practical assignments at the end of every session.</p>
<p className='flex items-center gap-x-2'><GoDotFill />Practical learning experience with live project work and examples.</p>
  </div>

  </div>

  <div className='absolute border rounded-md mt-[-700px] bg-white right-0 mx-16' >
  <img src={angermanage} className='w-[400px] h-[250px] rounded-md' />

  <p className='px-4 font-bold text-xl'>$23.00</p>

  <div className='px-4 py-4'><button className='text-white text-xl py-2 rounded-md bg-blue-600 w-full mx-auto'>Buy Now</button></div>

  <p className='px-4 font-semibold'>Course Features</p>

  <p className='px-4'>Lectures : 8</p>
  <p className='px-4'>Quizzes : 4 hours</p>
  <p className='px-4'>Duration : 4 hours</p>
  <p className='px-4'>Language : English</p>
  <p className='px-4'>Test : Yes</p>
  <p className='mb-4'></p>



        </div>
        

        <div className='mb-12'></div>
        </div>
    </>
  )
}

export default CourseDetails