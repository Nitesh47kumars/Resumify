import React from 'react';
import FeaturesImage from './FeaturesImage';
import FeaturesContent from './FeaturesContent';

const Features = () => {
  return (
    <section className="bg-gray-50 py-16" id="features">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12">
        
        <FeaturesImage />
        <FeaturesContent />
      </div>
    </section>
  );
};

export default Features;
