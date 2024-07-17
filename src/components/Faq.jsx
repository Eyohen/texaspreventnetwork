import React, { useState } from "react";
// import { TbCircleMinus, TbCirclePlus } from "react-icons/tb";
import { FiPlus, FiMinus } from "react-icons/fi";


const Faq = () => {
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

  // const handleToggle2 = () => {
  //     setToggle2(!toggle2)
  // }

  // const handleToggle3 = () => {
  //     setToggle3(!toggle3)
  // }

  return (
    <div className="bg-white px-4 mx-auto lg:px-[300px] py-9 font-nunito mt-9">
      <p className="text-4xl font-bold text-center md:tracking-wide">
        Frequently asked questions
      </p>

<div className="flex flex-col gap-y-3 mt-6">

      <div className="">
        <button onClick={handleToggle} className="w-full bg-gray-200 rounded-md">
          {toggle ? (
            <div className="flex justify-between  space-x-[94px] px-2 py-4">
              <p className="text-xl font-medium ">
                How can I learn from Texas Preventive network?
              </p>
              <FiPlus size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                How can I learn from Texas Preventive network?
                </p>
                <FiMinus size={24} />
              </div>

              <p className="text-gray-500 text-left">
                TPN connects your business with targeted communities and
                professionals across the globe, enabling you to expand yur
                reach, engage with key audiences, and foster strategic
                partnerships. 
              </p>
            </div>
          )}
        </button>
      </div>

      <div className="">
        <button onClick={handleToggle2} className="w-full bg-gray-200 rounded-md">
          {toggle2 ? (
            <div className="flex justify-between  space-x-[94px] px-2 py-4">
              <p className="text-xl font-medium text-left">
              What makes TPN different from other community rehabilitation platforms?
              </p>
              <FiPlus size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                What makes TPN different from other community rehabilitation platforms?
                </p>
                <FiMinus size={24} />
              </div>

              <p className="text-gray-500 text-left">
                TPN connects your business with targeted communities and
                professionals across the globe, enabling you to expand yur
                reach, engage with key audiences, and foster strategic
                partnerships. 
              </p>
            </div>
          )}
        </button>
      </div>

      <div className="">
        <button onClick={handleToggle3} className="w-full bg-gray-200 rounded-md">
          {toggle3 ? (
            <div className="flex justify-between  space-x-[94px] px-2 py-4">
              <p className="text-xl font-medium text-left">
              Can I target specific studies in TPN?
              </p>
              <FiPlus size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                Can I target specific studies in TPN?
                </p>
                <FiMinus size={24} />
              </div>

              <p className="text-gray-500 text-left">
                Pigeonhire connects your business with targeted communities and
                professionals across the globe, enabling you to expand yur
                reach, engage with key audiences, and foster strategic
                partnerships. 
              </p>
            </div>
          )}
        </button>
      </div>

      </div>

      {/* <TbCircleMinus /> */}
    </div>
  );
};

export default Faq;
