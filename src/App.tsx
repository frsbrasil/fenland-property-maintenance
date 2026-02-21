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
                <img
                    src="/fenland_logo.png"
                    alt="Fenland Property Maintenance"
                    className={`h-12 w-auto object-contain transition-all duration-300 ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`}
                />

                <div className="hidden md:flex items-center space-x-7">
                    {['#services', '#service-area', '#gallery', '#reviews', '#contact'].map((href, i) => {
                        const labels = ['Services', 'Areas', 'Gallery', 'Reviews', 'Contact'];
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
                        Free Quote
                    </a>
                </div>

                <button
                    className={`md:hidden ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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
                        {[['#services', 'Services'], ['#service-area', 'Areas'], ['#gallery', 'Gallery'], ['#reviews', 'Reviews'], ['#contact', 'Contact']].map(([href, label]) => (
                            <a key={href} href={href} className="text-neutral-700 font-medium py-1" onClick={() => setMobileMenuOpen(false)}>{label}</a>
                        ))}
                        <a href={PHONE_HREF} className="flex items-center space-x-2 text-neutral-900 font-semibold py-1">
                            <Phone size={16} /><span>{PHONE_DISPLAY}</span>
                        </a>
                        <a href="#contact" className="bg-neutral-900 text-white px-6 py-3 rounded-full font-medium text-center mt-2" onClick={() => setMobileMenuOpen(false)}>
                            Get a Free Quote
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
                alt="Freshly painted interior by Cambridge Property Care"
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
                    <span className="text-white text-sm font-medium">Rated 4.9 · 60+ Google Reviews</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight mb-5">
                    Property Maintenance<br className="hidden md:block" />
                    <span className="text-neutral-200"> Across Cambridgeshire</span>
                </h1>
                <p className="text-lg md:text-xl text-white/85 font-light max-w-2xl mx-auto mb-10">
                    Based in Ely, we carry out painting, carpentry, landscaping, handyman work and kitchen and bathroom fitting for homeowners and landlords across the fens.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#contact" className="bg-white text-neutral-900 px-8 py-4 rounded-full font-semibold text-base hover:bg-neutral-100 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg">
                        <span>Get a Free Quote</span>
                        <ArrowRight size={17} />
                    </a>
                    <a href={PHONE_HREF} className="bg-neutral-900/30 backdrop-blur-md border border-white/25 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-neutral-900/50 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
                        <Phone size={17} />
                        <span>{PHONE_DISPLAY}</span>
                    </a>
                </div>

                <p className="mt-6 text-white/60 text-sm">Mon to Sat, 7am to 6pm. Free quotes with no obligation. We usually reply within 2 hours.</p>
            </motion.div>
        </div>
    </section>
);

// ─── Credentials Bar ──────────────────────────────────────────────────────────
const Credentials = () => {
    const items = [
        { icon: <ShieldCheck size={22} className="text-neutral-700" />, title: 'Fully Insured', subtitle: 'Public Liability Cover' },
        { icon: <Clock size={22} className="text-neutral-700" />, title: '10+ Years', subtitle: 'Serving Cambridgeshire' },
        { icon: <Award size={22} className="text-neutral-700" />, title: 'Reliable Tradesman', subtitle: 'Trusted Locally Since 2014' },
        { icon: <Star size={22} className="text-neutral-700" />, title: '4.9 Stars', subtitle: '60+ Google Reviews' },
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
            title: 'Get in Touch',
            desc: 'Call us or fill in our quick form. We usually respond within 2 hours and can visit for a quote the same week.',
        },
        {
            icon: <CalendarCheck size={26} className="text-neutral-700" />,
            step: '02',
            title: 'Free Quote & Schedule',
            desc: 'We visit, assess the work and give you a clear written quote. No hidden costs. You choose a start date that suits you.',
        },
        {
            icon: <Sparkles size={26} className="text-neutral-700" />,
            step: '03',
            title: 'Pristine Results',
            desc: 'We work cleanly, protect your furniture and leave the place spotless. Most of our clients come back to us for their next job.',
        },
    ];

    return (
        <section className="py-20 bg-[#faf9f6]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">Simple From Start to Finish</h2>
                    <p className="text-neutral-500 font-light max-w-xl mx-auto">We keep things straightforward. No chasing, no surprises, just good work done properly.</p>
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
                        Call Now: {PHONE_DISPLAY}
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
                        <span className="text-white/80 text-xs font-medium tracking-wider uppercase">For Landlords &amp; Letting Agents</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-white leading-snug mb-6">
                        Fast Turnarounds.<br />Minimal Disruption.<br />Tenancy-Ready Results.
                    </h2>
                    <p className="text-neutral-400 font-light leading-relaxed mb-8">
                        We work with landlords and letting agents across Ely and Cambridgeshire to get properties back on the market quickly. Whether it is an end-of-tenancy clean-up, an HMO repaint or ongoing maintenance across a portfolio, we are reliable, efficient and we will not let you down.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" className="bg-white text-neutral-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-neutral-100 transition-colors text-center">
                            Property Owner Enquiry
                        </a>
                        <a href={PHONE_HREF} className="border border-white/25 text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                            <Phone size={15} /> {PHONE_DISPLAY}
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {[
                        { icon: <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />, title: 'End-of-Tenancy Work', desc: 'We know what letting inspections look for. Clean, crisp finishes that satisfy agents and tenants alike.' },
                        { icon: <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />, title: 'Portfolio Maintenance', desc: 'Regular maintenance across multiple properties. One point of contact and a consistent standard every time.' },
                        { icon: <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />, title: 'Flexible Scheduling', desc: 'We work around void periods, tenant move-outs and inspection timelines. Same-week availability is often possible.' },
                        { icon: <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />, title: 'Clear Invoicing', desc: 'Detailed invoices for every job, easy to pass on to landlords or use for tenant deposit deductions.' },
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
        { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop', alt: 'Carpentry and fitted shelving — Ely', label: 'Fitted Carpentry, Ely' },
        { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop', alt: 'Garden maintenance and landscaping — Soham', label: 'Garden Maintenance, Soham' },
        { src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop', alt: 'Interior painting and decorating by Fenland Property Maintenance', label: 'Interior Painting, March' },
        { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop', alt: 'Kitchen fitting — Chatteris', label: 'Kitchen Fitting, Chatteris' },
    ];

    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">Our Work Across Cambridgeshire</h2>
                        <p className="text-lg text-neutral-500 font-light">
                            From Ely townhouses to Cambridge period homes, we hold the same high standard on every job.
                        </p>
                    </div>
                    <a href="#contact" className="mt-6 md:mt-0 flex items-center gap-2 text-neutral-900 font-medium hover:text-neutral-600 transition-colors text-sm">
                        <span>Request a similar finish</span>
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
            text: 'The team transformed our Victorian townhouse with incredible attention to detail. Immaculate, quiet, and the finish on the woodwork is simply flawless. Worth every penny.',
        },
        {
            name: 'David & Sarah Chen',
            location: 'Trumpington, Cambridge',
            text: 'Finding reliable tradespeople in Cambridgeshire is hard — Fenland Property Maintenance are in a league of their own. They helped us with our kitchen fitting and the result was brilliant.',
        },
        {
            name: 'Marcus Thorne',
            location: 'Soham',
            text: 'Professional from the first quote to the final walkthrough. They repaired extensive water damage before painting and you would never know it was there. Highly recommended.',
        },
        {
            name: 'Janet Proctor',
            location: 'Ely',
            text: 'I use them for all my rental properties. Fast, tidy, and consistently brilliant. My tenants comment on how well the properties are presented. The best trade I have ever found.',
        },
        {
            name: 'Tom Whitfield',
            location: 'Newmarket',
            text: 'Booked them for a full exterior repaint and they were outstanding. They flagged some rot issues I hadn\'t noticed, repaired them, and the house looks like new. Will use again.',
        },
        {
            name: 'Sarah Okafor',
            location: 'Huntingdon',
            text: 'Gave us a clear quote, stuck to it, and completed ahead of schedule. Covered everything carefully and left zero mess. Exactly what you want from a tradesperson.',
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
                        <span className="text-neutral-600 font-medium text-sm">4.9 average · 60+ Google Reviews</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-5">What Our Customers Say</h2>
                    <p className="text-neutral-500 font-light">
                        Trusted by homeowners and landlords across Ely, Cambridge, and Cambridgeshire.
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
                    <p className="text-neutral-400 text-sm">Reviews sourced from Google Business Profile</p>
                </div>
            </div>
        </section>
    );
};

// ─── Services ─────────────────────────────────────────────────────────────────
const Services = () => {
    const services = [
        {
            title: 'Painting & Decorating',
            description: 'Interior and exterior painting for homes and rental properties. Walls, ceilings, woodwork and feature walls. Quality materials and a finish that lasts.',
            icon: <Paintbrush size={22} />,
        },
        {
            title: 'End-of-Tenancy Refresh',
            description: 'Get your property back on the market quickly. We repaint walls, touch up scuffs and bring properties up to a lettable standard. We often finish within 2 to 3 days.',
            icon: <Building2 size={22} />,
        },
        {
            title: 'Property Maintenance',
            description: 'From leaking taps to cracked plaster, we deal with the jobs that build up. Ideal for landlords with multiple properties or homeowners who want one trusted tradesman.',
            icon: <Wrench size={22} />,
        },
        {
            title: 'Carpentry & Joinery',
            description: 'Door hanging, shelving, skirting boards, dado rails and flat-pack assembly. All finished to a proper standard, not just put together and left.',
            icon: <Hammer size={22} />,
        },
        {
            title: 'Minor Plumbing & Electrical',
            description: 'Tap replacements, socket changes and light fittings. Safe, compliant work carried out by experienced tradespeople.',
            icon: <Zap size={22} />,
        },
        {
            title: 'Outdoor & Garden Care',
            description: 'Fence repairs, decking treatment, exterior masonry painting, gutter clearing and seasonal upkeep. Keeping your property looking its best from the outside.',
            icon: <Leaf size={22} />,
        },
    ];

    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-5">What We Do</h2>
                    <p className="text-lg text-neutral-500 font-light">
                        Full property care from a quick repaint to a complete interior refresh. One reliable team, one point of contact.
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
                        Enquire About Any Service <ArrowRight size={16} />
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
                            <span className="uppercase tracking-wider text-xs">Service Area</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-5">
                            Covering Ely, Cambridge &amp; Surrounding Cambridgeshire
                        </h2>
                        <p className="text-neutral-500 font-light leading-relaxed mb-8">
                            Based in Ely, we carry out house maintenance, handyman work, painting, carpentry, kitchens and bathrooms, and landscaping across Cambridgeshire. Whether you are a homeowner in Newmarket, a landlord in Soham or a letting agent in Huntingdon, we can help.
                        </p>
                        <p className="text-neutral-500 font-light leading-relaxed mb-8">
                            Not sure if we cover your area? Give us a call. We are flexible and regularly take on work all across the fens.
                        </p>
                        <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-neutral-700 transition-colors">
                            <Phone size={15} /> {PHONE_DISPLAY}
                        </a>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium mb-5">Areas We Cover</p>
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
                        <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-5">Get Your Free Quote</h2>
                        <p className="text-lg text-neutral-500 font-light mb-8">
                            Fill in the form and we will get back to you within 2 hours. Prefer to talk? Give us a call. Phone enquiries are always welcome and there is no hard sell.
                        </p>
                        <div className="space-y-5 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-900 shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">Call or WhatsApp</p>
                                    <a href={PHONE_HREF} className="text-lg font-semibold text-neutral-900 hover:text-neutral-600 transition-colors">{PHONE_DISPLAY}</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-900 shrink-0">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">Email Us</p>
                                    <a href={`mailto:${EMAIL}`} className="text-lg font-semibold text-neutral-900 hover:text-neutral-600 transition-colors">{EMAIL}</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-900 shrink-0">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">Working Hours</p>
                                    <p className="text-base font-medium text-neutral-900">Mon–Sat, 7am–6pm</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#faf9f6] rounded-2xl p-6 border border-neutral-100">
                            <p className="text-sm font-semibold text-neutral-900 mb-3">Why clients choose us</p>
                            {['Free written quotes, no obligation', 'Fixed prices with no hidden extras', 'Tidy, professional and respectful of your home', 'Fully insured to £5M public liability'].map((item) => (
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
                                <h3 className="text-2xl font-serif text-neutral-900 mb-3">Message Received!</h3>
                                <p className="text-neutral-500 font-light max-w-xs">
                                    Thank you. We will be in touch within 2 hours. If it is urgent, please call us on <a href={PHONE_HREF} className="text-neutral-900 font-medium underline">{PHONE_DISPLAY}</a>.
                                </p>
                            </div>
                        ) : (
                            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                                <h3 className="font-serif text-xl text-neutral-900 mb-6">Tell Us About Your Job</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label htmlFor="contact-name" className="text-sm font-medium text-neutral-700">Name</label>
                                        <input id="contact-name" type="text" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all" placeholder="Your name" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="contact-phone" className="text-sm font-medium text-neutral-700">Phone</label>
                                        <input id="contact-phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all" placeholder="Best number to call" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="contact-email" className="text-sm font-medium text-neutral-700">Email</label>
                                    <input id="contact-email" type="email" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all" placeholder="Your email address" />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="contact-service" className="text-sm font-medium text-neutral-700">Service Needed</label>
                                    <select id="contact-service" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all">
                                        <option>Painting & Decorating</option>
                                        <option>End-of-Tenancy Refresh</option>
                                        <option>Property Maintenance</option>
                                        <option>Carpentry & Joinery</option>
                                        <option>Minor Plumbing & Electrical</option>
                                        <option>Outdoor & Garden Care</option>
                                        <option>Not Sure — Need Advice</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="contact-message" className="text-sm font-medium text-neutral-700">Tell Us About Your Project</label>
                                    <textarea id="contact-message" rows={4} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all resize-none" placeholder="E.g. 3-bed semi in Ely, need full interior repaint before new tenants move in..." />
                                </div>
                                <button type="submit" className="w-full bg-neutral-900 text-white py-4 rounded-xl font-semibold text-sm hover:bg-neutral-700 transition-colors shadow-sm">
                                    Request Free Quote
                                </button>
                                <p className="text-xs text-neutral-400 text-center">We usually reply within 2 hours. No obligation and no hard sell.</p>
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
                        House maintenance, handyman work, painting, carpentry, kitchens, bathrooms and landscaping across Cambridgeshire.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href={PHONE_HREF} className="flex items-center gap-2 text-white font-medium text-sm hover:text-neutral-300 transition-colors">
                        <Phone size={15} /> {PHONE_DISPLAY}
                    </a>
                    <a href="#contact" className="bg-white text-neutral-900 px-5 py-2 rounded-full text-sm font-semibold hover:bg-neutral-100 transition-colors text-center">
                        Get a Free Quote
                    </a>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-neutral-800 text-xs text-neutral-500 font-light gap-3">
                <p>© {new Date().getFullYear()} Fenland Property Maintenance. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
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
