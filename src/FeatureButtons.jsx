function FeatureButtons({ handleResetClick, handleExampleClick }) {
  return (
    <>
      <div className="feature-buttons">
        <ButtonFunction
          handleClick={handleResetClick}
          label={"Reset"}
        ></ButtonFunction>
        <ButtonFunction
          handleClick={handleExampleClick}
          label={"Load Example"}
        ></ButtonFunction>
        <button>Download PDF</button>
      </div>
    </>
  );
}

function ButtonFunction({ handleClick, label }) {
  return (
    <>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        {label}
      </button>
    </>
  );
}

export default FeatureButtons;
