import "./Edit.css";
import CollapsibleButton from "./CollapsibleButton";

function EditEducation({
  handleSubmit,
  educationList,
  handleEduInputChange,
  editEdu,
  handleEduEditClick,
  handleEduDelClick,
}) {
  return (
    <>
      <div className="education-container">
        <CollapsibleButton buttonLabel="Education">
          <form onSubmit={handleSubmit}>
            <fieldset className="education-content">
              <Input
                label="School"
                name="name"
                type="text"
                title="Please enter your school name"
                minLength="1"
                onChange={handleEduInputChange}
                value={editEdu.degree}
                id="editSchool"
              />
              <Input
                label="Degree"
                name="degree"
                type="text"
                title="Please enter the name of your degree"
                minLength="1"
                onChange={handleEduInputChange}
                value={editEdu.degree}
                id="editDegree"
              />
              <div className="education-years">
                <Input
                  label="Entry Year"
                  name="entryYear"
                  type="number"
                  title="Please enter your year of graduation"
                  min="1930"
                  max="2030"
                  step="1"
                  onChange={handleEduInputChange}
                  value={editEdu.entryYear}
                  id="editEduEntryYear"
                />
                <Input
                  label="Graduation Year"
                  name="gradYear"
                  type="number"
                  title="Please enter your year of graduation"
                  min="1930"
                  max="2030"
                  step="1"
                  onChange={handleEduInputChange}
                  value={editEdu.gradYear}
                  id="editEduGradYear"
                />
              </div>
            </fieldset>
            <button className="edu-submit" type="submit">
              Add Education
            </button>
          </form>
          <EducationCard
            educationList={educationList}
            handleEduEditClick={handleEduEditClick}
            handleEduDelClick={handleEduDelClick}
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
  onChange,
  editEdu,
  id,
}) {
  return (
    <div>
      <label>
        <span>{label} </span>
        <input
          type={type}
          name={name}
          title={title}
          minLength={minLength}
          onChange={onChange}
          value={editEdu}
          min={min}
          max={max}
          step={step}
          id={id}
          required
        />
      </label>
    </div>
  );
}

function EducationCard({
  educationList,
  handleEduEditClick,
  handleEduDelClick,
}) {
  return (
    <div className="education-card">
      <ul className="edu-list">
        {educationList.map((education, index) => (
          <li key={index}>
            <p>{education.name}</p>
            <p>{education.degree}</p>
            {/* <p>
              {education.entryYear} to {education.gradYear}
            </p> */}
            <button
              className="edit-edu"
              onClick={() => {
                handleEduEditClick(index);
              }}
            >
              Edit
            </button>
            <button
              className="del-edu"
              onClick={() => {
                handleEduDelClick(index);
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

export default EditEducation;
