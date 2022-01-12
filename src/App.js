import React from "react";
import useLocalStorage from "use-local-storage";

import "./index.css";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
  };
  return (
    <div className="app" data-theme={theme}>
      <div className="login">
        <h1>Login</h1>
        <div className="container">
          <div className="top">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-apple"></i>
          </div>
          <p className="divider">
            <span>Or</span>
          </p>
          <form>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter your email" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your passowrd" />
            <div className="remember">
              <input type="checkbox" checked="checked" />
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className="bottom">
            <p>Forget your password?</p>
            <a href="/">Reset Passowrd</a>
          </div>
          <p className="create">Create Account</p>
        </div>
        <div className="theme-toggle">
          <h2 className="theme__info">{theme}</h2>
          <i onClick={switchTheme} className="fas fa-sun"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
