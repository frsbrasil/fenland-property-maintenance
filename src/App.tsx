import React, { useState, useEffect, useMemo, useRef } from 'react';
import DottedMap from 'dotted-map';
import { motion, AnimatePresence } from 'motion/react';
import {
    Phone,
    Menu,
    X,
    ChevronRight,
    Star,
    Award,
    ShieldCheck,
    Clock,
    ArrowRight,
    Wrench,
    Paintbrush,
    Zap,
    Hammer,
    Leaf,
    Mail,
    CheckCircle2,
    CalendarCheck,
    Sparkles,
    Building2,
    MapPin,
    MessageSquare,
} from 'lucide-react';

// ─── Constants ───────────────────────────────────────────────────────────────
const PHONE_DISPLAY = '07384 631028';
const PHONE_HREF = 'tel:+447384631028';
const EMAIL = 'info@fenlandmaintenance.co.uk';

// ─── Navbar ──────────────────────────────────────────────────────────────────
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`font-serif text-xl font-semibold tracking-tight transition-opacity hover:opacity-75 cursor-pointer ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
                    aria-label="Back to top"
                >
                    Fenland Property Maintenance.
                </button>

                <div className="hidden md:flex items-center space-x-7">
                    {['#services', '#service-area', '#gallery', '#reviews', '#contact'].map((href, i) => {
                        const labels = ['Serviços', 'Área', 'Galeria', 'Avaliações', 'Contato'];
                        return (
                            <a key={href} href={href} className={`text-sm font-medium tracking-wide transition-colors ${isScrolled ? 'text-neutral-600 hover:text-neutral-900' : 'text-white/80 hover:text-white'}`}>
                                {labels[i]}
                            </a>
                        );
                    })}
                    <a href={PHONE_HREF} className={`flex items-center space-x-1.5 text-sm font-semibold transition-colors ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
                        <Phone size={15} />
                        <span>{PHONE_DISPLAY}</span>
                    </a>
                    <a href="#contact" className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${isScrolled ? 'bg-neutral-900 text-white hover:bg-neutral-700' : 'bg-white text-neutral-900 hover:bg-neutral-100'}`}>
                        Orçamento Grátis
                    </a>
                </div>

                <button
                    className={`md:hidden ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4 md:hidden"
                    >
                        {[['#services', 'Serviços'], ['#service-area', 'Área'], ['#gallery', 'Galeria'], ['#reviews', 'Avaliações'], ['#contact', 'Contato']].map(([href, label]) => (
                            <a key={href} href={href} className="text-neutral-700 font-medium py-1" onClick={() => setMobileMenuOpen(false)}>{label}</a>
                        ))}
                        <a href={PHONE_HREF} className="flex items-center space-x-2 text-neutral-900 font-semibold py-1">
                            <Phone size={16} /><span>{PHONE_DISPLAY}</span>
                        </a>
                        <a href="#contact" className="bg-neutral-900 text-white px-6 py-3 rounded-full font-medium text-center mt-2" onClick={() => setMobileMenuOpen(false)}>
                            Solicitar Orçamento Grátis
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
                alt="Interior recém-pintado pela Fenland Property Maintenance"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                fetchPriority="high"
                loading="eager"
            />
            <div className="absolute inset-0 bg-neutral-900/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-neutral-900/20 to-neutral-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center mt-16">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="max-w-4xl"
            >
                {/* Social proof badge */}
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-5 py-2 mb-8">
                    <div className="flex gap-0.5 text-amber-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                    </div>
                    <span className="text-white text-sm font-medium">Avaliado em 4,9 · Mais de 60 avaliações no Google</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight mb-5">
                    Manutenção de Imóveis<br className="hidden md:block" />
                    <span className="text-neutral-200"> em Cambridgeshire</span>
                </h1>
                <p className="text-lg md:text-xl text-white/85 font-light max-w-2xl mx-auto mb-10">
                    Baseados em Ely, realizamos pintura, carpintaria, paisagismo, serviços de marido de aluguel e instalação de cozinhas e banheiros para proprietários e locadores em toda a região dos Fens.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#contact" className="bg-white text-neutral-900 px-8 py-4 rounded-full font-semibold text-base hover:bg-neutral-100 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg">
                        <span>Solicitar Orçamento Grátis</span>
                        <ArrowRight size={17} />
                    </a>
                    <a href={PHONE_HREF} className="bg-neutral-900/30 backdrop-blur-md border border-white/25 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-neutral-900/50 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
                        <Phone size={17} />
                        <span>{PHONE_DISPLAY}</span>
                    </a>
                </div>

                <p className="mt-6 text-white/60 text-sm">Seg. a Sáb., 7h às 18h. Orçamentos gratuitos e sem compromisso. Respondemos em até 2 horas.</p>
            </motion.div>
        </div>
    </section>
);

