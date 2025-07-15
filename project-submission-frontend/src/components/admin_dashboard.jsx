import React, { useState } from 'react';
import { Search, Users, BookOpen, User, ChevronRight, BarChart3, TrendingUp, Award, Filter, Bell, Settings } from 'lucide-react';

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample project data
  const projects = [
    {
      id: '01',
      title: 'AI-Powered Smart Home Automation System',
      guide: 'Dr. Sarah Johnson',
      members: 4,
      status: 'In Progress',
      progress: 75,
      priority: 'High',
      dueDate: '2024-08-15'
    },
    {
      id: '02',
      title: 'Blockchain-Based Supply Chain Management',
      guide: 'Prof. Michael Chen',
      members: 3,
      status: 'Completed',
      progress: 100,
      priority: 'Medium',
      dueDate: '2024-07-20'
    },
    {
      id: '03',
      title: 'Machine Learning for Healthcare Diagnostics',
      guide: 'Dr. Emily Rodriguez',
      members: 5,
      status: 'In Progress',
      progress: 60,
      priority: 'High',
      dueDate: '2024-09-10'
    },
    {
      id: '04',
      title: 'IoT Environmental Monitoring System',
      guide: 'Prof. David Kim',
      members: 4,
      status: 'Under Review',
      progress: 85,
      priority: 'Medium',
      dueDate: '2024-08-25'
    },
    {
      id: '05',
      title: 'Virtual Reality Training Platform',
      guide: 'Dr. Lisa Thompson',
      members: 3,
      status: 'In Progress',
      progress: 45,
      priority: 'Low',
      dueDate: '2024-10-05'
    },
    {
      id: '06',
      title: 'Cybersecurity Threat Detection Platform',
      guide: 'Prof. Robert Wilson',
      members: 4,
      status: 'Completed',
      progress: 100,
      priority: 'High',
      dueDate: '2024-07-15'
    }
  ];

  // Filter projects based on search query
  const filteredProjects = projects.filter(project =>
    project.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProjectClick = (project) => {
    console.log('Navigate to project:', project.id);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald-500/25';
      case 'In Progress':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-500/25';
      case 'Under Review':
        return 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-amber-500/25';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-gray-500/25';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-200/50 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      Admin Dashboard
                    </h1>
                    <p className="text-sm text-gray-500">Project Management System</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200">
                <Settings className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">Administrator</div>
                  <div className="text-xs text-gray-500">admin@university.edu</div>
                </div>
                <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <User className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-gray-200/50 p-8 border border-gray-200/50">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Search Projects
                </h2>
                <p className="text-sm text-gray-500 mt-1">Find projects by ID or title</p>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filter</span>
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by Group ID (e.g., 01) or Project Title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl leading-5 bg-white/50 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-sm shadow-inner transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-gray-200/50 p-6 border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Projects</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{projects.length}</p>
                <p className="text-xs text-green-600 mt-1 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12% from last month
                </p>
              </div>
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-gray-200/50 p-6 border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Groups</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{projects.filter(p => p.status === 'In Progress').length}</p>
                <p className="text-xs text-blue-600 mt-1 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8% from last week
                </p>
              </div>
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-gray-200/50 p-6 border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Completed</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{projects.filter(p => p.status === 'Completed').length}</p>
                <p className="text-xs text-purple-600 mt-1 flex items-center">
                  <Award className="h-3 w-3 mr-1" />
                  2 this week
                </p>
              </div>
              <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Award className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-gray-200/50 p-6 border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Avg Progress</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {Math.round(projects.reduce((acc, p) => acc + p.progress, 0) / projects.length)}%
                </p>
                <p className="text-xs text-amber-600 mt-1 flex items-center">
                  <BarChart3 className="h-3 w-3 mr-1" />
                  +15% improvement
                </p>
              </div>
              <div className="p-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-200/50">
          <div className="px-8 py-6 border-b border-gray-200/50">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Projects {searchQuery && `(${filteredProjects.length} results)`}
                </h2>
                <p className="text-sm text-gray-500 mt-1">Manage and track all project groups</p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Sort by:</span>
                <select className="bg-white border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                  <option>Recent</option>
                  <option>Progress</option>
                  <option>Priority</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200/50">
            {filteredProjects.length === 0 ? (
              <div className="px-8 py-12 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <p className="text-gray-500 text-lg">No projects found matching your search.</p>
                <p className="text-gray-400 text-sm mt-1">Try adjusting your search criteria</p>
              </div>
            ) : (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleProjectClick(project)}
                  className="px-8 py-6 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 cursor-pointer transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                          <span className="text-white font-bold text-lg">{project.id}</span>
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors duration-200">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-6 mt-2">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <User className="h-4 w-4" />
                            <span>{project.guide}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Users className="h-4 w-4" />
                            <span>{project.members} members</span>
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-gray-500">Progress</span>
                            <span className="text-gray-700 font-medium">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium shadow-lg ${getPriorityColor(project.priority)} border`}>
                          {project.priority} Priority
                        </div>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium shadow-lg mt-2 ${getStatusColor(project.status)}`}>
                          {project.status}
                        </div>
                      </div>
                      <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;