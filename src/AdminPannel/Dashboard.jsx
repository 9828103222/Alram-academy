import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

function Dashboard() {
  
  
  const [leads, setLeads] = useState([]);


  const today = new Date().toISOString().split("T")[0];
  const todayLeads = leads.filter((lead) =>
  lead.created_at?.startsWith(today)
);



  useEffect(() => {

  fetch("http://localhost/alrambackend/getleads.php")
    .then((response) => response.json())
    .then((data) => setLeads(data));

}, []);







  return (
    <>
      <div style={{ display: "flex" }}>

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div
          style={{
            marginLeft: "260px",
            padding: "30px",
            width: "100%",
          }}
        >
          <h1>Admin Dashboard</h1>

          {/* <p className="mt-3">
            Welcome Admin 
          </p> */}

          <div className="row mt-4">

            <div className="col-md-4">
              <div className="card shadow p-4 text-center">
                <h3>Total Leads</h3>
                <h2>{leads.length}</h2>
              </div>
            </div>

            <div className="col-md-4">
  <div className="card shadow p-4 text-center">

    <h3>New Lead</h3>

    <h2>
      {leads.length > 0
        ? leads[0].fname
        : "No Lead"}
    </h2>

  </div>
</div>

          <div className="col-md-4">
  <div className="card shadow p-4 text-center">

    <h3>Today Leads</h3>

    <h2>{todayLeads.length}</h2>

  </div>
</div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;