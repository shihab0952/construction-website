import React from "react";
import heroimg from "../assets/heroimg.png";
import backgroundImage from "../assets/homeimg.webp";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-8"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-[50px]"
        >
          WE ARE BUILDERS
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white  uppercase text-[50px] font-bold"
        >
          We will build your dream
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        <p className="text-white text-[20px]">
          We build your dream home or office using modern construction
          techniques. We work with trust and a commitment to completing projects
          on time. Our experienced team provides you with top-notch service and
          reliability, with a commitment to quality and precision. We ensure
          every project is built to last and exceed your expectations.
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="flex justify-center items-center gap-5"
        >
          <motion.button
            variants={zoomInVariants}
            className="bg-yellow-600 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold uppercase cursor-pointer"
          >
            Read More
          </motion.button>
          <motion.button
            variants={zoomInVariants}
            className="border-white hover:border-yellow-600 hover:text-yellow-600 border-2 rounded-lg text-white font-bold cursor-pointer"
          >
            Read More
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="w-[40%] felx flex-col justify-end items-end">
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          src={heroimg}
          alt="heroimg"
          className=" lg:h-[600px] h-[300px] lg:mb-[-100px] "
        />
      </div>
    </div>
  );
};

export default Hero;
