import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HealthAssessment3.css";

const HealthAssessment3 = () => {
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

  const onPreviousButtonClick = useCallback(() => {
    navigate("/health-assessment2");
  }, [navigate]);

  const onNextButtonClick = useCallback(() => {
    navigate("/health-assessment4");
  }, [navigate]);

  return (
    <div className="health-assessment-3">
      <div className="backgroundcolor5" />
      <div className="footer5">
        <div className="tap2doc-all-rights5">{`© 2023 Tap2Doc. All Rights Reserved.. `}</div>
        <div className="social-media5">
          <img className="facebook-icon5" alt="" src="../facebook.png" />
          <img className="instagram-icon5" alt="" src="../instagram.png" />
          <img className="linkedin-icon5" alt="" src="../linkedin.png" />
          <img className="twitter-icon5" alt="" src="../twitter.png" />
        </div>
        <div className="support-and-resources5">
          <img className="uparrow-icon5" alt="" src="../uparrow.svg" />
          <div className="support-resources5">{`Support & resources`}</div>
        </div>
      </div>
      <img className="chatbars-1-icon3" alt="" src="../chatbars.png" />
      <div className="navbar5">
        <button className="logo4" onClick={onLogoClick} />
        <button className="primary3">
          <div className="background-99-dp3">
            <div className="bg3" />
          </div>
          <b className="sign-in4">Sign out</b>
          <img
            className="icon-arrow-right3"
            alt=""
            src="../iconarrow-right.svg"
          />
          <img
            className="icon-arrow-left3"
            alt=""
            src="../iconarrow-left.svg"
          />
        </button>
        <div className="patient-navigation4">
          <div className="navigation14">
            <button className="doctor14" onClick={onDoctor1Click}>
              <div className="doctor1-inner3">
                <div className="group-child59" />
              </div>
              <img className="doctor-4-15" alt="" src="../doctor-icon.png" />
            </button>
            <button className="examine4" onClick={onExamineClick}>
              <div className="doctor1-inner3">
                <div className="group-child59" />
              </div>
              <img
                className="doctor-4-15"
                alt=""
                src="../examination.png"
              />
            </button>
            <button className="hospital14" onClick={onHospital1Click}>
              <div className="doctor1-inner3">
                <div className="group-child59" />
              </div>
              <img
                className="doctor-4-15"
                alt=""
                src="../hospitalfacility.png"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="border-additional-symptoms" />
      <div className="health-assessment-3-child" />
      <div className="health-assessment-3-item" />
      <button className="previous-button" onClick={onPreviousButtonClick}>
        <div className="previous-button-child" />
        <div className="previous">Previous</div>
        <img className="vector-icon6" alt="" src="../previous-icon.svg" />
      </button>
      <button className="next-button" onClick={onNextButtonClick}>
        <div className="previous-button-child" />
        <div className="next">Next</div>
        <img className="vector-icon7" alt="" src="../Next-icon.svg" />
      </button>
      <div className="medical-conditions-border">
        <div className="medicalconditions">
          <div className="likely-medical-conditions">
            Likely medical conditions
          </div>
          <div className="medicalconditions-child" />
          <div className="medicalconditions-item" />
          <div className="medicalconditions-inner" />
          <div className="medicalconditions-child1" />
          <div className="medicalconditions-child2" />
          <img className="flag-icon" alt="" src="../flag.svg" />
          <img className="flag-icon1" alt="" src="../flag.svg" />
        </div>
      </div>
      <div className="added-symtoms">
        <div className="added-symtoms-child" />
        <div className="added-symtoms-item" />
        <div className="symptoms-added">Symptoms added</div>
        <div className="chest-pain">{`chest pain `}</div>
        <div className="symptoms-lasting-for">{`symptoms lasting for 5 days `}</div>
        <div className="times-a-day">3 times a day</div>
        <div className="moderate-to-severe">moderate to severe pain</div>
        <img className="image-414-icon" alt="" src="../bin.png" />
        <img className="bin-icon" alt="" src="../bin.png" />
        <img className="bin-icon1" alt="" src="../bin.png" />
        <img className="image-417-icon" alt="" src="../bin.png" />
      </div>
      <div className="additional-symptoms">Additional symptoms</div>
      <div className="symtoms1">
        <div className="symptoms1">Symptoms</div>
        <button className="searchhome2" />
      </div>
    </div>
  );
};

export default HealthAssessment3;
