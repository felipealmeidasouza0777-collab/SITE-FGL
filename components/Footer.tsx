import React from 'react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <h2 className="text-3xl font-heading font-extrabold tracking-tight text-white mb-4">
              {COMPANY_INFO.name}
            </h2>
            <p className="font-sans text-gray-400 text-sm max-w-xs leading-relaxed">
              {COMPANY_INFO.tagline}. <br/>
              Tecnologia de ponta em rastreamento e monitoramento veicular para você e sua frota.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-6">Empresa</h4>
              <ul className="space-y-3 font-sans text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-6">Suporte</h4>
              <ul className="space-y-3 font-sans text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Segunda via</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
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