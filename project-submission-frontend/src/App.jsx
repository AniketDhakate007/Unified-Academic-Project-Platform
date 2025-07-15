import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './components/index';
import Login from './components/login';
import AdminLogin from './components/admin_login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Progress from './components/progress';
import Chatbot from './components/Chatbot';
import AdminDashboard from './components/admin_dashboard';

function App() {
  const location = useLocation();
  const [showChatbot, setShowChatbot] = useState(true);

  useEffect(() => {
    const hiddenRoutes = ['/login', '/signup', '/admin_login', '/admin_dashboard'];
    setShowChatbot(!hiddenRoutes.includes(location.pathname));
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {showChatbot && <Chatbot />}
    </>
  );
}

export default App;
