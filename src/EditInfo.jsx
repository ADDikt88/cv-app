import "./Edit.css";

function EditInfo({
  user,
  handleNameChange,
  handleEmailChange,
  handlePhoneChange,
  handleDescChange,
}) {
  return (
    <>
      <div className="summary-container">
        <h2>Summary</h2>
        <fieldset>
          <Input
            label="Name"
            value={user.name}
            type="text"
            title="Please enter your first name"
            minLength="2"
            onChange={handleNameChange}
          />
          <Input
            label="Email"
            value={user.email}
            type="email"
            title="Please enter your email address"
            minLength="3"
            onChange={handleEmailChange}
          />
          <Input
            label="Phone"
            value={user.phone}
            type="tel"
            title="Please enter your phone number"
            minLength="3"
            onChange={handlePhoneChange}
          />
        </fieldset>
        <div>
          <label>
            {"Summary "}
            <textarea
              value={user.description}
              title="Describe yourself in a few sentences"
              placeholder="An experienced web-developer with 5 years of experience in..."
              rows="3"
              cols="33"
              onChange={handleDescChange}
            />
          </label>
        </div>
      </div>
    </>
  );
}

function Input({ label, value, type, title, minLength, onChange }) {
  return (
    <div>
      <label>
        {label}{" "}
        <input
          value={value}
          type={type}
          title={title}
          minLength={minLength}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default EditInfo;
