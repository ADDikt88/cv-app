import EditInfo from "./EditInfo.jsx";
import DisplayInfo from "./DisplayInfo.jsx";
import { useState } from "react";

import "./CVApp.css";

function CVApp() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <div className="left-box">
        <p>Left Box</p>
        <EditInfo name={name} handleChange={handleChange} />
      </div>
      <div className="right-box">
        <p>Right Box</p>
        <DisplayInfo name={name} />
      </div>
    </>
  );
}

export default CVApp;
