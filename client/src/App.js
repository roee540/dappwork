import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import Home from "./components/Home";

import PrivateScreen from "./components/authScreens/PrivateScreen";
import LoginScreen from "./components/authScreens/LoginScreen";
import RegisterScreen from "./components/authScreens/RegisterScreen";
import ForgotPasswordScreen from "./components/authScreens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/authScreens/ResetPasswordScreen";

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/private" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
