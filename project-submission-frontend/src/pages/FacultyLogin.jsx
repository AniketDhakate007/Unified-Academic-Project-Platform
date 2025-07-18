import {useNavigate} from "react-router-dom";
import axios from "axios";

const FacultyLogin = () => {
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:8082/api/auth/login', {
            username: e.target.username.value,
            password: e.target.password.value
        });

        if (res.data.role === 'ADMIN') {
            localStorage.setItem('token', res.data.token);
            navigate('/admin/dashboard');
        } else {
            alert('Not an admin');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Faculty Login</h2>
            <input name="username" placeholder="Username" />
            <input name="password" type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

export default FacultyLogin;
