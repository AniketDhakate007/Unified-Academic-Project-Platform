import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyProjects } from '../services/ProjectService';
<<<<<<< HEAD
import { Plus, Folder, Calendar, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
=======
import { Plus, Folder, Calendar, ArrowRight, Code, Layers, Clock, GitBranch } from 'lucide-react';
>>>>>>> feature-branch

const StudentDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [mounted, setMounted] = useState(false);
<<<<<<< HEAD
    const navigate = useNavigate();

    useEffect(() => {
        setMounted(true);
        setIsLoading(true);

        const timer = setTimeout(() => {
            getMyProjects()
                .then(res => {
                    setProjects(res.data);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.error('Error fetching projects', err);
                    setIsLoading(false);
                });
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 relative overflow-hidden">
            {/* Rich Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

                {/* Geometric Patterns */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(51_65_85)_1px,transparent_0)] bg-[size:24px_24px]"></div>
                </div>

                {/* Subtle Grid Lines */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(51,65,85,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(51,65,85,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-10 w-2 h-2 bg-blue-300/40 rounded-full animate-bounce delay-500"></div>
                <div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-purple-300/40 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute bottom-32 right-1/3 w-2.5 h-2.5 bg-indigo-300/40 rounded-full animate-bounce delay-1500"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Enhanced Header Section */}
                <header className={`mb-12 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-blue-700 bg-blue-50/80 backdrop-blur-sm border border-blue-200/60 rounded-full shadow-sm">
                            <Sparkles className="w-4 h-4" />
                            Creative Workspace
                        </div>
                        <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                            Your Projects
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Manage and organize your creative work with style and precision
                        </p>
                    </div>

                    {/* Enhanced Stats Section */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                        <div className="grid grid-cols-3 gap-6 w-full max-w-2xl">
                            <div className="group bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 text-center hover:bg-white/90 hover:border-slate-300/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                    <Folder className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-2xl font-bold text-slate-800">{projects.length}</div>
                                <div className="text-sm text-slate-600">Active</div>
                            </div>
                            <div className="group bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 text-center hover:bg-white/90 hover:border-slate-300/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-2xl font-bold text-slate-800">24h</div>
                                <div className="text-sm text-slate-600">This Week</div>
                            </div>
                            <div className="group bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 text-center hover:bg-white/90 hover:border-slate-300/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-2xl font-bold text-slate-800">98%</div>
                                <div className="text-sm text-slate-600">Complete</div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced CTA Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={() => navigate('/student/create')}
                            className="group relative overflow-hidden px-8 py-4 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 hover:from-slate-900 hover:via-blue-900 hover:to-indigo-900"
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out"></div>

                            <div className="relative flex items-center gap-3">
                                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                                <span className="tracking-wide">Create New Project</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </button>
                    </div>
                </header>

                {/* Enhanced Projects Grid */}
                <main className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    {isLoading ? (
                        <LoadingSkeleton />
                    ) : projects.length === 0 ? (
                        <EmptyState navigate={navigate} />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onClick={() => navigate(`/student/project/${project.id}`)}
                                    index={index}
                                />
                            ))}
=======
    const [isDark, setIsDark] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Detect system theme preference
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDark(darkModeMediaQuery.matches);

        const handleThemeChange = (e) => {
            setIsDark(e.matches);
        };

        darkModeMediaQuery.addEventListener('change', handleThemeChange);

        setMounted(true);
        setIsLoading(true);
        getMyProjects()
            .then(res => {
                setProjects(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error('Error fetching projects', err);
                setIsLoading(false);
            });

        return () => darkModeMediaQuery.removeEventListener('change', handleThemeChange);
    }, []);

    const theme = {
        bg: isDark ? 'bg-[#0d1117]' : 'bg-[#ffffff]',
        cardBg: isDark ? 'bg-[#161b22]' : 'bg-white',
        border: isDark ? 'border-[#30363d]' : 'border-[#d1d9e0]',
        text: {
            primary: isDark ? 'text-[#f0f6fc]' : 'text-[#1f2328]',
            secondary: isDark ? 'text-[#8d96a0]' : 'text-[#656d76]',
            muted: isDark ? 'text-[#7d8590]' : 'text-[#848d97]'
        },
        accent: isDark ? 'bg-[#238636]' : 'bg-[#1f883d]',
        accentHover: isDark ? 'hover:bg-[#2ea043]' : 'hover:bg-[#1a7f37]',
        button: isDark ? 'bg-[#21262d] hover:bg-[#30363d]' : 'bg-[#f6f8fa] hover:bg-[#f3f4f6]',
        buttonBorder: isDark ? 'border-[#30363d]' : 'border-[#d1d9e0]'
    };

    return (
        <div className={`min-h-screen transition-colors duration-200 ${theme.bg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <header className={`mb-8 transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="space-y-1">
                            <h1 className={`text-2xl font-semibold ${theme.text.primary}`}>
                                Your Projects
                            </h1>
                            <p className={`text-sm ${theme.text.secondary}`}>
                                Manage and track your development projects
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className={`hidden sm:flex items-center gap-2 px-3 py-1.5 ${theme.button} ${theme.buttonBorder} border rounded-md text-xs ${theme.text.secondary}`}>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>{projects.length} projects</span>
                            </div>

                            <button
                                className={`${theme.accent} ${theme.accentHover} text-white px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200 flex items-center gap-2 shadow-sm`}
                                onClick={() => navigate('/student/create')}
                            >
                                <Plus className="w-4 h-4" />
                                New
                            </button>
                        </div>
                    </div>
                </header>

                {/* Projects Section */}
                <main className={`transition-all duration-500 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {isLoading ? (
                        <LoadingSkeleton theme={theme} />
                    ) : projects.length === 0 ? (
                        <EmptyState navigate={navigate} theme={theme} />
                    ) : (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className={`text-lg font-semibold ${theme.text.primary}`}>
                                    Recent projects
                                </h2>
                                <span className={`text-xs ${theme.text.muted}`}>
                                    {projects.length} {projects.length === 1 ? 'project' : 'projects'}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                {projects.map((project, index) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        index={index}
                                        theme={theme}
                                        onClick={() => navigate(`/student/project/${project.id}`)}
                                    />
                                ))}
                            </div>
>>>>>>> feature-branch
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

<<<<<<< HEAD
// Enhanced Empty State
const EmptyState = ({ navigate }) => {
    return (
        <div className="text-center py-20">
            <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50 rounded-3xl flex items-center justify-center shadow-xl border border-slate-200/50">
                    <Folder className="w-16 h-16 text-slate-400" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <Plus className="w-5 h-5 text-white" />
                </div>
                {/* Floating elements around empty state */}
                <div className="absolute top-8 left-8 w-3 h-3 bg-blue-300/60 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-2 h-2 bg-indigo-300/60 rounded-full animate-pulse delay-500"></div>
            </div>

            <h3 className="text-3xl font-bold text-slate-800 mb-4">No projects yet</h3>
            <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
                Ready to bring your ideas to life? Create your first project and start building something amazing.
            </p>

            <button
                onClick={() => navigate('/student/create')}
                className="group inline-flex items-center gap-3 px-8 py-4 text-white font-semibold bg-gradient-to-r from-slate-800 to-blue-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Create Your First Project
=======
// Clean Empty State
const EmptyState = ({ navigate, theme }) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className={`w-16 h-16 ${theme.cardBg} ${theme.border} border rounded-lg flex items-center justify-center mb-4`}>
                <Folder className={`w-8 h-8 ${theme.text.muted}`} />
            </div>

            <div className="text-center space-y-2 max-w-md">
                <h3 className={`text-lg font-semibold ${theme.text.primary}`}>
                    No projects yet
                </h3>
                <p className={`text-sm ${theme.text.secondary} leading-relaxed`}>
                    Create your first project to get started with tracking your work.
                </p>
            </div>

            <button
                className={`mt-6 ${theme.accent} ${theme.accentHover} text-white px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200 flex items-center gap-2`}
                onClick={() => navigate('/student/create')}
            >
                <Plus className="w-4 h-4" />
                Create project
>>>>>>> feature-branch
            </button>
        </div>
    );
};

<<<<<<< HEAD
// Enhanced Loading Skeleton
const LoadingSkeleton = () => {
    return (
        <>
            <style jsx>{`
                @keyframes shimmerFlow {
                    0% { transform: translateX(-100%); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateX(100%); opacity: 0; }
                }

                @keyframes floatUp {
                    0% { opacity: 0; transform: translateY(20px) scale(0.95); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }

                .skeleton-card {
                    animation: floatUp 0.8s ease-out forwards;
                    animation-delay: calc(var(--index) * 0.1s);
                    opacity: 0;
                }

                .skeleton-shimmer {
                    background: linear-gradient(90deg, #f1f5f9 0%, #e2e8f0 50%, #f1f5f9 100%);
                    position: relative;
                    overflow: hidden;
                }

                .skeleton-shimmer::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%);
                    animation: shimmerFlow 2.5s infinite;
                }
            `}</style>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                    <div
                        key={index}
                        className="skeleton-card"
                        style={{ '--index': index }}
                    >
                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 shadow-lg">
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-14 h-14 skeleton-shimmer rounded-2xl"></div>
                                <div className="w-5 h-5 skeleton-shimmer rounded"></div>
                            </div>

                            <div className="space-y-4">
                                <div className="h-6 skeleton-shimmer rounded-lg w-3/4"></div>
                                <div className="space-y-2">
                                    <div className="h-4 skeleton-shimmer rounded w-full"></div>
                                    <div className="h-4 skeleton-shimmer rounded w-5/6"></div>
                                    <div className="h-4 skeleton-shimmer rounded w-2/3"></div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 skeleton-shimmer rounded"></div>
                                    <div className="h-4 skeleton-shimmer rounded w-24"></div>
                                </div>
                                <div className="w-3 h-3 skeleton-shimmer rounded-full"></div>
                            </div>
=======
// Clean Loading Skeleton
const LoadingSkeleton = ({ theme }) => {
    const skeletonBg = theme.cardBg.replace('bg-', 'bg-opacity-50 bg-');

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
                <div className={`h-6 ${skeletonBg} rounded-md w-32 animate-pulse`}></div>
                <div className={`h-4 ${skeletonBg} rounded-md w-16 animate-pulse`}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {[...Array(6)].map((_, index) => (
                    <div
                        key={index}
                        className={`${theme.cardBg} ${theme.border} border rounded-lg p-6 animate-pulse`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-10 h-10 ${skeletonBg} rounded-md`}></div>
                            <div className={`w-4 h-4 ${skeletonBg} rounded`}></div>
                        </div>

                        <div className="space-y-3">
                            <div className={`h-5 ${skeletonBg} rounded w-3/4`}></div>
                            <div className={`h-4 ${skeletonBg} rounded w-full`}></div>
                            <div className={`h-4 ${skeletonBg} rounded w-5/6`}></div>
                        </div>

                        <div className={`mt-6 pt-4 border-t ${theme.border} flex items-center justify-between`}>
                            <div className={`h-4 ${skeletonBg} rounded w-20`}></div>
                            <div className={`w-2 h-2 ${skeletonBg} rounded-full`}></div>
>>>>>>> feature-branch
                        </div>
                    </div>
                ))}
            </div>
<<<<<<< HEAD
        </>
    );
};

// Enhanced Project Card
const ProjectCard = ({ project, onClick, index }) => {
    const [mounted, setMounted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), index * 80);
        return () => clearTimeout(timer);
    }, [index]);

    const colorSchemes = [
        {
            gradient: 'from-blue-500 to-cyan-500',
            bg: 'from-blue-50 to-cyan-50',
            text: 'text-blue-600',
            dot: 'bg-blue-500',
            shadow: 'shadow-blue-500/25'
        },
        {
            gradient: 'from-emerald-500 to-teal-500',
            bg: 'from-emerald-50 to-teal-50',
            text: 'text-emerald-600',
            dot: 'bg-emerald-500',
            shadow: 'shadow-emerald-500/25'
        },
        {
            gradient: 'from-purple-500 to-indigo-500',
            bg: 'from-purple-50 to-indigo-50',
            text: 'text-purple-600',
            dot: 'bg-purple-500',
            shadow: 'shadow-purple-500/25'
        },
        {
            gradient: 'from-orange-500 to-red-500',
            bg: 'from-orange-50 to-red-50',
            text: 'text-orange-600',
            dot: 'bg-orange-500',
            shadow: 'shadow-orange-500/25'
        },
        {
            gradient: 'from-pink-500 to-rose-500',
            bg: 'from-pink-50 to-rose-50',
            text: 'text-pink-600',
            dot: 'bg-pink-500',
            shadow: 'shadow-pink-500/25'
        },
        {
            gradient: 'from-violet-500 to-purple-500',
            bg: 'from-violet-50 to-purple-50',
            text: 'text-violet-600',
            dot: 'bg-violet-500',
            shadow: 'shadow-violet-500/25'
        }
    ];

    const scheme = colorSchemes[index % colorSchemes.length];

    return (
        <div
            className={`group cursor-pointer transition-all duration-500 ${
                mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="button"
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter') onClick(); }}
        >
            <div className={`relative bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:${scheme.shadow} hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500`}>

                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${scheme.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -m-px`}></div>

                {/* Content */}
                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${scheme.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:${scheme.shadow} group-hover:scale-110 transition-all duration-300`}>
                            <Folder className="w-7 h-7 text-white" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-2 transition-all duration-300" />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors duration-300 line-clamp-2 leading-tight">
                            {project.title}
                        </h3>
                        <p className="text-slate-600 line-clamp-3 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{project.startDate}</span>
                            {project.guideName && (
                                <>
                                    <span className="text-slate-300">•</span>
                                    <span>{project.guideName}</span>
                                </>
                            )}
                        </div>
                        <div className={`w-3 h-3 ${scheme.dot} rounded-full group-hover:scale-125 transition-transform duration-300 shadow-sm`}></div>
                    </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out"></div>
                </div>
            </div>
        </div>
=======
        </div>
    );
};

// Clean Project Card
const ProjectCard = ({ project, index, theme, onClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 50);
        return () => clearTimeout(timer);
    }, [index]);

    const getProjectIcon = () => {
        const icons = [Code, Folder, GitBranch, Layers];
        const IconComponent = icons[index % icons.length];
        return <IconComponent className={`w-5 h-5 ${theme.text.secondary}`} />;
    };

    return (
        <article
            className={`group ${theme.cardBg} ${theme.border} border rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            onClick={onClick}
            style={{ transitionDelay: `${index * 25}ms` }}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 ${theme.button} ${theme.buttonBorder} border rounded-md flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                    {getProjectIcon()}
                </div>
                <ArrowRight className={`w-4 h-4 ${theme.text.muted} group-hover:${theme.text.secondary} group-hover:translate-x-0.5 transition-all duration-200`} />
            </div>

            {/* Content */}
            <div className="space-y-3">
                <h3 className={`text-base font-medium ${theme.text.primary} group-hover:text-blue-600 transition-colors duration-200 line-clamp-1`}>
                    {project.title}
                </h3>

                <p className={`${theme.text.secondary} line-clamp-2 text-sm leading-relaxed`}>
                    {project.description}
                </p>
            </div>

            {/* Footer */}
            <div className={`mt-6 pt-4 border-t ${theme.border} transition-colors duration-200`}>
                <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-2 text-xs ${theme.text.muted}`}>
                        <Clock className="w-3 h-3" />
                        <span>{project.startDate}</span>
                        {project.guideName && (
                            <>
                                <span className="text-gray-400">•</span>
                                <span className="truncate max-w-20">{project.guideName}</span>
                            </>
                        )}
                    </div>

                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
            </div>
        </article>
>>>>>>> feature-branch
    );
};

export default StudentDashboard;