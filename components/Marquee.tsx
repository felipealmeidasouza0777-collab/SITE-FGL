import React from 'react';
import { PARTNERS } from '../constants';

const Marquee: React.FC = () => {
  return (
    <div className="w-full bg-primary text-white py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
          <div key={index} className="mx-8 md:mx-16 flex items-center">
             <span className="font-heading font-bold text-lg md:text-xl uppercase tracking-widest opacity-90 hover:opacity-100 transition-opacity cursor-default">
               {partner}
             </span>
             <span className="mx-8 text-white/40 font-bold">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;