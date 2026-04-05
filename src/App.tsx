/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  MapPin, 
  CheckCircle2, 
  Calendar, 
  UserRound, 
  Sparkles,
  ChevronRight,
  X,
  ArrowRight
} from 'lucide-react';

// --- Constants & Data ---

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5519971382006&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+a+Dra.+Camila+.&type=phone_number&app_absent=0";
const INSTAGRAM_URL = "https://www.instagram.com/dracamila.castro/";

const IMAGES = {
  hero: "https://i.imgur.com/H2SwaeR.jpeg",
  authority: [
    "https://i.imgur.com/thxsTOz.png",
    "https://i.imgur.com/PWuhaPF.png",
    "https://i.imgur.com/3ZWhFiy.png",
    "https://i.imgur.com/bV7CAId.png",
    "https://i.imgur.com/Tc8DZeR.png"
  ],
  results: [
    "https://i.imgur.com/sF1Ufb3.jpeg",
    "https://i.imgur.com/ugzAhFm.jpeg",
    "https://i.imgur.com/m2G8vA5.jpeg",
    "https://i.imgur.com/nKZ8tIc.jpeg",
    "https://i.imgur.com/A6JBNro.png",
    "https://i.imgur.com/RQ19BxD.jpeg"
  ]
};

// --- Components ---

