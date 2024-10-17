//import "./Display.css";

function DisplayEducation({ educationList }) {
  return (
    <div className="display-education">
      <h2>Education</h2>
      <ul>
        {educationList.map((education, index) => (
          <li key={index}>
            <h3>{education.name}</h3>
            <p>{education.degree}</p>
            <p>
              {education.entryYear} to {education.gradYear}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayEducation;
