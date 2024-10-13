//import "./Display.css";

function DisplayEducation({ educationList }) {
  return (
    <div className="display-education">
      <h2>Education</h2>
      <ul>
        {educationList.map((education, index) => (
          <li key={index}>
            <h2>{education.name}</h2>
            <p>{education.degree}</p>
            <p>{education.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayEducation;
