import { useEffect } from "react";
import store from "../../redux/store";
import { loadUser } from "../../redux/actions/AuthAction";

const PrivateScreen = ({ history }) => {
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/");
    }

    store.dispatch(loadUser());
  }, [history]);

  return <div style={{ background: "green", color: "white" }}>user data</div>;
};

export default PrivateScreen;
