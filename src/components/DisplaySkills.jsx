function DisplaySkills({ skillsList }) {
  return (
    <div className="display-skills">
      <h2>Skills</h2>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>
            <p>{skill}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplaySkills;
