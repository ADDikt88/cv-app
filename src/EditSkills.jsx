import "./Edit.css";
import CollapsibleButton from "./CollapsibleButton";

function EditSkills({ handleSubmit, skillsList }) {
  return (
    <>
      <div className="skills-container">
        <CollapsibleButton buttonLabel="Skills">
          <form onSubmit={handleSubmit}>
            <Input
              label=""
              name="skill"
              type="text"
              title="Please enter a new skill"
              minLength="1"
            />

            <button className="skill-submit" type="submit">
              Add Skill
            </button>
          </form>
          <SkillsCard skillsList={skillsList} />
        </CollapsibleButton>
      </div>
    </>
  );
}

function Input({ label, name, type, title, minLength }) {
  return (
    <div>
      <label>
        {label}{" "}
        <input
          type={type}
          name={name}
          title={title}
          minLength={minLength}
          defaultValue=""
          required
        />
      </label>
    </div>
  );
}

function SkillsCard({ skillsList }) {
  return (
    <div className="skills-card">
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>
            <p>{skill}</p>
            <button>Edit</button>
            <button>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditSkills;
