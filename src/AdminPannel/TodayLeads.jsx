import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

function TodayLeads() {

  const [leads, setLeads] = useState([]);

  useEffect(() => {

    fetch("http://localhost/alrambackend/getleads.php")
      .then((response) => response.json())
      .then((data) => setLeads(data));

  }, []);

  // Today's Date
  const today = new Date().toISOString().split("T")[0];

  // Filter Today Leads
  const todayLeads = leads.filter((lead) =>
    lead.created_at?.startsWith(today)
  );

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

          <h1>Today Leads</h1>

          <table className="table table-bordered mt-4">

            <thead className="table-dark">
              <tr>

                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Description</th>
                <th>Date & Time</th>

              </tr>
            </thead>

            <tbody>

              {todayLeads.map((lead, index) => (

                <tr key={index}>

                  <td>{lead.id}</td>

                  <td>{lead.fname}</td>

                  <td>{lead.emaill}</td>

                  <td>{lead.phone}</td>

                  <td>{lead.discription}</td>

                  <td>{lead.created_at}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}

export default TodayLeads;