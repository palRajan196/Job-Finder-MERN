import { useState } from "react";
//import fetch from 'node-fetch';
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const Registervalue = async () => {
    console.log(name, email, password);
    let result = await fetch("https://jobsearch-s5jx.onrender.com", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await result.json();
    console.log(data);
    if (data) {
      localStorage.setItem("user", data);
      navigate("/");
    }
  };
  return (
    <>
      <div id="Login">
        <h1>Sign up</h1>
        <input
          className="input_Login"
          onChange={(e) => {
            setname(e.target.value);
          }}
          value={name}
          type="text"
          placeholder="Enter Name"
        />
        <input
          className="input_Login"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          value={email}
          type="text"
          placeholder="Enter Email"
        />
        <input
          className="input_Login"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          value={password}
          type="text"
          placeholder="Enter Password"
        />
        <button onClick={Registervalue}>Login</button>
      </div>
    </>
  );
}

export default Signup;
