import Base2 from '@/components/Base2';
import React from 'react';

const services = () => {
  
  const services = [
    {
      title: 'Track & Trace',
      description: 'Securely track goods from origin to destination with real-time visibility.',
      icon: 'fa-solid fa-magnifying-glass',
      caseStudies: [],
    },
    {
      title: 'Smart Contracts',
      description: 'Automate agreements and payments for efficient and trustworthy transactions.',
      icon: 'fa-solid fa-file-contract',
      caseStudies: [],
    },
    
  ];

  const testimonials = [
    {
      name: 'John Doe',
      company: 'ACME Corporation',
      quote: 'Blockchain helped us reduce supply chain disruptions by 30%.',
    },
    {
      name: 'Jane Smith',
      company: 'Global Inc.',
      quote: 'Your teams expertise and transparency made the transition seamless.',
    },
    
  ];

  return (
    <Base2>
    <div className="container mx-auto px-4 py-16 text-white">
     
      <div className="flex flex-col items-center ">
        <div className="px-40 text-5xl text-center font-bold mb-8 md:mb-0 text-white">
          Revolutionize Your Supply Chain with Secure, Transparent Blockchain Solutions.
        </div>
        <div>
          <img src="4.png" style={{height:"300px"}} alt="Blockchain supply chain visualization" />
        </div>
        <div>
          
        </div>
      </div>

      
      <div className="mb-16 p-20">
        <h2 className="text-3xl font-bold mb-4">
          Streamline Operations, Enhance Visibility, and Gain Trust with Blockchain
        </h2>
        <p className="text-gray-100 text-2xl">
          Traditional supply chains face inefficiency, lack of transparency, and fraud.
          Our blockchain-based solutions address these challenges, enabling you to:
         
          <ul className="list-disc ml-4">
            <li>Track goods in real-time from origin to destination.</li>
            <li>Automate processes and eliminate manual errors.</li>
            <li>Increase trust and transparency throughout the supply chain.</li>
          </ul>
        </p>
      </div>

      
      <div className="grid px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="shadow-md rounded-lg p-6">
            <i className={`text-5xl ${service.icon} mb-4`} />
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-200 text-xl">{service.description}</p>
            {service.caseStudies.length > 0 && (
              <div className="mt-4">
                <button className="btn btn-primary">See Case Studies</button>
              </div>
            )}
          </div>
        ))}
      </div>

      
      <div className="mt-16 px-20 ">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className='flex lg:flex-row xs:flex-col sm:flex-col'>
        <div className="carousel">
          
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="px-4 py-6">
              <p className="text-gray-200 mb-4">{testimonial.quote}</p>
              <p className="text-sm font-bold">{testimonial.name}, {testimonial.company}</p>
            </div>
          ))}
        </div>
            <div className='flex'>
            <img src="3.png" className='mx-auto ' style={{height:"300px", objectFit: "cover"}} alt="Blockchain supply chain visualization" /> 
            </div>
        </div>
      </div>

    </div>
    </Base2>
  )
          }
  export default services