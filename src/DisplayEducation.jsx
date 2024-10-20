//import "./Display.css";

function DisplayEducation({ educationList }) {
  const sortedEducation = educationList.sort((a, b) => {
    return b.gradYear - a.gradYear;
  });
  return (
    <div className="display-education">
      <h2>Education</h2>
      <ul>
        {sortedEducation.map((education, index) => (
          <li key={index}>
            <h4 className="displayEduName">
              {education.name}
              {","}
            </h4>
            <p className="displayEduDegree">{education.degree}</p>
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
