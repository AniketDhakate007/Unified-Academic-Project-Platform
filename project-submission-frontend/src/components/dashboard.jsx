import React, { useState, useEffect, use } from 'react';
import { Users, User, BookOpen, Target, FileText, TrendingUp, Award, Clock, Calendar, MapPin, ChevronRight, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const ProjectDashboard = () => {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const navigate = useNavigate();
  useEffect(() => {
    setMounted(true);
  }, []);

  const groupData = {
    id: 1,
    groupNumber: "Group 01",
    projectTitle: "AI-Powered Smart Home Automation System",
    members: [
      "Alex Johnson",
      "Sarah Chen", 
      "Michael Rodriguez",
      "Emma Thompson",
      "David Kim",
      "Lisa Anderson"
    ],
    guideName: "Dr. Robert Smith",
    synopsis: {
      abstract: "This project focuses on developing an intelligent home automation system that leverages artificial intelligence and IoT technologies to create a seamless, energy-efficient living environment. The system integrates various smart devices and sensors to learn user preferences and optimize home operations automatically.",
      objectives: [
        "Develop a centralized AI control system for smart home devices",
        "Implement machine learning algorithms for user behavior prediction", 
        "Create an intuitive mobile application interface",
        "Ensure robust security and privacy protection",
        "Optimize energy consumption through intelligent scheduling"
      ],
      literatureSurvey: "Recent studies in smart home technology show significant growth in IoT adoption, with research by Zhang et al. (2023) demonstrating 40% energy savings through AI-driven automation. The integration of machine learning algorithms has proven effective in predicting user patterns, as evidenced by Kumar's work on behavioral analytics in residential settings.",
      methodology: "The project employs a hybrid approach combining supervised learning for pattern recognition and reinforcement learning for adaptive control. Data collection will be conducted through sensor networks, with privacy-preserving techniques ensuring user anonymity.",
      expectedOutcomes: "The system is expected to reduce energy consumption by 35%, improve user convenience through predictive automation, and provide a secure, scalable platform for future smart home integrations."
    },
    progress: 75,
    status: "In Progress",
    deadline: "Dec 15, 2024",
    department: "Computer Science"
  };

  const sections = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'objectives', label: 'Objectives', icon: Target },
    { id: 'research', label: 'Research', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .animate-fade-in {
          animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-slide-in {
          animation: slideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .progress-bar {
          background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);
          animation: progressLoad 2s ease-out;
        }
        
        @keyframes progressLoad {
          from { width: 0%; }
          to { width: var(--progress); }
        }
        
        .member-avatar {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .member-avatar:hover {
          transform: scale(1.1);
          z-index: 10;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .section-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .section-card:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <div className={`mb-8 sm:mb-12 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Project Dashboard</h1>
              <br />
              <p className="text-gray-600 text-xl sm:text-base">Monitor progress and manage your project efficiently</p>
            </div>
          </div>
        </div>

        {/* Project Overview Card */}
        <div className={`glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 hover-lift ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
            <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-blue-600/30 flex-shrink-0">
                01
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 leading-tight">{groupData.projectTitle}</h2>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                    Due {groupData.deadline}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    {groupData.department}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between sm:justify-end sm:flex-col sm:items-end space-x-3 sm:space-x-0 sm:space-y-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                {groupData.status}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">{groupData.progress}%</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Overall Progress</span>
              <span className="text-sm text-gray-500">{groupData.progress}% Complete</span>
              <button
                className="px-3 py-1 bg-blue-600 text-white rounded-sm text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer"
                onClick={() => navigate('/progress')}>
                View Progress
              </button>

            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="progress-bar h-2 rounded-full shadow-sm"
                style={{ '--progress': `${groupData.progress}%`, width: `${groupData.progress}%` }}
              ></div>
            </div>
          </div>

          {/* Team Avatars */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-700">Team:</span>
              <div className="flex -space-x-2">
                {groupData.members.map((member, index) => (
                  <div
                    key={index}
                    className="member-avatar w-8 h-8 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-medium"
                    style={{ backgroundColor: `hsl(${(index * 60) % 360}, 65%, 55%)` }}
                    title={member}
                  >
                    {member.split(' ').map(n => n[0]).join('')}
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-500">+{groupData.members.length} members</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <User className="w-4 h-4 mr-1 flex-shrink-0" />
              <span className="truncate">Guide: {groupData.guideName}</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className={`mb-8 ${mounted ? 'animate-slide-in' : 'opacity-0'}`}>
          <div className="flex overflow-x-auto space-x-1 bg-gray-100 rounded-xl p-1 scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeSection === section.id 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <section.icon className="w-4 h-4" />
                <span>{section.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        {activeSection === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="section-card glass-effect rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0" />
                Abstract
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{groupData.synopsis.abstract}</p>
            </div>
            
            <div className="section-card glass-effect rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" />
                Methodology
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{groupData.synopsis.methodology}</p>
            </div>
          </div>
        )}

        {activeSection === 'team' && (
          <div className="section-card glass-effect rounded-2xl p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-purple-600 flex-shrink-0" />
              Team Members
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {groupData.members.map((member, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium shadow-sm flex-shrink-0"
                    style={{ backgroundColor: `hsl(${(index * 60) % 360}, 65%, 55%)` }}
                  >
                    {member.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 truncate">{member}</p>
                    <p className="text-sm text-gray-500">Team Member</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'objectives' && (
          <div className="section-card glass-effect rounded-2xl p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <Target className="w-5 h-5 mr-2 text-orange-600 flex-shrink-0" />
              Project Objectives
            </h3>
            <div className="space-y-4">
              {groupData.synopsis.objectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 sm:p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'research' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="section-card glass-effect rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0" />
                Literature Survey
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{groupData.synopsis.literatureSurvey}</p>
            </div>
            
            <div className="section-card glass-effect rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-emerald-600 flex-shrink-0" />
                Expected Outcomes
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{groupData.synopsis.expectedOutcomes}</p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className={`mt-12 text-center ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Project Active</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>In Progress</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>On Track</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;