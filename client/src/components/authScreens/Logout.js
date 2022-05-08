import { Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/AuthAction";
import { NavLink } from "reactstrap";

const Logout = () => {
  return (
    <Fragment>
      <NavLink onClick={logout} href="#">
        Logout
      </NavLink>
    </Fragment>
  );
};

export default connect(null, { logout })(Logout);
