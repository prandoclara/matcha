import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./WelcomePages.css";
import LoginPages from "./LoginPages";
import React, { useState, useEffect } from "react";


function WelcomePages(): JSX.Element {
  const [showAlreadySignedIn, setShowAlreadySignedIn] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);
  }, []);

  return (
    <>
      <h1>Matcha</h1>
      <div className="card">
        {/* Affiche le bouton seulement si on n'a pas encore cliqué ET pas d'utilisateur */}
        {!showAlreadySignedIn && !user && (
          <button onClick={() => setShowAlreadySignedIn(true)}>
            🫶 Click here to find u LOVEEE 🫶
          </button>
        )}
        {/* Affiche AlreadySignedIn seulement après clic */}
        {showAlreadySignedIn && <AlreadySignedIn setUser={setUser} />}
      </div>
    </>
  );
}

type AlreadySignedInProps = {
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
};

function AlreadySignedIn({ setUser }: AlreadySignedInProps): JSX.Element {
  const [user, localSetUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      localSetUser(storedUser);
      setUser(storedUser);
      console.log("Utilisateur déjà connecté :", JSON.parse(storedUser));
    } else {
      console.log("Aucun utilisateur connecté");
      localSetUser(null);
      setUser(null);
    }
  }, [setUser]);

  if (user) {
    return <div>Bienvenue, {JSON.parse(user).email}</div>;
  } else {
    return <LoginPages />;
  }
}


export default WelcomePages;
