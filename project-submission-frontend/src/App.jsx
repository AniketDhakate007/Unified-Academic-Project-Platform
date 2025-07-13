import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/index';
import Login from './components/login'; // Importing the Login component
import Signup from './components/signup'; // Importing the Signup component
import Dashboard from './components/dashboard'; // Importing the Dashboard component
import Progress from './components/progress'; // Importing the Progress component
function App() {

    return (    
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
