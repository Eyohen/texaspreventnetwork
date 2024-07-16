import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import angermanage from '../assets/angermanage.jpg'
import { TbCircleMinus, TbCirclePlus } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import man from '../assets/man.jpg'

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
    <div>
        <p className='text-2xl font-semibold mt-6 text-center'>Course Details</p>

       

<div className='flex justify-center gap-x-24 mt-12'>

        <div className=''>
        <p className='text-2xl font-semibold px-6'>Topics:</p>
        <div className="px-6 pt-4">
        <button onClick={handleToggle} className="">
          {toggle ? (
            <div className="flex gap-x-4 items-center py-2">
                <TbCirclePlus color="#00b300" size={24} />
              <p className="text-xl font-medium ">
                Introduction 1
              </p>
              
            </div>
          ) : (
            <div className="py-6">
              <div className="flex gap-x-4 items-center">
              <TbCircleMinus color="#00b300" size={24} />
                <p className="text-xl font-medium text-left">
                Introduction 1
                </p>
            
              </div>

              <p className="text-gray-300 text-left max-w-[250px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          )}
        </button>
      </div>

      <div className="px-6">
        <button onClick={handleToggle2} className="">
          {toggle2 ? (
            <div className="flex gap-x-4 py-2">
                    <TbCirclePlus color="#00b300" size={24} />
              <p className="text-xl font-medium text-left">
            Introduction 2
              </p>
          
            </div>
          ) : (
            <div className="py-6">
              <div className="flex gap-x-4 items-center">
              <TbCircleMinus color="#00b300" size={24} />
                <p className="text-xl font-medium text-left">
                Introduction 2
                </p>
             
              </div>

              <p className="text-gray-300 text-left max-w-[250px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          )}
        </button>
      </div>

      <div className="px-6">
        <button onClick={handleToggle3} className="">
          {toggle3 ? (
            <div className="flex gap-x-4 py-2">
                    <TbCirclePlus color="#00b300" size={24} />
              <p className="text-xl font-medium text-left">
              Introduction 3
              </p>
            </div>
          ) : (
            <div className=" py-6">
              <div className="flex gap-x-4 items-center">
              <TbCircleMinus color="#00b300" size={24} />
                <p className="text-xl font-medium text-left">
                Introduction 3
                </p>
              
              </div>

              <p className="text-gray-300 text-left max-w-[250px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          )}
        </button>
      </div>
      </div>



        <div>
        <img src={angermanage} className='w-[700px] h-[400px] rounded-md' />
        <p className='text-3xl font-semibold pt-3'>Anger  Management </p>
        <div className='flex justify-start gap-x-2 pt-4 items-center'>
            <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' /> <FaStar color='orange' /> <p className='text-gray-600 font-medium'>Rate 4.8 by 345,000 respondes</p>
            </div>
<p className='max-w-[700px] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

            <div>
                <div className='flex mt-4'>
                <img src={man} className='w-24' />
                <div>
                <p className='text-xl font-semibold'>Andrew Iwe</p>
                <p className='font-semibold text-green-600'>Counsellor, course methodologist</p>
                </div>
                </div>
            </div>


        </div>

        </div>
        

        <div className='mb-12'></div>
        </div>
    </>
  )
}

export default CourseDetails