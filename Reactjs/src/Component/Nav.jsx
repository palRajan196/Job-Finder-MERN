import { Outlet, Link, useNavigate, NavLink } from "react-router-dom";
import "../App.css";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
//const userId = process.env.userId;
function Nav() {
  let auth = localStorage.getItem("user");
  let user = auth;

  {
    //  auth === "66756b7441823f08e0b4ed13" ? (user = "Rajan") : " ";
    auth === import.meta.env.VITE_REACT_APP_USER ? (user = "Rajan") : " ";
  }

  const [Width, setWidth] = useState("");
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    localStorage.setItem("user", "Login");
    window.location.reload();
    navigate("/Login");
  }

  function sidebarHandele() {
    if (window.innerWidth > 1110) {
      document.getElementById("HideNav").style.left = `${0}px`;
    }
  }

  setInterval(sidebarHandele, 10);

  function Hide() {
    //  alert(screen.width);
    if (screen.width < 1290) {
      document.getElementById("MenuBar").style.display = "block";
      document.getElementById("HideNav").style.left = `${-110}vw`;
    } else {
      document.getElementById("MenuBar").style.display = "none";
      document.getElementById("HideNav").style.left = `${0}px`;
    }
  }
  function Menu() {
    document.getElementById("HideNav").style.left = `${0}px`;
  }

  //Hide MenuBar when Link is Clicked
  const navLink = document.querySelectorAll(".Nav-Link");
  navLink.forEach((link) => {
    link.addEventListener("click", Hide);
  });

  // Active Link Decoration
  function ActiveNav(Nav) {
    const navLink = document.querySelectorAll(".Nav-Link");
    event.preventDefault();
    for (let link of navLink) {
      link.classList.remove("Active-Nav");
    }
    document.getElementById(Nav).classList.add("Active-Nav");
  }

  return (
    <>
      {auth != "Logi" ? (
        <div id="MenuBar">
          <div id="Menu-Icon" onClick={Menu}>
            <MdMenu />
          </div>
        </div>
      ) : (
        "hi"
      )}
      <div className="Nav" id="HideNav">
        {auth != "Logi" ? (
          <>
            <ul className="Nav-Left">
              <div id="Hide-Icon" onClick={Hide}>
                <RxCross2 />
              </div>
              <li id="Nav-Li">
                <Link
                  id="Home"
                  className="Nav-Link"
                  to="/"
                  onClick={() => {
                    ActiveNav("Home");
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  id="Jobs"
                  className="Nav-Link"
                  to="/Jobs"
                  onClick={() => ActiveNav("Jobs")}
                >
                  Jobs
                </Link>
              </li>

              {user === "Rajan" ? (
                <>
                  <li>
                    <Link
                      id="ControleJob"
                      className="Nav-Link"
                      to={"/ControleJob"}
                      onClick={() => {
                        ActiveNav("ControleJob");
                      }}
                    >
                      ControleJob
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="Add Job"
                      className="Nav-Link"
                      to="/Add_Jobs"
                      onClick={() => {
                        ActiveNav("Add Job");
                      }}
                    >
                      Add Job
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="Responce"
                      className="Nav-Link"
                      to="/Responce"
                      onClick={() => {
                        ActiveNav("Responce");
                      }}
                    >
                      Responce
                    </Link>
                  </li>{" "}
                </>
              ) : (
                <li>
                  <Link
                    id="SubmittedJob"
                    className="Nav-Link"
                    to="/SubmittedJob"
                    onClick={() => {
                      ActiveNav("SubmittedJob");
                    }}
                  >
                    SubmittedJob
                  </Link>
                </li>
              )}
              {auth == "Login" ? (
                ""
              ) : (
                <li>
                  <Link className="Nav-Link" onClick={logout} to="/Login">
                    Log out
                  </Link>
                </li>
              )}
            </ul>
          </>
        ) : (
          <div>navigate('/Login')</div>
        )}
      </div>

      <Outlet />
    </>
  );
}
export default Nav;
