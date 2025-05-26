import React from 'react';
import Banner from './Banner';
import HowWorks from './HowWorks';
import CompaniesSection from './CompaniesSection';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <>
      <Banner />
      <HowWorks />
      <CompaniesSection></CompaniesSection>
      <Testimonials />
    </>
  );
};

export default Home;