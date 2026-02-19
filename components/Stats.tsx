import React from 'react';
import { STATS } from '../constants';
import { motion } from 'framer-motion';

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-dark text-white border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-white/10 md:divide-y-0 md:divide-x">
          {STATS.map((stat, index) => (
            <div key={index} className="py-12 md:py-0 px-8 text-center group relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-6xl md:text-7xl text-white mb-2">
                  {stat.value}<span className="text-primary text-4xl align-top font-bold">{stat.suffix}</span>
                </h3>
                <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary/80 group-hover:text-primary transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;