"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    num: 720,
    text: "Projects Committed",
  },
  {
    num: 520,
    text: "Happy Homes",
  },
  {
    num: 60,
    text: "Cities",
  },
  {
    num: 12,
    text: "Countries",
  },
];

const Stats = () => {
  return (
    <section className="pt-6 pb-12 xl:py-16 bg-slate-300 mt-3">
      <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl text-center text-sky-600 mb-8">
        Why Choose Us
      </h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 justify-center max-w-[90vw] lg:max-w-[75vw] mx-auto">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center gap-3 bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105"
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
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-sky-600"
                />
              </motion.div>
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } text-sm sm:text-base md:text-lg leading-snug text-gray-700`}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
