import "./Edit.css";
import CollapsibleButton from "./CollapsibleButton";

function EditSkills({
  handleSubmit,
  skillsList,
  handleSkillInputChange,
  editSkill,
  handleSkillEditClick,
  handleSkillDelClick,
}) {
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
              onChange={handleSkillInputChange}
              value={editSkill}
            />

            <button className="skill-submit" type="submit">
              Add Skill
            </button>
          </form>
          <SkillsCard
            skillsList={skillsList}
            handleSkillEditClick={handleSkillEditClick}
            handleSkillDelClick={handleSkillDelClick}
          />
        </CollapsibleButton>
      </div>
    </>
  );
}

function Input({ label, name, type, title, minLength, onChange, editSkill }) {
  return (
    <div>
      <label>
        {label}{" "}
        <input
          className="skills-input"
          type={type}
          name={name}
          title={title}
          minLength={minLength}
          onChange={onChange}
          value={editSkill}
          required
        />
      </label>
    </div>
  );
}

function SkillsCard({ skillsList, handleSkillEditClick, handleSkillDelClick }) {
  return (
    <div className="skills-card">
      <ul className="skills-list">
        {skillsList.map((skill, index) => (
          <li key={index}>
            <p>{skill}</p>
            <button
              className="edit-skill"
              onClick={() => {
                handleSkillEditClick(index);
              }}
            >
              Edit
            </button>
            <button
              className="del-skill"
              onClick={() => {
                handleSkillDelClick(index);
              }}
            >
              Del
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditSkills;
