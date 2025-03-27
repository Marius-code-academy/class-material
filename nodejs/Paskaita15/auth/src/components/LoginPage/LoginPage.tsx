import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function onFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const body = {
        username,
        password,
      };

      const { data } = await axios.post("http://localhost:3000/login", body, { withCredentials: true });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="username-input">Username</label>
        <input type="text" id="username-input" value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
        <label htmlFor="password-input">Password</label>
        <input type="password" id="password-input" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
