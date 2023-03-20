import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientHome.css";

const PatientHome = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDoctor1Click = useCallback(() => {
    navigate("/physician-finder1");
  }, [navigate]);

  const onExamineClick = useCallback(() => {
    navigate("/health-assessment1");
  }, [navigate]);

  const onHospital1Click = useCallback(() => {
    navigate("/facility-finder");
  }, [navigate]);

  return (
    <div className="patienthome">
      <div className="backgroundcolor11" />
      <div className="navbar11" />
      <div className="footer11">
        <div className="tap2doc-all-rights11">{`© 2023 Tap2Doc. All Rights Reserved.. `}</div>
        <div className="social-media11">
          <img className="facebook-icon11" alt="" src="../facebook.png" />
          <img className="instagram-icon11" alt="" src="../instagram.png" />
          <img className="linkedin-icon11" alt="" src="../linkedin.png" />
          <img className="twitter-icon11" alt="" src="../twitter.png" />
        </div>
        <div className="support-and-resources11">
          <img className="uparrow-icon11" alt="" src="../uparrow.svg" />
          <div className="support-resources11">{`Support & resources`}</div>
        </div>
      </div>
      <div className="popular-searches4">
        <div className="border-popular-searches3" />
        <div className="popular-searches5">
          <p className="connecting-you-to">Popular</p>
          <p className="the-best-healthcare">Searches</p>
        </div>
        <div className="component-591">
          <div className="rectangle-parent45">
            <div className="group-child119" />
            <div className="group-parent49">
              <button className="rectangle-parent46">
                <div className="group-child120" />
                <div className="ulcer3">Ulcer</div>
              </button>
              <button className="rectangle-parent47">
                <div className="group-child120" />
                <div className="implant3">Implant</div>
              </button>
              <button className="rectangle-parent48">
                <div className="group-child120" />
                <div className="surgery3">Surgery</div>
              </button>
              <button className="rectangle-parent49">
                <div className="group-child120" />
                <div className="neuro3">Neuro</div>
              </button>
              <div className="rectangle-parent50">
                <div className="group-child120" />
                <div className="cancer3">Cancer</div>
              </div>
              <div className="rectangle-parent51">
                <div className="group-child120" />
                <div className="diabetes1">Diabetes</div>
              </div>
              <div className="rectangle-parent52">
                <div className="group-child120" />
                <div className="heart-disease1">
                  <p className="connecting-you-to">Heart</p>
                  <p className="the-best-healthcare">disease</p>
                </div>
              </div>
              <div className="rectangle-parent53">
                <div className="group-child120" />
                <div className="thyroid1">Thyroid</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="logo10" onClick={onLogoClick} />
      <button className="primary7">
        <div className="background-99-dp7">
          <div className="bg7" />
        </div>
        <b className="sign-in8">Sign out</b>
          
      </button>
      <div className="patient-navigation10">
        <div className="navigation110">
          <button className="doctor110" onClick={onDoctor1Click}>
            <div className="doctor1-inner9">
              <div className="group-child128" />
            </div>
            <img className="doctor-4-111" alt="" src="../doctor-icon.png" />
          </button>
          <button className="examine10" onClick={onExamineClick}>
            <div className="doctor1-inner9">
              <div className="group-child128" />
            </div>
            <img
              className="doctor-4-111"
              alt=""
              src="../examination.png"
            />
          </button>
          <button className="hospital110" onClick={onHospital1Click}>
            <div className="doctor1-inner9">
              <div className="group-child128" />
            </div>
            <img
              className="doctor-4-111"
              alt=""
              src="../hospitalfacility.png"
            />
          </button>
        </div>
      </div>
      <div className="toplayer">
        <div className="toplayer-child" />
        <img
          className="patient-home-doctor-1-icon"
          alt=""
          src="../patienthomedoctor-1@2x.png"
        />
        <div className="connecting-you-to-container">
          <span className="connecting-you-to-container1">
            <p className="connecting-you-to">{`Connecting You to `}</p>
            <p className="the-best-healthcare">The Best HealthCare...</p>
          </span>
        </div>
      </div>
      <div className="search3">
        <div className="search-symptoms-bg">
          <input className="symptoms4" type="text" placeholder="Symptoms" />
          <button className="searchhome-1" />
        </div>
        <button className="interactive-mode4">
          <div className="interactive-mode5">Interactive mode</div>
        </button>
      </div>
      <img className="chatbars-1-icon8" alt="" src="../chatbars.png" />
    </div>
  );
};

export default PatientHome;
