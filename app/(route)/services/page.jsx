"use client";
import React from 'react'
import { motion } from "framer-motion";

const page = () => {
  const steps = [
    {
      id: 1,
      icon: 'https://dlifeinteriors.com/wp-content/uploads/2023/06/meeting.svg',
      title: 'Talk to our Interior Designer',
      description: 'Get an Estimate',
    },
    {
      id: 2,
      icon: 'https://dlifeinteriors.com/wp-content/uploads/2023/06/approved.svg',
      title: 'Detailed Drawing',
      description: 'and Approval',
    },
    {
      id: 3,
      icon: 'https://dlifeinteriors.com/wp-content/uploads/2023/06/production.svg',
      title: 'Production at Own',
      description: 'Factories',
    },
    {
      id: 4,
      icon: 'https://dlifeinteriors.com/wp-content/uploads/2023/06/truck.svg',
      title: 'Material Delivery',
      description: '& Execution',
    },
    {
      id: 5,
      icon: 'https://dlifeinteriors.com/wp-content/uploads/2023/06/deal.svg',
      title: 'On Time Project',
      description: 'Hand Over',
    },
  ];
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100">
      <div className="flex flex-row items-center justify-between w-full max-w-5xl gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex flex-col items-center text-center relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className="border-black bg-blue-700 rounded-full shadow-lg p-4">
              <motion.img
                src={step.icon}
                alt={step.title}
                className="w-16 h-16 bg-white"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {step.title}
            </h3>
            <h3 className="mt-1 text-lg font-semibold text-gray-800">
              {step.description}
            </h3>
            {index < steps.length - 1 && (
              <motion.div
                className="absolute right-[-30px] top-[50%] translate-y-[-50%] w-12 h-0.5 bg-blue-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
              >
                <motion.div
                  className="w-2 h-2 bg-blue-500 absolute top-[-4px] right-[-6px] rotate-45"
                  style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      
    </div>

    
  )
}

export default page