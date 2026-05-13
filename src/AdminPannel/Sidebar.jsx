import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();


  const handleLogout = () => {

  localStorage.removeItem("adminLogin");

  navigate("/admin-login");

};




  return (
    <>
      <div
        style={{
          width: "250px",
          height: "100vh",
          background: "#212529",
          color: "white",
          padding: "20px",
          position: "fixed",
        }}
      >
        <h2 className="mb-4">Admin Panel</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>

          <li className="mb-3">
            <Link
              to="/dashboard"
              style={{ color: "white", textDecoration: "none" }}
            >
              Dashboard
            </Link>
          </li>

          <li className="mb-3">
            <Link
              to="/leads"
              style={{ color: "white", textDecoration: "none" }}
            >
              Leads
            </Link>
          </li>


          <li className="mb-3">
            <Link to="/today-leads"
              style={{ color: "white", textDecoration: "none" }}
              >
  Today Leads
</Link>
          </li>

          <li className="mb-3">
           <button
  onClick={handleLogout}
  className="btn btn-danger w-100"
>
  Logout
</button>
          </li>

        </ul>
      </div>
    </>
  );
}

export default Sidebar;