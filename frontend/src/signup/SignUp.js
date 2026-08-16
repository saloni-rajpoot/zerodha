import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './signup.css';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
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
        'https://zerodha-wdd0.onrender.com/api/auth/signup', // change to your actual endpoint
        formData
      );

      localStorage.setItem('token', res.data.token);
      navigate('/dashboard'); // change to wherever you want to send them
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (

        <div className="signup-right">
          <h2>Create Account</h2>

          {error && <p className="signup-error">{error}</p>}

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <input
                type="text"
                name="username"
                placeholder=" "
                value={formData.username}
                onChange={handleChange}
                required
                className="form-input"
              />
              <label>Username</label>
            </div>

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

            <button type="submit" disabled={loading} className="signup-btn">
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <p className="signup-footer">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
    
  );
}

export default SignUp;