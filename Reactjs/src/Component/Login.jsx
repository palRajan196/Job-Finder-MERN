import { useState } from "react";
//import fetch from 'node-fetch';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RotatingLines } from "react-loader-spinner";
import loginImage from "../assets/Images/login.png";
import registerImage from "../assets/Images/register.png";

function Login() {
  const Backend_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const [Loader, setLoader] = useState(false);
  const [findData, setFindData] = useState(true);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const [login, setlogin] = useState(false);
  const [Singup_Login, setsinglog] = useState("Login");
  const [Error, setError] = useState("");
  const [showpass, setShowPass] = useState(false);
  const [emailchecker, setEmailChecker] = useState("");
  const [passLength, setPassLength] = useState("");

  function Change() {
    setlogin(!login);
  }

  const Registervalue = async () => {
    setLoader(true);
    setFindData(false);
    try {
      //  console.log(name, email, password);
      if (name && email && password) {
        // let result = await fetch("http://localhost:6005/Register"
        let result = await fetch(`${Backend_URL}/Register`, {
          method: "POST",
          body: JSON.stringify({ name, email, password }),
          headers: { "Content-Type": "application/json" },
        });
        setLoader(false);
        setFindData(true);
        const data = await result.json();
        //  console.log(data);
        if (data) {
          toast.success("Signup is Successfull");
          localStorage.setItem("user", data._id);
          navigate("/");
        } else {
          toast.error("Invailid Input");
        }
      } else {
        setLoader(false);
        setFindData(true);
        setEmailChecker("Email is invailid");
        setPassLength("Password should be atleast 4 characters");
      }
    } catch (error) {
      console.log("Register Page -> " + error);
    }
  };
  const Loginvalue = async () => {
    // console.log(`${Backend_URL}Login`);
    //console.log(email,password);
    setLoader(true);
    setFindData(false);
    if (email && password) {
      try {
        //  let result = await fetch("http://localhost:6005/Login",
        let result = await fetch(`${Backend_URL}/Login`, {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        });
        setLoader(false);
        setFindData(true);
        result = await result.json();
        // console.log("Hi Dunia -> ", result);
        toast.success("Login is successfull");
        localStorage.setItem("user", result._id);
        setError("");
        navigate("/");
      } catch (error) {
        setLoader(false);
        setFindData(true);
        setError("Invailid Input, Please check email or password");
        console.log("Login Page -> " + error);
      }
    } else {
      setLoader(false);
      setFindData(true);
      setEmailChecker("Email is invailid");
      setPassLength("Password should be atleast 4 characters");
    }
  };

  function Pass() {
    setShowPass(!showpass);
    if (!showpass) {
      document.getElementById("pass").type = "text";
    } else {
      document.getElementById("pass").type = "password";
    }
  }
  function Email() {
    const emailChecker = document.getElementById("email");
    if (emailChecker.validity.valid) {
      setEmailChecker("");
    } else {
      setEmailChecker("Email is invailid");
    }
  }
  function Pass_Length() {
    if (password.length < 4) {
      setPassLength("Password should be atleast 4 characters");
    } else {
      setPassLength("");
    }
  }

  return (
    <>
      <div id="Login">
        <div id="Login-Main">
          <div id="Login-Head">
            <h1></h1>
            <h1>{login ? "Welcome " : "Welcome Back"}</h1>
            <p>
              {login
                ? "Hey, welcome in special place"
                : "Hey, welcome back to your special place"}
            </p>
            <p></p>
          </div>

          <div id="Login-body">
            <div id="Login-input">
              <h1>{login ? "Signup" : "Login to your account"}</h1>

              {login && (
                <input
                  className="input_Login"
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  value={name}
                  type="text"
                  placeholder="Enter Name"
                />
              )}
              <input
                id="email"
                className="input_Login"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                value={email}
                type="email"
                placeholder="Enter Email"
                onKeyUp={Email}
              />
              <span>{emailchecker}</span>
              {/* <RiLockPasswordLine  className="Pass-Icon"/> */}
              <input
                id="pass"
                className="input_Login"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                value={password}
                type="password"
                placeholder="Enter Password"
                onKeyUp={Pass_Length}
              />
              <span>{passLength}</span>
              <div id="Checkbox-Body">
                <input id="Checkbox" type="checkbox" onClick={Pass} />
                <h1>Show Password</h1>
              </div>

              <span id="Login-Error">{Error}</span>
              <p>
                {login ? "Already have an account?" : "New  User?"}{" "}
                <span onClick={Change}>{login ? "Login" : "Signup"}</span>
              </p>
            </div>
            <div id="Login-btn">
              {login ? (
                <button onClick={Registervalue}>Signup</button>
              ) : (
                <button onClick={Loginvalue}>Login</button>
              )}{" "}
            </div>
          </div>
        </div>
        <div id="Login-img">
          {login ? (
            <img src={registerImage} alt="img" />
          ) : (
            <img src={loginImage} alt="img" />
          )}
        </div>
        {findData ? (
          ""
        ) : (
          <div id="Loader">
            {" "}
            <RotatingLines
              width="40px"
              height="40px"
              visible={Loader}
              strokeColor="blue"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
      </div>

      <ToastContainer position="top-center" className="toasty-style" />
    </>
  );
}

export default Login;
