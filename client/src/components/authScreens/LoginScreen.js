import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { login } from "../../redux/actions/AuthAction";
import { connect } from "react-redux";
import "./LoginScreen.css";

const LoginScreen = (props, { history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const onSubmit = (e) => {
    e.preventDefalt();

    const user = {
      email,
      password,
    };

    props.login(user);
  };

  return (
    <div className="login-screen">
      <form onSubmit={onSubmit} className="login-screen__form">
        <h3 className="login-screen__title">Login</h3>
        {props.error.msg.msg && (
          <span className="error-message">{props.error.msg.msg}</span>
        )}

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            tabIndex={1}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">
            Password:
            <Link
              to="/forgotpassword"
              className="login-screen__forgotpassword"
              tabIndex={4}
            >
              Forgot Password
            </Link>
          </label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            tabIndex={2}
          />
        </div>

        <button type="submit" className="btn btn-primary" tabIndex={3}>
          Login
        </button>

        <span className="login-screen__subtext">
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login })(LoginScreen);
