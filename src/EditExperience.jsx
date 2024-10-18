import "./Edit.css";
import CollapsibleButton from "./CollapsibleButton";

function EditExperience({
  handleSubmit,
  experienceList,
  handleCheckbox,
  isChecked,
  inputMonth,
  inputYear,
  handleInputMonth,
  handleInputYear,
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
              />
              <Input
                label="Company"
                name="company"
                type="text"
                title="Please enter the name of the company you worked at"
                minLength="1"
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
                />
                <Input
                  label="Start Year"
                  name="startYear"
                  type="number"
                  title="Please enter the year you started the job"
                  min="1930"
                  max="2025"
                  step="1"
                />
                <Checkbox
                  label="Current?"
                  name="current"
                  checked={isChecked}
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
                  disabled={isChecked}
                  value={inputMonth}
                  onChange={handleInputMonth}
                />
                <Input
                  label="End Year"
                  name="endYear"
                  type="number"
                  title="Please enter the year you ended the job"
                  min="1930"
                  max="2025"
                  step="1"
                  disabled={isChecked}
                  value={inputYear}
                  onChange={handleInputYear}
                />
              </div>
              <ExperienceTextArea
                id="1"
                name="experience1"
                placeholder="Add an experience..."
                title="Please enter the name of the company you worked at"
              />
              <ExperienceTextArea
                id="2"
                name="experience2"
                placeholder="Add an experience..."
                title="Please enter the name of the company you worked at"
              />
              <ExperienceTextArea
                id="3"
                name="experience3"
                placeholder="Add an experience..."
                title="Please enter the name of the company you worked at"
              />
            </fieldset>
            <button className="exp-submit" type="submit">
              Add Experience
            </button>
          </form>
          <ExperienceCard experienceList={experienceList} />
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
  value,
  onChange,
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
          value={value}
          onChange={onChange}
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
        />
      </label>
    </div>
  );
}

function ExperienceTextArea({ id, title, placeholder, name }) {
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
        />
      </label>
    </div>
  );
}

function ExperienceCard({ experienceList }) {
  return (
    <div className="experience-card">
      <ul>
        {experienceList.map((experience, index) => (
          <li key={index}>
            <p>{experience.jobTitle}</p>
            <p>{experience.company}</p>
            <button>Edit</button>
            <button>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditExperience;
