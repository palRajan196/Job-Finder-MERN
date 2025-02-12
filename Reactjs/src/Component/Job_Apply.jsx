import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { CirclesWithBar, Circles, Puff } from "react-loader-spinner";

function ApplyJob() {
  const Backend_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  let auth = localStorage.getItem("user");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNumber] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState();
  const [loder, setLoder] = useState(false);
  const [post, setPost] = useState("h");
  const [nameChecker, setNameChecker] = useState("");
  const [emailChecker, setEmailChecker] = useState("");
  const [fileChecker, setFileChecker] = useState("");

  async function Setvalue() {
    try {
      if (name && email && file) {
        setPost(null);
        setLoder(!loder);

        //  console.log(name);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("mobileNo", mobileNo);
        formData.append("location", location);
        formData.append("auth", auth);
        // axios.post("http://localhost:6005/applyJob"
        axios
          .post(`${Backend_URL}/applyJob`, formData)
          .then((res) => {
            setPost(res.data);
            toast.success("Added Succesfully");
          })
          .catch((err) => {
            console.log(err), setPost("Error");
          });
      } else {
        if (!name) {
          setNameChecker("Enter Name");
        }
        if (!email) {
          setEmailChecker("Enter Email");
        }
        if (!file) {
          setFileChecker("Choose a File");
        }
      }
    } catch (error) {
      console.log("Job Apply -> " + error);
    }
  }
  // function Lodder() {
  //   setLoder(!loder);
  //   console.log("Working", loder);
  //   return;
  // }

  return (
    <>
      <div id="Apply_Job">
        <h1>Apply For Job</h1>
        <div id="Applyjob-input">
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <span>{nameChecker}</span>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <span>{emailChecker}</span>
          <input
            type="number"
            placeholder="Enter Mobile Number"
            onChange={(e) => {
              setMobileNumber(e.target.value);
            }}
            value={mobileNo}
          />
          <input
            type="text"
            placeholder="Enter Address"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            value={location}
          />
          {/* <p>Upload your file</p>    */}
          <label htmlFor="File">Upload your files </label>
          <input
            id="File"
            type="file"
            filename={file}
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <span>{fileChecker}</span>
        </div>

        <button onClick={Setvalue}>Submit</button>

        {post ? (
          ""
        ) : (
          <div id="Loader">
            {" "}
            <Puff
              visible={true}
              width="40px"
              height="40px"
              strokeColor="blue"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
            <p>Sending....</p>
          </div>
        )}
      </div>
      <ToastContainer position="top-center" className="toasty-style" />
    </>
  );
}

export default ApplyJob;
