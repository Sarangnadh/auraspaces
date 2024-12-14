import React from 'react';

const page = () => {
  const services = [
    {
      img: '/civil.jpg',
      title: 'Civil Designing',
      description: 'Perfect space utilization for the project and experienced approach to each nook and corner.'
    },
    {
      img: 'civilcontract.jpg',
      title: 'Civil Contracting',
      description: 'Quality of execution at a premium level with hassle-free coordination, providing perfect completion.'
    },
    {
      img: '/id.jpg',
      title: 'Interior Designing',
      description: 'Customized designs developed uniquely for your project by an experienced design panel for a tailor-made finish.'
    },
    {
      img: 'ic.jpg',
      title: 'Interior Contracting',
      description: 'Quality implementation by experienced labor assuring 100% quality, bringing your designs to reality professionally.'
    },
    {
      img: '/land.jpg',
      title: 'Landscaping',
      description: 'Your home gets a greenish soul with an experienced approach and ease of maintenance.'
    },
    {
      img: '/ss.jpg',
      title: 'Smart Solutions',
      description: 'Complete home automation, energy, and security solutions with full installation and maintenance.'
    }
  ];
  const backgroundImage = {
    backgroundImage: "url('/quote.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '300px', // Adjust height as needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', // Text color for better visibility
    padding: '20px',
  };
  
  return (
    <div>
<div className="hero">
        <h1> Our Services</h1>
      </div>    <div className="service-new-wraper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => (
        <div key={index} className="service-new-container bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="service-pic-new">
            <img src={service.img} alt={service.title} className="img-ful w-full h-48 object-cover " />
          </div>
          <div className="service-new-content p-4">
            <h3 className="service-new-content-title text-lg font-bold mb-2 text-indigo-600">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div style={backgroundImage}>
      <div className="quote-caption" style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Innovative Design & Experienced Professionals
      </div>
      <div className="quote-caption-sub" style={{ fontSize: '18px', marginTop: '10px' }}>
        Get your quote online or call +91 70259 32222
      </div>
      <button
        type="button"
           className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600" >
<a href='/contact-us' style={{ marginTop: '20px' }}>Get a Quote</a>     </button>
    </div>
    </div>
  );
};

export default page;
