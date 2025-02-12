import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add_Jobs() {
  const Backend_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  const [Title, setTitle] = useState("");
  const [Category, setCotegory] = useState("");
  const [Country, setCountry] = useState("");
  const [City, setCity] = useState("");
  const [Location, setLocation] = useState("");
  const [Description, setDescription] = useState("");
  const [JobPosted, setJobPosted] = useState("");
  const [Salary, setSalary] = useState("");

  const [Titlechecker, setTitleChecker] = useState("");
  const [CountryChecker, setCountryChecker] = useState("");
  const [LocationChecker, setLocationChecker] = useState("");
  const [SalaryChecker, setSalaryChecker] = useState("");

  async function AddJob() {
    try {
      if (Title && Country && Salary && Location) {
        // let job = await fetch("http://localhost:6005/AddJob"
        let job = await fetch(`${Backend_URL}/AddJob`, {
          method: "POST",
          body: JSON.stringify({
            Title,
            Category,
            Country,
            City,
            Location,
            Description,
            JobPosted,
            Salary,
          }),
          headers: { "Content-Type": "application/json" },
        });
        job = await job.json();
        if (job) {
          toast.success("Successfully Added Job");

          setTitle("");
          setCotegory("");
          setCountry("");
          setCity("");
          setLocation("");
          setDescription("");
          setJobPosted("");
          setSalary("");
        }
      } else {
        if (!Title) {
          setTitleChecker("Please Fill Title Required Field");
        }
        if (!Country) {
          setCountryChecker("Please Fill Country Required Field");
        }
        if (!Salary) {
          setSalaryChecker("Please Fill Salary Required Field");
        }
        if (!Location) {
          setLocationChecker("Please Fill Location Required Field");
        }
      }
    } catch (error) {
      console.log("Add Job Page -> " + error);
    }
  }

  return (
    <>
      <div id="Addjob_h1">
        <h1>ADD NEW JOB</h1>
      </div>
      <div id="Add-Job">
        <div id="Add_Job_input">
          <input
            type="text"
            placeholder="Title"
            value={Title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <span>{Titlechecker}</span>
          <input
            type="text"
            placeholder="Enter Category"
            onChange={(e) => {
              setCotegory(e.target.value);
            }}
            value={Category}
          />
          <input
            type="text"
            placeholder="Enter Country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            value={Country}
          />
          <span>{CountryChecker}</span>
          <input
            type="text"
            placeholder="Enter City"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            value={City}
          />
          <input
            type="text"
            placeholder="Enter Location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            value={Location}
          />
          <span>{LocationChecker}</span>
          <input
            type="text"
            placeholder="Title Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={Description}
          />
          <input
            type="text"
            placeholder="Title JobPosted"
            onChange={(e) => {
              setJobPosted(e.target.value);
            }}
            value={JobPosted}
          />
          <input
            type="text"
            placeholder="Title Salary"
            onChange={(e) => {
              setSalary(e.target.value);
            }}
            value={Salary}
          />
          <span>{SalaryChecker}</span>

          <button onClick={AddJob}>Add Job</button>
        </div>
      </div>
      <ToastContainer position="top-center" className="toasty-style" />
    </>
  );
}

export default Add_Jobs;
