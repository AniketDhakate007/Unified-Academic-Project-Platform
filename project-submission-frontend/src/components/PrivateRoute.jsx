// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const PrivateRoute = ({ children, role }) => {
    const token = sessionStorage.getItem("token");
    if (!token) return <Navigate to="/login" />;

    try {
        const decoded = jwtDecode(token);
        const exp = decoded.exp * 1000;
        if (Date.now() > exp) {
            sessionStorage.clear();
            return <Navigate to="/login" />;
        }

        // check role if required
        if (role && sessionStorage.getItem("role") !== role) {
            return <Navigate to="/login" />;
        }

        return children;
    } catch (e) {
        sessionStorage.clear();
        return <Navigate to="/login" />;
    }
};

export default PrivateRoute;
