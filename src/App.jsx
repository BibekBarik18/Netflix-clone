import { useState } from 'react';
import Movies from "./Movies.jsx";
import { FaUser, FaLock } from 'react-icons/fa';
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true); // Fake login - no actual authentication
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-page">
        <div className="login-box">
          <h1>Sign In</h1>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>
          <p className="login-help">Need help? Contact support.</p>
        </div>
      </div>
    );
  }

  return <Movies />;
}

export default App;