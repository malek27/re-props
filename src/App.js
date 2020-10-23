import React from "react";
import Profile from "./profile/Profile";
import "./App.css";
import photo from "./profile/ProfilPhoto.jpg";
import Alert from "./profile/Alert";
function App() {
  const styleObject = { color: "blue", textAlign: "center" };
  const alertMyInput = (name) => alert(name);
  return (
    <div style={styleObject}>
      <Profile
        profession="Future Developer"
        bio="a 27 year-old web developer"
        fullName="Malek Marzouki"
      >
        <img src={photo} alt="pic" />
      </Profile>
      <Alert name="Malek" alertMyInput={alertMyInput} />
    </div>
  );
}

export default App;
