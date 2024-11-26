"use client"
import { motion } from "framer-motion";

import CountUp from "react-countup"

const stats =[
    {
        num:720,
        text:"Projects Committed"
    },
    {
        num:520,
        text:"Happy Homes"
    },
    
    {
        num:60 ,
        text:"Cities"
    },
  
    {
        num:12,
        text:"Countries"
    }
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 bg-slate-300 mt-3">
      <h1 className="text-3xl font-bold sm:text-4xl text-center text-sky-600 mb-6">
        Why Choose Us
      </h1>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 justify-center max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center gap-2 bg-black shadow-lg rounded-lg p-4 transform transition duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <CountUp
                  end={item.num}
                  duration={3}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold text-sky-600"
                />
              </motion.div>
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } text-lg leading-snug text-gray-700`}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats