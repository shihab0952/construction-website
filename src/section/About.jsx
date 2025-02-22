import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const About = () => {
  return (
    <div
      className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-center gap-[50px]"
      id="about"
    >
      <motion.div
    
        initial={{ rotateX: 90 }} 
        animate={{ rotateX: 0 }} 
        transition={{
          type: "spring",
          duration: 3,
          bounce: 0.8
        }}
      
        className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-600 text-2xl"
        >
          WELCOME TO
        </motion.h1>

        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-4xl font-bold"
        >
          prime Construction
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        <p className="text-3xl italic text-gray-50 mt-[60px]">
          We build durable and modern structures with innovative techniques,
          ensuring quality and timely delivery. Our expert team focuses on
          precision, reliability, and customer satisfaction, delivering
          excellence in residential, commercial, and industrial projects
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
      >
        <p className="text-white text-lg text-justify">
          We specialize in building durable and innovative structures with
          modern construction techniques, ensuring quality and timely project
          completion. Our experienced team focuses on precision, reliability,
          and customer satisfaction in every project. Whether residential,
          commercial, or industrial, we deliver excellence with expert
          craftsmanship and attention to detail.
        </p>

        <motion.button
          variants={zoomInVariants}
          className="bg-yellow-500 border-yellow-500 rounded-3xl hover:bg-white hover:text-black font-bold"
        >
          {" "}
          READ MORE
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;

