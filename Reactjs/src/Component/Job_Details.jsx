import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

function JobDetails() {
  const Backend_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const auth = localStorage.getItem("user");
  const [Loader, setLoader] = useState(true);
  const [findData, setFindData] = useState(false);

  //      const auth = "Rajan";
  const params = useParams();
  const [Jobs, setJobs] = useState({});

  useEffect(() => {
    findJobs();
  }, []);

  async function findJobs() {
    try {
      // let jobsdata = await fetch(`http://localhost:6005/JobsData/${params.id}`
      let jobsdata = await fetch(`${Backend_URL}/JobsData/${params.id}`, {
        method: "GET",
      });
      setLoader(false);
      setFindData(true);
      jobsdata = await jobsdata.json();
      //   console.log(jobsdata);
      setJobs(jobsdata);
    } catch (error) {
      console.log("Job Details Page " + error);
    }
  }
  return (
    <>
      <div id="Jobdetail">
        <div id="Jobdetail-box">
          <div>
            <h1>Job Details</h1>
          </div>
          <div>
            <span>Title:</span> {Jobs.Title}{" "}
          </div>
          <div>
            <span>Category :</span> {Jobs.Category}
          </div>
          <div>
            <span>Country : </span>
            {Jobs.Country}
          </div>
          <div>
            <span>City :</span> {Jobs.City}
          </div>
          <div>
            <span>Location :</span>
            {Jobs.Location}
          </div>
          <div>
            <span>Description :</span> {Jobs.Description}
          </div>
          <div>
            <span>Job Posted On:</span>
            {Jobs.JobPosted}
          </div>
          <div>
            <span>Salary : </span> {Jobs.Salary}
          </div>
          <div id="Jobdetail-btn">
            {auth === import.meta.env.VITE_REACT_APP_USER ? (
              " "
            ) : (
              <button id="job_Detail_btn">
                <Link to="/ApplyJob">Apply</Link>
              </button>
            )}
          </div>
        </div>

        {findData ? (
          ""
        ) : (
          <div id="Loader">
            {" "}
            <RotatingLines
              height="40px"
              width="40px"
              visible={Loader}
              strokeColor="blue"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
            <p>Finding Data ....</p>
          </div>
        )}
      </div>
    </>
  );
}

export default JobDetails;