// ─── Credentials Bar ──────────────────────────────────────────────────────────
const Credentials = () => {
    const items = [
        { icon: <ShieldCheck size={22} className="text-neutral-700" />, title: 'Totalmente Segurado', subtitle: 'Cobertura de Responsabilidade Civil' },
        { icon: <Clock size={22} className="text-neutral-700" />, title: 'Mais de 10 Anos', subtitle: 'Atendendo Cambridgeshire' },
        { icon: <Award size={22} className="text-neutral-700" />, title: 'Profissional de Confiança', subtitle: 'Reconhecido Localmente Desde 2014' },
        { icon: <Star size={22} className="text-neutral-700" />, title: '4,9 Estrelas', subtitle: 'Mais de 60 Avaliações no Google' },
    ];

    return (
        <section className="bg-white py-10 border-b border-neutral-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="flex flex-col items-center text-center gap-3"
                        >
                            <div className="w-11 h-11 rounded-full bg-neutral-50 flex items-center justify-center">
                                {item.icon}
                            </div>
                            <div>
                                <p className="font-serif font-semibold text-neutral-900 text-sm md:text-base">{item.title}</p>
                                <p className="text-xs text-neutral-500 mt-0.5">{item.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ─── How It Works ─────────────────────────────────────────────────────────────
const HowItWorks = () => {
    const steps = [
        {
            icon: <MessageSquare size={26} className="text-neutral-700" />,
            step: '01',
            title: 'Entre em Contato',
            desc: 'Ligue ou preencha nosso formulário rápido. Geralmente respondemos em 2 horas e podemos visitar para orçamento na mesma semana.',
        },
        {
            icon: <CalendarCheck size={26} className="text-neutral-700" />,
            step: '02',
            title: 'Orçamento Grátis & Agendamento',
            desc: 'Visitamos, avaliamos o trabalho e entregamos um orçamento escrito e claro. Sem custos ocultos. Você escolhe a data de início.',
        },
        {
            icon: <Sparkles size={26} className="text-neutral-700" />,
            step: '03',
            title: 'Resultado Impecável',
            desc: 'Trabalhamos limpamente, protegemos seus móveis e deixamos tudo em ordem. A maioria dos nossos clientes volta para o próximo serviço.',
        },
    ];

    return (
        <section className="py-20 bg-[#faf9f6]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">Simples do Início ao Fim</h2>
                    <p className="text-neutral-500 font-light max-w-xl mx-auto">Sem complicações. Sem surpresas. Só um bom trabalho feito com cuidado.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector line (desktop) */}
                    <div className="hidden md:block absolute top-10 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-neutral-200 z-0" />
                    {steps.map((s, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.12 }}
                            className="flex flex-col items-center text-center relative z-10"
                        >
                            <div className="w-20 h-20 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center mb-5">
                                {s.icon}
                            </div>
                            <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2">{s.step}</span>
                            <h3 className="font-serif text-xl font-medium text-neutral-900 mb-3">{s.title}</h3>
                            <p className="text-neutral-500 font-light leading-relaxed text-sm max-w-xs">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-full font-medium hover:bg-neutral-700 transition-colors text-sm">
                        <Phone size={16} />
                        Ligar Agora: {PHONE_DISPLAY}
                    </a>
                </div>
            </div>
        </section>
    );
};

// ─── Landlord CTA ─────────────────────────────────────────────────────────────
const LandlordCTA = () => (
    <section className="bg-neutral-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                        <Building2 size={14} className="text-white/70" />
                        <span className="text-white/80 text-xs font-medium tracking-wider uppercase">Para Proprietários &amp; Imobiliárias</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-white leading-snug mb-6">
                        Entrega Rápida.<br />Mínima Perturbação.<br />Resultado Pronto para Locação.
                    </h2>
                    <p className="text-neutral-400 font-light leading-relaxed mb-8">
                        Trabalhamos com proprietários e imobiliárias em Ely e Cambridgeshire para colocar imóveis de volta no mercado rapidamente. Seja uma reforma ao fim do contrato, uma repintura de HMO ou manutenção contínua de portfólio, somos confiáveis, eficientes e não vamos te decepcionar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" className="bg-white text-neutral-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-neutral-100 transition-colors text-center">
                            Consulta para Proprietário
                        </a>
                        <a href={PHONE_HREF} className="border border-white/25 text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                            <Phone size={15} /> {PHONE_DISPLAY}
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {[
                        { icon: <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />, title: 'Trabalho no Fim do Contrato', desc: 'Sabemos o que as vistorias de locação exigem. Acabamentos limpos e precisos que satisfazem agentes e inquilinos.' },
                        { icon: <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />, title: 'Manutenção de Portfólio', desc: 'Manutenção regular em múltiplos imóveis. Um único ponto de contato e um padrão consistente sempre.' },
                        { icon: <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />, title: 'Agendamento Flexível', desc: 'Trabalhamos em torno dos períodos vagos, saída de inquilinos e prazos de vistoria. Disponibilidade na mesma semana é frequentemente possível.' },
                        { icon: <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />, title: 'Faturamento Claro', desc: 'Faturas detalhadas para cada serviço, fáceis de repassar a proprietários ou usar para deduções de caução.' },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10"
                        >
                            {item.icon}
                            <div>
                                <p className="text-white font-medium text-sm mb-1">{item.title}</p>
                                <p className="text-neutral-400 font-light text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// ─── Gallery ──────────────────────────────────────────────────────────────────
const Gallery = () => {
    const images = [
        { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop', alt: 'Carpintaria e prateleiras sob medida — Ely', label: 'Carpintaria, Ely' },
        { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop', alt: 'Manutenção de jardim e paisagismo — Soham', label: 'Manutenção de Jardim, Soham' },
        { src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop', alt: 'Pintura de interiores pela Fenland Property Maintenance', label: 'Pintura de Interior, March' },
        { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop', alt: 'Instalação de cozinha — Chatteris', label: 'Instalação de Cozinha, Chatteris' },
    ];

    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">Nossos Trabalhos por Cambridgeshire</h2>
                        <p className="text-lg text-neutral-500 font-light">
                            De casas em Ely a imóveis históricos em Cambridge, mantemos o mesmo alto padrão em cada serviço.
                        </p>
                    </div>
                    <a href="#contact" className="mt-6 md:mt-0 flex items-center gap-2 text-neutral-900 font-medium hover:text-neutral-600 transition-colors text-sm">
                        <span>Solicite um acabamento similar</span>
                        <ChevronRight size={15} />
                    </a>
                </div>

                {/* Uniform 2×2 grid — all images same fixed height, no overflow split */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((image, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: idx * 0.09 }}
                            className="relative group overflow-hidden rounded-2xl aspect-[1/2]"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                            />
                            {/* Label overlay */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-900/70 to-transparent px-4 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white text-xs font-medium">{image.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ─── Reviews ──────────────────────────────────────────────────────────────────
const Reviews = () => {
    const reviews = [
        {
            name: 'Eleanor Hughes',
            location: 'Grantchester, Cambridge',
            text: 'A equipe transformou nossa casa com uma atenção incrível aos detalhes. Imaculado, silencioso, e o acabamento na madeireira é simplesmente impecável. Valeu cada centavo.',
        },
        {
            name: 'David & Sarah Chen',
            location: 'Trumpington, Cambridge',
            text: 'Encontrar profissionais de confiança em Cambridgeshire é difícil — a Fenland Property Maintenance está em uma categoria à parte. Nos ajudaram com a instalação da cozinha e o resultado foi brilhante.',
        },
        {
            name: 'Marcus Thorne',
            location: 'Soham',
            text: 'Profissional do primeiro orçamento até a vistoria final. Repararam danos extensos por umidade antes de pintar e você jamais diria que o problema existiu. Super recomendado.',
        },
        {
            name: 'Janet Proctor',
            location: 'Ely',
            text: 'Uso para todos os meus imóveis alugados. Rápido, organizado e consistentemente excelente. Meus inquilinos comentam sempre sobre a ótima apresentação dos imóveis. O melhor profissional que já contratei.',
        },
        {
            name: 'Tom Whitfield',
            location: 'Newmarket',
            text: 'Contratei para uma repintura completa do exterior e foi excepcional. Identificaram problemas de apodrecimento que eu não havia notado, repararam, e a casa parece nova. Usarei novamente.',
        },
        {
            name: 'Sarah Okafor',
            location: 'Huntingdon',
            text: 'Deram um orçamento claro, cumpriram o valor e terminaram antes do prazo. Cobriram tudo com cuidado e não deixaram nenhuma sujeira. Exatamente o que se espera de um profissional.',
        },
    ];

    return (
        <section id="reviews" className="py-24 bg-[#faf9f6]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-4">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <div className="flex gap-0.5 text-amber-400">
                            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                        </div>
                        <span className="text-neutral-600 font-medium text-sm">Média 4,9 · Mais de 60 avaliações no Google</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-5">O Que Nossos Clientes Dizem</h2>
                    <p className="text-neutral-500 font-light">
                        Confiados por proprietários e locadores em Ely, Cambridge e Cambridgeshire.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="bg-white p-7 rounded-2xl border border-neutral-100 shadow-sm"
                        >
                            <div className="flex gap-1 mb-5 text-amber-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <p className="text-neutral-600 font-light leading-relaxed mb-6 text-[15px]">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-3 pt-5 border-t border-neutral-100">
                                <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-sm font-semibold text-neutral-600">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-neutral-900 text-sm">{review.name}</p>
                                    <p className="text-xs text-neutral-400 flex items-center gap-1 mt-0.5">
                                        <MapPin size={10} /> {review.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <p className="text-neutral-400 text-sm">Avaliações extraídas do Google Meu Negócio</p>
                </div>
            </div>
        </section>
    );
};

// ─── Services ─────────────────────────────────────────────────────────────────
const Services = () => {
    const services = [
        {
            title: 'Pintura & Decoração',
            description: 'Pintura de interiores e exteriores para residências e imóveis alugados. Paredes, tetos, madeireira e paredes de destaque. Materiais de qualidade e acabamento duradouro.',
            icon: <Paintbrush size={22} />,
        },
        {
            title: 'Reforma no Fim de Contrato',
            description: 'Coloque seu imóvel de volta no mercado rapidamente. Repintamos paredes, corrigimos arranhões e deixamos o imóvel em condições de locação. Frequentemente concluímos em 2 a 3 dias.',
            icon: <Building2 size={22} />,
        },
        {
            title: 'Manutenção de Imóveis',
            description: 'De torneiras com vazamento a reboco rachado, cuidamos dos serviços que se acumulam. Ideal para locadores com múltiplos imóveis ou proprietários que querem um único profissional de confiança.',
            icon: <Wrench size={22} />,
        },
        {
            title: 'Carpintaria & Marcenaria',
            description: 'Instalação de portas, prateleiras, rodapés, frisos e montagem de móveis. Tudo com acabamento profissional, não apenas montado e deixado.',
            icon: <Hammer size={22} />,
        },
        {
            title: 'Pequenos Reparos Hidráulicos & Elétricos',
            description: 'Troca de torneiras, tomadas e luminárias. Trabalho seguro e em conformidade realizado por profissionais experientes.',
            icon: <Zap size={22} />,
        },
        {
            title: 'Jardim & Área Externa',
            description: 'Reparos em cercas, tratamento de decks, pintura de alvenaria externa, limpeza de calhas e manutenção sazonal. Mantendo seu imóvel sempre com a melhor aparência por fora.',
            icon: <Leaf size={22} />,
        },
    ];

    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-5">O Que Fazemos</h2>
                    <p className="text-lg text-neutral-500 font-light">
                        Cuidado completo do imóvel, de uma repintura rápida a uma reforma completa do interior. Uma equipe confiável, um único ponto de contato.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.07 }}
                            className="p-8 rounded-2xl border border-neutral-100 bg-[#faf9f6] hover:shadow-md transition-shadow group"
                        >
                            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-neutral-900 mb-6 shadow-sm group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-serif font-semibold text-neutral-900 mb-3">{service.title}</h3>
                            <p className="text-neutral-500 font-light leading-relaxed text-sm">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="#contact" className="inline-flex items-center gap-2 border border-neutral-200 text-neutral-800 px-7 py-3.5 rounded-full font-medium text-sm hover:bg-neutral-50 transition-colors">
                        Consultar Sobre Qualquer Serviço <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

// ─── Cambridgeshire Map ───────────────────────────────────────────────────────
const CAMBS_CITIES = [
    { name: 'Ely', lat: 52.3996, lng: 0.2624, hub: true },
    { name: 'Cambridge', lat: 52.2053, lng: 0.1218 },
    { name: 'Soham', lat: 52.3339, lng: 0.3373 },
    { name: 'Newmarket', lat: 52.2457, lng: 0.4083 },
    { name: 'Huntingdon', lat: 52.3320, lng: -0.1836 },
    { name: 'Littleport', lat: 52.4601, lng: 0.3046 },
    { name: 'Burwell', lat: 52.2759, lng: 0.3263 },
    { name: 'Fordham', lat: 52.3121, lng: 0.3868 },
    { name: 'Sutton', lat: 52.3687, lng: -0.0263 },
    { name: 'Chatteris', lat: 52.4564, lng: -0.0544 },
    { name: 'St Ives', lat: 52.3298, lng: -0.0735 },
    { name: 'March', lat: 52.5533, lng: 0.0884 },
    { name: 'Sawston', lat: 52.1257, lng: 0.1757 },
    { name: 'Haverhill', lat: 52.0826, lng: 0.4394 },
    { name: 'Saffron Walden', lat: 52.0224, lng: 0.2402 },
    { name: 'Royston', lat: 52.0477, lng: -0.0210 },
];

// Bounding box slightly padded around Cambridgeshire
const LAT_MIN = 51.95, LAT_MAX = 52.60;
const LNG_MIN = -0.30, LNG_MAX = 0.52;

const CambridgeshireMap = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const W = 640, H = 420;

    const project = (lat: number, lng: number) => ({
        x: ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN)) * W,
        y: H - ((lat - LAT_MIN) / (LAT_MAX - LAT_MIN)) * H,
    });

    const hub = CAMBS_CITIES.find(c => c.hub)!;
    const hubPt = project(hub.lat, hub.lng);

    // Build curved SVG path between two points
    const curvePath = (x1: number, y1: number, x2: number, y2: number) => {
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.25;
        return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
    };

    const dots = useMemo(() => {
        const pts: { cx: number; cy: number }[] = [];
        const cols = 52, rows = 34;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                pts.push({ cx: (c / (cols - 1)) * W, cy: (r / (rows - 1)) * H });
            }
        }
        return pts;
    }, []);

    return (
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#faf9f6] border border-neutral-100 shadow-sm" style={{ aspectRatio: '640/420' }}>
            <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
                <defs>
                    {CAMBS_CITIES.filter(c => !c.hub).map((city, i) => {
                        const { x: x2, y: y2 } = project(city.lat, city.lng);
                        return (
                            <linearGradient key={i} id={`grad-${i}`} x1={hubPt.x / W} y1={hubPt.y / H} x2={x2 / W} y2={y2 / H} gradientUnits="objectBoundingBox">
                                <stop offset="0%" stopColor="#6b7280" />
                                <stop offset="100%" stopColor="#374151" />
                            </linearGradient>
                        );
                    })}
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                </defs>

                {/* Dot grid background */}
                {dots.map((d, i) => (
                    <circle key={i} cx={d.cx} cy={d.cy} r={1.2} fill="#d1d5db" opacity={0.45} />
                ))}

                {/* Connection arcs from Ely to each city */}
                {CAMBS_CITIES.filter(c => !c.hub).map((city, i) => {
                    const { x: x2, y: y2 } = project(city.lat, city.lng);
                    const d = curvePath(hubPt.x, hubPt.y, x2, y2);
                    return (
                        <motion.path
                            key={city.name}
                            d={d}
                            fill="none"
                            stroke="#9ca3af"
                            strokeWidth={1.2}
                            strokeDasharray="4 3"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.2, delay: i * 0.06, ease: 'easeOut' }}
                        />
                    );
                })}

                {/* City dots */}
                {CAMBS_CITIES.map((city) => {
                    const { x, y } = project(city.lat, city.lng);
                    return (
                        <g key={city.name}>
                            {/* Pulse ring */}
                            <motion.circle
                                cx={x} cy={y} r={city.hub ? 14 : 10}
                                fill="none"
                                stroke={city.hub ? '#374151' : '#6b7280'}
                                strokeWidth={1}
                                initial={{ scale: 0.6, opacity: 0.8 }}
                                animate={{ scale: 1.5, opacity: 0 }}
                                transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 1.5, ease: 'easeOut' }}
                                style={{ transformOrigin: `${x}px ${y}px` }}
                            />
                            {/* Main dot */}
                            <motion.circle
                                cx={x} cy={y} r={city.hub ? 6 : 4}
                                fill={city.hub ? '#1f2937' : '#4b5563'}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.4, delay: city.hub ? 0 : 0.3 }}
                            />
                            {/* Label */}
                            <motion.text
                                x={x + (city.hub ? 9 : 7)}
                                y={y + 4}
                                fontSize={city.hub ? 11 : 9}
                                fontWeight={city.hub ? '700' : '500'}
                                fill={city.hub ? '#111827' : '#374151'}
                                fontFamily="serif"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {city.name}
                            </motion.text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};

// ─── Service Area ─────────────────────────────────────────────────────────────
const ServiceArea = () => {
    const areas = [
        'Ely', 'Cambridge', 'Soham', 'Newmarket', 'Huntingdon', 'Littleport',
        'Burwell', 'Fordham', 'Sutton', 'Chatteris', 'St Ives', 'March',
        'Sawston', 'Haverhill', 'Saffron Walden', 'Royston',
    ];

    return (
        <section id="service-area" className="py-20 bg-[#faf9f6] border-t border-neutral-100 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 text-neutral-500 text-sm font-medium mb-5">
                            <MapPin size={15} className="text-neutral-400" />
                            <span className="uppercase tracking-wider text-xs">Área de Atendimento</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-5">
                            Atendemos Ely, Cambridge &amp; Região de Cambridgeshire
                        </h2>
                        <p className="text-neutral-500 font-light leading-relaxed mb-8">
                            Baseados em Ely, realizamos manutenção de imóveis, serviços de marido de aluguel, pintura, carpintaria, cozinhas e banheiros, e paisagismo em toda Cambridgeshire. Seja proprietário em Newmarket, locador em Soham ou imobiliária em Huntingdon, podemos ajudar.
                        </p>
                        <p className="text-neutral-500 font-light leading-relaxed mb-8">
                            Não tem certeza se atendemos a sua área? Ligue para nós. Somos flexíveis e frequentemente atendemos por toda a região dos Fens.
                        </p>
                        <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-neutral-700 transition-colors">
                            <Phone size={15} /> {PHONE_DISPLAY}
                        </a>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium mb-5">Áreas que Atendemos</p>
                        <CambridgeshireMap />
                    </div>
                </div>
            </div>
        </section>
    );
};

// ─── Contact ──────────────────────────────────────────────────────────────────
const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-5">Solicite Seu Orçamento Grátis</h2>
                        <p className="text-lg text-neutral-500 font-light mb-8">
                            Preencha o formulário e retornaremos em até 2 horas. Prefere falar? Ligue para nós. Sempre atendemos por telefone e não fazemos pressão.
                        </p>
                        <div className="space-y-5 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-900 shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">Ligue ou WhatsApp</p>
                                    <a href={PHONE_HREF} className="text-lg font-semibold text-neutral-900 hover:text-neutral-600 transition-colors">{PHONE_DISPLAY}</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-900 shrink-0">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">E-mail</p>
                                    <a href={`mailto:${EMAIL}`} className="text-lg font-semibold text-neutral-900 hover:text-neutral-600 transition-colors">{EMAIL}</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-900 shrink-0">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">Horário de Atendimento</p>
                                    <p className="text-base font-medium text-neutral-900">Seg.–Sáb., 7h–18h</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#faf9f6] rounded-2xl p-6 border border-neutral-100">
                            <p className="text-sm font-semibold text-neutral-900 mb-3">Por que nos escolhem</p>
                            {['Orçamentos escritos gratuitos, sem compromisso', 'Preços fixos sem custos ocultos', 'Organizados, profissionais e respeitosos com o seu lar', 'Totalmente segurados com cobertura de até £5M'].map((item) => (
                                <div key={item} className="flex items-center gap-2.5 mb-2.5 last:mb-0">
                                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                                    <span className="text-sm text-neutral-600">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#faf9f6] p-8 md:p-10 rounded-3xl border border-neutral-100">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                                    <CheckCircle2 size={32} className="text-emerald-500" />
                                </div>
                                <h3 className="text-2xl font-serif text-neutral-900 mb-3">Mensagem Recebida!</h3>
                                <p className="text-neutral-500 font-light max-w-xs">
                                    Obrigado. Entraremos em contato em até 2 horas. Se for urgente, ligue para nós: <a href={PHONE_HREF} className="text-neutral-900 font-medium underline">{PHONE_DISPLAY}</a>.
                                </p>
                            </div>
                        ) : (
                            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                                <h3 className="font-serif text-xl text-neutral-900 mb-6">Conte-nos Sobre o Seu Projeto</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label htmlFor="contact-name" className="text-sm font-medium text-neutral-700">Nome</label>
                                        <input id="contact-name" type="text" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all" placeholder="Seu nome" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="contact-phone" className="text-sm font-medium text-neutral-700">Telefone</label>
                                        <input id="contact-phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all" placeholder="Melhor número para contato" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="contact-email" className="text-sm font-medium text-neutral-700">E-mail</label>
                                    <input id="contact-email" type="email" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all" placeholder="Seu endereço de e-mail" />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="contact-service" className="text-sm font-medium text-neutral-700">Serviço Necessário</label>
                                    <select id="contact-service" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all">
                                        <option>Pintura & Decoração</option>
                                        <option>Reforma no Fim de Contrato</option>
                                        <option>Manutenção de Imóveis</option>
                                        <option>Carpintaria & Marcenaria</option>
                                        <option>Pequenos Reparos Hidráulicos & Elétricos</option>
                                        <option>Jardim & Área Externa</option>
                                        <option>Não Tenho Certeza — Preciso de Orientação</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="contact-message" className="text-sm font-medium text-neutral-700">Conte-nos Sobre o Seu Projeto</label>
                                    <textarea id="contact-message" rows={4} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all resize-none" placeholder="Ex.: Casa de 3 quartos em Ely, preciso de repintura completa antes dos novos inquilinos entrarem..." />
                                </div>
                                <button type="submit" className="w-full bg-neutral-900 text-white py-4 rounded-xl font-semibold text-sm hover:bg-neutral-700 transition-colors shadow-sm">
                                    Solicitar Orçamento Grátis
                                </button>
                                <p className="text-xs text-neutral-400 text-center">Geralmente respondemos em até 2 horas. Sem compromisso e sem pressão.</p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => (
    <footer className="bg-neutral-900 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                    <div className="font-serif text-lg font-semibold text-white mb-1">Fenland Property Maintenance.</div>
                    <p className="text-neutral-400 text-sm font-light">
                        Manutenção de imóveis, marido de aluguel, pintura, carpintaria, cozinhas, banheiros e paisagismo em Cambridgeshire.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href={PHONE_HREF} className="flex items-center gap-2 text-white font-medium text-sm hover:text-neutral-300 transition-colors">
                        <Phone size={15} /> {PHONE_DISPLAY}
                    </a>
                    <a href="#contact" className="bg-white text-neutral-900 px-5 py-2 rounded-full text-sm font-semibold hover:bg-neutral-100 transition-colors text-center">
                        Solicitar Orçamento Grátis
                    </a>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-neutral-800 text-xs text-neutral-500 font-light gap-3">
                <p>© {new Date().getFullYear()} Fenland Property Maintenance. Todos os direitos reservados.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                    <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
                </div>
            </div>
        </div>
    </footer>
);

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
    return (
        <div className="min-h-screen font-sans text-neutral-900 selection:bg-neutral-900 selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <Credentials />
                <HowItWorks />
                <LandlordCTA />
                <Gallery />
                <Reviews />
                <Services />
                <ServiceArea />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
