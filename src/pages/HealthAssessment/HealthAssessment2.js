import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HealthAssessment2.css";

const HealthAssessment2 = () => {
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

  const onNextClick = useCallback(() => {
    navigate("/health-assessment3");
  }, [navigate]);

  const onPreviousClick = useCallback(() => {
    navigate("/health-assessment1");
  }, [navigate]);

  return (
    <div className="health-assessment-2">
      <div className="backgroundcolor6" />
      <div className="footer6">
        <div className="tap2doc-all-rights6">{`© 2023 Tap2Doc. All Rights Reserved.. `}</div>
        <div className="social-media6">
          <img className="facebook-icon6" alt="" src="../facebook.png" />
          <img className="instagram-icon6" alt="" src="../instagram.png" />
          <img className="linkedin-icon6" alt="" src="../linkedin.png" />
          <img className="twitter-icon6" alt="" src="../twitter.png" />
        </div>
        <div className="support-and-resources6">
          <img className="uparrow-icon6" alt="" src="../uparrow.svg" />
          <div className="support-resources6">{`Support & resources`}</div>
        </div>
      </div>
      <div className="navbar6">
        <button className="logo5" onClick={onLogoClick} />
        <button className="primary4">
          <div className="background-99-dp4">
            <div className="bg4" />
          </div>
          <b className="sign-in5">Sign out</b>
          <img
            className="icon-arrow-right4"
            alt=""
            src="../iconarrow-right.svg"
          />
          <img
            className="icon-arrow-left4"
            alt=""
            src="../iconarrow-left.svg"
          />
        </button>
        <div className="patient-navigation5">
          <div className="navigation15">
            <button className="doctor15" onClick={onDoctor1Click}>
              <div className="doctor1-inner4">
                <div className="group-child61" />
              </div>
              <img className="doctor-4-16" alt="" src="../doctor-icon.png" />
            </button>
            <button className="examine5" onClick={onExamineClick}>
              <div className="doctor1-inner4">
                <div className="group-child61" />
              </div>
              <img
                className="doctor-4-16"
                alt=""
                src="../examination.png"
              />
            </button>
            <button className="hospital15" onClick={onHospital1Click}>
              <div className="doctor1-inner4">
                <div className="group-child61" />
              </div>
              <img
                className="doctor-4-16"
                alt=""
                src="../hospitalfacility.png"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="border-additional-symptoms1" />
      <div className="what-brings-you">What brings you in today?</div>
      <div className="symptoms-added1">
        <div className="symptoms-added-child" />
        <div className="symptoms-added-item" />
        <div className="symptoms-added2">Symptoms added</div>
        <div className="chest-pain1">Chest pain</div>
        <button className="image-414" />
      </div>
      <div className="search-bar">
        <div className="symptoms2">Symptoms</div>
        <button className="searchhome3" />
      </div>
      <button className="next1" onClick={onNextClick}>
        <div className="next-child" />
        <div className="next2">Next</div>
        <img className="vector-icon8" alt="" src="../Next-icon.svg" />
      </button>
      <button className="previous1" onClick={onPreviousClick}>
        <div className="next-child" />
        <div className="previous2">Previous</div>
        <img className="vector-icon9" alt="" src="../previous-icon.svg" />
      </button>
      <div className="progress-bar" />
      <div className="health-assessment-2-child" />
      <div className="symptom-slider">
        <div className="symptom-slider-child" />
        <div className="frame-parent1">
          <div className="how-often-parent">
            <b className="how-often">How often</b>
            <b className="how-long">How Long</b>
            <b className="rate-your-pain">Rate your pain</b>
            <b className="recent-changes">Recent changes</b>
            <b className="how-medication-improves-container">
              <span className="how-medication-improves-container1">
                <p className="how-medication">{`How medication `}</p>
                <p className="improves-you">improves you</p>
              </span>
            </b>
          </div>
          <div className="value-slider-parent">
            <div className="value-slider">
              <div className="label">In a day</div>
              <div className="progress-bar1">
                <div className="ticks">
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick5" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                </div>
                <div className="track" />
                <div className="thumb">
                  <img className="thumb-icon" alt="" src="../Slider.svg" />
                </div>
              </div>
              <div className="value">5</div>
            </div>
            <div className="value-slider1">
              <div className="label">Duration</div>
              <div className="progress-bar1">
                <div className="ticks">
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick5" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                </div>
                <div className="track" />
                <div className="thumb">
                  <img className="thumb-icon" alt="" src="../Slider.svg" />
                </div>
              </div>
              <div className="value">5</div>
            </div>
            <div className="value-slider2">
              <div className="label">level</div>
              <div className="progress-bar1">
                <div className="ticks">
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick5" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                </div>
                <div className="track" />
                <div className="thumb">
                  <img className="thumb-icon" alt="" src="../Slider.svg" />
                </div>
              </div>
              <div className="value">5</div>
            </div>
            <div className="value-slider3">
              <div className="label">Comfort level</div>
              <div className="progress-bar1">
                <div className="ticks">
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick5" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                </div>
                <div className="track" />
                <div className="thumb">
                  <img className="thumb-icon" alt="" src="../Slider.svg" />
                </div>
              </div>
              <div className="value">5</div>
            </div>
            <div className="value-slider4">
              <div className="label">Your condition</div>
              <div className="progress-bar1">
                <div className="ticks">
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick5" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                </div>
                <div className="track" />
                <div className="thumb">
                  <img className="thumb-icon" alt="" src="../Slider.svg" />
                </div>
              </div>
              <div className="value">5</div>
            </div>
          </div>
        </div>
      </div>
      <img className="chatbars-1-icon4" alt="" src="../chatbars.png" />
    </div>
  );
};

export default HealthAssessment2;
