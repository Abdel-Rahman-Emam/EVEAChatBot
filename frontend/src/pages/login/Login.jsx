import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar.jsx"


export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <>
    <Topbar className="TopBar"/> 
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        <h3 className="divTitle"> Login </h3>
        <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            
            <button className="loginRegisterButton">
            <Link to = "/register" style={{textDecoration:"none", color:"white"}}>
              {isFetching ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Create a New Account"
              )}
              </Link>
            </button>
          </form>
        </div>
        <div className="loginRight">
          <img src="/assets/main.svg" className="img"/>
        </div>
      </div>
    </div>
    </>
  );
}