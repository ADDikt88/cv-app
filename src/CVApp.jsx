import EditInfo from "./EditInfo.jsx";
import DisplayInfo from "./DisplayInfo.jsx";
import { useState } from "react";

import "./CVApp.css";

function CVApp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  function handleNameChange(e) {
    const updateName = { ...user, name: e.target.value };
    setUser(updateName);
  }

  function handleEmailChange(e) {
    const updateEmail = { ...user, email: e.target.value };
    setUser(updateEmail);
  }

  function handlePhoneChange(e) {
    const updatePhone = { ...user, phone: e.target.value };
    setUser(updatePhone);
  }

  function handleDescChange(e) {
    const updateDesc = { ...user, description: e.target.value };
    setUser(updateDesc);
  }

  return (
    <>
      <div className="left-box">
        <p>Left Box</p>
        <EditInfo
          user={user.name}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handlePhoneChange={handlePhoneChange}
          handleDescChange={handleDescChange}
        />
      </div>
      <div className="right-box">
        <p>Right Box</p>
        <DisplayInfo user={user} />
      </div>
    </>
  );
}

export default CVApp;
