import React from 'react'

const page = () => {
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
            <a href="#">Apply Now</a>
          </div>
          <div className="job">
            <h3> Assistant Project Manager</h3>
            <p><strong>Location:</strong> On-site</p>
            <p><strong>Type:</strong> Full-time</p>
            <p>Assist our projects to success with excellent management and organizational skills.</p>
            <a href="#">Apply Now</a>
          </div>
          <div className="job">
            <h3>Junior HR Executive</h3>
            <p><strong>Location:</strong> On-site</p>
            <p><strong>Type:</strong> Full-time</p>
            <p>Drive employee engagement and support HR operations.</p>
            <a href="#">Apply Now</a>
          </div>
        </div>
      </div>

      <div className="section cta">
        <h2>Why Join Us?</h2>
        <p>We offer competitive salaries, flexible working hours, and opportunities for professional growth. Be part of a creative and supportive team that values innovation and excellence.</p>
        <a href="#open-positions">View Open Positions</a>
      </div>
    </>
  )
}

export default page