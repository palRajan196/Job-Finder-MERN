import Nav from "./Component/Nav";
import Bottom from "./Component/Bottom";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import PrivateComponent from "./Component/PrivateComponent";
import UpdateProduct from "./Component/Update_Product";
import Home from "./Component/Home";
import ApplyJob from "./Component/Job_Apply";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from "./Component/Jobs";
import JobDetails from "./Component/Job_Details";
import Add_Jobs from "./Component/Job_Add";
import SubmittedJob from "./Component/SubmittedJob";
import ControleJob from "./Component/ControleJob";
import Response_Back from "./Component/Responce";

function App() {
  const auth = localStorage.getItem("user");
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Home />} />
            <Route path="/UpdateProduct/:id" element={<UpdateProduct />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/JobDetails/:id" element={<JobDetails />} />
            <Route path="/Add_Jobs" element={<Add_Jobs />} />
            <Route path="/ApplyJob" element={<ApplyJob />} />
            <Route path="/SubmittedJob" element={<SubmittedJob />} />
            <Route path="/ControleJob" element={<ControleJob />} />
            <Route path="/Responce" element={<Response_Back />} />
          </Route>

          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<h1>Logout</h1>} />
        </Routes>

        {/* <Bottom/> */}
      </BrowserRouter>
    </>
  );
}
export default App;
