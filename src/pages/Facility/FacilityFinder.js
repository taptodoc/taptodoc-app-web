import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FacilityFinder.css";

const FacilityFinder = () => {
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

  const onSearchHomeClick = useCallback(() => {
    navigate("/facility-finder2");
  }, [navigate]);

  return (
    <div className="facility-finder">
      <div className="backgroundcolor3" />
      <div className="footer3">
        <div className="tap2doc-all-rights3">{`© 2023 Tap2Doc. All Rights Reserved.. `}</div>
        <div className="social-media3">
          <img className="facebook-icon3" alt="" src="../facebook.png" />
          <img className="instagram-icon3" alt="" src="../instagram.png" />
          <img className="linkedin-icon3" alt="" src="../linkedin.png" />
          <img className="twitter-icon3" alt="" src="../twitter.png" />
        </div>
        <div className="support-and-resources3">
          <img className="uparrow-icon3" alt="" src="../uparrow.svg" />
          <div className="support-resources3">{`Support & resources`}</div>
        </div>
      </div>
      <img className="chatbars-1-icon1" alt="" src="../chatbars.png" />
      <div className="navbar3">
        <button className="logo2" onClick={onLogoClick} />
        <button className="primary1">
          <div className="background-99-dp1">
            <div className="bg1" />
          </div>
          <b className="sign-in2">Sign out</b>
          <img
            className="icon-arrow-right1"
            alt=""
            src="../iconarrow-right.svg"
          />
          <img
            className="icon-arrow-left1"
            alt=""
            src="../iconarrow-left.svg"
          />
        </button>
        <div className="patient-navigation2">
          <div className="navigation12">
            <button className="doctor12" onClick={onDoctor1Click}>
              <div className="doctor1-inner1">
                <div className="treatment-inner" />
              </div>
              <img className="doctor-4-13" alt="" src="../doctor-icon.png" />
            </button>
            <button className="examine2" onClick={onExamineClick}>
              <div className="doctor1-inner1">
                <div className="treatment-inner" />
              </div>
              <img
                className="doctor-4-13"
                alt=""
                src="../examination.png"
              />
            </button>
            <button className="hospital12">
              <div className="doctor1-inner1">
                <div className="treatment-inner" />
              </div>
              <img
                className="doctor-4-13"
                alt=""
                src="../hospitalfacility.png"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="popular-searches2">
        <div className="border-popular-searches1" />
        <div className="popular-specialities">
          <p className="popular1">Popular</p>
          <p className="specialities1">Specialities</p>
        </div>
        <div className="popular-specialities1">
          <div className="property-1frame-1000000880">
            <div className="rectangle-parent21">
              <button className="frame-child" />
              <div className="cancer1">Cancer</div>
              <button className="frame-item" />
              <div className="cardio">Cardio</div>
              <button className="frame-inner" />
              <div className="nephro">Nephro</div>
              <button className="rectangle-button" />
              <div className="migraine">Migraine</div>
              <div className="frame-child1" />
              <div className="ulcer1">Ulcer</div>
              <div className="frame-child2" />
              <div className="implant1">Implant</div>
              <div className="frame-child3" />
              <div className="surgery1">Surgery</div>
              <div className="frame-child4" />
              <div className="neuro1">Neuro</div>
              <img className="kidney-1-icon" alt="" src="../kidney.png" />
              <img
                className="breast-cancer-1-icon"
                alt=""
                src="../breastcancer.png"
              />
              <img
                className="headache-1-icon"
                alt=""
                src="../headache.png"
              />
              <img className="heart-1-icon" alt="" src="../heart.png" />
            </div>
          </div>
        </div>
      </div>
      <iframe
        className="map1"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15554.33360246679!2d77.61924415!3d12.934475849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677123295170!5m2!1sen!2sin"
      />
      <div className="search1">
        <div className="searchbar">
          <div className="speciality1">Speciality</div>
          <button className="searchhome1" onClick={onSearchHomeClick} />
        </div>
      </div>
      <div className="locate-a-facility">Locate a Facility</div>
    </div>
  );
};

export default FacilityFinder;
