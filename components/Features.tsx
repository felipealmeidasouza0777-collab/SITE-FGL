import React from 'react';
import { Reveal } from './ui/Reveal';
import { motion } from 'framer-motion';
import { Check, Lock, MapPin, Shield, Navigation, Wifi, Battery, Signal, AlertTriangle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const NotificationCard = ({ 
  title, 
  message, 
  time, 
  icon: Icon, 
  className, 
  delay,
  zIndex,
  scale = 1
}: { 
  title: string, 
  message: string, 
  time: string, 
  icon: any, 
  className?: string,
  delay: number,
  zIndex: number,
  scale?: number
}) => (
  <motion.article
    role="status"
    aria-live="polite"
    initial={{ opacity: 0, y: 30, scale: 0.8 }}
    whileInView={{ opacity: 1, y: 0, scale: scale }}
    animate={{ y: [0, -12, 0] }}
    transition={{ 
      y: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut" },
      opacity: { duration: 0.6, delay: delay },
      scale: { duration: 0.6, delay: delay, type: "spring", stiffness: 60 }
    }}
    viewport={{ once: true, margin: "-50px" }}
    className={`absolute bg-white/90 backdrop-blur-2xl p-3.5 md:p-4 rounded-[20px] md:rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-white/80 w-[220px] sm:w-64 md:w-[280px] flex flex-col ${className}`}
    style={{ zIndex: zIndex }}
  >
    <header className="flex justify-between items-center mb-2.5">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-[6px] bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center shadow-sm">
          <Icon className="text-white w-3 h-3" strokeWidth={3} aria-hidden="true" />
        </div>
        <span className="font-sans font-semibold text-[10px] md:text-[11px] tracking-widest text-dark/80 uppercase">FGL App</span>
      </div>
      <time dateTime={new Date().toISOString()} className="font-sans text-[10px] md:text-[11px] text-dark/50 font-medium">
        {time}
      </time>
    </header>
    
    <div>
      <h4 className="font-sans font-bold text-[13px] sm:text-[14px] md:text-[15px] text-dark leading-tight mb-0.5">{title}</h4>
      <p className="font-sans text-[11px] sm:text-[12px] md:text-[13px] text-dark/70 leading-snug">{message}</p>
    </div>
  </motion.article>
);

const Features: React.FC = () => {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text */}
          <div className="order-2 lg:order-1 relative z-30">
            <Reveal width="100%">
              <span className="text-primary font-heading font-bold text-xs uppercase tracking-widest mb-4 block">
                Controle Total
              </span>
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-dark mb-8 leading-[1.1]">
                A paz de saber que <br/>
                <span className="text-primary">tudo está seguro.</span>
              </h2>
            </Reveal>

            <Reveal width="100%" delay={0.4}>
              <p className="font-sans text-dark/70 text-lg mb-10 leading-relaxed max-w-md">
                Esqueça a complexidade. Com o aplicativo FGL, você tem o poder de monitorar, bloquear e gerenciar seu patrimônio com a mesma facilidade de enviar uma mensagem.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Notificações instantâneas de ignição",
                  "Bloqueio de veículo em 1 clique",
                  "Histórico completo de trajetos",
                  "Suporte 24h direto pelo App"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-heading font-bold text-dark/80 text-sm md:text-base">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" strokeWidth={4} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                 <a 
                   href={WHATSAPP_URL}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-dark font-heading font-bold uppercase text-xs tracking-widest border-b-2 border-primary pb-1 hover:text-primary transition-colors inline-block"
                 >
                   Fazer uma Cotação
                 </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 3D Layered Visual Composition with Pure CSS Phone */}
          <div className="order-1 lg:order-2 relative h-[600px] md:h-[750px] w-full flex items-center justify-center">
            
            {/* The core phone container. Scaled slightly on mobile so notifications don't overflow screen */}
            <div className="relative w-[260px] md:w-[320px] h-[520px] md:h-[640px] flex items-center justify-center shrink-0">
              
              {/* THE MASTERY SOLUTION: Pure CSS Modern Smartphone Mockup */}
              <motion.div 
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-20 w-full h-full bg-dark rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-gray-900 shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col items-center shadow-black/40 ring-1 ring-white/10"
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                {/* Hardware details: Power Button & Volume Rockers */}
                <div className="absolute right-[-8px] top-28 md:top-32 w-1 h-16 bg-gray-800 rounded-l-md pointer-events-none"></div>
                <div className="absolute left-[-8px] top-20 md:top-24 w-1 h-12 bg-gray-800 rounded-r-md pointer-events-none"></div>
                <div className="absolute left-[-8px] top-36 md:top-40 w-1 h-12 bg-gray-800 rounded-r-md pointer-events-none"></div>

                {/* iPhone Status Bar (Top) */}
                <div className="absolute top-0 w-full h-12 z-40 flex justify-between items-start px-6 pt-3 pointer-events-none">
                  <span className="text-white text-[10px] md:text-[11px] font-bold">09:41</span>
                  <div className="flex gap-1.5 text-white">
                    <Signal className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    <Wifi className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    <Battery className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  </div>
                </div>

                {/* Dynamic Island / Camera Notch */}
                <div className="w-24 md:w-28 h-7 bg-black rounded-full absolute top-2 z-40 flex items-center justify-end px-3 shadow-md border border-white/5 pointer-events-none">
                   <div className="w-2 h-2 rounded-full bg-blue-900/40"></div>
                </div>

                {/* INNER SCREEN - REALISTIC GPS TRACKING APP WITH PANNING MAP */}
                <div className="w-full h-full bg-[#0f172a] relative overflow-hidden">
                  
                  {/* PANNING MAP LAYER */}
                  {/* This layer is larger than the screen and moves to simulate the car driving */}
                  <motion.div 
                    animate={{ 
                      x: ["-10%", "-40%"], 
                      y: ["-10%", "-45%"] 
                    }}
                    transition={{ 
                      duration: 18, 
                      repeat: Infinity, 
                      ease: "linear", 
                      repeatType: "reverse" 
                    }}
                    className="absolute inset-0 w-[800px] h-[1000px] pointer-events-none"
                  >
                    {/* Map Base with City Grid Lines */}
                    <div className="absolute inset-0 bg-[#0f172a]" 
                         style={{
                           backgroundImage: 'linear-gradient(#1e293b 2px, transparent 2px), linear-gradient(90deg, #1e293b 2px, transparent 2px)',
                           backgroundSize: '40px 40px'
                         }}>
                    </div>
                    {/* Larger Blocks for Avenues */}
                    <div className="absolute inset-0" 
                         style={{
                           backgroundImage: 'linear-gradient(#334155 4px, transparent 4px), linear-gradient(90deg, #334155 4px, transparent 4px)',
                           backgroundSize: '240px 240px',
                           opacity: 0.2
                         }}>
                    </div>

                    {/* SVG Route Paths */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 1000">
                      {/* Secondary streets */}
                      <path d="M 0,300 L 800,300 M 0,700 L 800,700 M 300,0 L 300,1000 M 500,0 L 500,1000" stroke="#334155" strokeWidth="6" fill="none" opacity="0.4" />
                      
                      {/* The Active Glowing Route the car is following */}
                      <path 
                        d="M 100,900 L 250,750 L 250,500 L 600,200 L 700,100" 
                        stroke="#ff5b00" 
                        strokeWidth="10" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="drop-shadow-[0_0_15px_rgba(255,91,0,0.6)]"
                      />
                    </svg>
                  </motion.div>

                  {/* Overlay Gradient to fade edges slightly */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(15,23,42,0.8)_100%)] pointer-events-none"></div>

                  {/* CENTER FIXED VEHICLE (It stays in the middle while map pans beneath it) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20 pointer-events-none">
                      {/* Pulsing Aura */}
                      <div className="absolute w-20 h-20 bg-primary/20 rounded-full animate-ping"></div>
                      <div className="absolute w-32 h-32 border border-primary/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]"></div>
                      
                      {/* Vehicle Avatar / Navigation Arrow */}
                      <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(255,91,0,0.8)] border-4 border-[#0f172a]">
                        {/* A nice navigation arrow pointing up/right to match the path direction */}
                        <Navigation className="w-5 h-5 text-primary rotate-45 fill-primary" />
                      </div>
                  </div>

                  {/* Fake App UI Elements inside the screen */}
                  
                  {/* Top Address Pill */}
                  <div className="absolute top-14 left-4 right-4 h-12 bg-slate-800/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center px-4 gap-3 z-30">
                     <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                       <MapPin className="w-4 h-4 text-primary" />
                     </div>
                     <div className="flex-1">
                       <div className="text-white text-[10px] font-bold uppercase tracking-wider mb-0.5">Av. Paulista, 1578</div>
                       <div className="text-gray-400 text-[9px]">Velocidade: 95 km/h</div>
                     </div>
                  </div>

                  {/* Bottom Control Panel */}
                  <div className="absolute bottom-6 left-4 right-4 bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-white/10 p-4 z-30 shadow-2xl flex flex-col gap-3">
                     <div className="flex justify-between items-center">
                        <div>
                           <div className="text-white text-[11px] font-bold mb-1">Status do Motor</div>
                           <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-semibold tracking-wide">
                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div> 
                             LIGADO
                           </div>
                        </div>
                        {/* Red Bloqueio Button */}
                        <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/40 cursor-pointer">
                          <Lock className="w-4 h-4 text-white" />
                        </div>
                     </div>
                  </div>

                  {/* iOS Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/30 rounded-full z-40 pointer-events-none"></div>
                </div>
              </motion.div>

              {/* FLOATING NOTIFICATIONS IN 3D SPACE */}
              {/* Note: I adjusted positions to stick out but stay within a safe container boundary so they aren't hidden on mobile */}
              
              {/* Notification 1: Top Left */}
              <NotificationCard 
                delay={0.2}
                title="Movimento Detectado"
                message="Veículo em deslocamento."
                time="Agora"
                icon={Navigation}
                scale={0.9}
                zIndex={40} 
                className="-top-4 -left-12 sm:-left-20 md:-left-28 opacity-95"
              />

              {/* Notification 2: Bottom Right (Updated to Speed Alert) */}
              <NotificationCard 
                delay={0.5}
                title="Excesso de Velocidade"
                message="Veículo excedeu limite (80km/h)."
                time="Agora"
                icon={AlertTriangle}
                scale={1}
                zIndex={30}
                className="bottom-12 -right-8 sm:-right-16 md:-right-24"
              />

              {/* Notification 3: Middle Left (Overlapping slightly for depth) */}
              <NotificationCard 
                delay={0.8}
                title="Ignição Ligada"
                message="Motor acionado com sucesso."
                time="1 min atrás"
                icon={Lock}
                scale={1.05}
                zIndex={50}
                className="top-[40%] -left-8 sm:-left-24 md:-left-32"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;