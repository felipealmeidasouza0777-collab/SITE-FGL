import React, { useState } from 'react';
import { COMPANY_INFO, WHATSAPP_URL } from '../constants';

const Footer: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false);

  const supportMsg = encodeURIComponent("Olá, preciso de suporte e atendimento.");
  const secondCopyMsg = encodeURIComponent("Olá, gostaria de solicitar a segunda via do meu boleto.");
  const whatsappBase = `https://wa.me/${COMPANY_INFO.whatsapp}`;

  return (
    <footer className="bg-dark text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-heading font-extrabold tracking-tight text-white mb-4">
              {COMPANY_INFO.name}
            </h2>
            <p className="font-sans text-gray-400 text-sm max-w-xs leading-relaxed">
              {COMPANY_INFO.tagline}. <br/>
              Tecnologia de ponta em rastreamento e monitoramento veicular para você e sua frota.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16 flex-1">
            <div>
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-6">Empresa</h4>
              <ul className="space-y-3 font-sans text-gray-400 text-sm">
                <li>
                  <button 
                    onClick={() => setShowAbout(!showAbout)}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Sobre Nós
                  </button>
                  {showAbout && (
                    <div className="mt-4 p-4 bg-white/5 rounded-xl text-xs leading-relaxed text-gray-300 border border-white/5 animate-in fade-in slide-in-from-top-1 duration-300">
                      <p className="mb-2">A FGL Brasil Rastreamento é uma empresa dedicada a oferecer soluções completas em segurança automotiva, com foco em proteção, tecnologia e tranquilidade para seus clientes.</p>
                      <p className="mb-2">Atuamos com responsabilidade e transparência, disponibilizando serviços de rastreamento e proteção veicular que garantem mais controle, segurança e suporte em situações imprevistas. Nosso compromisso é proporcionar confiança em cada etapa, com atendimento ágil, suporte eficiente e processos claros.</p>
                      <p className="mb-4">Buscamos constantemente inovação e melhoria contínua, utilizando tecnologia de ponta para assegurar a melhor experiência e proteção para o seu patrimônio.</p>
                      <span className="text-primary font-bold">CNPJ: 34.647.639/0001-85</span>
                    </div>
                  )}
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/fglbrasil" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-6">Suporte</h4>
              <ul className="space-y-3 font-sans text-gray-400 text-sm">
                <li>
                  <a 
                    href={`${whatsappBase}?text=${supportMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a 
                    href={`${whatsappBase}?text=${secondCopyMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Segunda via
                  </a>
                </li>
                <li>
                  <a 
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} FGL BRASIL. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;