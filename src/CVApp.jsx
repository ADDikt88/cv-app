import EditInfo from "./EditInfo.jsx";
import DisplayInfo from "./DisplayInfo.jsx";
import EditEducation from "./EditEducation.jsx";
import DisplayEducation from "./DisplayEducation.jsx";
import EditSkills from "./EditSkills.jsx";
import DisplaySkills from "./DisplaySkills.jsx";
import EditExperience from "./EditExperience.jsx";
import DisplayExperience from "./DisplayExperience.jsx";
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

  const [experienceList, setExperienceList] = useState([
    {
      jobTitle: "Software Developer",
      company: "Pear Inc.",
      startMonth: 1,
      startYear: 2015,
      endMonth: 1,
      endYear: 2025,
      current: false,
      responsibility: [
        "Developed entire user interface",
        "Created the first jPhone",
        "Added a scroll wheel to the jMouse",
      ],
    },
  ]);

  const [skillsList, setSkillsList] = useState(["React", "HTML", "CSS"]);

  const [isChecked, setIsChecked] = useState(false);

  const [inputMonth, setInputMonth] = useState("");
  const [inputYear, setInputYear] = useState("");

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

  function handleExperienceSubmit(e) {
    console.log("experience added");
    e.preventDefault();
    const jobTitle = e.target.elements.jobTitle.value;
    const company = e.target.elements.company.value;
    const startMonth = e.target.elements.startMonth.value;
    const startYear = e.target.elements.startYear.value;
    const endMonth = e.target.elements.endMonth.value;
    const endYear = e.target.elements.endYear.value;
    const current = e.target.elements.current.checked;

    const exp1 = e.target.elements.experience1.value;
    const exp2 = e.target.elements.experience2.value;
    const exp3 = e.target.elements.experience3.value;

    const responsibility = [exp1, exp2, exp3];

    setExperienceList([
      ...experienceList,
      {
        jobTitle,
        company,
        startMonth,
        startYear,
        endMonth,
        endYear,
        current,
        responsibility,
      },
    ]);
    setIsChecked(false);
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

  function handleCheckbox() {
    if (!isChecked) {
      setInputMonth("");
      setInputYear("");
    }
    setIsChecked(!isChecked);
  }

  function handleInputMonth(e) {
    setInputMonth(e.target.value);
  }

  function handleInputYear(e) {
    setInputYear(e.target.value);
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
        <EditExperience
          handleSubmit={handleExperienceSubmit}
          experienceList={experienceList}
          handleCheckbox={handleCheckbox}
          isChecked={isChecked}
          inputMonth={inputMonth}
          inputYear={inputYear}
          handleInputMonth={handleInputMonth}
          handleInputYear={handleInputYear}
        />
        <EditEducation
          handleSubmit={handleEducationSubmit}
          educationList={educationList}
        />
      </div>
      <div className="right-box">
        <p>See your CV template update below</p>
        <DisplayInfo user={user} />
        <DisplaySkills skillsList={skillsList} />
        <DisplayExperience experienceList={experienceList} />
        <DisplayEducation educationList={educationList} />
      </div>
    </>
  );
}

export default CVApp;
