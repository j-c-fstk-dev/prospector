/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Play, 
  Settings, 
  Zap, 
  ShieldCheck, 
  Thermometer, 
  Waves, 
  Droplets, 
  Sun,
  MessageCircle,
  Menu,
  X
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5512974095445?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Prospector%20III%20560.";

function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { id: 1, label: "Imagem 1: Prospector III 560 - Vista Frontal" },
    { id: 2, label: "Imagem 2: Prospector III 560 - Detalhe do Display" },
    { id: 3, id_label: "Imagem 3: Prospector III 560 - Instalação Real" },
    { id: 4, label: "Imagem 4: Prospector III 560 - Sensores NTC" },
    { id: 5, label: "Imagem 5: Prospector III 560 - Diagrama de Conexão" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative aspect-square bg-brand-light rounded-2xl overflow-hidden border border-gray-200 shadow-sm group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center p-8 text-center"
        >
          <div className="flex flex-col items-center">
            <Settings size={80} className="text-brand-medium mb-6" />
            <p className="text-brand-gray font-medium italic">
              {images[currentIndex].label || (images[currentIndex] as any).id_label}
            </p>
            <p className="mt-2 text-xs text-brand-gray/60 uppercase tracking-widest">
              Substituir por imagem oficial {currentIndex + 1}/5
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full text-brand-dark shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-20"
        aria-label="Anterior"
      >
        <ArrowRight className="rotate-180" size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full text-brand-dark shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-20"
        aria-label="Próximo"
      >
        <ArrowRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-brand-dark w-6" : "bg-brand-dark/20"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Início", href: "#hero" },
    { name: "Como funciona", href: "#como-funciona" },
    { name: "Aplicações", href: "#aplicacoes" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Especificações", href: "#especificacoes" },
    { name: "Contatos", href: "#cta" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-md shadow-sm py-2" 
            : "bg-white py-4"
        }`}
      >
        <div className="container-custom flex justify-between items-center relative">
          {/* Desktop: Logo (Left) | Mobile: Logo (Center) */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <a href="#hero">
                <img 
                  src="https://res.cloudinary.com/dr0weongo/image/upload/q_auto,f_webp,f_auto/v1775234673/3_ys6izg.png" 
                  alt="Santhiago Tecnologias Logo" 
                  className={`transition-all duration-300 object-contain ${
                    isScrolled ? "h-36" : "h-36"
                  }`}
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>

          {/* Desktop: Horizontal Menu (Center) */}
          <nav className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-fit">
            <ul className="flex items-center gap-5">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-[13px] font-semibold text-brand-dark hover:text-brand-medium transition-colors uppercase tracking-wider whitespace-nowrap"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile: Logo (Center) - Hidden on Desktop */}
          <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="#hero">
              <img 
                src="https://res.cloudinary.com/dr0weongo/image/upload/q_auto,f_webp,f_auto/v1775234673/3_ys6izg.png" loading="lazy" 
                alt="Santhiago Tecnologias Logo" 
                className={`transition-all duration-300 object-contain ${
                  isScrolled ? "h-36" : "h-36"
                }`}
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Right: Hamburger Menu (Mobile) | CTA Button (Desktop) */}
          <div className="flex items-center justify-end">
            <div className="hidden md:block">
              <a 
                href={WHATSAPP_LINK}
                className="btn-primary py-1.5 px-3 text-[12px] whitespace-nowrap"
              >
                Fale com um especialista
              </a>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-brand-dark hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 z-[60] bg-white shadow-2xl flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-gray-100">
              <span className="font-bold text-brand-dark uppercase tracking-widest text-sm">Navegação</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-brand-dark hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={28} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-6">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-semibold text-brand-dark hover:text-brand-medium transition-colors block py-2"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="p-6 border-t border-gray-100">
              <a 
                href={WHATSAPP_LINK}
                className="btn-primary w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale com um especialista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add padding to the top of the page to account for fixed header */}
      <div className="">
        <section id="hero" className="bg-white pt-40 md:pt-48 overflow-hidden pb-8">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image Carousel - First on Mobile */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 md:order-2"
              >
                <HeroCarousel />
              </motion.div>

              {/* Text Content - Second on Mobile */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1"
              >
                <h1>Mais eficiência no aquecimento solar com controle automático</h1>
                <p className="mt-6 text-brand-gray text-lg">
                  Automatize o funcionamento da bomba, reduza desperdícios e aumente o desempenho do seu sistema de aquecimento solar com um controlador térmico confiável.
                </p>
                <p className="mt-4 text-brand-medium font-semibold">
                  Ideal para instaladores, técnicos e empresas do setor
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a href={WHATSAPP_LINK} className="btn-primary">
                    Fale com um especialista
                  </a>
                  <a href="#como-funciona" className="btn-secondary">
                    Como aplicar no meu sistema
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Linha de autoridade - Removed gray background */}
          <div className="mt-16 bg-white py-8 border-y border-gray-100">
            <div className="container-custom text-center">
              <p className="text-brand-dark font-semibold text-lg md:text-xl flex items-center justify-center gap-3">
                <CheckCircle2 className="text-blue-500" size={24} />
                Mais de 4 mil unidades já aplicadas em sistemas reais de aquecimento solar
              </p>
            </div>
          </div>
        </section>

      {/* 2. PROBLEMA */}
      <section id="problema" className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2>Seu sistema pode estar perdendo eficiência</h2>
            <p className="mt-4 text-brand-gray">
              Sem um controle automático eficiente, seu sistema pode estar operando com perdas sem que você perceba:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Bombas ligando sem necessidade",
              "Desperdício de energia",
              "Baixo aproveitamento do calor solar",
              "Risco de superaquecimento",
              "Funcionamento manual ineficiente"
            ].map((item, index) => (
              <div key={index} className="bg-brand-light p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                <AlertCircle className="text-red-500 shrink-0" size={24} />
                <span className="font-medium text-brand-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUÇÃO */}
      <section id="solucao" className="section-spacing bg-brand-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-video bg-white rounded-xl flex items-center justify-center border border-gray-200">
                <p className="text-brand-gray italic">Substituir por imagem do sistema</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2>A solução é automatizar o controle</h2>
              <div className="mt-6 space-y-4">
                <p>
                  O <strong>Prospector III 560</strong> é um controlador diferencial de temperatura que gerencia automaticamente o funcionamento da bomba com base na diferença de temperatura entre os sensores.
                </p>
                <p>
                  Isso garante máxima eficiência e segurança no sistema, eliminando o erro humano e o desperdício energético.
                </p>
                <p className="font-semibold text-brand-medium mt-4">
                  Reduz custos operacionais e aumenta a eficiência do sistema automaticamente.
                </p>
                <p className="font-semibold text-brand-medium">
                  Ideal para instaladores e profissionais que buscam eficiência e confiabilidade no sistema.
                </p>
              </div>
              <div className="mt-8">
                <a href={WHATSAPP_LINK} className="btn-secondary">
                  Quero automatizar meu sistema agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMO FUNCIONA */}
      <section id="como-funciona" className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2>Como o Prospector III 560 funciona</h2>
            <p className="mt-4 text-brand-gray">O funcionamento é simples e totalmente automático:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "Passo 1", title: "Sensores monitoram temperaturas", desc: "Monitoramento constante dos coletores e do reservatório.", icon: Thermometer },
              { step: "Passo 2", title: "O controlador compara os dados", desc: "Processamento inteligente da diferença térmica em tempo real.", icon: Settings },
              { step: "Passo 3", title: "A bomba é acionada automaticamente", desc: "Circulação otimizada apenas quando há ganho térmico.", icon: Zap }
            ].map((item, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-dark text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <item.icon size={32} />
                </div>
                <div className="text-sm font-bold text-brand-medium mb-2 uppercase tracking-wider">{item.step}</div>
                <h3 className="mb-4">{item.title}</h3>
                <p className="text-brand-gray">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-brand-light p-8 rounded-2xl border border-gray-200 text-center">
            <p className="text-brand-gray italic mb-4">Substituir por diagrama simples de funcionamento</p>
            <div className="h-48 bg-white rounded-lg flex items-center justify-center border border-dashed border-gray-300">
              <Waves size={48} className="text-gray-300" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. APLICAÇÕES */}
      <section id="aplicacoes" className="section-spacing bg-brand-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2>Onde o Prospector III pode ser aplicado</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Piscinas", desc: "Aquecimento eficiente e automático da água.", icon: Waves },
              { title: "Boilers", desc: "Controle preciso para água de banho.", icon: Droplets },
              { title: "Sistemas solares", desc: "Otimização da circulação térmica.", icon: Sun }
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                <item.icon size={40} className="text-brand-medium mb-6" />
                <h3 className="mb-4">{item.title}</h3>
                <p className="text-brand-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BENEFÍCIOS + CONFIABILIDADE */}
      <section id="beneficios" className="section-spacing bg-brand-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-white">Benefícios</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              "Economia de energia",
              "Automação completa",
              "Proteção contra superaquecimento",
              "Proteção contra congelamento",
              "Maior durabilidade do sistema",
              "Fácil instalação"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 bg-brand-medium/20 p-6 rounded-xl border border-white/5">
                <CheckCircle2 className="text-blue-400 shrink-0" size={24} />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck size={200} className="text-white" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <ShieldCheck size={64} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-white text-2xl md:text-3xl mb-4">Confiabilidade para uso profissional</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Desenvolvido para suportar condições reais de operação, o Prospector III 560 entrega estabilidade, precisão e segurança para instaladores e empresas que trabalham com aquecimento solar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VÍDEO */}
      <section id="video" className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2>Veja o Prospector III em funcionamento</h2>
          </div>
          <div className="max-w-4xl mx-auto aspect-video bg-brand-dark rounded-2xl flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors z-10"></div>
            <div className="z-20 flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Play size={32} className="text-brand-dark ml-1" />
              </div>
              <p className="text-white font-semibold">Substituir por embed de vídeo oficial</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ESPECIFICAÇÕES TÉCNICAS */}
      <section id="especificacoes" className="section-spacing bg-brand-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2>Especificações técnicas</h2>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {[
                { label: "Alimentação", value: "Bivolt automático (100–240V)" },
                { label: "Saída para bomba", value: "Até 1,5 HP" },
                { label: "Capacidade", value: "Até 16A carga resistiva" },
                { label: "Sensores", value: "NTC inclusos (precisão de 1%)" },
                { label: "Interface", value: "Display para configuração" },
                { label: "Modos de operação", value: "Piscina, boiler e termostato" }
              ].map((spec, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:justify-between p-6 gap-2">
                  <span className="font-bold text-brand-dark">{spec.label}</span>
                  <span className="text-brand-gray">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. PÚBLICO-ALVO */}
      <section id="publico" className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2>Indicado para</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Instaladores de aquecimento solar",
              "Empresas do setor térmico",
              "Integradores de sistemas"
            ].map((target, index) => (
              <div key={index} className="bg-brand-light p-8 rounded-xl text-center border border-gray-100">
                <h3 className="text-brand-dark">{target}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <section id="cta" className="section-spacing bg-brand-dark text-white text-center">
        <div className="container-custom">
          <h2 className="text-white mb-8">Fale com um especialista e veja como aplicar no seu sistema</h2>
          <div className="flex flex-col items-center gap-4">
            <a href={WHATSAPP_LINK} className="btn-primary bg-white text-brand-dark hover:bg-gray-100 px-12 py-5 text-xl">
              Fale com um especialista
            </a>
            <p className="text-gray-400 text-sm">Atendimento direto com suporte técnico</p>
          </div>
        </div>
      </section>

      {/* 11. RODAPÉ */}
      <footer className="bg-brand-black text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://res.cloudinary.com/dr0weongo/image/upload/q_auto,f_webp,f_auto/v1775234673/3_ys6izg.png" loading="lazy" 
                alt="Santhiago Tecnologias Logo" 
                className="h-32 w-auto object-contain mb-6 brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <p className="text-gray-400 max-w-sm">
                Soluções para automação térmica de alta performance e confiabilidade.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Produto desenvolvido para aplicações em sistemas de aquecimento solar
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-500">Contato</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Email: <a href="mailto:contato@santhtec.com.br" className="hover:text-white transition-colors">contato@santhtec.com.br</a></li>
                  <li>Telefone: (12) 97409-5445</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-500">Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
                  <li><a href="#especificacoes" className="hover:text-white transition-colors">Especificações</a></li>
                  <li><a href="#cta" className="hover:text-white transition-colors">Contato</a></li>
                  <li><a href="https://share.google/wZ4xHEfS9sCvVr2WR" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Nos avalie no Google</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Santhiago Tecnologias. Todos os direitos reservados.
          </div>
          <div className="text-center text-gray-500 text-sm mt-2">
            desenvolvido por JC Consultoria Digital
          </div>
        </div>
      </footer>
      </div>
      {/* WHATSAPP FLOATING BUTTON */}
      <motion.a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-colors overflow-hidden"
        aria-label="Falar no WhatsApp"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" loading="lazy" 
          alt="WhatsApp" 
          className="w-10 h-10"
          referrerPolicy="no-referrer"
        />
      </motion.a>
    </div>
  );
}
