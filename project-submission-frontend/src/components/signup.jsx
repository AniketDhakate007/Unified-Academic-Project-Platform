import React, { useState } from 'react';
import { Eye, EyeOff, Users, Lock, Check, X, BookOpen, User, UserPlus, Trash2, FileText } from 'lucide-react';

export default function GroupSignupPage() {
  const [formData, setFormData] = useState({
    groupId: '',
    password: '',
    confirmPassword: '',
    projectTitle: '',
    members: [''],
    guideName: '',
    synopsis: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.groupId.trim()) {
      newErrors.groupId = 'Group ID is required';
    } else if (formData.groupId.length < 3) {
      newErrors.groupId = 'Group ID must be at least 3 characters';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.projectTitle.trim()) {
      newErrors.projectTitle = 'Project title is required';
    }

    const validMembers = formData.members.filter(member => member.trim());
    if (validMembers.length === 0) {
      newErrors.members = 'At least one member name is required';
    }

    if (!formData.guideName.trim()) {
      newErrors.guideName = 'Guide name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setNotification({
      type: 'success',
      message: `Group "${formData.groupId}" has been created successfully!`
    });
    
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      groupId: '',
      password: '',
      confirmPassword: '',
      projectTitle: '',
      members: [''],
      guideName: '',
      synopsis: ''
    });

    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleMemberChange = (index, value) => {
    const newMembers = [...formData.members];
    newMembers[index] = value;
    setFormData(prev => ({
      ...prev,
      members: newMembers
    }));
    
    // Clear error when user starts typing
    if (errors.members) {
      setErrors(prev => ({
        ...prev,
        members: ''
      }));
    }
  };

  const addMember = () => {
    setFormData(prev => ({
      ...prev,
      members: [...prev.members, '']
    }));
  };

  const removeMember = (index) => {
    if (formData.members.length > 1) {
      const newMembers = formData.members.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        members: newMembers
      }));
    }
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
          <div className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border ${
            notification.type === 'success' 
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
              : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            {notification.type === 'success' ? (
              <Check className="w-5 h-5 text-emerald-600" />
            ) : (
              <X className="w-5 h-5 text-red-600" />
            )}
            <span className="font-black text-lg tracking-wider">{notification.message}</span>
            <button
              onClick={closeNotification}
              className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-black bg-gradient-to-r from-slate-800 via-slate-900 to-black bg-clip-text text-transparent mb-3 tracking-tight">
            Create New Group
          </h1>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Set up your group with project details and member information
          </p>
        </div>

        <div onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Group Setup */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-slate-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-wide">Group Setup</h2>
              </div>

              <div className="space-y-6">
                {/* Group ID Field */}
                <div className="space-y-2">
                  <label htmlFor="groupId" className="block text-sm font-bold text-slate-800 uppercase tracking-wider">
                    Group ID
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      id="groupId"
                      name="groupId"
                      value={formData.groupId}
                      onChange={handleInputChange}
                      placeholder="Enter unique group ID"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all ${
                        errors.groupId 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-slate-300 hover:border-slate-400'
                      }`}
                    />
                  </div>
                  {errors.groupId && (
                    <p className="text-sm text-red-600">{errors.groupId}</p>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-bold text-slate-800 uppercase tracking-wider">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create secure password"
                      className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all ${
                        errors.password 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-slate-300 hover:border-slate-400'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-red-600">{errors.password}</p>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-bold text-slate-800 uppercase tracking-wider">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all ${
                        errors.confirmPassword 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-slate-300 hover:border-slate-400'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-600">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Project Details */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-slate-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-wide">Project Details</h2>
              </div>

              <div className="space-y-6">
                {/* Project Title */}
                <div className="space-y-2">
                  <label htmlFor="projectTitle" className="block text-sm font-bold text-slate-800 uppercase tracking-wider">
                    Project Title
                  </label>
                  <input
                    type="text"
                    id="projectTitle"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleInputChange}
                    placeholder="Enter your project title"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all ${
                      errors.projectTitle 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-slate-300 hover:border-slate-400'
                    }`}
                  />
                  {errors.projectTitle && (
                    <p className="text-sm text-red-600">{errors.projectTitle}</p>
                  )}
                </div>

                {/* Guide Name */}
                <div className="space-y-2">
                  <label htmlFor="guideName" className="block text-sm font-bold text-slate-800 uppercase tracking-wider">
                    Guide Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      id="guideName"
                      name="guideName"
                      value={formData.guideName}
                      onChange={handleInputChange}
                      placeholder="Enter guide/supervisor name"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all ${
                        errors.guideName 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-slate-300 hover:border-slate-400'
                      }`}
                    />
                  </div>
                  {errors.guideName && (
                    <p className="text-sm text-red-600">{errors.guideName}</p>
                  )}
                </div>

                {/* Synopsis */}
                <div className="space-y-2">
                  <label htmlFor="synopsis" className="block text-sm font-bold text-slate-800 uppercase tracking-wider">
                    Project Synopsis <span className="text-slate-500 font-normal normal-case">(Optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <FileText className="h-5 w-5 text-slate-400" />
                    </div>
                    <textarea
                      id="synopsis"
                      name="synopsis"
                      value={formData.synopsis}
                      onChange={handleInputChange}
                      placeholder="Brief description of your project..."
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all hover:border-slate-400 resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Members Section - Full Width */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-slate-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-wide">Team Members</h2>
              </div>
              <button
                type="button"
                onClick={addMember}
                className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 text-slate-800 font-bold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md uppercase tracking-wide text-sm"
              >
                <UserPlus className="w-4 h-4" />
                Add Member
              </button>
            </div>

            <div className="space-y-4">
              {formData.members.map((member, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={member}
                      onChange={(e) => handleMemberChange(index, e.target.value)}
                      placeholder={`Member ${index + 1} name`}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all hover:border-slate-400"
                    />
                  </div>
                  {formData.members.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeMember(index)}
                      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
              {errors.members && (
                <p className="text-sm text-red-600">{errors.members}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-12 py-4 rounded-xl font-black text-lg text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wider ${
                isSubmitting
                  ? 'bg-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-900 hover:to-black'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                  <span className="font-black tracking-wider">Creating Group...</span>
                </div>
              ) : (
                'Create Group'
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-base text-slate-600 font-medium">
            Already have a group?{' '}
            <a 
              href="/login.jsx" 
              className="text-slate-800 hover:text-slate-900 font-bold transition-colors bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text hover:from-slate-900 hover:to-black tracking-wide cursor:pointer"
            >
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}