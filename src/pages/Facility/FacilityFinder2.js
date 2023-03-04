import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FacilityFinder2.css";

const FacilityFinder2 = () => {
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

  const onGroupButtonClick = useCallback(() => {
    navigate("/facility-finder3");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/facility-finder3");
  }, [navigate]);

  return (
    <div className="facility-finder-2">
      <div className="backgroundcolor2" />
      <div className="footer2">
        <div className="tap2doc-all-rights2">{`© 2023 Tap2Doc. All Rights Reserved.. `}</div>
        <div className="social-media2">
          <img className="facebook-icon2" alt="" src="../facebook.png" />
          <img className="instagram-icon2" alt="" src="../instagram.png" />
          <img className="linkedin-icon2" alt="" src="../linkedin.png" />
          <img className="twitter-icon2" alt="" src="../twitter.png" />
        </div>
        <div className="support-and-resources2">
          <img className="uparrow-icon2" alt="" src="../uparrow.svg" />
          <div className="support-resources2">{`Support & resources`}</div>
        </div>
      </div>
      <div className="navbar2">
        <button className="logo1" onClick={onLogoClick} />
        <button className="primary">
          <div className="background-99-dp">
            <div className="bg" />
          </div>
          <b className="sign-in1">Sign out</b>
          <img
            className="icon-arrow-right"
            alt=""
            src="../iconarrow-right.svg"
          />
          <img className="icon-arrow-left" alt="" src="../iconarrow-left.svg" />
        </button>
        <div className="patient-navigation1">
          <div className="navigation11">
            <button className="doctor11" onClick={onDoctor1Click}>
              <div className="doctor1-child">
                <div className="treatment-item" />
              </div>
              <img className="doctor-4-12" alt="" src="../doctor-icon.png" />
            </button>
            <button className="examine1" onClick={onExamineClick}>
              <div className="doctor1-child">
                <div className="treatment-item" />
              </div>
              <img
                className="doctor-4-12"
                alt=""
                src="../examination.png"
              />
            </button>
            <button className="hospital11" onClick={onHospital1Click}>
              <div className="doctor1-child">
                <div className="treatment-item" />
              </div>
              <img
                className="doctor-4-12"
                alt=""
                src="../hospitalfacility.png"
              />
            </button>
          </div>
        </div>
      </div>
      <button className="rating">
        <div className="guests">Rating</div>
      </button>
      <button className="distance">
        <div className="guests">Distance</div>
      </button>
      <button className="speciality">
        <div className="guests">Speciality</div>
      </button>
      <div className="facilitiesavailable">
        <div className="frame-parent">
          <div className="frame-div">
            <button className="rectangle-parent9" onClick={onGroupButtonClick}>
              <div className="group-child14" />
              <img className="ellipse-icon" alt="" src="../online-icon.svg" />
            </button>
            <button className="group-wrapper" onClick={onFrameButtonClick}>
              <div className="rectangle-parent10">
                <div className="group-child14" />
                <img className="ellipse-icon" alt="" src="../offline-icon.svg" />
              </div>
            </button>
            <div className="group-frame">
              <div className="rectangle-parent10">
                <div className="group-child14" />
                <img className="ellipse-icon" alt="" src="../offline-icon.svg" />
              </div>
            </div>
            <div className="group-frame">
              <div className="rectangle-parent10">
                <div className="group-child14" />
                <img className="ellipse-icon" alt="" src="../online-icon.svg" />
              </div>
            </div>
          </div>
          <div className="frame-div">
            <div className="group-frame">
              <div className="rectangle-parent10">
                <div className="group-child21" />
                <img className="ellipse-icon" alt="" src="../offline-icon.svg" />
              </div>
            </div>
            <div className="group-frame">
              <div className="rectangle-parent10">
                <div className="group-child21" />
                <img className="ellipse-icon" alt="" src="../offline-icon.svg" />
              </div>
            </div>
            <div className="group-frame">
              <div className="rectangle-parent10">
                <div className="group-child21" />
                <img className="ellipse-icon" alt="" src="../offline-icon.svg" />
              </div>
            </div>
            <div className="group-frame">
              <div className="rectangle-parent10">
                <div className="group-child21" />
                <img className="ellipse-icon" alt="" src="../online-icon.svg" />
              </div>
            </div>
          </div>
          <div className="frame-container">
            <div className="group-frame">
              <div className="rectangle-parent10">
                <div className="group-child21" />
                <img className="ellipse-icon" alt="" src="../offline-icon.svg" />
              </div>
            </div>
            <div className="group-frame">
              <div className="rectangle-parent10">
                <div className="group-child21" />
                <img className="ellipse-icon" alt="" src="../offline-icon.svg" />
              </div>
            </div>
            <div className="group-frame">
              <div className="rectangle-parent10">
                <div className="group-child21" />
                <img className="ellipse-icon" alt="" src="../offline-icon.svg" />
              </div>
            </div>
            <div className="group-frame">
              <div className="rectangle-parent10">
                <div className="group-child21" />
                <img className="ellipse-icon" alt="" src="../online-icon.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <b className="facilities">{`Facilities `}</b>
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15554.33360246679!2d77.61924415!3d12.934475849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677123295170!5m2!1sen!2sin"
      />
      <img className="chatbars-1-icon" alt="" src="../chatbars-.png" />
    </div>
  );
};

export default FacilityFinder2;
