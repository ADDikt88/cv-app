import EditInfo from "./EditInfo.jsx";
import DisplayInfo from "./DisplayInfo.jsx";
import EditEducation from "./EditEducation.jsx";
import DisplayEducation from "./DisplayEducation.jsx";
import EditSkills from "./EditSkills.jsx";
import DisplaySkills from "./DisplaySkills.jsx";
import { useState } from "react";

import "./CVApp.css";

function CVApp() {
  const [user, setUser] = useState({
    name: "Kyle Tsang",
    email: "fake@fake.aol",
    phone: "123456789",
    description: "lorem ipsum",
  });

  const [educationList, setEducationList] = useState([
    {
      name: "University of Toronto",
      degree: "Engineering Science",
      entryYear: 2023,
      gradYear: 2025,
    },
  ]);
  const [skillsList, setSkillsList] = useState(["React", "HTML", "CSS"]);

  function handleEducationSubmit(e) {
    console.log("education added");
    e.preventDefault();
    const name = e.target.elements.name.value;
    const degree = e.target.elements.degree.value;
    const entryYear = e.target.elements.entryYear.value;
    const gradYear = e.target.elements.gradYear.value;

    setEducationList([...educationList, { name, degree, entryYear, gradYear }]);

    e.target.reset();
  }

  function handleNewSkill(e) {
    console.log("skill added");
    e.preventDefault();
    const skill = e.target.elements.skill.value;

    setSkillsList([...skillsList, skill]);

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
        <p>Open a section below to edit your CV</p>
        <EditInfo
          user={user.name}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handlePhoneChange={handlePhoneChange}
          handleDescChange={handleDescChange}
        />
        <EditSkills handleSubmit={handleNewSkill} skillsList={skillsList} />
        <EditEducation
          handleSubmit={handleEducationSubmit}
          educationList={educationList}
        />
      </div>
      <div className="right-box">
        <p>See your CV template update below</p>
        <DisplayInfo user={user} />
        <DisplaySkills skillsList={skillsList} />
        <DisplayEducation educationList={educationList} />
      </div>
    </>
  );
}

export default CVApp;
