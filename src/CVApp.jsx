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
  /******************************* Initializing Content ***********************************/
  const [user, setUser] = useState({
    name: "Kyle Tsang",
    email: "fake@fake.aol",
    phone: "123456789",
    description: "lorem ipsum",
  });

  const [skillsList, setSkillsList] = useState(["React", "HTML", "CSS"]);

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

  /******************************* Education Functions ***********************************/

  const [editEduMode, setEditEduMode] = useState(false);
  const [editEduIndex, setEditEduIndex] = useState(null);
  const [editEdu, setEditEdu] = useState({
    name: "",
    degree: "",
    entryYear: null,
    gradYear: null,
  });

  function handleEducationSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const degree = e.target.elements.degree.value;
    const entryYear = e.target.elements.entryYear.value;
    const gradYear = e.target.elements.gradYear.value;

    const newEducation = { name, degree, entryYear, gradYear };

    if (!editEduMode) {
      console.log("education added");
      setEducationList([...educationList, newEducation]);
    } else {
      console.log("skill editing");
      const updatedEducation = [...educationList];
      updatedEducation[editEduIndex] = newEducation;
      setEducationList(updatedEducation);

      const eduButton = document.querySelector(".edu-submit");
      eduButton.textContent = "Add Education";

      const eduItems = document.querySelectorAll(".edu-list > li");
      eduItems.forEach((eduItem) => (eduItem.style.border = "none"));

      const eduButtons = document.querySelectorAll(".edu-list > li > button");
      eduButtons.forEach((eduBtn) => (eduBtn.disabled = false));
    }
    setEditEduIndex(null);
    setEditEduMode(false);
    e.target.reset();
  }

  function handleEduEditClick(index) {
    console.log(educationList[index]);
    //
    const editSchool = document.querySelector("#editSchool");
    const editDegree = document.querySelector("#editDegree");
    const editEntryYear = document.querySelector("#editEduEntryYear");
    const editGradYear = document.querySelector("#editEduGradYear");

    editSchool.value = educationList[index].name;
    editDegree.value = educationList[index].degree;
    editEntryYear.value = educationList[index].entryYear;
    editGradYear.value = educationList[index].gradYear;

    const eduItems = document.querySelectorAll(".edu-list > li");
    eduItems.forEach((eduItem) => (eduItem.style.border = "none"));
    eduItems[index].style.border = "1px solid red";

    const eduButton = document.querySelector(".edu-submit");
    eduButton.textContent = "Edit Education";

    const eduButtons = document.querySelectorAll(".edu-list > li > button");
    eduButtons.forEach((eduBtn) => (eduBtn.disabled = true));

    setEditEduIndex(index);
    setEditEduMode(true);
  }

  function handleEduDelClick(index) {
    console.log("edu deleting " + index);
    const confirmed = window.confirm(
      "Are you sure you want to remove this education?"
    );

    if (confirmed) {
      const updatedEducation = educationList.filter((item, i) => i !== index);
      setEducationList(updatedEducation);
    }
  }

  function handleEduInputChange(e) {
    setEditEdu(e.target.value);
  }

  /******************************* Experience Functions ***********************************/

  const [isChecked, setIsChecked] = useState(false);

  const [inputMonth, setInputMonth] = useState("");
  const [inputYear, setInputYear] = useState("");

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
    setInputMonth("");
    setInputYear("");
    e.target.reset();
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

  /******************************* Skill Functions ***********************************/

  const [editSkillMode, setEditSkillMode] = useState(false);
  const [editSkillIndex, setEditSkillIndex] = useState(null);
  const [editSkill, setEditSkill] = useState("");

  function handleNewSkill(e) {
    e.preventDefault();
    const skill = e.target.elements.skill.value;

    if (!editSkillMode) {
      console.log("skill added " + skill);
      setSkillsList([...skillsList, skill]);
    } else {
      console.log("skill editing " + skill + editSkillIndex);
      const updatedSkills = [...skillsList];
      updatedSkills[editSkillIndex] = skill;
      setSkillsList(updatedSkills);
      const skillButton = document.querySelector(".skill-submit");
      skillButton.textContent = "Add SKill";

      const skillItems = document.querySelectorAll(".skills-list > li");
      skillItems.forEach((skillItem) => (skillItem.style.border = "none"));

      const skillButtons = document.querySelectorAll(
        ".skills-list > li > button"
      );
      skillButtons.forEach((skillBtn) => (skillBtn.disabled = false));
    }
    setEditSkillIndex(null);
    setEditSkillMode(false);
    e.target.reset();
  }

  function handleSkillEditClick(index) {
    console.log(skillsList[index]);
    const editField = document.querySelector(".skills-input");
    editField.value = skillsList[index];

    const skillItems = document.querySelectorAll(".skills-list > li");
    skillItems.forEach((skillItem) => (skillItem.style.border = "none"));
    skillItems[index].style.border = "1px solid red";

    const skillButton = document.querySelector(".skill-submit");
    skillButton.textContent = "Edit SKill";

    const skillButtons = document.querySelectorAll(
      ".skills-list > li > button"
    );
    skillButtons.forEach((skillBtn) => (skillBtn.disabled = true));

    setEditSkillIndex(index);
    setEditSkillMode(true);
  }

  function handleSkillDelClick(index) {
    console.log("skill deleting " + index);
    const confirmed = window.confirm(
      "Are you sure you want to remove this skill?"
    );

    if (confirmed) {
      const updatedSkills = skillsList.filter((item, i) => i !== index);
      setSkillsList(updatedSkills);
    }
  }

  function handleSkillInputChange(e) {
    setEditSkill(e.target.value);
  }

  /******************************* Info Change Functions ***********************************/

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

  /******************************* Return CV App ***********************************/
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
        <EditSkills
          handleSubmit={handleNewSkill}
          skillsList={skillsList}
          handleSkillInputChange={handleSkillInputChange}
          editSkill={editSkill}
          handleSkillEditClick={handleSkillEditClick}
          handleSkillDelClick={handleSkillDelClick}
        />
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
          handleEduInputChange={handleEduInputChange}
          editEdu={editEdu}
          handleEduEditClick={handleEduEditClick}
          handleEduDelClick={handleEduDelClick}
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
