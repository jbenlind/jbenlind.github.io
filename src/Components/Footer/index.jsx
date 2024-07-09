import "./index.scss";
import LinkedInLogo from "../../Images/LI-Logo.png";
import GitHubLogo from "../../Images/GitHub_Logo_White.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo-container">
        <a
          href="https://www.linkedin.com/in/jesse-lindloff-0ba8591aa/"
          target="_blank"
        >
          tester
          {/* <img src={LinkedInLogo} className="logo"></img> */}
        </a>
        <a href="https://github.com/jbenlind" target="_blank">
          testing
          {/* <img src={GitHubLogo} className="logo"></img> */}
        </a>
      </div>
    </div>
  );
};

export default Footer;
