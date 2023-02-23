import "./Home.css";

const FinalHome = () => {
  return (
    <div className="final-home">
      <div className="backgroundcolor" />
      <div className="navbar">
        <div className="menu">

          <div className="text">Menu</div>
          <div className="text1">Ask our bot</div>
        </div>

        <div className="signin">
          <img className="hamburger-icon" alt="" src="../media/images/hamburger.svg" />
          <button className="frame">
            <img className="signinicon" alt="" src="../media/images/signinicon.svg" />

          </button>
        </div>
      </div>
      <div className="footer">
        <div className="tap2doc-all-rights">{`© 2023 Tap2Doc. All Rights Reserved.. `}</div>
        <div className="social-media">
          <img className="footer-icon" alt="" src="../media/images/facebook@2x.png" />
          <img className="footer-icon" alt="" src="../media/images/instagram@2x.png" />
          <img className="footer-icon" alt="" src="../media/images/linkedin@2x.png" />
          <img className="footer-icon" alt="" src="../media/images/twitter@2x.png" />
        </div>

        <div className="support-and-resources">
          <img className="uparrow-icon" alt="" src="../media/images/uparrow.svg" />
          <div className="support-resources">{`Support & resources`}</div>
        </div>
      </div>
      <div className="navigations-icons">
        <div className="group-parent">
          <button className="group-container">
            <div className="rectangle-wrapper">
              <div className="group-child" />
            </div>
            <img className="people-icon" alt="" src="../media/images/people.png" />
          </button>
          <button className="group-container">
            <div className="rectangle-wrapper">
              <div className="group-child" />
            </div>
            <img className="people-icon" alt="" src="../media/images/doctor.png" />
          </button>
          <button className="group-parent1">
            <div className="rectangle-wrapper">
              <b className="patient">Patient</b>
              <b className="doctor">Doctor</b>
              <b className="facility">Facility</b>
              <div className="rectangle-wrapper">
                <div className="group-child" />
              </div>
            </div>
            <img className="people-icon" alt="" src="../media/images/hospital.png" />
          </button>
        </div>
      </div>
      <div className="popular-searches">
        <div className="border-popular-searches" />
        <div className="popular-searches1">
          <p className="popular">Popular</p>
          <p className="searches">Searches</p>
        </div>
        <div className="component-59">
          <div className="rectangle-parent">
            <div className="rectangle-div" />
            <div className="group-div">
              <div className="rectangle-group">
                <div className="group-child1" />
                <div className="ulcer">Ulcer</div>
              </div>
              <div className="rectangle-parent1">
                <div className="group-child1" />
                <div className="implant">Implant</div>
              </div>
              <div className="rectangle-parent2">
                <div className="group-child1" />
                <div className="surgery">Surgery</div>
              </div>
              <div className="rectangle-parent3">
                <div className="group-child1" />
                <div className="neuro">Neuro</div>
              </div>
              <div className="rectangle-parent4">
                <div className="group-child1" />
                <div className="cancer">Cancer</div>
              </div>
              <div className="rectangle-parent5">
                <div className="group-child1" />
                <div className="diabetes">Diabetes</div>
              </div>
              <div className="rectangle-parent6">
                <div className="group-child1" />
                <div className="heart-disease">
                  <p className="popular">Heart</p>
                  <p className="searches">disease</p>
                </div>
              </div>
              <div className="rectangle-parent7">
                <div className="group-child1" />
                <div className="thyroid">Thyroid</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="get-started">
        <div className="sign-in">Get Started</div>
      </button>
      <div className="discover-quality-healthcare-container">
        <p className="popular">{`Discover Quality `}</p>
        <p className="searches">{`Healthcare `}</p>
      </div>
      <div className="search-parent">
        <div className="search">
          <div className="question-parent">
            <input className="question" type="text" placeholder="Question" />
            <button className="searchhome" />
          </div>
        </div>
        <button className="interactive-mode-wrapper">
          <div className="interactive-mode">Interactive mode</div>
        </button>
      </div>
      <img className="logo-icon" alt="" src="../media/images/logo.png" />
      <div className="doctorhome1-icon"/>
    </div>
  );
};

export default FinalHome;
