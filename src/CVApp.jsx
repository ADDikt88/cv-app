import EditInfo from "./EditInfo.jsx";
import DisplayInfo from "./DisplayInfo.jsx";
import EditEducation from "./EditEducation.jsx";
import DisplayEducation from "./DisplayEducation.jsx";
import { useState } from "react";

import "./CVApp.css";

function CVApp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [educationList, setEducationList] = useState([]);

  function handleEducationSubmit(e) {
    console.log("education added");
    e.preventDefault();
    const name = e.target.elements.name.value;
    const degree = e.target.elements.degree.value;
    const year = e.target.elements.year.value;

    setEducationList([...educationList, { name, degree, year }]);

    e.target.reset();
  }

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
        <EditEducation handleSubmit={handleEducationSubmit} />
      </div>
      <div className="right-box">
        <p>Right Box</p>
        <DisplayInfo user={user} />
        <DisplayEducation educationList={educationList} />
      </div>
    </>
  );
}

export default CVApp;
