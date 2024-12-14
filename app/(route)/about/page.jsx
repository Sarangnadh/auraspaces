"use client"
import React from 'react'
import { motion } from 'framer-motion';

const page = () => {
  return (
    <div>

<div className="bg-gray-100 text-gray-800 p-6 sm:p-10">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-extrabold text-indigo-600">About Aura Spaces</h1>
        <p className="mt-3 text-lg">Where Style Meets Space</p>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white shadow-md p-6 rounded-lg mb-6"
      >
        <h2 className="text-2xl font-bold text-indigo-500 mb-4">Who We Are</h2>
        <p>
          Aura Spaces was founded on the principle of delivering cutting-edge interior design solutions
          that bring visions to life. Our team of skilled designers, architects, and project managers
          works passionately to create spaces that inspire and captivate.
        </p>
      </motion.div>

      {/* What Sets Us Apart Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white shadow-md p-6 rounded-lg mb-6"
      >
        <h2 className="text-2xl font-bold text-indigo-500 mb-4">What Sets Us Apart</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Creative Excellence:</strong> Designs inspired by global trends and personalized for you.</li>
          <li><strong>Expert Team:</strong> Alumni of the prestigious Aura Institute of Fashion Technology.</li>
          <li><strong>Client-Centric Approach:</strong> Your satisfaction is our priority.</li>
          <li><strong>Sustainability:</strong> Eco-friendly designs that promote style and sustainability.</li>
        </ul>
      </motion.div>

      {/* Our Connection to Aura Institute Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-white shadow-md p-6 rounded-lg mb-6"
      >
        <h2 className="text-2xl font-bold text-indigo-500 mb-4">Our Connection to Aura Institute</h2>
        <p>
          Aura Spaces takes immense pride in being deeply rooted in the legacy of the Aura Institute of
          Fashion Technology. Many of our employees are alumni of the institute, blending academic
          excellence with practical experience.
        </p>
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-white shadow-md p-6 rounded-lg mb-6"
      >
        <h2 className="text-2xl font-bold text-indigo-500 mb-4">Our Services</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Residential Design:</strong> Personalized designs for homes.</li>
          <li><strong>Commercial Design:</strong> Transforming offices and retail spaces.</li>
          <li><strong>Customized Solutions:</strong> Tailor-made designs for unique preferences.</li>
        </ul>
      </motion.div>

      {/* Client Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="bg-white shadow-md p-6 rounded-lg mb-6"
      >
        <h2 className="text-2xl font-bold text-indigo-500 mb-4">Client Testimonials</h2>
        <blockquote className="border-l-4 border-indigo-600 pl-4">
          “Aura Spaces transformed our home into a masterpiece. Highly recommend!”  — <i>Sophia R.</i>
        </blockquote>
        <blockquote className="border-l-4 border-indigo-600 pl-4 mt-4">
          “The team truly understands their client’s vision.”  — <i>Michael T.</i>
        </blockquote>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="text-center mt-8"
      >
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">Let’s Create Together</h2>
        <p className="mb-4">
          Whether you are looking to redesign your home, office, or commercial property, Aura Spaces
          is here to bring your ideas to life.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700" >
          Contact Us
        </button>
      </motion.div>
    </div>
    </div>
  )
}

export default page