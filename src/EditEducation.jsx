function EditEducation({ handleSubmit }) {
  return (
    <>
      <div className="education-container">
        <h2>Education</h2>
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
            <Input
              label="Graduation Year"
              name="year"
              type="num"
              title="Please enter your year of graduation"
              minLength="4"
            />
          </fieldset>
          <button type="submit">Submit</button>
        </form>
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
        />
      </label>
    </div>
  );
}

export default EditEducation;
