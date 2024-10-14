import "./Edit.css";
import CollapsibleButton from "./CollapsibleButton";

function EditEducation({ handleSubmit, educationList }) {
  return (
    <>
      <div className="education-container">
        <CollapsibleButton buttonLabel="Education">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <Input
                label="School"
                name="name"
                type="text"
                title="Please enter your school name"
                minLength="1"
              />
              <Input
                label="Degree"
                name="degree"
                type="text"
                title="Please enter the name of your degree"
                minLength="1"
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
                />
                <Input
                  label="Graduation Year"
                  name="gradYear"
                  type="number"
                  title="Please enter your year of graduation"
                  min="1930"
                  max="2030"
                  step="1"
                />
              </div>
            </fieldset>
            <button className="edu-submit" type="submit">
              Submit
            </button>
          </form>
          <EducationCard educationList={educationList} />
        </CollapsibleButton>
      </div>
    </>
  );
}

function Input({ label, name, type, title, minLength, min, max, step }) {
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
          min={min}
          max={max}
          step={step}
          required
        />
      </label>
    </div>
  );
}

function EducationCard({ educationList }) {
  return (
    <div className="education-card">
      <ul>
        {educationList.map((education, index) => (
          <li key={index}>
            <p>{education.name}</p>
            <p>{education.degree}</p>
            <p>
              {education.entryYear} to {education.gradYear}
            </p>
            <button>Edit</button>
            <button>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditEducation;
