import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HealthAssessment1.css";

const HealthAssessment1 = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDoctor1Click = useCallback(() => {
    navigate("/physician-finder1");
  }, [navigate]);

  const onHospital1Click = useCallback(() => {
    navigate("/facility-finder");
  }, [navigate]);

  const onNextButtonClick = useCallback(() => {
    navigate("/health-assessment2");
  }, [navigate]);

  return (
    <div className="health-assessment-1">
      <div className="backgroundcolor7" />
      <div className="footer7">
        <div className="tap2doc-all-rights7">{`© 2023 Tap2Doc. All Rights Reserved.. `}</div>
        <div className="social-media7">
          <img className="facebook-icon7" alt="" src="../facebook.png" />
          <img className="instagram-icon7" alt="" src="../instagram.png" />
          <img className="linkedin-icon7" alt="" src="../linkedin.png" />
          <img className="twitter-icon7" alt="" src="../twitter.png" />
        </div>
        <div className="support-and-resources7">
          <img className="uparrow-icon7" alt="" src="../uparrow.svg" />
          <div className="support-resources7">{`Support & resources`}</div>
        </div>
      </div>
      <div className="navbar7">
        <button className="logo6" onClick={onLogoClick} />
        <button className="primary5">
          <div className="background-99-dp5">
            <div className="bg5" />
          </div>
          <b className="sign-in6">Sign out</b>
          <img
            className="icon-arrow-right5"
            alt=""
            src="../iconarrow-right5.svg"
          />
          <img
            className="icon-arrow-left5"
            alt=""
            src="../iconarrow-left5.svg"
          />
        </button>
        <div className="patient-navigation6">
          <div className="navigation16">
            <button className="doctor16" onClick={onDoctor1Click}>
              <div className="doctor1-inner5">
                <div className="group-child63" />
              </div>
              <img className="doctor-4-17" alt="" src="../doctor-icon.png" />
            </button>
            <button className="examine6">
              <div className="doctor1-inner5">
                <div className="group-child63" />
              </div>
              <img
                className="doctor-4-17"
                alt=""
                src="../examination.png"
              />
            </button>
            <button className="hospital16" onClick={onHospital1Click}>
              <div className="doctor1-inner5">
                <div className="group-child63" />
              </div>
              <img
                className="doctor-4-17"
                alt=""
                src="../hospitalfacility.png"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="health-assessment">Health Assessment</div>
      <img className="chatbars-1-icon5" alt="" src="../chatbars.png" />
      <div className="border-additional-symptoms2" />
      <button className="interactive-mode2">
        <div className="interactive-mode3">Interactive mode</div>
      </button>
      <div className="what-brings-you1">What brings you in today?</div>
      <div className="progress-bar6" />
      <div className="health-assessment-1-child" />
      <div className="detailed-refresh-buttons">
        <button className="refresh" />
        <button className="detailed-view" />
      </div>
      <div className="add-your-symptoms">
        <div className="add-your-symptoms-child" />
        <div className="add-your-symptoms-item" />
        <div className="symptoms-added3">Symptoms added</div>
        <div className="knee-pain">Knee pain</div>
        <img className="image-414-icon1" alt="" src="../image-4141@2x.png" />
      </div>
      <div className="humanbody">
        <img className="human-body-1" alt="" src="../human-body-1@2x.png" />
      </div>
      <div className="symptoms-parent">
        <div className="symptoms3">Symptoms</div>
        <button className="searchhome4" />
      </div>
      <button className="next-button1" onClick={onNextButtonClick}>
        <div className="next-button-item" />
        <div className="next3">Next</div>
        <img className="vector-icon10" alt="" src="../Next-icon.svg" />
      </button>
      <button className="previous-buttons">
        <div className="next-button-item" />
        <div className="previous3">Previous</div>
        <img className="vector-icon11" alt="" src="../previous-icon.svg" />
      </button>
    </div>
  );
};

export default HealthAssessment1;
