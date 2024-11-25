"use client"

// import React from 'react'
import React, { useState } from 'react';

const page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = {
      Name: name,
      Email: email,
      Number: number,
      Message: message
    };

    // try {
    // const resp = await GlobalApi.contactus(Data);
    // console.log('Response:', resp.data);
    // toast("Contact form  submitted successfully We will contact you very Shortly");

    // Reset form fields
    setName('');
    setEmail('');
    setNumber('');
    setMessage('');

  };

  return (
    // <div>Page Under Maintance</div>
  
     
          
            <div div class="py-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={name}
                    onChange={(data) => setName(data.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={email}
                    onChange={(data) => setEmail(data.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mob Number</label>
                  <input
                    type="tel"
                    id="number"
                    maxLength={10}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={number}
                    onChange={(data) => setNumber(data.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                  <textarea
                    id="message"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={message}
                    onChange={(data) => setMessage(data.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Submit</button>
              </form>
          
          

        <div>

        </div>
        </div>
      
    
  )
}

export default page