const CTAButton = ({ className = "", text = "AGENDAR CONSULTA AGORA" }) => (
  <div className="flex flex-col items-center gap-2 w-full max-w-md mx-auto">
    <a 
      href={WHATSAPP_URL} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`btn-primary flex items-center justify-center gap-2 w-full ${className}`}
    >
      <MessageCircle size={20} />
      {text}
    </a>
    <span className="text-xs text-brand-brown-light font-medium uppercase tracking-widest flex items-center gap-1">
      <Sparkles size={12} /> Resposta rápida via WhatsApp
    </span>
  </div>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-10 text-center">
    {subtitle && <span className="text-brand-brown font-medium tracking-[0.2em] uppercase text-xs mb-2 block">{subtitle}</span>}
    <h2 className="text-3xl md:text-4xl text-brand-brown-dark font-semibold leading-tight">{title}</h2>
    <div className="h-1 w-12 bg-brand-brown-light mx-auto mt-4 rounded-full"></div>
  </div>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen selection:bg-brand-brown-light selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="bg-white pt-10 md:pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Container - Decreased size and rounded corners */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="max-w-[420px] mx-auto md:max-w-none overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-brand-beige">
              <img 
                src={IMAGES.hero} 
                alt="Dra. Camila Castro" 
                className="w-full h-auto block"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Text Content - Better distribution */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-beige text-brand-brown text-xs font-bold tracking-widest uppercase mb-8">
              <Sparkles size={14} /> Reabilitação & Estética
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-brown-dark leading-[1.1] mb-8">
              Eu sou a Dra. Camila Castro, e meu propósito é devolver o seu <span className="italic text-brand-brown">melhor sorriso.</span>
            </h1>
            
            <div className="space-y-6 mb-10">
              <p className="text-lg text-brand-brown-dark/80 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Transformando vidas através de uma odontologia humanizada, técnica e de alta performance em Campinas.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-brand-brown-dark/60 font-medium">
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-green" /> Atendimento Exclusivo</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-green" /> Tecnologia de Ponta</span>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <CTAButton className="md:max-w-xs" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={IMAGES.authority[0]} 
                alt="Dra. Camila Castro Atendimento" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl hidden md:block max-w-xs">
              <p className="text-brand-brown-dark font-serif italic text-sm leading-relaxed">
                "Acredito em uma odontologia feita com escuta, respeito e verdade. Cada sorriso carrega uma história, e meu papel é cuidar dela com técnica, sensibilidade e resultados naturais."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle title="Excelência e Humanização" subtitle="Quem sou eu" />
            <div className="space-y-6 text-brand-brown-dark/90 leading-relaxed">
              <p>
                Acredito que cada sorriso conta uma história única. Por isso, meu foco não é apenas em dentes, mas em pessoas.
              </p>
              <p>
                Com anos de experiência em reabilitação oral e estética, busco unir a tecnologia mais avançada a um atendimento acolhedor e personalizado.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Atendimento 100% focado no paciente",
                  "Tecnologia de ponta em diagnósticos",
                  "Ambiente acolhedor e exclusivo",
                  "Especialista em Reabilitação Oral"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-brand-beige p-1 rounded-full">
                      <CheckCircle2 size={18} className="text-brand-brown" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Transformações que Inspiram" subtitle="Resultados Reais" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {IMAGES.results.map((img, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado ${index + 1}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-xs text-brand-brown-light mt-8 italic">
            *Resultados podem variar de acordo com cada caso clínico.
          </p>
        </div>
      </section>

      {/* 4. MEUS SERVIÇOS */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title="Soluções Sob Medida" subtitle="Meus Serviços" />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mb-6">
                <Sparkles className="text-brand-brown" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Estética Avançada</h3>
              <ul className="text-brand-brown-dark/70 text-sm space-y-2">
                <li>Lentes em porcelana</li>
                <li>Estética em resina</li>
                <li>Clareamento dental</li>
              </ul>
            </div>
            
            <div className="glass-card p-8 rounded-2xl text-center flex flex-col items-center border-brand-brown/10">
              <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mb-6">
                <UserRound className="text-brand-brown" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Reabilitação Oral</h3>
              <p className="text-brand-brown-dark/70 text-sm leading-relaxed">
                Tratamentos complexos para devolver a função e a harmonia do seu sorriso.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="text-brand-brown" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Prevenção</h3>
              <p className="text-brand-brown-dark/70 text-sm leading-relaxed">
                Cuidado contínuo para manter a saúde bucal e a longevidade dos seus resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="section-padding bg-brand-brown-dark text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif mb-6">Pronta para redescobrir sua confiança?</h2>
          <p className="text-white/80 mb-10 text-lg">
            Não deixe para amanhã o sorriso que você pode começar a construir hoje.
          </p>
          <CTAButton className="bg-white text-brand-brown-dark hover:bg-brand-beige" />
        </div>
      </section>

      {/* 6. DÚVIDAS COMUNS */}
      <section className="section-padding bg-brand-beige">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Esclareça Suas Dúvidas" subtitle="Dúvidas Comuns" />
          
          <div className="grid gap-6">
            {[
              {
                title: "Como funciona o atendimento?",
                desc: "Atendimento individualizado, com avaliação completa e plano de tratamento personalizado, respeitando suas necessidades e sua história."
              },
              {
                title: "Como agendar uma consulta?",
                desc: "O agendamento é feito de forma simples pelo WhatsApp."
              },
              {
                title: "Atende convênio?",
                desc: "Não, somente atendimento particular. Mas você pode solicitar reembolso no seu convênio."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3 text-brand-brown-dark flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-brown rounded-full"></div>
                  {item.title}
                </h3>
                <p className="text-brand-brown-dark/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (Bastidores) */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Cuidado e Precisão" subtitle="Experiência Camila Castro" />
          
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x scrollbar-hide">
            {IMAGES.authority.slice(1).map((img, index) => (
              <div key={index} className="min-w-[280px] md:min-w-[350px] snap-center">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={img} 
                    alt={`Bastidores ${index + 1}`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="section-padding bg-brand-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-brown/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-brown/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-brown-dark mb-8 leading-tight">
            Vamos planejar o seu novo sorriso juntos?
          </h2>
          <p className="text-xl text-brand-brown-dark/80 mb-12">
            Clique no botão abaixo para garantir sua vaga e iniciar sua transformação com a Dra. Camila Castro.
          </p>
          <CTAButton text="AGENDAR CONSULTA AGORA" />
        </div>
      </section>

      {/* 9. RODAPÉ SIMPLES */}
      <footer className="py-12 px-6 bg-brand-brown-dark text-white/90">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-serif mb-4">Dra. Camila Castro</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Dentista | Reabilitação e Estética Dental<br />
              CRO: [Inserir CRO se disponível]
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold uppercase tracking-widest text-xs mb-6 text-white/40">Onde estamos</h4>
            <div className="flex items-start gap-3 text-sm">
              <MapPin size={18} className="text-brand-brown-light shrink-0" />
              <p>
                Rua. Dr. Antônio Galízia, 181, sala 34<br />
                Cambuí, Campinas - SP, 13024-510
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold uppercase tracking-widest text-xs mb-6 text-white/40">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} Dra. Camila Castro. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-brown-light transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage} 
              alt="Lightbox" 
              className="max-w-full max-h-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp for Mobile */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl md:hidden"
      >
        <MessageCircle size={28} />
      </motion.a>

    </div>
  );
}
