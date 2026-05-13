import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo Login
    if (email === "admin@gmail.com" && password === "12345") {
      localStorage.setItem("adminLogin", true);
     navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div
          className="card shadow p-4 mx-auto"
          style={{ maxWidth: "400px", borderRadius: "15px" }}
        >
          <h2 className="text-center mb-4">Admin Login</h2>

          <form onSubmit={handleLogin}>

            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Admin Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="btn btn-dark w-100">
              Login
            </button>

          </form>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;