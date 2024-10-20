function DisplayExperience({ experienceList }) {
  const sortedExperience = experienceList.sort((a, b) => {
    if (a.current) return -1;
    if (b.current) return 1;
    if (b.endYear === a.endYear) {
      return b.endMonth - a.endMonth;
    }
    return b.endYear - a.endYear;
  });
  return (
    <div className="display-experience">
      <h2>Experience</h2>
      <ul>
        {sortedExperience.map((experience, index) => (
          <li key={index}>
            <h3>{experience.jobTitle}</h3>
            <p className="experience-dates">
              {experience.startMonth}
              {"/"}
              {experience.startYear}
              {" - "}
              {experience.current
                ? "Present"
                : experience.endMonth + "/" + experience.endYear}
            </p>
            <p>{experience.company}</p>
            <div></div>
            <ul>
              {experience.responsibility.map(
                (response, indexR) =>
                  response && (
                    <li key={indexR}>
                      <p>{response}</p>
                    </li>
                  )
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayExperience;
