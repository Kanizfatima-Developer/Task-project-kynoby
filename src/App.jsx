import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "./components/Sidebar";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Upload from "./Pages/Upload";
import Setup from "./Pages/Setup";
import Context from "./Pages/Context";
import Addpatient from "./Pages/Addpatient";
import CaseQueue from "./Pages/CaseQueue";
import Investigate from "./Pages/Investigate";
import Chronology from "./Pages/Chronology";
import Interviews from "./Pages/Interviews";
import Evidence from "./Pages/Evidence";
import ReviewCase from "./Pages/ReviewCase";
import DraftResponse from "./Pages/DraftResponse";
import InvestigationLog from "./Pages/InvestigationLog";
import ResponseSaved from "./Pages/ResponseSaved";
import CaseClosed from "./Pages/CaseClosed";


function Layout() {

  const [showSidebar, setShowSidebar] = useState(true);
  const location = useLocation();

 
  const hideSidebar = location.pathname === "/";

  return (
    <div style={{display:"flex"}}>

     
      {!hideSidebar && showSidebar && <Sidebar />}

      
      {!hideSidebar && (

        <button
          onClick={() => setShowSidebar(!showSidebar)}
          style={{
            position:"fixed",
            top:"15px",
            left: showSidebar ? "235px" : "15px",
            zIndex:1000,
            padding:"8px 14px",
            background:"linear-gradient(90deg,#6366f1,#4f46e5)",
            color:"white",
            border:"none",
            borderRadius:"8px",
            cursor:"pointer",
            boxShadow:"0 5px 15px rgba(0,0,0,0.1)"
          }}
        >
          ☰
        </button>

      )}

      
      <div
        style={{
          flex:1,
          marginLeft: !hideSidebar && showSidebar ? "220px" : "0px",
          padding:"30px",
          transition:"0.3s",
          width:"100%"
        }}
      >

        <Routes>

          <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />

          <Route path="/setup" element={<Setup />} />
          <Route path="/context" element={<Context />} />

          <Route path="/add-patient" element={<Addpatient />} />
          <Route path="/case-queue" element={<CaseQueue />} />

          <Route path="/investigate" element={<Investigate />} />
          <Route path="/chronology" element={<Chronology />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/evidence" element={<Evidence />} />

          <Route path="/review-case" element={<ReviewCase />} />
          <Route path="/draft-response" element={<DraftResponse />} />

          <Route path="/investigation-log" element={<InvestigationLog />} />

          <Route path="/response-saved" element={<ResponseSaved />} />

          <Route path="/case-closed" element={<CaseClosed />} />

        </Routes>

      </div>

    </div>
  );
}


function App() {
  return (

    <BrowserRouter>

      <Layout />

    </BrowserRouter>

  );
}

export default App;