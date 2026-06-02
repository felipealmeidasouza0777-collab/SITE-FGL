import React from 'react';
import { Reveal } from './ui/Reveal';
import { Truck, Car, Bus } from 'lucide-react';

const SERVICES = [
  {
    title: "Guincho 24h e Assistência",
    description:
      "Serviço de reboque e guincho 24 horas rápido para a remoção segura do seu automóvel em situações de pane mecânica, elétrica ou acidentes.",
    icon: Truck,
    image: "public/assets/images/guincho.png"
  },
  {
    title: "Recuperação Veicular de Elite",
    description:
      "Monitoramento logístico ativo, rastreador com corte de combustível e suporte tático especializado para localização e recuperação de veículos furtados ou roubados.",
    icon: Car,
    image: "public/assets/images/agentes.png"
  },
  {
    title: "Rastreamento e Gestão de Frotas",
    description:
      "Gerenciamento inteligente de frotas de cargas, caminhões e carros leves. Reduza custos de combustível, trace itinerários e controle a velocidade operacional.",
    icon: Bus,
    image: "public/assets/images/buscas.JPG"
  }
];

const FALLBACK_IMAGES: Record<string, string> = {
  "/assets/images/guincho.png":
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070&auto=format&fit=crop",
  "/assets/images/buscas.JPG":
    "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop",
  "/assets/images/agentes.png":
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2070&auto=format&fit=crop"
};

function ServiceImage({
  src,
  alt,
  className
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [imgSrc, setImgSrc] = React.useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => {
        const fallback = FALLBACK_IMAGES[src];

        if (fallback && imgSrc !== fallback) {
          setImgSrc(fallback);
        }
      }}
    />
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gray">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-primary font-heading font-bold text-xs uppercase tracking-widest mb-4 block">
              Soluções Especializadas em Proteção Veicular
            </span>

            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-dark mb-4">
              Nossos Serviços de Rastreamento Veicular
            </h2>

            <p className="text-dark/60 font-sans max-w-2xl mx-auto text-lg">
              Mais de 3.000 clientes atendidos em todo o Brasil. Protegemos seu
              patrimônio corporativo ou pessoal com máxima estabilidade de
              conexão e suporte 24h.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Reveal key={index} delay={index * 0.2}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-black/5 group hover:-translate-y-2 transition-transform duration-500 border border-black/5 h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <ServiceImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
