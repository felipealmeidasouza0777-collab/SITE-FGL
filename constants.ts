import { Shield, Smartphone, Lock, MapPin, AlertTriangle, Clock } from 'lucide-react';

export const COMPANY_INFO = {
  name: "FGL BRASIL",
  tagline: "Protegendo o que importa para você",
  whatsapp: "5511971000304"
};

export const WHATSAPP_URL = "https://wa.me/5511971000304?text=Ol%C3%A1%20vim%20pelo%20site%20gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o";

export const NAV_LINKS = [
  { label: "O Problema", href: "#problem" },
  { label: "Soluções", href: "#solutions" },
  { label: "Serviços", href: "#services" },
  { label: "Contato", href: "#contact" },
];

export const FEATURES = [
  {
    title: "Rastreamento em Tempo Real",
    description: "Localização exata via satélite, acessível instantaneamente pelo app ou web.",
    icon: MapPin,
  },
  {
    title: "Bloqueio de Segurança",
    description: "Desative a ignição do veículo instantaneamente em caso de qualquer suspeita.",
    icon: Lock,
  },
  {
    title: "Alertas de Proteção",
    description: "Notificações inteligentes de ignição, movimento e cercas virtuais.",
    icon: AlertTriangle,
  },
  {
    title: "App de Alta Tecnologia",
    description: "Controle total na palma da mão com relatórios de performance e segurança.",
    icon: Smartphone,
  }
];

export const STATS = [
  { value: 3000, suffix: "+", label: "Clientes Atendidos" },
  { value: 99, suffix: "%", label: "Índice de Satisfação" },
  { value: 10, suffix: "+", label: "Anos de Experiência" },
];

export const TESTIMONIALS = [
  {
    name: "Ricardo Mendes",
    role: "Gestor de Frotas",
    text: "Reduzi os custos operacionais e tenho controle total sobre a localização dos veículos.",
  },
  {
    name: "Ana Souza",
    role: "Proprietária",
    text: "O suporte da FGL foi fundamental para a segurança do meu patrimônio.",
  },
  {
    name: "Carlos Ferreira",
    role: "Motorista de App",
    text: "Investimento necessário para quem trabalha nas ruas. Tecnologia confiável.",
  }
];

export const PARTNERS = [];