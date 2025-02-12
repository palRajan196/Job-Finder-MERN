import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";

function UpdateProduct() {
  const Backend_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const [Loader, setLoader] = useState(true);
  const [finddata, setFindData] = useState(false);

  const [Title, setTitle] = useState("");
  const [Category, setCotegory] = useState("");
  const [Country, setCountry] = useState("");
  const [City, setCity] = useState("");
  const [Location, setLocation] = useState("");
  const [Description, setDescription] = useState("");
  const [JobPosted, setJobPosted] = useState("");
  const [Salary, setSalary] = useState("");

  const params = useParams();
  const navigate = useNavigate();
//  console.log(params.id);
  useEffect(() => {
    if (params.id) {
      AutoFill();
    } else {
      alert("Invailid Operation");
      navigate("/Product-List");
    }
  }, []);
  async function AutoFill() {
    // let result = await fetch(`http://localhost:6005/JobsData/${params.id}`
    let result = await fetch(`${Backend_URL}/JobsData/${params.id}`, {
      method: "GET",
    });
    setLoader(false);
    setFindData(true);
    result = await result.json();
  //  console.log(result);
    setTitle(result.Title);
    setCotegory(result.Category);
    setCountry(result.Country);
    setCity(result.City);
    setLocation(result.Location);
    setDescription(result.Description);
    setJobPosted(result.JobPosted);
    setSalary(result.Salary);
  }

  async function UpdateJob() {
    // console.log(
    //   Title,
    //   Category,
    //   Country,
    //   City,
    //   Location,
    //   Description,
    //   JobPosted,
    //   Salary
    // );
    // let job = await fetch(`http://localhost:6005/Update/${params.id}`
    let job = await fetch(`${Backend_URL}/Update/${params.id}`, {
      method: "PUT",
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
      toast.success("Successfully Updated Job");
    }
  }

  return (
    <>
      <div id="Addjob_h1">
        <h1>ADD NEW JOB</h1>
      </div>

      <div id="Add_Job_input">
        <input
          type="text"
          placeholder="Title"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
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

        <button onClick={UpdateJob}>Update Job</button>
        {finddata ? (
          ""
        ) : (
          <div id="Loader">
            {" "}
            <RotatingLines
              visible={Loader}
              width="40px"
              height="40px"
              strokeColor="blue"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
            <p>Finding ....</p>
          </div>
        )}
      </div>
      <ToastContainer position="top-center" className="toasty-style" />
    </>
  );
}

export default UpdateProduct;
