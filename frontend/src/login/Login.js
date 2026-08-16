import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post(
         'https://zerodha-wdd0.onrender.com/api/auth/login',
        formData
      );

      localStorage.setItem('token', res.data.token);
       window.location.href = "https://sr-zerodhaclone.netlify.app/";
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (

        <div className="login-right">
          <h2>Login</h2>

          {error && <p className="login-error">{error}</p>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
              <label>Email Address</label>
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder=" "
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                className="form-input"
              />
              <label>Password</label>
            </div>

            <button type="submit" disabled={loading} className="login-btn">
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="login-footer">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>

  );
}

export default Login;