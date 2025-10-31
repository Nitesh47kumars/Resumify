import React from 'react';
import FeaturesImage from './FeaturesImage';
import FeaturesContent from './FeaturesContent';

const Features = () => {
  return (
    <section className="bg-gray-50 py-30 flex justify-center" id="features">
      <div className="max-w-[90%] flex flex-col md:flex-row items-center justify-center">
        
        <FeaturesImage />
        <FeaturesContent />
      </div>
    </section>
  );
};

export default Features;
