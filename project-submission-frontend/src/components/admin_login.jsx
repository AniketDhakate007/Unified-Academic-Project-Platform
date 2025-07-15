import React, { useState } from 'react';
import { Eye, EyeOff, Shield, User, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const AdminLoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  // Hardcoded admin credentials
  const ADMIN_CREDENTIALS = {
    id: 'admin123',
    password: 'SecurePass2024!'
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!adminId.trim()) {
      newErrors.adminId = 'Admin ID is required';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
  if (!validateForm()) return;

  setIsLoading(true);

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  if (adminId === ADMIN_CREDENTIALS.id && password === ADMIN_CREDENTIALS.password) {
    setLoginSuccess(true);
    setErrors({});
    alert('Login successful! Redirecting to admin dashboard...');
    navigate('/admin_dashboard'); // ✅ move navigation here!
  } else {
    setErrors({
      auth: 'Invalid admin credentials. Please check your ID and password.'
    });
    setLoginSuccess(false);
  }

  setIsLoading(false);
};


  const handleInputChange = (setter, fieldName) => (e) => {
    setter(e.target.value);
    if (errors[fieldName] || errors.auth) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: '',
        auth: ''
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-orange-700 rounded-2xl mb-6 shadow-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Access</h1>
          <p className="text-slate-600">Secure administrator login portal</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
          {/* Success Message */}
          {loginSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <p className="text-green-800 font-medium">Login successful!</p>
              </div>
            </div>
          )}

          {/* Authentication Error */}
          {errors.auth && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                <p className="text-red-800 font-medium">{errors.auth}</p>
              </div>
            </div>
          )}

          <div className="space-y-6">
            {/* Admin ID Field */}
            <div className="space-y-2">
              <label htmlFor="adminId" className="block text-sm font-semibold text-slate-700">
                Admin ID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="adminId"
                  type="text"
                  value={adminId}
                  onChange={handleInputChange(setAdminId, 'adminId')}
                  placeholder="Enter admin ID"
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all ${
                    errors.adminId || errors.auth
                      ? 'border-red-300 focus:ring-red-500' 
                      : 'border-slate-300 hover:border-slate-400'
                  }`}
                  required
                />
                {errors.adminId && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                )}
              </div>
              {errors.adminId && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.adminId}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Shield className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handleInputChange(setPassword, 'password')}
                  placeholder="Enter admin password"
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all ${
                    errors.password || errors.auth
                      ? 'border-red-300 focus:ring-red-500' 
                      : 'border-slate-300 hover:border-slate-400'
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                {errors.password && (
                  <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                )}
              </div>
              {errors.password && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-500 focus:ring-2"
                />
                <span className="ml-2 text-sm text-slate-600">Remember me</span>
              </label>
              <a 
                href="#" 
                className="text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                Reset password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
  type="button"
  onClick={handleSubmit}
  disabled={isLoading || loginSuccess}
  className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 ${
    isLoading || loginSuccess
      ? 'bg-slate-400 cursor-not-allowed'
      : 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 hover:shadow-lg transform hover:-translate-y-0.5'
  }`}
>
  {isLoading ? (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
      Authenticating...
    </div>
  ) : loginSuccess ? (
    <div className="flex items-center justify-center">
      <CheckCircle className="w-5 h-5 mr-2" />
      Access Granted
    </div>
  ) : (
    <div className="flex items-center justify-center">
      <span>Admin Login</span>
      <ArrowRight className="w-5 h-5 ml-2" />
    </div>
  )}
</button>


          </div>

          {/* Admin Info */}
          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-center mb-2">
              <AlertCircle className="h-4 w-4 text-amber-600 mr-2" />
              <span className="text-sm font-medium text-amber-800">Demo Credentials</span>
            </div>
            <div className="text-xs text-amber-700 space-y-1">
              <p><strong>Admin ID:</strong> admin123</p>
              <p><strong>Password:</strong> SecurePass2024!</p>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500 leading-relaxed">
            Restricted access. All login attempts are monitored and logged.<br />
            This system is protected by enterprise-grade security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;