import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://portfolio-steam-backend.onrender.com/api/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log("Connexion réussie!");
        setToken(response.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.error("Connexion échouée", error);
      });
  };

  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("https://portfolio-steam-backend.onrender.com/api/auth/signup", {
  //       email,
  //       password,
  //     })
  //     .then((response) => {
  //       console.log("Inscription réussie!");
  //     })
  //     .catch((error) => {
  //       console.error("Inscription échouée", error);
  //     });
  // };

  return (
    <main className="login-page">
      <form className="login-form">
        <div className="login-form-content">
          <h3 className="login-form-title">Connexion Admin</h3>
          <div className="form-group">
            <label>Adresse mail</label>
            <input
              type="email"
              className="form-mail"
              placeholder="Adresse mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              className="form-control"
              placeholder="Mot de passe"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="login-btn" onClick={handleLogin}>
              Connexion
            </button>
            {/* <button type="submit" className="signup-btn" onClick={handleSignup}>
              Inscription
            </button> */}
          </div>
        </div>
      </form>
    </main>
  );
}
