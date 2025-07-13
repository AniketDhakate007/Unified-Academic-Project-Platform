import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/index';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Progress from './components/progress';
import Chatbot from './components/Chatbot'; // 👈 import chatbot

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Chatbot /> {/* 👈 Always rendered, on every page */}
    </>
  );
}

export default App;
