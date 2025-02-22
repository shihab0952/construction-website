import React from 'react'
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { clients} from "../../export";


const Testimonial = () => {
  return (
    <div id="clients" className="w-full  bg-white">
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
        TESTIMONIALS
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-black text-[40px]"
        >
         WHAT OUR CLIENST SAY...
        </motion.h1>

        {/* services mapping */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="lg:w-full w-[90%] grid lg:grid-cols-3 grid-cols-1 items-center justify-center  gap-[35px] mt-[30px] "
        >
  
{
    clients.map((item, index) =>(
    <div key={index} className='flex flex-col  shadow-2xl justify-center items-center gap-5 border-2 border-yellow-500 rounded-mg p-6 hover:transform transition duration-500 hover:scale-110 hover:shadow-amber-950'>
        <div>
            <img src={item.image} className='size-[80px] bg-yellow-500 hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer'/>
            <h1 className='text-2xl font-bold uppercase'>{item.name}</h1>
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

export default Testimonial
