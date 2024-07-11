import React, {useState} from 'react'
import { RiArrowDownSFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState();
    const [data, setData] = useState([]);
    const navigate = useNavigate()
  
    const handleOpen = () => {
      setOpen((prev) => !prev);
    };
  


  return (
    <div className='px-9 py-4 bg-green-200 justify-evenly flex items-center'>
        <p className='text-2xl '>Texas Preventive Network</p>

        <div className='flex gap-x-9'>
        <p className='font-semibold text-green-800 text-xl'>Courses</p>

        <p className='font-semibold text-green-800 text-xl'>About us</p>

        <p className='font-semibold text-green-800 text-xl'>Contact us</p>

        </div>
        

        <div className="relative">
        <div className='flex items-center gap-x-2'>

        <p onClick={handleOpen} className='font-semibold text-green-800 text-xl cursor-pointer'>Henry</p>
        <RiArrowDownSFill size={23} onClick={handleOpen} /></div>

        {open && <div className="border border-green-700 bg-white px-12 py-6 z-50 absolute rounded-lg mt-4 left-1/2 transform -translate-x-1/2">
            <div className='text-white text-3xl bg-green-800 rounded-full py-2 text-center'>H</div>
         <p className="text-green-600 text-xl font-semibold min-w-[95px] text-center pt-4">Henry Eyo</p>
         <p className="text-green-900 text-xl font-semibold min-w-[95px] pt-2">henry.eyo2@gmail.com</p>
         <p className="bg-green-800 text-xl font-semibold text-white text-center rounded-xl min-w-[95px] mt-4">Logout</p>
        {/* {user ? (<p onClick={logout} className="text-[#F08E1F] cursor-pointer">Logout</p>) : (<p onClick={()=> navigate('/login')} className="text-[#F08E1F] cursor-pointer">Login</p>)}  */}
         </div> }
        </div>

    </div>
  )
}

export default Navbar