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
  { label: "Benefícios", href: "#benefits" },
  { label: "Contato", href: "#contact" },
];

export const FEATURES = [
  {
    title: "Rastreamento 24h",
    description: "Localização exata via satélite em tempo real, acessível pelo app ou web.",
    icon: MapPin,
  },
  {
    title: "Bloqueio Remoto",
    description: "Desative a ignição do veículo instantaneamente em caso de roubo ou furto.",
    icon: Lock,
  },
  {
    title: "Alertas Inteligentes",
    description: "Notificações de ignição, excesso de velocidade e cercas virtuais.",
    icon: AlertTriangle,
  },
  {
    title: "App Exclusivo",
    description: "Controle total na palma da mão com histórico de rotas e relatórios.",
    icon: Smartphone,
  }
];

export const STATS = [
  { value: 98, suffix: "%", label: "Índice de Recuperação" },
  { value: 24, suffix: "h", label: "Monitoramento Ativo" },
  { value: 5000, suffix: "+", label: "Veículos Protegidos" },
];

export const TESTIMONIALS = [
  {
    name: "Ricardo Mendes",
    role: "Gestor de Frotas",
    text: "Reduzi os custos operacionais em 20% e durmo tranquilo sabendo onde meus caminhões estão.",
  },
  {
    name: "Ana Souza",
    role: "Proprietária",
    text: "Recuperei meu carro em menos de 1 hora após o furto. A equipe da FGL foi sensacional.",
  },
  {
    name: "Carlos Ferreira",
    role: "Motorista de App",
    text: "Segurança é investimento. O bloqueador da FGL já salvou meu patrimônio duas vezes.",
  }
];

export const PARTNERS = [
  "GRUPO FGL", "SEGURANÇA TOTAL", "MONITORAMENTO VIP", "FROTAS BRASIL", "TECH TRACK", "AUTO GUARD"
];