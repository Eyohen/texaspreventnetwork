import React, {useState} from 'react'
import { RiArrowDownSFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchOutline,IoEllipsisVertical,IoChevronDownOutline } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";

const Navbar = () => {
    const [open, setOpen] = useState();
    const [opencategory, setOpenCategory] = useState(false);
    const [openPages, setOpenPages] = useState(false);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate()
  
    const handleOpen = () => {
      setOpen((prev) => !prev);
    };

    const handleOpenCategory = () => {
      setOpenCategory((prev) => !prev);
    };

    const handleOpenPages = () => {
      setOpenPages((prev) => !prev);
    };
  
    const handleSearch = (e) => {
      setSearch(e.target.value);
    };
  

  return (
    <div className='px-9 py-4 bg-white justify-evenly flex items-center'>
        <Link to={'/'}><p className='text-2xl '>TPNetwork</p></Link>

        <div className='flex items-center gap-x-4'>


      <div onClick={handleOpenCategory} className='cursor-pointer'>
        <div className="flex gap-x-2 items-center">
          <RiMenuFill size={20} />
          <p className='font-medium text-xl'>Categories</p>
        </div>
    

         {opencategory && <div className='border bg-white py-6 px-4 absolute rounded-md z-50 mt-4 right-1/2 transform -translate-x-1/2'>
            <p className='px-4 py-2 rounded-xl text-lg cursor-pointer'>Parenting</p>
            <p className='px-4 py-2 rounded-xl text-lg'>Anger Management</p>
            <p className='px-4 py-2 rounded-xl text-lg'>Alcohol Addiction</p>
            <p className='px-4 py-2 rounded-xl text-lg'>Drug Addiction</p>
            <p className='px-4 py-2 rounded-xl text-lg'>Domestic Violence</p>
         </div>  }




        </div>









        <div class="relative ">
    <div class="absolute inset-y-0 left-0 flex items-center px-2">
      <label className="px-2 py-1 text-xl font-mono cursor-pointer text-gray-400 text-left"><IoSearchOutline /></label>
    </div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
          className="px-11 py-2 w-[450px] border border-gray-400 rounded"
        />
          </div>

{/* 
        <Link to={'/aboutus'}><p className='font-semibold text-xl'>About us</p></Link>

        <Link to={'/contactus'}><p className='font-semibold text-xl'>Contact us</p></Link> */}

        </div>
        
        <div onClick={handleOpenPages} className='cursor-pointer relative'>
        <div className='flex items-center gap-x-1'>
        <p className='font-medium'>Pages</p>
        <IoChevronDownOutline />
        </div>

        {openPages && <div className='border bg-white py-6 px-4 min-w-[180px] absolute rounded-md z-50 mt-4 left-1/2 transform -translate-x-1/2'>
            <Link to={'/courses'}><p className='px-4 py-2 rounded-xl text-lg cursor-pointer'>Courses</p></Link>
            <p className='px-4 py-2 rounded-xl text-lg'>Blog</p>
            <p className='px-4 py-2 rounded-xl text-lg'>About Us</p>
            <p className='px-4 py-2 rounded-xl text-lg'>Contact</p>
            <p className='px-4 py-2 rounded-xl text-lg'>FAQs</p>
         </div>  }

         </div>

        <div className="relative">
        <div className='flex items-center gap-x-2'>

        <p onClick={handleOpen} className='font-semibold text-xl cursor-pointer'>Henry</p>
        <RiArrowDownSFill size={23} onClick={handleOpen} /></div>

        {open && <div className="border border-blue-700 bg-white px-12 py-6 z-50 absolute rounded-lg mt-4 left-1/2 transform -translate-x-1/2">
            <div className='text-white text-3xl bg-blue-800 rounded-full py-2 text-center'>H</div>
         <p className="text-blue-600 text-xl font-semibold min-w-[95px] text-center pt-4">Henry Eyo</p>
         <p className="text-blue-900 text-xl font-semibold min-w-[95px] pt-2">henry.eyo2@gmail.com</p>
         <p className="bg-blue-800 text-xl font-semibold text-white text-center rounded-xl min-w-[95px] mt-4">Logout</p>
        {/* {user ? (<p onClick={logout} className="text-[#F08E1F] cursor-pointer">Logout</p>) : (<p onClick={()=> navigate('/login')} className="text-[#F08E1F] cursor-pointer">Login</p>)}  */}
         </div> }
        </div>

    </div>
  )
}

export default Navbar