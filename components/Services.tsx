import React from 'react';
import { Reveal } from './ui/Reveal';
import { Truck, Bus, Car } from 'lucide-react';

const SERVICES = [
  {
    title: "Guincho 24 Horas",
    description: "Atendimento rápido para remoção do seu veículo em casos de pane, acidente ou recuperação. Segurança e agilidade quando você mais precisa.",
    icon: Truck,
    image: "/assets/images/busca.jpg"
  },
  {
    title: "Recuperação de Veículos",
    description: "Monitoramento ativo e suporte estratégico para localização e recuperação de veículos roubados com tecnologia em tempo real.",
    icon: Car,
    image:"/assets/images/busca.jpg"
  },
  {
    title: "Rastreamento de Frotas",
    description: "Gestão completa da sua frota com monitoramento em tempo real, relatórios inteligentes e controle total das operações.",
    icon: Bus,
    image: "/assets/images/busca.jpg"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gray">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-primary font-heading font-bold text-xs uppercase tracking-widest mb-4 block">
              Soluções Institucionais
            </span>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-dark mb-4">
              Serviços Especializados
            </h2>
            <p className="text-dark/60 font-sans max-w-2xl mx-auto text-lg">
              Mais de 3.000 clientes atendidos e satisfeitos. Tecnologia e suporte para a segurança do seu patrimônio.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Reveal key={index} delay={index * 0.2}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-black/5 group hover:-translate-y-2 transition-transform duration-500 border border-black/5 h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-primary/10 transition-colors duration-500" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-heading font-bold text-xl text-dark mb-4">
                    {service.title}
                  </h3>
                  <p className="font-sans text-dark/70 text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-primary">
                      Qualidade FGL Brasil
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
