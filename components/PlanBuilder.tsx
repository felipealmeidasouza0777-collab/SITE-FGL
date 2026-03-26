import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, MapPin, Truck, Smartphone, CheckCircle2, ArrowRight, ChevronLeft } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

type PlanType = 'protecao' | 'rastreamento' | null;

const PlanBuilder: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedPlan, setSelectedPlan] = useState<PlanType>(null);
  
  // Options state
  const [hasBloqueador, setHasBloqueador] = useState(false);
  const [hasGuincho, setHasGuincho] = useState(false);

  // Reset options when changing plan
  useEffect(() => {
    if (selectedPlan === 'protecao') {
      setHasGuincho(true); // Always included
      setHasBloqueador(false);
    } else if (selectedPlan === 'rastreamento') {
      setHasGuincho(false);
      setHasBloqueador(false);
    }
  }, [selectedPlan]);

  const handleSelectPlan = (plan: PlanType) => {
    setSelectedPlan(plan);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    setSelectedPlan(null);
  };

  // Calculate total for Rastreamento
  const basePrice = 49.90;
  const guinchoPrice = 10.00;
  const bloqueadorPrice = 20.00;

  const calculateTotal = () => {
    let total = basePrice;
    if (hasGuincho) total += guinchoPrice;
    if (hasBloqueador) total += bloqueadorPrice;
    return total;
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const generateWhatsAppLink = () => {
    const phone = COMPANY_INFO.whatsapp;
    let text = "";

    if (selectedPlan === 'protecao') {
      text = `Olá, entrei pelo site e gostaria de fazer uma cotação do Plano de Proteção Veicular.

Tenho interesse em:

- Proteção 100% FIPE
- Rastreamento incluso
- Guincho 2x ao ano
- Bloqueador: ${hasBloqueador ? 'Sim' : 'Não'}

Poderia me passar os valores e condições?`;
    } else if (selectedPlan === 'rastreamento') {
      text = `Olá, entrei pelo site e montei meu plano de rastreamento.

Opções escolhidas:

- Rastreamento Veicular
- Guincho: ${hasGuincho ? 'Sim' : 'Não'}
- Bloqueador: ${hasBloqueador ? 'Sim' : 'Não'}

Plano mensal: ${formatCurrency(calculateTotal())}

Gostaria de dar continuidade.`;
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="plan-builder" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-heading font-bold text-xs uppercase tracking-widest mb-3 block">
            Personalize sua Segurança
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            Monte seu Plano de <span className="text-primary">Proteção Veicular 🚗</span>
          </h2>
          <p className="text-dark/60 font-sans max-w-2xl mx-auto text-base md:text-lg">
            Escolha a opção que melhor atende às suas necessidades. Transparência total e sem surpresas.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl shadow-primary/5 border border-gray-100 overflow-hidden min-h-[600px] flex flex-col">
          
          {/* Progress Bar */}
          <div className="flex bg-gray-50 border-b border-gray-100">
            <div className={`flex-1 py-4 text-center font-heading font-bold text-sm transition-colors duration-300 ${step === 1 ? 'text-primary border-b-2 border-primary bg-primary/5' : 'text-gray-400'}`}>
              1. Escolha do Plano
            </div>
            <div className={`flex-1 py-4 text-center font-heading font-bold text-sm transition-colors duration-300 ${step === 2 ? 'text-primary border-b-2 border-primary bg-primary/5' : 'text-gray-400'}`}>
              2. Configuração
            </div>
          </div>

          <div className="p-6 md:p-10 flex-1 relative">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: PLAN SELECTION */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-6 md:gap-8 h-full"
                >
                  {/* Card 1: Proteção */}
                  <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-primary transition-all duration-300 p-6 md:p-8 flex flex-col relative group shadow-sm hover:shadow-xl hover:shadow-primary/5">
                    <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">
                      RECOMENDADO
                    </div>
                    
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Shield className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h3 className="font-heading font-extrabold text-2xl text-dark mb-3">
                      Plano de Proteção Veicular
                    </h3>
                    
                    <p className="text-dark/70 font-sans text-sm mb-6 leading-relaxed">
                      Proteção completa com cobertura de 100% da Tabela FIPE em caso de roubo ou furto.
                    </p>
                    
                    <div className="space-y-3 mb-8 flex-1">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-dark/80 font-medium">Rastreamento veicular incluso</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-dark/80 font-medium">Guincho 2x ao ano incluso</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-dark/80 font-medium">Sem taxa de adesão</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-xl mb-6 border border-gray-100">
                      <p className="text-center text-sm font-bold text-dark/80">
                        Valor sob consulta com especialista
                      </p>
                    </div>
                    
                    <button 
                      onClick={() => handleSelectPlan('protecao')}
                      className="w-full py-4 bg-dark text-white rounded-xl font-heading font-bold uppercase tracking-widest text-sm hover:bg-primary transition-colors flex items-center justify-center gap-2"
                    >
                      Quero Proteção Completa <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card 2: Rastreamento */}
                  <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-primary transition-all duration-300 p-6 md:p-8 flex flex-col relative group shadow-sm hover:shadow-xl hover:shadow-primary/5">
                    <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                      <MapPin className="w-7 h-7 text-dark group-hover:text-primary transition-colors" />
                    </div>
                    
                    <h3 className="font-heading font-extrabold text-2xl text-dark mb-3">
                      Plano de Rastreamento
                    </h3>
                    
                    <p className="text-dark/70 font-sans text-sm mb-6 leading-relaxed">
                      Monte seu plano de rastreamento com opções personalizadas.
                    </p>
                    
                    <div className="space-y-3 mb-8 flex-1">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-dark/80 font-medium">Monitoramento em tempo real</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-dark/80 font-medium">Acesso via Aplicativo</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-dark/80 font-medium">Histórico de rotas</span>
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 p-4 rounded-xl mb-6 border border-primary/10">
                      <p className="text-center text-sm font-medium text-primary">
                        A partir de <span className="font-bold text-xl block mt-1">R$ 49,90/mês</span>
                      </p>
                    </div>
                    
                    <button 
                      onClick={() => handleSelectPlan('rastreamento')}
                      className="w-full py-4 bg-white border-2 border-dark text-dark rounded-xl font-heading font-bold uppercase tracking-widest text-sm hover:bg-dark hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                      Montar meu Plano <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: CONFIGURATION */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <button 
                    onClick={handleBack}
                    className="flex items-center gap-2 text-dark/60 hover:text-primary font-sans text-sm font-medium mb-6 transition-colors w-fit"
                  >
                    <ChevronLeft className="w-4 h-4" /> Voltar para planos
                  </button>

                  <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 flex-1">
                    
                    {/* Left: Options */}
                    <div className="lg:col-span-3 space-y-6">
                      <h3 className="font-heading font-extrabold text-2xl text-dark mb-6">
                        Configure seu plano
                      </h3>

                      {/* Base Item (Always checked) */}
                      <div className="p-5 rounded-2xl border-2 border-primary bg-primary/5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-dark text-base">Rastreamento Veicular</h4>
                            <p className="text-xs text-dark/60 mt-1">Monitoramento 24h via App</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {selectedPlan === 'rastreamento' ? (
                            <span className="font-bold text-primary">R$ 49,90/mês</span>
                          ) : (
                            <span className="font-bold text-primary text-sm">Incluso</span>
                          )}
                        </div>
                      </div>

                      {/* Guincho Option */}
                      <label className={`p-5 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all duration-200 ${hasGuincho ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/30 bg-white'}`}>
                        <div className="flex items-center gap-4">
                          <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${hasGuincho ? 'bg-primary border-primary' : 'border-gray-300'}`}>
                            {hasGuincho && <CheckCircle2 className="w-4 h-4 text-white" />}
                          </div>
                          <div>
                            <h4 className="font-bold text-dark text-base flex items-center gap-2">
                              <Truck className="w-4 h-4 text-dark/60" /> Guincho 2x ao ano
                            </h4>
                            <p className="text-xs text-dark/60 mt-1">Assistência para reboque</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {selectedPlan === 'protecao' ? (
                            <span className="font-bold text-primary text-sm">Incluso</span>
                          ) : (
                            <span className="font-bold text-dark">+ R$ 10,00/mês</span>
                          )}
                        </div>
                        {/* Hidden checkbox for accessibility */}
                        <input 
                          type="checkbox" 
                          className="hidden" 
                          checked={hasGuincho}
                          onChange={() => {
                            if (selectedPlan !== 'protecao') {
                              setHasGuincho(!hasGuincho);
                            }
                          }}
                          disabled={selectedPlan === 'protecao'}
                        />
                      </label>

                      {/* Bloqueador Option */}
                      <label className={`p-5 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all duration-200 ${hasBloqueador ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/30 bg-white'}`}>
                        <div className="flex items-center gap-4">
                          <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${hasBloqueador ? 'bg-primary border-primary' : 'border-gray-300'}`}>
                            {hasBloqueador && <CheckCircle2 className="w-4 h-4 text-white" />}
                          </div>
                          <div>
                            <h4 className="font-bold text-dark text-base flex items-center gap-2">
                              <Smartphone className="w-4 h-4 text-dark/60" /> Bloqueador Veicular via App
                            </h4>
                            <p className="text-xs text-dark/60 mt-1">Corte de ignição remoto</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-dark">+ R$ 20,00/mês</span>
                        </div>
                        {/* Hidden checkbox for accessibility */}
                        <input 
                          type="checkbox" 
                          className="hidden" 
                          checked={hasBloqueador}
                          onChange={() => setHasBloqueador(!hasBloqueador)}
                        />
                      </label>

                    </div>

                    {/* Right: Summary */}
                    <div className="lg:col-span-2">
                      <div className="bg-dark rounded-3xl p-6 md:p-8 text-white sticky top-24 shadow-2xl shadow-dark/20">
                        <h3 className="font-heading font-bold text-lg text-white/90 mb-6 border-b border-white/10 pb-4">
                          Resumo do seu plano
                        </h3>
                        
                        <div className="mb-6">
                          <div className="text-primary font-bold text-sm uppercase tracking-wider mb-2">
                            Tipo de Plano
                          </div>
                          <div className="text-xl font-heading font-extrabold">
                            {selectedPlan === 'protecao' ? 'Proteção Veicular' : 'Rastreamento'}
                          </div>
                        </div>

                        <div className="space-y-3 mb-8">
                          <div className="flex items-center gap-2 text-sm text-white/80">
                            <CheckCircle2 className="w-4 h-4 text-primary" /> Rastreamento Veicular
                          </div>
                          {hasGuincho && (
                            <div className="flex items-center gap-2 text-sm text-white/80">
                              <CheckCircle2 className="w-4 h-4 text-primary" /> Guincho 2x ao ano
                            </div>
                          )}
                          {hasBloqueador && (
                            <div className="flex items-center gap-2 text-sm text-white/80">
                              <CheckCircle2 className="w-4 h-4 text-primary" /> Bloqueador Veicular via App
                            </div>
                          )}
                        </div>

                        <div className="bg-white/10 rounded-2xl p-5 mb-8 border border-white/5">
                          <div className="text-white/60 text-sm mb-1">Valor Mensal</div>
                          {selectedPlan === 'protecao' ? (
                            <div>
                              <div className="text-lg font-bold text-white leading-tight mb-2">
                                Valor sob consulta
                              </div>
                              <p className="text-xs text-white/50 leading-relaxed">
                                Um especialista irá calcular a melhor condição para o seu veículo.
                              </p>
                            </div>
                          ) : (
                            <div>
                              <div className="text-3xl font-heading font-black text-primary mb-2">
                                {formatCurrency(calculateTotal())}/mês
                              </div>
                              <p className="text-xs text-white/50 leading-relaxed">
                                Seu plano mensal: {formatCurrency(calculateTotal())}
                              </p>
                            </div>
                          )}
                        </div>

                        <a 
                          href={generateWhatsAppLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-heading font-bold uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
                        >
                          Falar com um Especialista
                        </a>
                        
                        {/* Trust Elements */}
                        <div className="mt-6 space-y-2">
                          <div className="flex items-center gap-2 text-xs text-white/60">
                            <CheckCircle2 className="w-3 h-3 text-primary" /> Sem taxa de adesão no plano de proteção
                          </div>
                          <div className="flex items-center gap-2 text-xs text-white/60">
                            <CheckCircle2 className="w-3 h-3 text-primary" /> Instalação rápida
                          </div>
                          <div className="flex items-center gap-2 text-xs text-white/60">
                            <CheckCircle2 className="w-3 h-3 text-primary" /> Atendimento especializado
                          </div>
                          <div className="flex items-center gap-2 text-xs text-white/60">
                            <CheckCircle2 className="w-3 h-3 text-primary" /> Segurança para seu veículo em tempo real
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanBuilder;
