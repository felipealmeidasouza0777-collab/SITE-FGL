import React from 'react';
import { Reveal } from './ui/Reveal';
import { Phone } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50 -skew-x-12 transform translate-x-20 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal width="100%">
            <h2 className="font-heading font-extrabold text-5xl md:text-7xl mb-8 leading-tight text-dark">
              Não espere virar <br/>
              <span className="text-primary">estatística.</span>
            </h2>
          </Reveal>

          <Reveal width="100%" delay={0.4}>
            <p className="font-sans text-dark/70 text-lg md:text-xl max-w-2xl mx-auto mb-16">
              O custo de um rastreador é insignificante perto do valor do seu patrimônio. 
              Tome o controle agora mesmo e garanta sua tranquilidade.
            </p>
          </Reveal>

          <Reveal width="100%" delay={0.6}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="bg-primary hover:bg-dark text-white font-heading font-bold text-lg uppercase tracking-widest px-12 py-6 transition-all duration-300 flex items-center justify-center gap-4 shadow-xl shadow-primary/30 hover:shadow-dark/30 hover:-translate-y-1 rounded-sm w-full md:w-auto"
              >
                <Phone className="w-5 h-5" />
                Falar com Especialista
              </a>
              
              <div className="text-left">
                <p className="text-xs font-heading font-bold uppercase tracking-wider text-dark/40 mb-1">Dúvidas?</p>
                <p className="text-dark font-bold font-heading">Atendimento Imediato</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;