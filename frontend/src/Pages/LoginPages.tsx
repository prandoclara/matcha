import React, { useState } from "react";

function LoginPages(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tentative de login avec :", { email, password });

    // Simuler une connexion (à remplacer par un appel API)
    if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email }));
      alert("Connecté !");
      // Redirection possible ici (ex: navigate("/home"))
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </div>
        <div style={{ marginTop: 16 }}>
          <label>Mot de passe :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </div>
        <button type="submit" style={{ marginTop: 20 }}>
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default LoginPages;
