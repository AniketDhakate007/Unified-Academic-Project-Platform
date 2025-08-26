import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import '../App.css';

const Landing = () => {
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const { scrollY } = useScroll();

    // Smooth parallax effects like Bykins
    const springConfig = { damping: 30, stiffness: 100 };
    const backgroundY = useSpring(useTransform(scrollY, [0, 2000], [0, -200]), springConfig);
    const heroY = useSpring(useTransform(scrollY, [0, 800], [0, -100]), springConfig);

    // Refs for intersection observer
    const heroRef = useRef(null);
    const accessRef = useRef(null);
    const timelineRef = useRef(null);
    const featuresRef = useRef(null);
    const devRef = useRef(null);

    const heroInView = useInView(heroRef, { once: false, margin: '-100px' });
    const accessInView = useInView(accessRef, { once: false, margin: '-100px' });
    const timelineInView = useInView(timelineRef, { once: false, margin: '-100px' });
    const featuresInView = useInView(featuresRef, { once: false, margin: '-100px' });
    const devInView = useInView(devRef, { once: false, margin: '-100px' });

    useEffect(() => {
        const hasLoadedBefore = sessionStorage.getItem('hasLoaded');

        if (hasLoadedBefore) {
            setIsLoaded(true);
            setHasLoaded(true);
        } else {
            const timer = setTimeout(() => {
                setIsLoaded(true);
                setHasLoaded(true);
                sessionStorage.setItem('hasLoaded', 'true');
            }, 1800);
            return () => clearTimeout(timer);
        }
    }, []);

    // Bykins-style animation variants
    const fadeUpSlow = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    // Bykins-style dark background
    const BykinsBackground = () => (
        <div className="fixed inset-0 -z-10 bg-black">
            <motion.div
                className="absolute inset-0"
                style={{ y: backgroundY }}
            >
                {/* Subtle dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

                {/* Subtle noise texture */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />
            </motion.div>
        </div>
    );

    // Bykins-style loader
    const BykinsLoader = () => (
        <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{
                opacity: isLoaded ? 0 : 1,
                pointerEvents: isLoaded ? 'none' : 'auto'
            }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div className="text-center">
                {/* Bykins-style loading */}
                <motion.div
                    className="text-white text-6xl font-black mb-8 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    PROJECT
                </motion.div>

                <motion.div
                    className="text-white text-6xl font-black mb-8 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    PORTAL
                </motion.div>

                <motion.div
                    className="w-32 h-0.5 bg-white mx-auto"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                />
            </div>
        </motion.div>
    );

    // Counter animation
    const AnimatedCounter = ({ value, suffix = '', duration = 2 }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            const target = parseFloat(value);
            const increment = target / (duration * 60);
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(current);
                }
            }, 1000 / 60);

            return () => clearInterval(timer);
        }, [value, duration]);

        return <span>{Math.floor(count)}{suffix}</span>;
    };

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            {!hasLoaded && <BykinsLoader />}
            <BykinsBackground />

            {/* Bykins-style Navigation */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: hasLoaded ? 0 : 2, ease: [0.25, 0.1, 0.25, 1] }}
                className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-black/80 border-b border-gray-800"
            >
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex items-center justify-between">
                        <motion.div
                            className="flex items-center space-x-3 cursor-pointer"
                            onClick={() => navigate('/')}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="text-2xl font-black text-white tracking-tight">
                                PROJECT PORTAL
                            </span>
                        </motion.div>

                        <div className="hidden md:flex items-center space-x-8 text-sm">
                            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-900/50">
                                <motion.div
                                    className="w-2 h-2 bg-emerald-400 rounded-full"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [1, 0.7, 1]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="text-emerald-400 font-medium">ONLINE</span>
                            </div>
                            <span className="text-gray-500 font-mono">v4.0.0</span>
                        </div>
                    </div>
                </div>
            </motion.nav>

            <main className="relative z-10">
                {/* Hero Section - Bykins Style */}
                <section
                    ref={heroRef}
                    className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
                >
                    <motion.div
                        className="max-w-7xl mx-auto text-center"
                        style={{ y: heroY }}
                        initial="hidden"
                        animate={heroInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeUpSlow}
                            className="mb-8"
                        >
                            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-12 backdrop-blur-sm">
                                <motion.div
                                    className="w-2 h-2 bg-white rounded-full"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span>NEW: AI-POWERED PROJECT INSIGHTS</span>
                            </div>
                        </motion.div>

                        {/* Bykins-style massive typography */}
                        <motion.h1
                            variants={fadeUpSlow}
                            className="text-7xl md:text-8xl lg:text-[12rem] font-black leading-[0.8] mb-12 tracking-tighter text-white"
                        >
                            FUTURE
                        </motion.h1>

                        <motion.h1
                            variants={fadeUpSlow}
                            className="text-7xl md:text-8xl lg:text-[12rem] font-black leading-[0.8] mb-12 tracking-tighter text-white"
                        >
                            OF PROJECT
                        </motion.h1>

                        <motion.h1
                            variants={fadeUpSlow}
                            className="text-7xl md:text-8xl lg:text-[12rem] font-black leading-[0.8] mb-16 tracking-tighter text-white"
                        >
                            MANAGEMENT
                        </motion.h1>

                        <motion.div
                            variants={fadeUpSlow}
                            className="max-w-4xl mx-auto mb-16"
                        >
                            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                                We build project management platforms people can't help but use.
                                Transforming academic workflows with intelligent automation,
                                seamless collaboration, and cutting-edge technology.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeUpSlow}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
                        >
                            <motion.button
                                className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => navigate('/student/auth')}
                            >
                                START FREE TRIAL
                            </motion.button>

                            <motion.button
                                className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-full font-semibold text-lg hover:border-white/40 backdrop-blur-sm transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                WATCH DEMO
                            </motion.button>
                        </motion.div>

                        {/* Stats - Bykins style */}
                        <motion.div
                            variants={fadeUpSlow}
                            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center"
                        >
                            <div className="border-r border-gray-800">
                                <div className="text-2xl font-bold text-white mb-2">
                                    <AnimatedCounter value="50" suffix="K+" />
                                </div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">Active Users</div>
                            </div>
                            <div className="border-r border-gray-800">
                                <div className="text-2xl font-bold text-white mb-2">
                                    <AnimatedCounter value="99.9" suffix="%" />
                                </div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">Uptime</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white mb-2">24/7</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">Support</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="text-gray-500 text-xs uppercase tracking-wider mb-4">Scroll Down</div>
                        <div className="w-px h-16 bg-gradient-to-b from-gray-500 to-transparent mx-auto"></div>
                    </motion.div>
                </section>

                {/* Choose Portal Section - Bykins Style */}
                <section
                    ref={accessRef}
                    className="min-h-screen flex items-center py-20 px-6 border-t border-gray-800"
                >
                    <motion.div
                        className="max-w-6xl mx-auto"
                        initial="hidden"
                        animate={accessInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeUpSlow}
                            className="text-center mb-20"
                        >
                            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">
                                CHOOSE YOUR
                            </h2>
                            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">
                                EXPERIENCE
                            </h2>
                            <div className="max-w-3xl mx-auto">
                                <p className="text-xl text-gray-400 leading-relaxed font-light">
                                    Tailored interfaces designed for optimal productivity and user experience
                                    in academic environments. Each portal is crafted with precision.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                {
                                    title: 'STUDENT',
                                    subtitle: 'PORTAL',
                                    description: 'Comprehensive project management suite with real-time collaboration, intelligent analytics, and AI-powered insights designed for academic excellence.',
                                    features: ['Smart Dashboard', 'Real-time Collaboration', 'Progress Analytics', 'AI Recommendations', 'Mobile Sync'],
                                    path: '/student/auth',
                                    number: '01'
                                },
                                {
                                    title: 'FACULTY',
                                    subtitle: 'PORTAL',
                                    description: 'Advanced administrative platform with intelligent course management, comprehensive analytics, automated evaluation, and detailed performance insights.',
                                    features: ['Course Management', 'Advanced Analytics', 'Auto Grading', 'Student Insights', 'Report Generation'],
                                    path: '/admin/login',
                                    number: '02'
                                }
                            ].map((card, index) => (
                                <motion.div
                                    key={card.title}
                                    variants={fadeUpSlow}
                                    className="group cursor-pointer"
                                    onClick={() => navigate(card.path)}
                                >
                                    <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-none p-12 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 group h-full">
                                        <div className="flex items-start justify-between mb-8">
                                            <div className="text-6xl font-black text-gray-700 group-hover:text-gray-600 transition-colors duration-300">
                                                {card.number}
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs text-emerald-400 font-mono mb-2 bg-emerald-400/10 px-2 py-1">
                                                    ACTIVE
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-4xl font-black mb-2 text-white group-hover:text-gray-200 transition-colors duration-300 tracking-tight">
                                            {card.title}
                                        </h3>

                                        <h3 className="text-4xl font-black mb-8 text-white group-hover:text-gray-200 transition-colors duration-300 tracking-tight">
                                            {card.subtitle}
                                        </h3>

                                        <p className="text-gray-400 mb-8 leading-relaxed text-lg font-light">
                                            {card.description}
                                        </p>

                                        <div className="space-y-3 mb-12">
                                            {card.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center space-x-4">
                                                    <div className="w-1 h-1 bg-white rounded-full" />
                                                    <span className="text-gray-300 font-light">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <motion.div
                                            className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300"
                                            whileHover={{ x: 6 }}
                                        >
                                            <span className="text-sm tracking-wide">ACCESS PORTAL</span>
                                            <motion.svg
                                                className="w-4 h-4 ml-3"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                whileHover={{ x: 3 }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </motion.svg>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* How It Works - Bykins Style */}
                <section
                    ref={timelineRef}
                    className="min-h-screen flex items-center py-20 px-6 border-t border-gray-800"
                >
                    <motion.div
                        className="max-w-6xl mx-auto"
                        initial="hidden"
                        animate={timelineInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeUpSlow}
                            className="text-center mb-20"
                        >
                            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">
                                HOW IT WORKS
                            </h2>
                            <div className="max-w-3xl mx-auto">
                                <p className="text-xl text-gray-400 leading-relaxed font-light">
                                    Get started in under 5 minutes with our streamlined process
                                    designed for immediate productivity and seamless onboarding.
                                </p>
                            </div>
                        </motion.div>

                        <div className="space-y-24">
                            {[
                                {
                                    step: '01',
                                    title: 'CHOOSE YOUR',
                                    subtitle: 'PORTAL',
                                    description: 'Select your role and access level. Each portal is optimized with role-specific features and intelligent workflows designed for maximum efficiency.'
                                },
                                {
                                    step: '02',
                                    title: 'SECURE',
                                    subtitle: 'AUTHENTICATION',
                                    description: 'Enterprise-grade security with multi-factor authentication. Set up your personalized workspace in seconds with custom preferences and settings.'
                                },
                                {
                                    step: '03',
                                    title: 'SMART',
                                    subtitle: 'DASHBOARD',
                                    description: 'Explore your intelligent dashboard with real-time analytics, AI recommendations, and comprehensive project insights tailored to your workflow.'
                                },
                                {
                                    step: '04',
                                    title: 'COLLABORATE',
                                    subtitle: '& EXCEL',
                                    description: 'Start managing projects with advanced tools, real-time collaboration, and data-driven insights for optimal results and academic excellence.'
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUpSlow}
                                    className="grid md:grid-cols-2 gap-16 items-center"
                                >
                                    <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                        <div className="text-8xl font-black text-gray-800 mb-6 leading-none">
                                            {item.step}
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-black mb-2 text-white tracking-tight leading-none">
                                            {item.title}
                                        </h3>
                                        <h3 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tight leading-none">
                                            {item.subtitle}
                                        </h3>
                                        <p className="text-xl text-gray-400 leading-relaxed font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                        <div className="w-full h-64 bg-white/[0.02] border border-white/10 rounded-none flex items-center justify-center">
                                            <div className="text-6xl font-black text-gray-700">
                                                {item.step}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Features - Bykins Style */}
                <section
                    ref={featuresRef}
                    className="min-h-screen flex items-center py-20 px-6 border-t border-gray-800"
                >
                    <motion.div
                        className="max-w-7xl mx-auto"
                        initial="hidden"
                        animate={featuresInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeUpSlow}
                            className="text-center mb-20"
                        >
                            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">
                                POWERFUL
                            </h2>
                            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">
                                FEATURES
                            </h2>
                            <div className="max-w-3xl mx-auto">
                                <p className="text-xl text-gray-400 leading-relaxed font-light">
                                    Advanced tools and intelligent automation designed to maximize
                                    productivity and streamline your workflow with cutting-edge technology.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'AI ANALYTICS',
                                    description: 'Machine learning insights with predictive analytics and intelligent recommendations.',
                                    stat: '99.8%',
                                    statLabel: 'ACCURACY'
                                },
                                {
                                    title: 'REAL-TIME COLLABORATION',
                                    description: 'Seamless team coordination with live editing and intelligent workflow management.',
                                    stat: '24/7',
                                    statLabel: 'SUPPORT'
                                },
                                {
                                    title: 'ENTERPRISE SECURITY',
                                    description: 'Military-grade encryption with advanced threat protection and access controls.',
                                    stat: '256-BIT',
                                    statLabel: 'ENCRYPTION'
                                },
                                {
                                    title: 'SMART AUTOMATION',
                                    description: 'Intelligent workflow automation with custom triggers and advanced task management.',
                                    stat: '5.2M+',
                                    statLabel: 'AUTOMATIONS'
                                },
                                {
                                    title: 'CLOUD SYNC',
                                    description: 'Universal synchronization with intelligent conflict resolution and offline support.',
                                    stat: '<15MS',
                                    statLabel: 'SYNC TIME'
                                },
                                {
                                    title: 'PREMIUM SUPPORT',
                                    description: 'Dedicated support team with priority assistance and comprehensive training.',
                                    stat: '100%',
                                    statLabel: 'SATISFACTION'
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUpSlow}
                                    className="group"
                                >
                                    <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-none p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 h-full">
                                        <div className="flex items-start justify-between mb-8">
                                            <div className="text-2xl font-black text-gray-700">
                                                0{index + 1}
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-bold text-white">{feature.stat}</div>
                                                <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">{feature.statLabel}</div>
                                            </div>
                                        </div>

                                        <h4 className="text-xl font-black mb-4 text-white tracking-tight">
                                            {feature.title}
                                        </h4>

                                        <p className="text-gray-400 leading-relaxed font-light">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Developer Section - Bykins Style */}
                <section
                    ref={devRef}
                    className="min-h-screen flex items-center py-20 px-6 border-t border-gray-800"
                >
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial="hidden"
                        animate={devInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeUpSlow} className="mb-12">
                            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">DEVELOPED BY</h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                                Built with passion and precision by a dedicated team of developers and designers
                                committed to excellence and innovation in academic technology.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeUpSlow}
                            className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-none p-12"
                        >
                            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-2xl font-black mb-6 mx-auto text-black">
                                        PP
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 text-white tracking-tight">PROJECT PORTAL TEAM</h3>
                                    <p className="text-gray-400 text-sm font-light mb-6">Full-Stack Development Excellence</p>

                                    <div className="flex items-center justify-center space-x-4">
                                        {['GITHUB', 'LINKEDIN', 'TWITTER'].map((social) => (
                                            <motion.div
                                                key={social}
                                                className="px-3 py-1 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 cursor-pointer transition-all duration-300"
                                                whileHover={{ scale: 1.05, y: -2 }}
                                            >
                                                <span className="text-xs font-medium text-white">{social}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-l border-white/20 h-32 hidden md:block" />

                                <div className="text-center md:text-left">
                                    <h4 className="text-lg font-black mb-6 text-white tracking-tight">TECH STACK</h4>
                                    <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                                        {['REACT', 'SPRING BOOT', 'MONGODB', 'TAILWIND', 'FRAMER MOTION'].map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-white/[0.05] border border-white/10 text-xs font-medium text-white"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="text-sm text-gray-500 font-light">
                                        Built with ❤️ for academic excellence
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUpSlow} className="mt-12">
                            <p className="text-gray-500 text-sm font-light italic">
                                "Empowering education through innovative technology solutions"
                            </p>
                        </motion.div>
                    </motion.div>
                </section>
            </main>

            {/* Bykins-style Footer */}
            <footer className="border-t border-gray-800 bg-black">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="md:col-span-2">
                            <div className="text-2xl font-black text-white mb-6 tracking-tight">
                                PROJECT PORTAL
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-8 max-w-lg font-light">
                                Transforming academic project management with intelligent automation,
                                seamless collaboration, and cutting-edge analytics for educational excellence.
                            </p>
                            <div className="flex space-x-4">
                                {['GH', 'LI', 'TW', 'DC'].map((social) => (
                                    <motion.div
                                        key={social}
                                        className="w-10 h-10 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 flex items-center justify-center text-white cursor-pointer transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -1 }}
                                    >
                                        <span className="text-xs font-bold">{social}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h5 className="font-black mb-6 text-white text-sm tracking-wide">QUICK LINKS</h5>
                            <div className="space-y-4">
                                {['STUDENT PORTAL', 'FACULTY PORTAL', 'DOCUMENTATION', 'API REFERENCE', 'SUPPORT'].map((link) => (
                                    <motion.div
                                        key={link}
                                        className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 text-sm font-light"
                                        whileHover={{ x: 4 }}
                                    >
                                        {link}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h5 className="font-black mb-6 text-white text-sm tracking-wide">SYSTEM STATUS</h5>
                            <div className="space-y-4">
                                {[
                                    { label: 'API', status: 'OPERATIONAL', color: 'emerald' },
                                    { label: 'DATABASE', status: '99.9%', color: 'blue' },
                                    { label: 'CDN', status: 'HEALTHY', color: 'emerald' },
                                    { label: 'SECURITY', status: 'PROTECTED', color: 'purple' }
                                ].map((item) => (
                                    <div key={item.label} className="flex justify-between items-center">
                                        <span className="text-gray-400 text-sm font-light">{item.label}</span>
                                        <span className={`text-${item.color}-400 font-medium text-sm`}>
                                            {item.status}
                                        </span>
                                    </div>
                                ))}

                                <div className="pt-4 border-t border-gray-800">
                                    <div className="flex items-center space-x-2">
                                        <motion.div
                                            className="w-2 h-2 bg-emerald-400 rounded-full"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [1, 0.7, 1]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <span className="text-sm font-mono text-emerald-400 font-medium">ALL SYSTEMS OPERATIONAL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0 font-light">
                            © 2025 Project Portal. Designed & Developed with precision.
                        </div>
                        <div className="flex items-center space-x-8 text-sm">
                            {['PRIVACY POLICY', 'TERMS OF SERVICE', 'SECURITY'].map((link) => (
                                <motion.span
                                    key={link}
                                    className="text-gray-400 hover:text-white cursor-pointer transition-colors font-light"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {link}
                                </motion.span>
                            ))}
                            <div className="flex items-center space-x-2 px-3 py-1.5 bg-emerald-950/20 border border-emerald-900/30">
                                <motion.div
                                    className="w-2 h-2 bg-emerald-400 rounded-full"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [1, 0.8, 1]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="text-emerald-400 font-mono text-xs font-bold">v4.0.0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
