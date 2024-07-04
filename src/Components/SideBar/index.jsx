import "./index.scss";
const SideBar = () => {
  return (
    <div className="side-bar__container">
      <div className="side-bar__item--container">
        <div className="side-bar__item">Overview</div>
      </div>
      <div className="side-bar__item--container">
        <div className="side-bar__item">Current Position</div>
      </div>
      <div className="side-bar__item--container">
        <div className="side-bar__item">Resume</div>
      </div>
    </div>
  );
};

export default SideBar;
