import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO, NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-gray-100' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Correção Semântica: h1 abraça o link (ao invés do link abraçar o h1) */}
        <h1 className="relative group z-50">
          <a 
            href="#" 
            className={`text-2xl font-heading font-extrabold tracking-tight ${isScrolled || mobileMenuOpen ? 'text-dark' : 'text-white'}`}
            data-cursor-hover
          >
            {COMPANY_INFO.name}
          </a>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs font-heading font-bold uppercase tracking-widest hover:text-primary transition-colors duration-300 relative group ${isScrolled ? 'text-dark' : 'text-white'}`}
              data-cursor-hover
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button 
          className={`md:hidden z-50 transition-colors duration-300 ${mobileMenuOpen ? 'text-dark' : (isScrolled ? 'text-dark' : 'text-white')}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-8 text-center">
               {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-2xl font-heading font-bold text-dark hover:text-primary transition-colors uppercase tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;