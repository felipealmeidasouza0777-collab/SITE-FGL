import React from 'react';
import { PARTNERS } from '../constants';

const INSTITUTIONAL_INFO = [
  "Tecnologia Avançada",
  "Suporte Especializado",
  "Gestão de Frotas",
  "Recuperação Veicular",
  "Bloqueio de Segurança",
  "Monitoramento Estratégico"
];

const Marquee: React.FC = () => {
  return (
    <div className="w-full bg-primary text-white py-4 overflow-hidden border-y border-white/10">
      <div className="flex animate-marquee-fast whitespace-nowrap">
        {[...INSTITUTIONAL_INFO, ...INSTITUTIONAL_INFO, ...INSTITUTIONAL_INFO].map((info, index) => (
          <div key={index} className="mx-6 md:mx-12 flex items-center">
             <span className="font-heading font-bold text-sm md:text-base uppercase tracking-[0.2em] opacity-90">
               {info}
             </span>
             <span className="mx-6 md:mx-12 text-white/30 font-bold">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;