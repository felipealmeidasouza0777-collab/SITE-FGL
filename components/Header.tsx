import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO, NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Handle scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || mobileMenuOpen 
            ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-gray-100' 
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <div className="relative z-[60]">
            <a 
              href="#" 
              className={`text-2xl font-heading font-black tracking-tighter transition-colors duration-300 ${
                isScrolled || mobileMenuOpen ? 'text-dark' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {COMPANY_INFO.name}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[11px] font-heading font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group ${
                  isScrolled ? 'text-dark hover:text-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#plan-builder" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-[10px] font-heading font-extrabold uppercase tracking-widest transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 text-center active:scale-95"
            >
              Cotação Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden relative z-[60] p-2 -mr-2 transition-all duration-300 active:scale-90 flex items-center justify-center`}
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute left-0 w-full h-0.5 rounded-full transition-all duration-500 ${
                  isScrolled || mobileMenuOpen ? 'bg-dark' : 'bg-white'
                } ${mobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} 
              />
              <span 
                className={`absolute left-0 top-2 w-full h-0.5 rounded-full transition-all duration-500 ${
                  isScrolled || mobileMenuOpen ? 'bg-dark' : 'bg-white'
                } ${mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} 
              />
              <span 
                className={`absolute left-0 w-full h-0.5 rounded-full transition-all duration-500 ${
                  isScrolled || mobileMenuOpen ? 'bg-dark' : 'bg-white'
                } ${mobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} 
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Backdrop and Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-dark/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Content Panel */}
            <motion.div 
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-50 lg:hidden shadow-2xl flex flex-col"
            >
              <div className="flex-1 flex flex-col justify-center px-10">
                <nav className="flex flex-col space-y-6">
                   {NAV_LINKS.map((link, index) => (
                    <motion.a
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      href={link.href}
                      className="group flex flex-col"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-dark/40 text-[10px] font-heading font-bold uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">
                        0{index + 1}
                      </span>
                      <span className="text-3xl font-heading font-black text-dark group-hover:text-primary transition-colors tracking-tight">
                        {link.label}
                      </span>
                    </motion.a>
                  ))}
                </nav>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-12"
                >
                  <a 
                    href="#plan-builder"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full bg-primary text-white text-center py-5 rounded-2xl font-heading font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 active:scale-[0.98] transition-transform"
                  >
                    Montar meu Plano 🚗
                  </a>
                </motion.div>
              </div>

              {/* Bottom Info */}
              <div className="p-10 border-t border-gray-50">
                <p className="text-dark/40 text-[9px] font-heading font-bold uppercase tracking-[0.3em]">
                  fgl brasil &copy; {new Date().getFullYear()}
                </p>
                <div className="mt-2 flex space-x-4">
                  <span className="text-[10px] font-heading font-extrabold text-primary uppercase tracking-wider">
                    Atendimento Especializado
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;