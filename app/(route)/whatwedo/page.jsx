
"use client";
import React, { useState } from 'react';

import { motion } from "framer-motion";
import Image from "next/image";

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

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const modalVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
  };
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
      <div>

      </div>
{/* 1 */}
      <div className="flex flex-col sm:flex-row items-center justify-center py-8 bg-gray-200 px-4">
        {/* Left Section:  Image */}
        <div className="sm:w-1/2 text-center sm:text-left">
          <Image className="border rounded-3xl shadow-lg"
            src='/DL1.jpg'
            alt="error"
            width={650}
            height={800}
          />
        </div>

        {/* Right Section: Description */}
        <div className="sm:w-1/2 mt-6 sm:mt-0 sm:ml-8 text-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4">Design</h2>
          <p className="mb-4">
            Project is allocated to a designer with clear instructions from the business development manager who initially deals with the client.
            Study the requirements in detail: In discussion with the client, with the help of floor plan, designer understands the space and requirements carefully.
          </p>
          <p className="mb-4">
            Actual measurements and drawing: Designer visits the house/ flat and takes actual measurement of the space as per the requirements discussed.          </p>
          <p className="mb-4">
            Detailed drawing is prepared and sent to the client.
          </p>
          <p className="mb-4">
            Finalization of drawings in mutual agreement. Drawings sent to the factory for production.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700">
            Meet Our Interior Designer
          </button>
        </div>
      </div>
{/* 2 */}
      <div className="flex flex-col sm:flex-row items-center justify-center py-8 bg-gray-200 px-4">
        {/* Left Section:  Description */}
        <div className="sm:w-1/2 sm:mr-8 text-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4">Production</h2>
          <p className="mb-4">
            Clarifications and confirmations made between factory manager and designer.
          </p>
          <p className="mb-4">
            A revisit to the house/ flat is made to repeat the actual measurements to confirm it with drawings received in the factory.
          </p>
          <p className="mb-4">
            Production is scheduled on a date in agreement with client, as per confirmation of site status by project manager.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700">
            Get Customized Home Interior
          </button>
        </div>

        {/* Right Section:Image */}
        <div className="sm:w-1/2 text-center sm:text-right mt-6 sm:mt-0">
          <Image
            className="border rounded-3xl shadow-lg"
            src="/factory.jpg"
            alt="error"
            width={650}
            height={800}
          />
        </div>
      </div>

{/* 3 */}

      <div className="flex flex-col sm:flex-row items-center justify-center py-8 bg-gray-200 px-4">
        {/* Left Section:  */}
        <div className="sm:w-1/2 text-center sm:text-left">
          <Image className="border rounded-3xl shadow-lg"
            src='/home.jpg'
            alt="error"
            width={650}
            height={800}
          />
        </div>

        {/* Right Section: Description */}
        <div className="sm:w-1/2 mt-6 sm:mt-0 sm:ml-8 text-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4">Execution</h2>
          <p className="mb-4">
            Project implementation is planned well in advance by the team head. He arranges for the installation immediately upon delivery of products at site.
          </p>
          <p className="mb-4">
            We have our own logistics team to provide easy and safe transportation for furnishings to site.
          </p>
          <p className="mb-4">
            Number of days expected for installation as per the volume of work is informed to client.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700">
          Plan an Interior Project    
             </button>
        </div>
      </div>
{/* 4 */}
      <div className="flex flex-col sm:flex-row items-center justify-center py-8 bg-gray-200 px-4">
        {/* Left Section:  Description */}
        <div className="sm:w-1/2 sm:mr-8 text-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4">Project Handover</h2>
          <p className="mb-4">
            Clarifications and confirmations made between factory manager and designer.
          </p>
          <p className="mb-4">
            A revisit to the house/ flat is made to repeat the actual measurements to confirm it with drawings received in the factory.
          </p>
          <p className="mb-4">
            Production is scheduled on a date in agreement with client, as per confirmation of site status by project manager.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700" onClick={toggleModal}>
          Deal Directly with the Company         
           </button>
        </div>

        {/* Right Section:  Image */}
        <div className="sm:w-1/2 text-center sm:text-right mt-6 sm:mt-0">
          <Image
            className="border rounded-3xl shadow-lg"
            src="/projecthandover.jpg"
            alt="error"
            width={650}
            height={800}
          />
        </div>
      </div>
      
     
            {isOpen && (
                <motion.div
                    className="modal"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={modalVariants}
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
                        width: '300px',
                    }}
                >
                    <h2>Enter Your Details</h2>
                    <form>
                        <div style={{ marginBottom: '10px' }}>
                            <label>Name:</label>
                            <input 
                                type="text" 
                                placeholder="Enter your name" 
                                style={{ width: '100%', padding: '5px', marginTop: '5px' }} 
                                required 
                            />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <label>Email ID:</label>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                style={{ width: '100%', padding: '5px', marginTop: '5px' }} 
                                required 
                            />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <label>Mobile Number:</label>
                            <input 
                                type="tel" 
                                placeholder="Enter your mobile number" 
                                style={{ width: '100%', padding: '5px', marginTop: '5px' }} 
                                required 
                            />
                        </div>

        

                        <div style={{ marginBottom: '10px' }}>
                            <label>Location:</label>
                            <input 
                                type="text" 
                                placeholder="Enter location" 
                                style={{ width: '100%', padding: '5px', marginTop: '5px' }} 
                                required 
                            />
                        </div>

                        <button 
                            type="submit" 
                            style={{
                                background: '#4CAF50',
                                color: 'white',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Submit
                        </button>
                        <button 
                            type="button" 
                            onClick={toggleModal} 
                            style={{
                                background: 'red',
                                color: 'white',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                marginLeft: '10px',
                            }}
                        >
                            Close
                        </button>
                    </form>
                </motion.div>
            )}
        

    </div>


  )
}

export default page