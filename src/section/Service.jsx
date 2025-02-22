import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { allservices } from "../../export";

const Service = () => {
  return (
    <div id="services" className="w-full  bg-white">
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
          SPECIAL OFFERS
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-black text-[40px]"
        >
          OUR BEST SERVICES
        </motion.h1>

        {/* services mapping */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-3 grid-cols-1 items-center justify-center  gap-[20px] mt-[30px]"
        >
          {allservices.map((item, index) => (
            <motion.div
              variants={zoomInVariants}
              className="flex justify-center items-start gap-5 p-8"
              key={index}
            >
              <motion.img
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                }}
                src={item.icon}
                alt="icon"
                className="w-[70px] border-2 border-yellow-400 hover:bg-yellow-400 rounded-lg p-2"
              />
              <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="text-xl font-bold text-black">{item.title}</h1>
                <p className="text-[18px]">{item.about}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Service;
