import React, { useState } from "react";
import { TbCircleMinus, TbCirclePlus } from "react-icons/tb";

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

      <div className="">
        <button onClick={handleToggle} className="w-full">
          {toggle ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium ">
                How can I learn from Texas Preventive network?
              </p>
              <TbCirclePlus color="#00b300" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                How can I learn from Texas Preventive network?
                </p>
                <TbCircleMinus color="#00b300" size={24} />
              </div>

              <p className="text-gray-300 text-left">
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
        <button onClick={handleToggle2} className="w-full">
          {toggle2 ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium text-left">
              What makes TPN different from other community rehabilitation platforms?
              </p>
              <TbCirclePlus color="#00b300" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                What makes TPN different from other community rehabilitation platforms?
                </p>
                <TbCircleMinus color="#00b300" size={24} />
              </div>

              <p className="text-gray-300 text-left">
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
        <button onClick={handleToggle3} className="w-full">
          {toggle3 ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium text-left">
              Can I target specific studies in TPN?
              </p>
              <TbCirclePlus color="#00b300" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                Can I target specific studies in TPN?
                </p>
                <TbCircleMinus color="#00b300" size={24} />
              </div>

              <p className="text-gray-300 text-left">
                Pigeonhire connects your business with targeted communities and
                professionals across the globe, enabling you to expand yur
                reach, engage with key audiences, and foster strategic
                partnerships. 
              </p>
            </div>
          )}
        </button>
      </div>

      

      {/* <TbCircleMinus /> */}
    </div>
  );
};

export default Faq;
