import React from 'react';
import { STATS } from '../constants';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-dark text-white border-y border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
              Compromisso com a <span className="text-primary">estabilidade.</span>
            </h2>
            <p className="text-white/60 font-sans max-w-2xl mx-auto">
              Nossa trajetória é construída sobre fatos e resultados concretos. Segurança institucional para quem não abre mão da tranquilidade.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y divide-white/10 md:divide-y-0 md:divide-x border-t border-white/10 pt-12">
          {STATS.map((stat, index) => (
            <div key={index} className="py-8 md:py-0 px-8 text-center group relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-black text-6xl md:text-7xl text-white mb-4 tracking-tighter">
                  {stat.value}<span className="text-primary text-2xl md:text-3xl align-top font-bold ml-1">{stat.suffix}</span>
                </h3>
                <p className="font-heading text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-primary">
                  {stat.label}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40">
          <Reveal delay={0.8}>
            <div className="flex items-center gap-2 font-heading font-bold text-[10px] uppercase tracking-widest">
              <Shield className="w-4 h-4 text-primary" />
              Selo de Confiança FGL
            </div>
          </Reveal>
          <Reveal delay={1.0}>
            <div className="flex items-center gap-2 font-heading font-bold text-[10px] uppercase tracking-widest">
              <Shield className="w-4 h-4 text-primary" />
              Segurança Institucional
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Stats;