import React, {useState} from 'react'
// import logo from "../assets/LOGO-BLACK1.png"
import { CiLogout } from "react-icons/ci";
import { FiUsers,FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoReceiptOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoChatboxOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
import { TbCategory } from "react-icons/tb";
import { GoPackage } from "react-icons/go";
import { PiNotepad } from "react-icons/pi";
import { IoTrophyOutline } from "react-icons/io5";
import { BiPurchaseTag } from "react-icons/bi";
import { PiSquare, PiSquareFill } from "react-icons/pi";
// import { PiSquareFill } from "react-icons/pi";


const CourseSide = () => {
    const [isToggled, setIsToggled] = useState(false)
    const [isToggled2, setIsToggled2] = useState(false)
    const [isToggled3, setIsToggled3] = useState(false)
    const [isToggled4, setIsToggled4] = useState(false)

//   const { user, logout } = useAuth();
//   const [isOpen, setIsOpen] = useState(false)

const handleToggle = () => {
    setIsToggled(true);
    setIsToggled2(false);
    setIsToggled3(false);
    setIsToggled4(false);
  }

  const handleToggle2 = () => {
    setIsToggled2(true);
    setIsToggled(false);
    setIsToggled3(false);
    setIsToggled4(false);
  }

  const handleToggle3 = () => {
    setIsToggled3(true);
    setIsToggled2(false);
    setIsToggled(false);
    setIsToggled4(false);
  }

  const handleToggle4 = () => {
    setIsToggled4(true);
    setIsToggled(false);
    setIsToggled2(false);
    setIsToggled3(false);
  }

//   console.log("sidebar", user)
  return (
    <div className='fixed top-0 left-0 bottom-0 h-[100vh] bg-white'>
    <div className='flex justify-center h-screen px-[30px]'>
        {/* <div>
        <img src={logo} className='w-9 h-9' />
        </div> */}

            <div>
        <p className='text-blue-500 font-semibold text-xl mt-32'>Category</p>

        <div className='flex gap-x-3 items-center px-2 mt-6 rounded'>
        <div className="" onClick={handleToggle}>
        {isToggled ? (
            <PiSquareFill size={25} color='#818589' />
        ) : (
            <PiSquare size={25} color='#818589' />
        )}
       </div>
        <p className='py-1 text-center '>Parenting</p>
      </div> 


       <div className='flex gap-x-3 items-center px-2 mt-6 rounded'>
       <div className="" onClick={handleToggle2}>
        {isToggled2 ? (
            <PiSquareFill size={25} color='#818589' />
        ) : (
            <PiSquare size={25} color='#818589' />
        )}
       </div>
        <p className='py-1 text-center'>Anger Management</p>
        </div>

       <div className='flex gap-x-3 items-center px-2 mt-6 rounded'>
       <div className="" onClick={handleToggle3}>
        {isToggled3 ? (
            <PiSquareFill size={25} color='#818589' />
        ) : (
            <PiSquare size={25} color='#818589' />
        )}
       </div>
        <p className='py-1 text-center'>Alcohol Addiction</p>
        </div>


        <div className='flex gap-x-3 items-center  px-2 mt-6 rounded'>
        <div className="" onClick={handleToggle4}>
        {isToggled4 ? (
            <PiSquareFill size={25} color='#818589' />
        ) : (
            <PiSquare size={25} color='#818589' />
        )}
       </div>
        <p className='py-1 text-center'>Domestic Violence</p>
        </div>

        {/* <Link to={'/blogtable'}><div className='flex gap-x-3 items-center hover:bg-blue-200  px-2 mt-6 rounded'>
        <PiNotepad />
        <p className='py-1 text-center'>Blog</p>
        </div></Link>

        <Link to={'/settings'}><div className='flex gap-x-3 items-center hover:bg-blue-200  px-2 mt-6 rounded'>
        <IoSettingsOutline className=''/>
        <p className='py-1 text-center'>Settings</p>
        </div></Link> */}

        {/* <div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <IoChatboxOutline className=''/>
        <p className='hover:bg-[#F3D8A7] py-1 text-center'>Contact Support</p>
        </div> */}
{/* 
        <p className='text-blue-500 font-semibold mt-9 '>Profile</p>


        <div className='flex gap-x-5 items-center mt-9 '>
        <div className='bg-blue-700 text-white rounded-full w-11 h-11 flex justify-center text-2xl items-center'>S</div>
        <div>
            <p className='font-semibold text-lg'>Simisola,Test</p>
            <p className='font-light text-gray-400'>simisola@gmail.com</p>
        </div>
        </div>

        <Link to={'/login'}><div className='flex items-center gap-x-3 mt-9 justify-center'>
        <CiLogout />
        <p>Log out</p>
        </div></Link> */}

        </div>

        </div>
    </div>
  )
}

export default CourseSide
