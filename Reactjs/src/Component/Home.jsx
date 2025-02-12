import React from "react";
import { useState, useEffect } from "react";
import { MdHomeWork } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoPersonAdd } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";
import { MdOutlineLogin } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineGraphicEq } from "react-icons/md";
import { MdOutlineWeb } from "react-icons/md";
import { SiMdnwebdocs } from "react-icons/si";
import { MdAccountBalance } from "react-icons/md";
import { GiArtificialHive } from "react-icons/gi";
import { FaPhotoVideo } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FaMicrosoft } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import Image1 from "../assets/Images/heroS.jpg";

function Home() {
  const [Products, setProduct] = useState([]);

  return (
    <>
      <div id="Home-Head">
        <div id="Home-Content-img">
          <div id="Home-Content">
            <h1>Find a job that suits your interests and skills</h1>
            <p>
              The future depends on what you do today. Success is not the key to
              happiness. Happiness is the key to success. If you love what you
              are doing, you will be successful. Success is the sum of small
              efforts, repeated day in and day out.
            </p>
          </div>
          <div id="Home-img">
            <img src={Image1} alt="Image" />
          </div>
        </div>
        <div id="Home-Head-Bottom">
          <div id="Icons">
            <div className="Home-Head-Bottom-Icons">
              <div id="Icons-Div">
                <div id="Icons-Div-Symbol">
                  <MdHomeWork className="Icons" />
                </div>
                <div id="Icons-Div-Content">
                  <p>1,23,441</p>
                  <p id="value">Live Job</p>
                </div>
              </div>
            </div>
            <div className="Home-Head-Bottom-Icons">
              <div id="Icons-Div">
                <div id="Icons-Div-Symbol">
                  <FaRegBuilding className="Icons" />
                </div>
                <div id="Icons-Div-Content">
                  <p>91220</p>
                  <p id="value">Companies</p>
                </div>
              </div>
            </div>
            <div className="Home-Head-Bottom-Icons">
              <div id="Icons-Div">
                <div id="Icons-Div-Symbol">
                  <IoIosPeople className="Icons" />
                </div>
                <div id="Icons-Div-Content">
                  <p>2,34,200</p>
                  <p id="value">Job Seekers</p>
                </div>
              </div>
            </div>
            <div className="Home-Head-Bottom-Icons">
              <div id="Icons-Div">
                <div id="Icons-Div-Symbol">
                  <IoPersonAdd className="Icons" />
                </div>
                <div id="Icons-Div-Content">
                  <p>1,03,741</p>
                  <p id="value">Employers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Home-Step">
        <div id="Home-Step-h1">How Website Works</div>
        <div id="Home-Step-Div">
          <div id="Home-Step-Content">
            <div className="Step-Content" id="Content-1">
              <div className="Content-Icon">
                <IoPersonAdd className="Icons"/>
              </div>
              <h1>Create Account</h1>
              <p>
                Click on "Sign Up" in the bottom. 
                Enter Your Name,Email, and Password.
                Accept the Terms and Conditions. 
                Click "Signup OR Login".{" "}
              </p>
            </div>
            <div className="Step-Content" id="Content-2">
              <div className="Content-Icon">
                <MdOutlineFindInPage className="Icons" />
              </div>
              <h1>Find a Job/Post a Job</h1>
              <p>
              Carefully read the job title, job requirements, and 
              qualifications.
              Look for specific instructions on how to apply, such as where to send your 
              application, what documents to include etc .{" "}
              </p>
            </div>
            <div className="Step-Content" id="Content-3">
              <div className="Content-Icon">
                <MdOutlineLogin className="Icons" />
              </div>
              <h1>Apply For Job/Recruit Suitable Candidates</h1>
              <p>
              Carefully read the job title, job requirements, and 
              qualifications.
              Look for specific instructions on how to apply, such as where to send your 
              application, what documents to include etc .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="Category">
        <div id="Cotegory-Body">
          <div id="Category-h1">POPULAR CATEGORIES</div>
          <div id="Category-div">
            <div className="Category-Bottom-Icons">
              <div id="Icons-Div">
                <div id="Icons-Div-Symbol">
                  <FaMobileAlt className="Icons" />
                </div>
                <div id="Icons-Div-Content">
                  <p>Mobile App Development</p>
                  <p id="value">500 Open Positions</p>
                </div>
              </div>
            </div>
            <div className="Category-Bottom-Icons">
              <div id="Icons-Div">
                <div id="Icons-Div-Symbol">
                  <MdOutlineGraphicEq className="Icons" />
                </div>
                <div id="Icons-Div-Content">
                  <p>Graphics & Design</p>
                  <p id="value">305 Open Positions</p>
                </div>
              </div>
            </div>
            <div className="Category-Bottom-Icons">
              <div id="Icons-Div">
                <div id="Icons-Div-Symbol">
                  <MdOutlineWeb className="Icons" />
                </div>
                <div id="Icons-Div-Content">
                  <p>Frontend Web Development</p>
                  <p id="value">200 Open Positions</p>
                </div>
              </div>
            </div>
            <div className="Category-Bottom-Icons">
              <div id="Icons-Div">
                <div id="Icons-Div-Symbol">
                  <SiMdnwebdocs className="Icons" />
                </div>
                <div id="Icons-Div-Content">
                  <p>MERN STACK Development</p>
                  <p id="value">1000+ Open Positions</p>
                </div>
              </div>
            </div>

            <div className="Category-Bottom-Icons">
              <div id="Icons-Div">
                <div id="Icons-Div-Symbol">
                  <MdAccountBalance className="Icons" />
                </div>
                <div id="Icons-Div-Content">
                  <p>Account & Finance</p>
                  <p id="value">150 Open Positions</p>
                </div>
              </div>
            </div>
            <div className="Category-Bottom-Icons">
              <div id="Icons-Div">
                <div id="Icons-Div-Symbol">
                  <GiArtificialHive className="Icons" />
                </div>
                <div id="Icons-Div-Content">
                  <p>Artificial Intelligence</p>
                  <p id="value">867 Open Positions</p>
                </div>
              </div>
            </div>
            <div className="Category-Bottom-Icons">
              <div id="Icons-Div">
                <div id="Icons-Div-Symbol">
                  <FaPhotoVideo className="Icons" />
                </div>
                <div id="Icons-Div-Content">
                  <p>Video Animation</p>
                  <p id="value">50 Open Positions</p>
                </div>
              </div>
            </div>
            <div className="Category-Bottom-Icons">
              <div id="Icons-Div">
                <div id="Icons-Div-Symbol">
                  <IoGameController className="Icons" />
                </div>
                <div id="Icons-Div-Content">
                  <p>Game Development</p>
                  <p id="value">80 Open Positions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Company">
        <div id="Company-Body">
          <div id="Company-h1">TOP COMPANIES</div>
          <div id="Company-div">
            <div className="Companies-Icons">
              <div id="Companies-Icons-Div">
                <div id="Companies-Symbol">
                  <FaMicrosoft className="Icons" />
                </div>
                <div id="Companies-Content">
                  <p className="Companies-Name">Microsoft</p>
                  <p className="Companies-Location">Street 10 Delhi India</p>
                </div>
              </div>
              <div id="Icons-Div-Bottom">Open Positions 10</div>
            </div>
            <div className="Companies-Icons">
              <div id="Companies-Icons-Div">
                <div id="Companies-Symbol">
                  <SiTesla className="Icons" />
                </div>
                <div id="Companies-Content">
                  <p className="Companies-Name">Tesla</p>
                  <p className="Companies-Location">Street 10 Delhi India</p>
                </div>
              </div>
              <div id="Icons-Div-Bottom">Open Positions 10</div>
            </div>
            <div className="Companies-Icons">
              <div id="Companies-Icons-Div">
                <div id="Companies-Symbol">
                  <FaApple className="Icons" />
                </div>
                <div id="Companies-Content">
                  <p className="Companies-Name">Apple</p>
                  <p className="Companies-Location">Street 10 Delhi India</p>
                </div>
              </div>
              <div id="Icons-Div-Bottom">Open Positions 10</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
