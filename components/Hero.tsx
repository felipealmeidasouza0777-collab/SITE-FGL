import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { WHATSAPP_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-dark">
      {/* Background with Professional Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src={IMAGES.heroBg}
          alt="Veículo em rodovia"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <ShieldCheck className="text-primary w-5 h-5" />
            <span className="text-white/90 font-heading font-bold tracking-widest text-xs uppercase">
              Tecnologia de Rastreamento Avançado
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-white mb-8"
          >
            Segurança e controle <br className="hidden md:block"/>
            para o seu <span className="text-primary">patrimônio.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-lg md:text-xl text-white/90 font-medium max-w-2xl mb-12 leading-relaxed"
          >
            Mais de 3.000 clientes atendidos e satisfeitos. Proteja seu veículo com a estabilidade e tecnologia da <strong className="text-primary font-bold">FGL BRASIL</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-6 md:gap-16 items-start md:items-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group relative inline-flex px-10 py-5 bg-primary text-white font-heading font-bold text-sm uppercase tracking-widest overflow-hidden transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-3">
                Solicitar Cotação <ArrowRight className="w-5 h-5" />
              </span>
            </a>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <ShieldCheck className="text-primary w-5 h-5" />
              </div>
              <p className="text-white/70 font-heading font-bold text-[10px] uppercase tracking-wider">
                Atendimento Institucional e Profissional
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;