import EditInfo from "./EditInfo.jsx";

function LeftDisplay({ name, setName }) {
  return (
    <>
      <div className="left-box">
        <p>Left Box</p>
        <EditInfo name={name} setName={setName} />
      </div>
    </>
  );
}

export default LeftDisplay;
