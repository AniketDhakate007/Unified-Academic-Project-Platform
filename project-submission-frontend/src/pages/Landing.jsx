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

    // Smooth parallax effects
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

    // Team members data for carousel
    const teamMembers = [
        {
            id: 1,
            name: 'ALEX MORRISON',
            role: 'Lead Full-Stack Developer',
            description: 'Expert in React, Node.js and cloud architecture with 5+ years in EdTech solutions.',
            image: '/api/placeholder/120/120'
        },
        {
            id: 2,
            name: 'SARAH CHEN',
            role: 'Frontend Architect',
            description: 'UI/UX specialist focused on responsive design and modern web animations.',
            image: '/api/placeholder/120/120'
        },
        {
            id: 3,
            name: 'DAVID KUMAR',
            role: 'Backend Engineer',
            description: 'Spring Boot expert with extensive experience in microservices and database optimization.',
            image: '/api/placeholder/120/120'
        },
        {
            id: 4,
            name: 'EMMA TAYLOR',
            role: 'Product Designer',
            description: 'Design systems architect creating intuitive interfaces for educational platforms.',
            image: '/api/placeholder/120/120'
        },
        {
            id: 5,
            name: 'MICHAEL RODRIGUEZ',
            role: 'DevOps Engineer',
            description: 'Kubernetes and CI/CD specialist ensuring scalable and reliable deployments.',
            image: '/api/placeholder/120/120'
        },
        {
            id: 6,
            name: 'LISA WANG',
            role: 'Quality Assurance Lead',
            description: 'Testing automation expert with focus on performance and security validation.',
            image: '/api/placeholder/120/120'
        },
        {
            id: 7,
            name: 'JAMES THOMPSON',
            role: 'Technical Product Manager',
            description: 'Bridging development and strategy with deep understanding of academic workflows.',
            image: '/api/placeholder/120/120'
        }
    ];

    // How it works data with images
    const howItWorksSteps = [
        {
            step: '01',
            title: 'CHOOSE YOUR',
            subtitle: 'PORTAL',
            description: 'Select your role and access level. Each portal is optimized with role-specific features and intelligent workflows designed for maximum efficiency.',
            image: '/api/placeholder/400/300'
        },
        {
            step: '02',
            title: 'SECURE',
            subtitle: 'AUTHENTICATION',
            description: 'Enterprise-grade security with multi-factor authentication. Set up your personalized workspace in seconds with custom preferences and settings.',
            image: '/api/placeholder/400/300'
        },
        {
            step: '03',
            title: 'SMART',
            subtitle: 'DASHBOARD',
            description: 'Explore your intelligent dashboard with real-time analytics, AI recommendations, and comprehensive project insights tailored to your workflow.',
            image: '/api/placeholder/400/300'
        },
        {
            step: '04',
            title: 'COLLABORATE',
            subtitle: '& EXCEL',
            description: 'Start managing projects with advanced tools, real-time collaboration, and data-driven insights for optimal results and academic excellence.',
            image: '/api/placeholder/400/300'
        }
    ];

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

    // Animation variants
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

    // Light version background
    const LightBackground = () => (
        <div className="fixed inset-0 -z-10 bg-gray-50">
            <motion.div
                className="absolute inset-0"
                style={{ y: backgroundY }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100" />
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />
                <motion.div
                    className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-indigo-100/10 rounded-full"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 45, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-100/15 to-pink-100/10 rounded-full"
                    animate={{
                        scale: [1, 1.15, 1],
                        rotate: [0, -30, 0],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 10
                    }}
                />
            </motion.div>
        </div>
    );

    // Light version loader
    const LightLoader = () => (
        <motion.div
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{
                opacity: isLoaded ? 0 : 1,
                pointerEvents: isLoaded ? 'none' : 'auto'
            }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div className="text-center px-4">
                <motion.div
                    className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 md:mb-8 tracking-tight"
                    style={{ fontFamily: '"Brush Script MT", cursive' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    PROJECT
                </motion.div>

                <motion.div
                    className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 md:mb-8 tracking-tight"
                    style={{ fontFamily: '"Brush Script MT", cursive' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    PORTAL
                </motion.div>

                <motion.div
                    className="w-24 sm:w-32 h-0.5 bg-gray-900 mx-auto"
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
        <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            {!hasLoaded && <LightLoader />}
            <LightBackground />

            {/* Enhanced Navigation */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: hasLoaded ? 0 : 2, ease: [0.25, 0.1, 0.25, 1] }}
                className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/90 border-b border-gray-200/50"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
                    <div className="flex items-center justify-between">
                        <motion.div
                            className="flex items-center space-x-3 cursor-pointer"
                            onClick={() => navigate('/')}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                UAPP
                            </span>
                        </motion.div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['WORK', 'ABOUT', 'SERVICES', 'CONTACT'].map((item) => (
                                <motion.div
                                    key={item}
                                    className="text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-300 relative group"
                                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                                    whileHover={{ y: -2 }}
                                >
                                    {item}
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center space-x-3 sm:space-x-6">
                            <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                                <motion.div
                                    className="w-2 h-2 bg-emerald-500 rounded-full"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [1, 0.7, 1]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="text-emerald-700 font-medium text-xs sm:text-sm" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>ONLINE</span>
                            </div>

                            <motion.button
                                className="px-4 sm:px-6 py-2 bg-gray-900 text-white rounded-full font-medium text-xs sm:text-sm hover:bg-gray-800 transition-colors duration-300"
                                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => navigate('/student/auth')}
                            >
                                GET STARTED
                            </motion.button>

                            <span className="text-gray-500 font-mono text-xs hidden lg:block">v4.0.0</span>
                        </div>
                    </div>
                </div>
            </motion.nav>

            <main className="relative z-10">
                {/* Hero Section */}
                <section
                    ref={heroRef}
                    className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden"
                >
                    <motion.div
                        className="max-w-7xl mx-auto text-center w-full"
                        style={{ y: heroY }}
                        initial="hidden"
                        animate={heroInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeUpSlow}
                            className="mb-6 sm:mb-8"
                        >
                            <div className="inline-flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 rounded-full bg-white/60 border border-gray-200 text-gray-700 text-xs sm:text-sm font-medium mb-8 sm:mb-12 backdrop-blur-sm" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                <motion.div
                                    className="w-2 h-2 bg-gray-900 rounded-full"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="whitespace-nowrap">NEW: AI-POWERED PROJECT INSIGHTS</span>
                            </div>
                        </motion.div>

                        {/* Brush Font for main headlines */}
                        <motion.h1
                            variants={fadeUpSlow}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[12rem] font-black leading-[0.8] mb-6 sm:mb-8 md:mb-12 tracking-tighter text-gray-900 break-words"
                            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                        >
                            Unified Academic
                        </motion.h1>

                        <motion.h1
                            variants={fadeUpSlow}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[12rem] font-black leading-[0.8] mb-6 sm:mb-8 md:mb-12 tracking-tighter text-gray-900 break-words"
                            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                        >
                            Projects
                        </motion.h1>

                        <motion.h1
                            variants={fadeUpSlow}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[12rem] font-black leading-[0.8] mb-10 sm:mb-12 md:mb-16 tracking-tighter text-gray-900 break-words"
                            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                        >
                            Portal
                        </motion.h1>

                        <motion.div
                            variants={fadeUpSlow}
                            className="max-w-4xl mx-auto mb-12 sm:mb-16"
                        >
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-light px-4" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                We build project management platforms people can't help but use.
                                Transforming academic workflows with intelligent automation,
                                seamless collaboration, and cutting-edge technology.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeUpSlow}
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20 px-4"
                        >
                            <motion.button
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-gray-800 transition-all duration-300"
                                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => navigate('/student/auth')}
                            >
                                START FREE TRIAL
                            </motion.button>

                            <motion.button
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-gray-300 text-gray-900 rounded-full font-semibold text-base sm:text-lg hover:border-gray-400 backdrop-blur-sm transition-all duration-300"
                                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                WATCH DEMO
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={fadeUpSlow}
                            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto text-center px-4"
                        >
                            <div className="border-r border-gray-300 pr-4">
                                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                    <AnimatedCounter value="50" suffix="K+" />
                                </div>
                                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Active Users</div>
                            </div>
                            <div className="border-r border-gray-300 pr-4">
                                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                    <AnimatedCounter value="99.9" suffix="%" />
                                </div>
                                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Uptime</div>
                            </div>
                            <div>
                                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>24/7</div>
                                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Support</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="text-gray-400 text-xs uppercase tracking-wider mb-4" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Scroll Down</div>
                        <div className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent mx-auto"></div>
                    </motion.div>
                </section>

                {/* Choose Portal Section */}
                <section
                    ref={accessRef}
                    className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-200"
                >
                    <motion.div
                        className="max-w-6xl mx-auto w-full"
                        initial="hidden"
                        animate={accessInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeUpSlow}
                            className="text-center mb-16 sm:mb-20"
                        >
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 md:mb-8 text-gray-900 tracking-tight break-words" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                CHOOSE YOUR
                            </h2>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 text-gray-900 tracking-tight break-words" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                EXPERIENCE
                            </h2>
                            <div className="max-w-3xl mx-auto px-4">
                                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                    Tailored interfaces designed for optimal productivity and user experience
                                    in academic environments. Each portal is crafted with precision.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
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
                                    <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-none p-8 sm:p-12 hover:bg-white hover:border-gray-300 transition-all duration-500 group h-full hover:shadow-lg">
                                        <div className="flex items-start justify-between mb-6 sm:mb-8">
                                            <div className="text-5xl sm:text-6xl font-black text-gray-200 group-hover:text-gray-300 transition-colors duration-300" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                                {card.number}
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs text-emerald-600 font-mono mb-2 bg-emerald-50 px-2 py-1 border border-emerald-200" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                                    ACTIVE
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-3xl sm:text-4xl font-black mb-2 text-gray-900 group-hover:text-gray-700 transition-colors duration-300 tracking-tight break-words" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                            {card.title}
                                        </h3>

                                        <h3 className="text-3xl sm:text-4xl font-black mb-6 sm:mb-8 text-gray-900 group-hover:text-gray-700 transition-colors duration-300 tracking-tight break-words" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                            {card.subtitle}
                                        </h3>

                                        <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg font-light" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                            {card.description}
                                        </p>

                                        <div className="space-y-3 mb-8 sm:mb-12">
                                            {card.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center space-x-4">
                                                    <div className="w-1 h-1 bg-gray-900 rounded-full" />
                                                    <span className="text-gray-700 font-light text-sm sm:text-base" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <motion.div
                                            className="flex items-center text-gray-900 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                                            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
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

                {/* How It Works - Updated with Images */}
                <section
                    ref={timelineRef}
                    className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-200"
                >
                    <motion.div
                        className="max-w-6xl mx-auto w-full"
                        initial="hidden"
                        animate={timelineInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeUpSlow}
                            className="text-center mb-16 sm:mb-20"
                        >
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 text-gray-900 tracking-tight break-words" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                HOW IT WORKS
                            </h2>
                            <div className="max-w-3xl mx-auto px-4">
                                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                    Get started in under 5 minutes with our streamlined process
                                    designed for immediate productivity and seamless onboarding.
                                </p>
                            </div>
                        </motion.div>

                        <div className="space-y-16 sm:space-y-24">
                            {howItWorksSteps.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUpSlow}
                                    className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center"
                                >
                                    <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                        <div className="text-6xl sm:text-7xl md:text-8xl font-black text-gray-200 mb-4 sm:mb-6 leading-none" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                            {item.step}
                                        </div>
                                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 text-gray-900 tracking-tight leading-none break-words" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                            {item.title}
                                        </h3>
                                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 text-gray-900 tracking-tight leading-none break-words" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                            {item.subtitle}
                                        </h3>
                                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                        <motion.div
                                            className="w-full h-48 sm:h-64 bg-white/60 border border-gray-200 rounded-none flex items-center justify-center backdrop-blur-sm overflow-hidden"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={`Step ${item.step}: ${item.title} ${item.subtitle}`}
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Features */}
                <section
                    ref={featuresRef}
                    className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-200"
                >
                    <motion.div
                        className="max-w-7xl mx-auto w-full"
                        initial="hidden"
                        animate={featuresInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeUpSlow}
                            className="text-center mb-16 sm:mb-20"
                        >
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 md:mb-8 text-gray-900 tracking-tight break-words" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                POWERFUL
                            </h2>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 text-gray-900 tracking-tight break-words" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                FEATURES
                            </h2>
                            <div className="max-w-3xl mx-auto px-4">
                                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                    Advanced tools and intelligent automation designed to maximize
                                    productivity and streamline your workflow with cutting-edge technology.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                                    <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-none p-6 sm:p-8 hover:bg-white hover:border-gray-300 transition-all duration-500 h-full hover:shadow-lg">
                                        <div className="flex items-start justify-between mb-6 sm:mb-8">
                                            <div className="text-xl sm:text-2xl font-black text-gray-300" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                                0{index + 1}
                                            </div>
                                            <div className="text-right">
                                                <div className="text-base sm:text-lg font-bold text-gray-900" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{feature.stat}</div>
                                                <div className="text-xs text-gray-500 uppercase tracking-wide font-medium" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{feature.statLabel}</div>
                                            </div>
                                        </div>

                                        <h4 className="text-lg sm:text-xl font-black mb-3 sm:mb-4 text-gray-900 tracking-tight break-words" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                            {feature.title}
                                        </h4>

                                        <p className="text-gray-600 leading-relaxed font-light text-sm sm:text-base" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Developer Section - Updated with 7-Card Carousel */}
                <section
                    ref={devRef}
                    className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-200"
                >
                    <motion.div
                        className="max-w-7xl mx-auto text-center w-full"
                        initial="hidden"
                        animate={devInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeUpSlow} className="mb-12 sm:mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 text-gray-900 tracking-tight break-words" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>DEVELOPED BY</h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed px-4" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                Built with passion and precision by a dedicated team of developers and designers
                                committed to excellence and innovation in academic technology.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeUpSlow}
                            className="relative"
                        >
                            {/* Carousel Container */}
                            <div className="overflow-x-auto pb-6 scrollbar-hide">
                                <div className="flex space-x-6 sm:space-x-8 min-w-max px-4">
                                    {teamMembers.map((member, index) => (
                                        <motion.div
                                            key={member.id}
                                            className="min-w-[280px] sm:min-w-[320px] bg-white/70 backdrop-blur-sm border border-gray-200 rounded-none p-6 sm:p-8 hover:shadow-xl transition-all duration-500 hover:bg-white hover:border-gray-300 group"
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="text-center">
                                                <motion.div
                                                    className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-gray-300 transition-colors duration-300"
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    <img
                                                        src={member.image}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                                    />
                                                </motion.div>

                                                <h3 className="text-lg sm:text-xl font-black mb-2 text-gray-900 tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                                    {member.name}
                                                </h3>

                                                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-4 font-medium" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                                    {member.role}
                                                </div>

                                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light mb-6" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                                    {member.description}
                                                </p>

                                                <div className="flex items-center justify-center space-x-3">
                                                    {['GH', 'LI', 'TW'].map((social) => (
                                                        <motion.div
                                                            key={social}
                                                            className="w-8 h-8 bg-white border border-gray-200 hover:border-gray-400 flex items-center justify-center cursor-pointer transition-all duration-300 group/social"
                                                            whileHover={{ scale: 1.1, y: -2 }}
                                                        >
                                                            <span className="text-xs font-bold text-gray-600 group-hover/social:text-gray-900" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{social}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Scroll indicators */}
                            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                                {Array.from({ length: Math.ceil(teamMembers.length / 2) }).map((_, index) => (
                                    <motion.div
                                        key={index}
                                        className="w-2 h-2 bg-gray-300 rounded-full"
                                        whileHover={{ scale: 1.2 }}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUpSlow} className="mt-12 sm:mt-16">
                            <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-sm border border-gray-200 rounded-none p-6 sm:p-8 hover:shadow-lg transition-all duration-500">
                                <h4 className="text-lg sm:text-xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>TECH STACK</h4>
                                <div className="flex flex-wrap gap-3 justify-center mb-4 sm:mb-6">
                                    {['REACT', 'SPRING BOOT', 'MONGODB', 'TAILWIND', 'FRAMER MOTION', 'KUBERNETES', 'DOCKER'].map((tech) => (
                                        <motion.span
                                            key={tech}
                                            className="px-3 py-1.5 bg-white border border-gray-200 text-xs font-medium text-gray-900 hover:border-gray-300 transition-colors"
                                            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                                            whileHover={{ scale: 1.05, y: -1 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className="text-sm text-gray-500 font-light" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                    Built with ❤️ for academic excellence
                                </div>
                            </div>

                            <p className="text-gray-500 text-sm font-light italic mt-8 sm:mt-12" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                "Empowering education through innovative technology solutions"
                            </p>
                        </motion.div>
                    </motion.div>
                </section>
            </main>

            {/* Light Footer */}
            <footer className="border-t border-gray-200 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
                        <div className="md:col-span-2">
                            <div className="text-xl sm:text-2xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                PROJECT PORTAL
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-lg font-light" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                Transforming academic project management with intelligent automation,
                                seamless collaboration, and cutting-edge analytics for educational excellence.
                            </p>
                            <div className="flex space-x-4">
                                {['GH', 'LI', 'TW', 'DC'].map((social) => (
                                    <motion.div
                                        key={social}
                                        className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 hover:border-gray-300 flex items-center justify-center text-gray-900 cursor-pointer transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -1 }}
                                    >
                                        <span className="text-xs font-bold" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{social}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h5 className="font-black mb-4 sm:mb-6 text-gray-900 text-sm tracking-wide" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>QUICK LINKS</h5>
                            <div className="space-y-3 sm:space-y-4">
                                {['STUDENT PORTAL', 'FACULTY PORTAL', 'DOCUMENTATION', 'API REFERENCE', 'SUPPORT'].map((link) => (
                                    <motion.div
                                        key={link}
                                        className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-300 text-sm font-light"
                                        style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                                        whileHover={{ x: 4 }}
                                    >
                                        {link}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h5 className="font-black mb-4 sm:mb-6 text-gray-900 text-sm tracking-wide" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>SYSTEM STATUS</h5>
                            <div className="space-y-3 sm:space-y-4">
                                {[
                                    { label: 'API', status: 'OPERATIONAL', color: 'emerald' },
                                    { label: 'DATABASE', status: '99.9%', color: 'blue' },
                                    { label: 'CDN', status: 'HEALTHY', color: 'emerald' },
                                    { label: 'SECURITY', status: 'PROTECTED', color: 'purple' }
                                ].map((item) => (
                                    <div key={item.label} className="flex justify-between items-center">
                                        <span className="text-gray-600 text-sm font-light" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{item.label}</span>
                                        <span className={`text-${item.color}-600 font-medium text-sm`} style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                            {item.status}
                                        </span>
                                    </div>
                                ))}

                                <div className="pt-3 sm:pt-4 border-t border-gray-300">
                                    <div className="flex items-center space-x-2">
                                        <motion.div
                                            className="w-2 h-2 bg-emerald-500 rounded-full"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [1, 0.7, 1]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <span className="text-xs sm:text-sm font-mono text-emerald-600 font-medium" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>ALL SYSTEMS OPERATIONAL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 sm:pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-500 text-sm mb-4 md:mb-0 font-light text-center md:text-left" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                            © 2025 Project Portal. Designed & Developed with precision.
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm">
                            {['PRIVACY POLICY', 'TERMS OF SERVICE', 'SECURITY'].map((link) => (
                                <motion.span
                                    key={link}
                                    className="text-gray-500 hover:text-gray-900 cursor-pointer transition-colors font-light whitespace-nowrap"
                                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {link}
                                </motion.span>
                            ))}
                            <div className="flex items-center space-x-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200">
                                <motion.div
                                    className="w-2 h-2 bg-emerald-500 rounded-full"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [1, 0.8, 1]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="text-emerald-600 font-mono text-xs font-bold" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>v4.0.0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Add custom CSS for scrollbar hide */}
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default Landing;