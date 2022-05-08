import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../redux/actions/AuthAction";
import { clearErrors } from "../../redux/actions/errorAction";
import "./RegisterScreen.css";

const RegisterScreen = (props, { history }) => {
  const [userState, setUserState] = useState({});
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const registerHandler = (e) => {
    e.preventDefault();
    if (userState.password !== confirmpassword) {
      setUserState.password("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Password do not match!");
    }
    const { name, email, password } = userState;

    const newUser = {
      name,
      email,
      password,
    };

    this.props.register(newUser);
  };

  return (
    <div className="register-screen">
      <form onSubmit={registerHandler} className="register-screen__form">
        <h3 className="register-screen__title">Register</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            required
            id="name"
            placeholder="Enter Username"
            onChange={(e) => {
              setUserState({ ...userState, ...{ username: e.target.value } });
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Enter Email"
            onChange={(e) => {
              setUserState({ ...userState, ...{ email: e.target.value } });
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter Password"
            onChange={(e) => {
              setUserState({ ...userState, ...{ password: e.target.value } });
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            placeholder="Confirm Password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>

        <span className="register-screen__subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(
  RegisterScreen
);
