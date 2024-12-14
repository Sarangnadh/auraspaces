"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 

const Page = () => {
  const router = useRouter(); 

  const [isOpen, setIsOpen] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [qualification, setQualification] = useState("");
  const [resume, setResume] = useState("");

  const toggleModal = (heading = "") => {
    setIsOpen(!isOpen);
    setModalHeading(heading);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', {
      name,
      email,
      number,
      qualification,
      resume,
    });

    alert('Your application has been submitted!');
    router.push('/'); 
  };

  return (
    <>
      <div className="hero">
        <h1>Join Our Team</h1>
        <p>Shape the Future of Interior Design with Us.</p>
        <a href="#open-positions">Explore Open Positions</a>
      </div>

      <div className="section">
        <h2>About Working at Auraspaces</h2>
        <p>At Auraspaces, we value creativity, collaboration, and innovation. Our team thrives on pushing the boundaries of interior design to create exceptional spaces for our clients. Join us and be part of a journey to redefine design excellence.</p>
      </div>

      <div className="section" id="open-positions">
        <h2>Open Positions</h2>
        <div className="job-listing">
          <div className="job">
            <h3>Interior Designer</h3>
            <p><strong>Location:</strong> Remote</p>
            <p><strong>Type:</strong> Full-time</p>
            <p>We are looking for a creative and experienced interior designer to join our dynamic team.</p>
            <a onClick={() => toggleModal("Applying for Interior Designer")}>Apply Now</a>
          </div>
          <div className="job">
            <h3>Assistant Project Manager</h3>
            <p><strong>Location:</strong> On-site</p>
            <p><strong>Type:</strong> Full-time</p>
            <p>Assist our projects to success with excellent management and organizational skills.</p>
            <a onClick={() => toggleModal("Applying for Assistant Project Manager")}>Apply Now</a>
          </div>
          <div className="job">
            <h3>Junior HR Executive</h3>
            <p><strong>Location:</strong> On-site</p>
            <p><strong>Type:</strong> Full-time</p>
            <p>Drive employee engagement and support HR operations.</p>
            <a onClick={() => toggleModal("Applying for Junior HR Executive")}>Apply Now</a>
          </div>
        </div>
      </div>

      <div className="section cta">
        <h2>Why Join Us?</h2>
        <p>We offer competitive salaries, flexible working hours, and opportunities for professional growth. Be part of a creative and supportive team that values innovation and excellence.</p>
        <a href="#open-positions">View Open Positions</a>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="bg-white rounded-lg p-6 shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">{modalHeading}</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '10px' }}>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>

              <div style={{ marginBottom: '10px' }}>
                <label>Email ID:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>

              <div style={{ marginBottom: '10px' }}>
                <label>Mobile Number:</label>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>

              <div style={{ marginBottom: '10px' }}>
                <label>Education</label>
                <input
                  type="text"
                  placeholder="Your Qualification"
                  className="w-full border rounded-lg p-2"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  required
                />
              </div>

              <div style={{ marginBottom: '10px' }}>
                <label>Resume</label>
                <input
                  type="file"
                  placeholder="Upload Resume"
                  className="w-full border rounded-lg p-2"
                  value={resume}
                  onChange={(e) => setResume(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-between mt-4">
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
