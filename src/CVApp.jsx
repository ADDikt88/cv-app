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
    name: null,
    degree: null,
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

  const [editExpMode, setEditExpMode] = useState(false);
  const [editExpIndex, setEditExpIndex] = useState(null);
  const [editExp, setEditExp] = useState({
    jobTitle: null,
    company: null,
    startMonth: null,
    startYear: null,
    endMonth: null,
    endYear: null,
    current: false,
    resp1: null,
    resp2: null,
    resp3: null,
  });

  const [isChecked, setIsChecked] = useState(editExp.current);

  //const [inputMonth, setInputMonth] = useState("");
  //const [inputYear, setInputYear] = useState("");

  function handleExpEditClick(index) {
    console.log(experienceList[index].current);
    //
    const editJobTitle = document.querySelector("#editJobTitle");
    const editCompany = document.querySelector("#editCompany");
    const editStartMonth = document.querySelector("#editStartMonth");
    const editStartYear = document.querySelector("#editStartYear");

    const editEndMonth = document.querySelector("#editEndMonth");
    const editEndYear = document.querySelector("#editEndYear");

    const editCurrent = document.querySelector("#checkbox");

    const editExp1 = document.querySelector("#text_1");
    const editExp2 = document.querySelector("#text_2");
    const editExp3 = document.querySelector("#text_3");

    editJobTitle.value = experienceList[index].jobTitle;
    editCompany.value = experienceList[index].company;
    editStartMonth.value = experienceList[index].startMonth;
    editStartYear.value = experienceList[index].startYear;
    editEndMonth.value = experienceList[index].endMonth;
    editEndYear.value = experienceList[index].endYear;

    editExp1.value = experienceList[index].responsibility[0];
    editExp2.value = experienceList[index].responsibility[1];
    editExp3.value = experienceList[index].responsibility[2];

    if (experienceList[index].current) {
      editEndMonth.disabled = true;
      editEndYear.disabled = true;
      editExp.current = true;
    } else {
      editEndMonth.disabled = false;
      editEndYear.disabled = false;
      editExp.current = false;
    }

    setIsChecked(experienceList[index].current);
    editCurrent.checked = experienceList[index].current;

    const expItems = document.querySelectorAll(".exp-list > li");
    expItems.forEach((expItem) => (expItem.style.border = "none"));
    expItems[index].style.border = "1px solid red";

    const expButton = document.querySelector(".exp-submit");
    expButton.textContent = "Edit Experience";

    const expButtons = document.querySelectorAll(".exp-list > li > button");
    expButtons.forEach((expBtn) => (expBtn.disabled = true));

    setEditExpIndex(index);
    setEditExpMode(true);
  }

  function handleExpDelClick(index) {
    console.log("exp deleting " + index);
    const confirmed = window.confirm(
      "Are you sure you want to remove this experience?"
    );

    if (confirmed) {
      const updatedExperience = experienceList.filter((item, i) => i !== index);
      setExperienceList(updatedExperience);
    }
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

    const newExperience = {
      jobTitle,
      company,
      startMonth,
      startYear,
      endMonth,
      endYear,
      current,
      responsibility,
    };

    if (!editExpMode) {
      console.log("experience added");
      setExperienceList([...experienceList, newExperience]);
      const editEndMonth = document.querySelector("#editEndMonth");
      const editEndYear = document.querySelector("#editEndYear");
      editEndMonth.disabled = false;
      editEndYear.disabled = false;
    } else {
      console.log("experience editing");
      const updatedExperience = [...experienceList];
      updatedExperience[editExpIndex] = newExperience;
      setExperienceList(updatedExperience);

      const expButton = document.querySelector(".exp-submit");
      expButton.textContent = "Add Experience";

      const expItems = document.querySelectorAll(".exp-list > li");
      expItems.forEach((expItem) => (expItem.style.border = "none"));

      const expButtons = document.querySelectorAll(".exp-list > li > button");
      expButtons.forEach((expBtn) => (expBtn.disabled = false));
    }
    setEditExpIndex(null);
    setEditExpMode(false);
    setIsChecked(false);

    setEditExp({
      jobTitle: null,
      company: null,
      startMonth: null,
      startYear: null,
      endMonth: null,
      endYear: null,
      current: false,
      resp1: null,
      resp2: null,
      resp3: null,
    });
    e.target.reset();
  }

  function handleCheckbox() {
    if (!editExp.current) {
      const editEndMonth = document.querySelector("#editEndMonth");
      const editEndYear = document.querySelector("#editEndYear");
      editEndMonth.disabled = true;
      editEndYear.disabled = true;
      editExp.current = true;
    } else {
      const editEndMonth = document.querySelector("#editEndMonth");
      const editEndYear = document.querySelector("#editEndYear");
      editEndMonth.disabled = false;
      editEndYear.disabled = false;
      editExp.current = false;
    }
    setIsChecked(!isChecked);
  }

  function handleExpInputChange(e) {
    console.log(editExp);
    setEditExp(e.target.value);
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
          editExp={editExp}
          handleExpEditClick={handleExpEditClick}
          handleExpDelClick={handleExpDelClick}
          handleExpInputChange={handleExpInputChange}
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
