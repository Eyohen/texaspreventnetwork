import React from "react";
// import Check from "../assets/landingpage/check.svg";
// import World from "../assets/landingpage/worldSearch.svg";
// import Community from "../assets/landingpage/communityOwners.svg"
import { useNavigate } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";
import man from '../assets/man.jpg'

// color="#00b300" size={24} 

const HowItWorks = () => {
  const navigate = useNavigate()


  return (
    <div className="py-9 px-[4px] md:px-[180px] font-nunito bg-green-200 mt-12">
      <p className="text-4xl font-bold text-center">How Does It Work</p>
     

      <div className="flex flex-col md:flex-row items-center justify-between gap-x-9 mt-9 px-4">
        <div>
     
          <div className="flex items-start gap-x-2 mt-10">
    
            <BsCheckCircleFill color="#00b300" size={24} />
            <div className="font-normal ">
              <p className="font-semibold text-xl">8 on-line lectures with a teacher</p>
              <p className="max-w-[450px] font-semibold text-lg">Praesent semper feugiat nibh sed. Sit amet porttitor eget dolor morbi non. Amet nisl purus in mollis nunc sed id semper</p>
         
            </div>
          </div>

          <div className="flex items-start gap-x-2 mt-10">
          <BsCheckCircleFill color="#00b300" size={24} />
            <div className="font-normal ">
              <p className="font-semibold text-xl">A huge library of educational videos that you can watch unlimited</p>
             
            </div>
          </div>

          <div className="flex items-start gap-x-2 mt-10">
          <BsCheckCircleFill color="#00b300" size={24} />
            <div>
              <p className="max-w-[450px] font-semibold text-xl">Chat coordination with your teacher, for feedback and answers to your questions</p>
             
            </div>
          </div>

          <div className="flex justify-center">
          <button onClick={()=> navigate('/freebrowsecommunity')}  className="bg-[#00b300] text-white px-6 py-2 rounded-full mt-9">Explore Courses</button>
          </div>


        </div>

        <div className=" bg-white py-12 px-9 shadow-xl rounded-2xl">

            <div className="rounded-full w-[300px] border"><img src={man} className="rounded-full object-cover" /></div>

            <p className="text-center pt-4">Andrew Iwe</p>
            <p className="text-center">CEO, TPN</p>
            <p className="text-center max-w-[350px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>

       <div>
        
          
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
