import { useState, useEffect } from "react";
import { motion } from "motion/react";
import SEOHead from "./SEOHead";
import { 
  Download, 
  FileText, 
  Settings, 
  Zap, 
  ShieldCheck, 
  Thermometer, 
  Waves, 
  Droplets, 
  MessageCircle,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5512974095445?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20manual%20do%20Prospector%20III%20560.";
const MANUAL_PDF_URL = "/manual-prospector-iii-560.pdf";

function ManualPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Manual Prospector III 560 | Instalação e Configuração"
        description="Baixe o manual completo do Prospector III 560. Instruções de instalação, configuração e funcionamento do controlador de aquecimento solar."
      />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="container-custom flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/">
              <img 
                src="https://res.cloudinary.com/dr0weongo/image/upload/q_auto,f_webp,f_auto/v1775234673/3_ys6izg.png" 
                alt="Santhiago Tecnologias Logo" 
                className="h-36 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
          <a href="/" className="text-brand-medium hover:text-brand-dark transition-colors">
            Voltar para o site
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-brand-light py-20 md:py-32">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-brand-medium rounded-2xl flex items-center justify-center">
                <FileText size={40} className="text-white" />
              </div>
            </div>
            <h1 className="text-[32px] md:text-[48px] font-bold leading-tight text-brand-dark mb-6">
              Manual do Prospector III 560
            </h1>
            <p className="text-xl text-brand-gray mb-10 max-w-2xl mx-auto">
              Acesse o manual técnico completo com instruções de instalação, configuração e funcionamento do controlador de aquecimento solar.
            </p>
            <a 
              href={MANUAL_PDF_URL}
              download="manual-prospector-iii-560.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-brand-dark text-white hover:bg-brand-medium px-8 py-4 text-lg inline-flex items-center gap-3"
            >
              <Download size={20} />
              Baixar manual técnico completo (PDF)
            </a>
          </motion.div>
        </div>
      </section>

      {/* Introdução */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[24px] md:text-[32px] font-semibold leading-snug text-brand-dark mb-6">
              Sobre o manual
            </h2>
            <p className="text-lg text-brand-gray leading-relaxed">
              Este manual reúne todas as informações necessárias para instalação, configuração e uso do Prospector III 560.
            </p>
            <p className="text-lg text-brand-gray leading-relaxed mt-4">
              Indicado para instaladores, técnicos e empresas que trabalham com sistemas de aquecimento solar, o material detalha o funcionamento do controlador e suas principais aplicações.
            </p>
          </div>
        </div>
      </section>

      {/* O que você vai encontrar */}
      <section className="section-spacing bg-brand-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[24px] md:text-[32px] font-semibold leading-snug text-brand-dark mb-8">
              O que você vai encontrar no manual
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Esquemas de instalação do sistema",
                "Configuração dos modos de operação",
                "Ajustes de temperatura e parâmetros",
                "Funções de proteção (anticongelamento e superaquecimento)",
                "Descrição completa das funções do equipamento",
                "Diagnóstico e leitura do display"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <CheckCircle2 className="text-brand-medium mt-1 flex-shrink-0" size={20} />
                  <span className="text-brand-gray">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[24px] md:text-[32px] font-semibold leading-snug text-brand-dark mb-6">
              Aplicações abordadas
            </h2>
            <p className="text-lg text-brand-gray mb-8">
              O manual apresenta exemplos práticos de aplicação do Prospector III 560 em diferentes cenários:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Aquecimento de piscinas", icon: Waves },
                { title: "Sistemas com boiler para água de banho", icon: Droplets },
                { title: "Controle térmico em reservatórios", icon: Thermometer },
                { title: "Sistemas de circulação de água quente", icon: Zap }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-brand-light rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-brand-medium rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-brand-dark">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Especificações */}
      <section className="section-spacing bg-brand-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[24px] md:text-[32px] font-semibold leading-snug text-brand-dark mb-8">
              Especificações principais
            </h2>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {[
                "Alimentação bivolt automático (100-240V)",
                "Saída para bomba até 1,5 HP",
                "Capacidade de até 16A (carga resistiva)",
                "Sensores NTC inclusos (alta precisão)",
                "Modos de operação: piscina, boiler e termostato",
                "Display para configuração e diagnóstico"
              ].map((spec, index) => (
                <div key={index} className={`p-4 ${index < 5 ? 'border-b border-gray-100' : ''}`}>
                  <div className="flex items-center gap-3">
                    <Settings className="text-brand-medium" size={20} />
                    <span className="text-brand-gray">{spec}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[24px] md:text-[32px] font-semibold leading-snug text-brand-dark mb-8">
              Indicado para
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Instaladores de aquecimento solar",
                "Técnicos hidráulicos",
                "Empresas de sistemas térmicos",
                "Integradores e prestadores de serviço"
              ].map((target, index) => (
                <div key={index} className="bg-brand-light p-6 rounded-xl text-center border border-gray-100">
                  <h3 className="text-brand-dark font-semibold">{target}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Principal */}
      <section className="section-spacing bg-brand-dark text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[32px] md:text-[40px] font-bold leading-tight mb-6">
              Baixe o manual técnico completo
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Acesse todas as informações detalhadas para instalação e configuração do Prospector III 560.
            </p>
            <a 
              href={MANUAL_PDF_URL}
              download="manual-prospector-iii-560.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-brand-dark hover:bg-gray-100 px-8 py-4 text-lg inline-flex items-center gap-3"
            >
              <Download size={20} />
              Baixar manual técnico completo (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* CTA Secundário */}
      <section className="section-spacing bg-brand-light">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[32px] md:text-[40px] font-bold leading-tight text-brand-dark mb-6">
              Precisa de ajuda para aplicação?
            </h2>
            <p className="text-xl text-brand-gray mb-10">
              Fale com um especialista e tire dúvidas sobre instalação, configuração ou uso do equipamento.
            </p>
            <a 
              href={WHATSAPP_LINK}
              className="btn-primary bg-brand-dark text-white hover:bg-brand-medium px-8 py-4 text-lg inline-flex items-center gap-3"
            >
              <MessageCircle size={20} />
              Falar com um especialista
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <img 
              src="https://res.cloudinary.com/dr0weongo/image/upload/q_auto,f_webp,f_auto/v1775234673/3_ys6izg.png" 
              alt="Santhiago Tecnologias Logo" 
              className="h-32 w-auto object-contain mb-6 brightness-0 invert mx-auto"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <p className="text-gray-400 max-w-sm mx-auto mb-4">
              Soluções para automação térmica de alta performance e confiabilidade.
            </p>
            <p className="text-gray-500 text-sm">
              Produto desenvolvido para aplicações em sistemas de aquecimento solar
            </p>
            <div className="mt-8 text-center">
              <a href="/" className="text-brand-medium hover:text-white transition-colors">
                Voltar para o site principal
              </a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

export default ManualPage;
