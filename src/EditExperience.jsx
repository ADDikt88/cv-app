import "./Edit.css";
import CollapsibleButton from "./CollapsibleButton";

function EditExperience({
  handleSubmit,
  experienceList,
  handleCheckbox,
  editExp,
  handleExpEditClick,
  handleExpDelClick,
  handleExpInputChange,
}) {
  return (
    <>
      <div className="experience-container">
        <CollapsibleButton buttonLabel="Experience">
          <form onSubmit={handleSubmit}>
            <fieldset className="experience-form">
              <Input
                label="Job Title"
                name="jobTitle"
                type="text"
                title="Please enter your job title"
                minLength="1"
                value={editExp.jobTitle}
                onChange={handleExpInputChange}
                id="editJobTitle"
              />
              <Input
                label="Company"
                name="company"
                type="text"
                title="Please enter the name of the company you worked at"
                minLength="1"
                value={editExp.company}
                onChange={handleExpInputChange}
                id="editCompany"
              />
              <div className="employment-years">
                <Input
                  label="Start Month"
                  name="startMonth"
                  type="number"
                  title="Please enter the month you started the job"
                  min="1"
                  max="12"
                  step="1"
                  value={editExp.startMonth}
                  onChange={handleExpInputChange}
                  id="editStartMonth"
                />
                <Input
                  label="Start Year"
                  name="startYear"
                  type="number"
                  title="Please enter the year you started the job"
                  min="1930"
                  max="2025"
                  step="1"
                  value={editExp.startYear}
                  onChange={handleExpInputChange}
                  id="editStartYear"
                />
                <Checkbox
                  label="Current?"
                  name="current"
                  checked={editExp.current}
                  onChange={handleCheckbox}
                />
                <Input
                  label="End Month"
                  name="endMonth"
                  type="number"
                  title="Please enter the month you ended the job"
                  min="1"
                  max="12"
                  step="1"
                  disabled={editExp.current}
                  value={editExp.endMonth}
                  onChange={handleExpInputChange}
                  id="editEndMonth"
                />
                <Input
                  label="End Year"
                  name="endYear"
                  type="number"
                  title="Please enter the year you ended the job"
                  min="1930"
                  max="2025"
                  step="1"
                  disabled={editExp.current}
                  value={editExp.endYear}
                  onChange={handleExpInputChange}
                  id="editEndYear"
                />
              </div>
              <ExperienceTextArea
                id="1"
                name="experience1"
                placeholder="Add an experience..."
                title="Please enter the name of the company you worked at"
                value={editExp.resp1}
                onChange={handleExpInputChange}
              />
              <ExperienceTextArea
                id="2"
                name="experience2"
                placeholder="Add an experience..."
                title="Please enter the name of the company you worked at"
                value={editExp.resp2}
                onChange={handleExpInputChange}
              />
              <ExperienceTextArea
                id="3"
                name="experience3"
                placeholder="Add an experience..."
                title="Please enter the name of the company you worked at"
                value={editExp.resp3}
                onChange={handleExpInputChange}
              />
            </fieldset>
            <button className="exp-submit" type="submit">
              Add Experience
            </button>
          </form>
          <ExperienceCard
            experienceList={experienceList}
            handleExpEditClick={handleExpEditClick}
            handleExpDelClick={handleExpDelClick}
          />
        </CollapsibleButton>
      </div>
    </>
  );
}

function Input({
  label,
  name,
  type,
  title,
  minLength,
  min,
  max,
  step,
  disabled,
  editExp,
  onChange,
  id,
}) {
  return (
    <div>
      <label>
        {label}{" "}
        <input
          type={type}
          name={name}
          title={title}
          minLength={minLength}
          //defaultValue=""
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          value={editExp}
          onChange={onChange}
          id={id}
          required
        />
      </label>
    </div>
  );
}

function Checkbox({ label, value, name, onChange }) {
  return (
    <div>
      <label>
        {label}
        <input
          type="checkbox"
          name={name}
          checked={value}
          onChange={onChange}
          id="checkbox"
        />
      </label>
    </div>
  );
}

function ExperienceTextArea({
  id,
  title,
  placeholder,
  name,
  onChange,
  editExp,
}) {
  return (
    <div>
      <label>
        <span>{`Main Role ${id}`}</span>
        <textarea
          title={title}
          placeholder={placeholder}
          name={name}
          rows="3"
          cols="33"
          value={editExp}
          onChange={onChange}
          id={"text_" + id}
        />
      </label>
    </div>
  );
}

function ExperienceCard({
  experienceList,
  handleExpEditClick,
  handleExpDelClick,
}) {
  return (
    <div className="experience-card">
      <ul className="exp-list">
        {experienceList.map((experience, index) => (
          <li key={index}>
            <p>{experience.jobTitle}</p>
            <p>{experience.company}</p>
            <button
              className="edit-exp"
              onClick={() => {
                handleExpEditClick(index);
              }}
            >
              Edit
            </button>
            <button
              className="del-exp"
              onClick={() => {
                handleExpDelClick(index);
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

export default EditExperience;
