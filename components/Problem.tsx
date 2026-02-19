import React from 'react';
import { Reveal } from './ui/Reveal';
import { IMAGES } from '../assets/images';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <Reveal delay={0.6}>
               <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative rounded-lg shadow-2xl">
                 {/* Relevant Image: Car Key / Hand / Urban Night */}
                 <img 
                   src={IMAGES.problemBg}
                   alt="Risco Urbano" 
                   className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                 <div className="absolute bottom-0 left-0 w-full p-10">
                   <div className="w-12 h-1 bg-primary mb-4"></div>
                   <p className="text-white font-heading font-bold text-3xl leading-tight">
                     O crime é organizado.<br/>Sua segurança também deve ser.
                   </p>
                 </div>
               </div>
               
               {/* Decorative Element */}
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </Reveal>
          </div>

          <div className="order-1 md:order-2">
            <Reveal>
              <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-5xl text-dark mb-8 leading-tight">
                A sensação de impotência é o <span className="text-primary">maior custo.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="space-y-6 font-sans text-dark/70 text-lg leading-relaxed">
                <p>
                  Imagine sair do trabalho e não encontrar seu carro. O choque inicial, a burocracia do seguro, o prejuízo financeiro que nenhuma apólice cobre integralmente (como os acessórios e o transtorno).
                </p>
                <p>
                  Estatísticas não escolhem vítimas. Sem rastreamento, suas chances de recuperação são próximas de zero. Com a <strong>FGL</strong>, você vira o jogo.
                </p>
                <div className="pt-8">
                  <div className="bg-gray-50 border-l-4 border-primary p-6 rounded-r-lg">
                    <p className="text-xl font-heading font-bold text-dark italic">
                      "Não ter rastreador hoje não é economia. É negligência com seu próprio esforço."
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;