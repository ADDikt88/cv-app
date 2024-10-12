function EditInfo({ name, handleChange }) {
  return (
    <>
      <div className="summary-container">
        <h2>Summary</h2>
        <Input label="Name" value={name} onChange={handleChange} />
      </div>
    </>
  );
}

function Input({ label, value, onChange }) {
  return (
    <label>
      {label} <input value={value} onChange={onChange} />
    </label>
  );
}

export default EditInfo;
