import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

function Leads() {



  const [leads, setLeads] = useState([]);
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
          <h1>All Leads</h1>

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

  {leads.map((lead, index) => (

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

export default Leads;