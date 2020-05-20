import React, { useContext } from "react";
import { AuthContext } from "../../App";
import { useHistory } from "react-router-dom";

function Logout() {
  const { logout } = useContext(AuthContext)();
    const history = useHistory(); 

  logout();
  history.push("/"); 

  return <h2>Logged out</h2>;
}

export default Logout;