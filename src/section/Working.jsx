import React from 'react'
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { allservices, planning } from "../../export";

const Working = () => {
  return (
    <div id="working" className="w-full  bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}  
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
         Step by Step
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-black text-[40px]"
        >
          How it's working!
        </motion.h1>

        {/* services mapping */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-4 grid-cols-1 items-center justify-center  gap-[20px] mt-[30px] "
        >
  
{
    planning.map((item, index) =>(
    <div key={index} className='flex flex-col  shadow-2xl justify-center items-center gap-5 border-2 border-yellow-500 rounded-mg p-6 hover:transform transition duration-500 hover:scale-110 hover:shadow-amber-950'>
        <div>
            <item.icon className='size-[80px] bg-yellow-500 hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer'/>
            <h1 className='text-2xl font-bold uppercase'>{item.title}</h1>
            <p className='text-xl text-center text-gray-600'>{item.about}</p>
        </div>
    </div>
    ))
}
          
        </motion.div>
      </motion.div>
    </div>
  )
}  

export default Working
