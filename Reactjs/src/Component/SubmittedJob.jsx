import React from "react";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import notfoundImage from "../assets/Images/notfound.png";
function SubmittedJob() {
  const Backend_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const auth = localStorage.getItem("user");
  const [Loader, setLoader] = useState(true);
  const [finddata, setFindData] = useState(false);

  const [data, setData] = useState(true);
  const [result, setresult] = useState([]);

  useEffect(() => {
    findData();
  }, []);

  async function findData() {
    try {
      // let responce = await fetch(`http://localhost:6005/submitteddata/${auth}`
      let responce = await fetch(`${Backend_URL}/submitteddata/${auth}`, {
        method: "Get",
      });
      setLoader(false);
      setFindData(true);
      responce = await responce.json();
      //  console.log(responce.length);
      setresult(responce);
      if (responce.length == 0) {
        setData("");
      } else {
        setData("Data is Present");
      }
    } catch (error) {
      console.log("Not Present");
      setData("");
    }
  }

  async function Deletedata(id) {
    console.log("Delete");
    // let deletetion = await fetch(`http://localhost:6005/submitdlt/${id}`
    let deletetion = await fetch(`${Backend_URL}/submitdlt/${id}`, {
      method: "Delete",
    });
    window.location.reload();
  }

  return (
    <>
      {data ? (
        <div className="SubmittedJob">
          <div id="Sub-Heading">
            <h1>Submitted Job</h1>
          </div>
          {result.map((item, index) => (
            <div className="Submitted_Div" key={index}>
              <div className="Submitted_Content">
                <ul>
                  <li>
                    <span>Name :</span> {item.Name}
                  </li>
                  <li>
                    <span>Email :</span> {item.Email}
                  </li>
                  <li>
                    <span>Mobile :</span> {item.Mobile}
                  </li>
                  <li>
                    <span>Location :</span> {item.Location}
                  </li>
                </ul>
              </div>
              <div className="Submitted_Img">
                <img src={item.Image} alt="img" />
                <button
                  onClick={() => {
                    Deletedata(item._id);
                    //  Deletedata(item.id);
                  }}
                >
                  delete
                </button>
              </div>
            </div>
          ))}{" "}
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
              <p>Finding Submitted Jobs ....</p>
            </div>
          )}
        </div>
      ) : (
        <div className="Notfount">
          <h1>Data is Not Found !</h1>
          <img src={notfoundImage} alt="" />
        </div>
      )}
    </>
  );
}

export default SubmittedJob;
