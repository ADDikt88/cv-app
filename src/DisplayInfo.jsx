import "./Display.css";

function DisplayInfo({ user }) {
  return (
    <div className="display-info">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}

export default DisplayInfo;
