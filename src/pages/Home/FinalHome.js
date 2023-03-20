import { useState, useCallback } from "react";
import Signin1 from "../../components/Signin1";
import PortalPopup from "../../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./FinalHome.css";

const FinalHome = () => {
  const [isSignin1PopupOpen, setSignin1PopupOpen] = useState(false);
  const navigate = useNavigate();

  const openSignin1Popup = useCallback(() => {
    setSignin1PopupOpen(true);
  }, []);

  const closeSignin1Popup = useCallback(() => {
    setSignin1PopupOpen(false);
  }, []);

  const onGroupButtonClick = useCallback(() => {
    navigate("/health-assessment1");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/physician-finder1");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/facility-finder");
  }, [navigate]);

  const onGetStartedClick = useCallback(() => {
    navigate("/patienthome");
  }, [navigate]);

  return (
    <>
      <div className="final-home">
        <div className="backgroundcolor" />
        <div className="navbar">
          <div className="menu">
            <div className="text">Menu</div>
            <div className="text1">Ask our bot</div>
          </div>
          <div className="login">
            <img className="hamburger-icon" alt="" src="../hamburger.svg" />
            <button className="frame" onClick={openSignin1Popup}>
              <img className="signinicon" alt="" src="../signinicon.svg" />
            </button>
          </div>
        </div>
        <div className="footer">
          <div className="tap2doc-all-rights">{`© 2023 Tap2Doc. All Rights Reserved.. `}</div>
          <div className="social-media">
            <img className="facebook-icon" alt="" src="../facebook.png" />
            <img className="instagram-icon" alt="" src="../instagram.png" />
            <img className="linkedin-icon" alt="" src="../linkedin.png" />
            <img className="twitter-icon" alt="" src="../twitter.png" />
          </div>
          <div className="support-and-resources">
            <img className="uparrow-icon" alt="" src="../uparrow.svg" />
            <div className="support-resources">{`Support & resources`}</div>
          </div>
        </div>
        <div className="navigations-icons">
          <div className="group-parent">
            <button className="group-container" onClick={onGroupButtonClick}>
              <div className="rectangle-wrapper">
                <div className="group-child" />
              </div>
              <img className="people-icon" alt="" src="../people@2x.png" />
            </button>
            <button className="group-container" onClick={onGroupButton1Click}>
              <div className="rectangle-wrapper">
                <div className="group-child" />
              </div>
              <img
                className="hospital-facility-1-icon"
                alt=""
                src="../doctor-icon.png"
              />
            </button>
            <button className="group-parent1" onClick={onGroupButton2Click}>
              <div className="rectangle-wrapper">
                <b className="patient">Patient</b>
                <b className="doctor">Doctor</b>
                <b className="facility">Facility</b>
                <div className="rectangle-wrapper">
                  <div className="group-child" />
                </div>
              </div>
              <img
                className="hospital-facility-1-icon"
                alt=""
                src="../hospitalfacility.png"
              />
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
                <button className="rectangle-group">
                  <div className="group-child1" />
                  <div className="ulcer">Ulcer</div>
                </button>
                <button className="rectangle-parent1">
                  <div className="group-child1" />
                  <div className="implant">Implant</div>
                </button>
                <button className="rectangle-parent2">
                  <div className="group-child1" />
                  <div className="surgery">Surgery</div>
                </button>
                <button className="rectangle-parent3">
                  <div className="group-child1" />
                  <div className="neuro">Neuro</div>
                </button>
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
        <button className="get-started" onClick={onGetStartedClick}>
          <div className="sign-in">Get Started</div>
        </button>
        <div className="discover-quality-healthcare-container">
          <p className="popular">{`Discover Quality `}</p>
          <p className="searches">{`Healthcare `}</p>
        </div>
        <div className="question-interactive-mode">
          <div className="search">
            <div className="question-bg">
              <input className="question" type="text" placeholder="Question" />
              <button className="searchhome" />
            </div>
          </div>
          <button className="interactive-mode">
            <div className="interactive-mode1">Interactive mode</div>
          </button>
        </div>
        <img className="logo-icon" alt="" src="../logo.png" />
        <img className="doctorhome1-icon" alt="" src="../doctorhome1@2x.png" />
      </div>
      {isSignin1PopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignin1Popup}
        >
          <Signin1 onClose={closeSignin1Popup} />
        </PortalPopup>
      )}
    </>
  );
};

export default FinalHome;
