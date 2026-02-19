import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { WHATSAPP_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-dark">
      {/* Background with Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          {/* Enhanced gradients for better text readability */}
          {/* Darker base overlay to ensure text pops */}
          <div className="absolute inset-0 bg-black/60 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 z-10" />
          
          {/* Relevant Image: Car on road / Popular vehicle context */}
          <img
            src={IMAGES.heroBg}
            alt="Veículo na estrada"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <ShieldCheck className="text-primary w-5 h-5" />
            <span className="text-primary font-heading font-bold tracking-widest text-xs uppercase">
              Tecnologia de Rastreamento Avançado
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-white mb-8"
          >
            Quantos segundos <br className="hidden md:block"/>
            para <span className="text-primary">perder tudo?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-lg md:text-xl text-white font-medium drop-shadow-md max-w-xl mb-10 leading-relaxed"
          >
            O roubo acontece em instantes. A recuperação depende da sua decisão agora. 
            Proteja seu patrimônio com a tecnologia <strong className="text-primary font-bold">FGL BRASIL</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-4 items-start md:items-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group relative inline-flex px-10 py-5 bg-primary text-white font-heading font-bold text-sm uppercase tracking-widest overflow-hidden transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-3">
                Proteger meu veículo <ArrowRight className="w-5 h-5" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;