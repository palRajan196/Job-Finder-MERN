import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

function ControleJob() {
  const Backend_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const [jobs, setJobs] = useState([]);
  const [Loader, setLoader] = useState(true);
  const [findData, setFindData] = useState(false);

  useEffect(() => {
    FindJobs();
  }, []);

  const FindJobs = async () => {
    try {
      // let controle = await fetch("http://localhost:6005/Getjob"
      let controle = await fetch(`${Backend_URL}/Getjob`, {
        method: "GET",
      });
      setLoader(false);
      setFindData(true);
      controle = await controle.json();
      //  console.log(controle);
      setJobs(controle);
    } catch (error) {
      console.log("Controle Job Page -> ", error);
    }
  };

  async function Deletion(id) {
    try {
      // let deletionData = await fetch(`http://localhost:6005/controleDlt/${id}`
      let deletionData = await fetch(`${Backend_URL}/controleDlt/${id}`, {
        method: "DELETE",
      });
      deletionData = await deletionData.json();
      //  console.log(deletionData);
    } catch (err) {
      console.log("Controle Page -> " + err);
    }
  }

  return (
    <>
      <div id="Controle">
        <div>
          <h1>Controle Job</h1>
        </div>
        {jobs.map((item, index) => (
          <div id="Controle-box" key={index}>
            <div id="Controle-box-Style">
              <div>
                <div>
                  <span>Title:</span> {item.Title}{" "}
                </div>
                <div>
                  <span>Category :</span> {item.Category}
                </div>
                <div>
                  <span>Country : </span>
                  {item.Country}
                </div>
                <div>
                  <span>City :</span> {item.City}
                </div>

                <div>
                  <span>Location :</span>
                  {item.Location}
                </div>
                <div>
                  <span>Description :</span> {item.Description}
                </div>
              </div>
            </div>

            <div className="Controle-Bottom">
              <div>
                <span>Job Posted On:</span>
                {item.JobPosted}
              </div>
              <div>
                <span>Salary : </span> {item.Salary}
              </div>
              <div className="Controle-Btn">
                <div>
                  <button
                    onClick={() => {
                      Deletion(item._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <div>
                  <button>
                    <Link to={"/UpdateProduct/" + item._id}>Update</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {findData ? (
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
            <p>Finding Data ....</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ControleJob;
