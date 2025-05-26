import React from 'react';
import { CiText } from 'react-icons/ci';
import { FaBrain } from 'react-icons/fa';
import { GiCompanionCube } from 'react-icons/gi';
import { IoRocketSharp } from 'react-icons/io5';

const HowWorks = () => {
  const steps = [
    {
      id: 1,
      title: "1. Explore Companies",
      description:
        "Browse through a wide range of companies, industries, and roles. Get insights into the company’s culture, benefits, and job listings.",
      icon: <GiCompanionCube className='text-blue-700' />
      ,
    },
    {
      id: 2,
      title: "2. Review Job Listings",
      description:
        "Check out the details for each position including requirements, salary, job type, and location — all in one place.",
      icon: <CiText className='text-green-700' />
      ,
    },
    {
      id: 3,
      title: "3. Match Your Skills",
      description:
        "Compare your skills and qualifications with job requirements to find the best fit. Save jobs you're interested in.",
      icon: <FaBrain className='text-yellow-500' />,
    },
    {
      id: 4,
      title: "4. Apply with Confidence",
      description:
        "Once you find the right job, apply directly through the company’s website or portal and track your applications.",
      icon: <IoRocketSharp className='text-red-500' />
      ,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 text-gray-800">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
          How It Works
        </h2>
        <p className="text-gray-600 text-lg">
          Finding your dream job is just a few steps away. Here’s how you can use Job Track to streamline your job hunt.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {steps.map((step) => (
          <div key={step.id} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWorks;