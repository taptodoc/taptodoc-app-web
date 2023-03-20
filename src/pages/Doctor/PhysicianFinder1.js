import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PhysicianFinder1.css";

const PhysicianFinder1 = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExamineClick = useCallback(() => {
    navigate("/health-assessment1");
  }, [navigate]);

  const onHospital1Click = useCallback(() => {
    navigate("/facility-finder");
  }, [navigate]);

  const onSearchHomeClick = useCallback(() => {
    navigate("/physician-finder2");
  }, [navigate]);

  return (
    <div className="physician-finder-1">
      <div className="backgroundcolor9" />
      <div className="footer9">
        <div className="tap2doc-all-rights9">{`© 2023 Tap2Doc. All Rights Reserved.. `}</div>
        <div className="social-media9">
          <img className="facebook-icon9" alt="" src="../facebook.png" />
          <img className="instagram-icon9" alt="" src="../instagram.png" />
          <img className="linkedin-icon9" alt="" src="../linkedin.png" />
          <img className="twitter-icon9" alt="" src="../twitter.png" />
        </div>
        <div className="support-and-resources9">
          <img className="uparrow-icon9" alt="" src="../uparrow.svg" />
          <div className="support-resources9">{`Support & resources`}</div>
        </div>
      </div>
      <div className="navbar9">
        <button className="logo8" onClick={onLogoClick} />
        <button className="primary6">
          <div className="background-99-dp6">
            <div className="bg6" />
          </div>
          <b className="sign-in7">Sign out</b>
          
        </button>
        <div className="patient-navigation8">
          <div className="navigation18">
            <button className="doctor18">
              <div className="doctor1-inner7">
                <div className="group-child67" />
              </div>
              <img className="doctor-4-19" alt="" src="../doctor-icon.png" />
            </button>
            <button className="examine8" onClick={onExamineClick}>
              <div className="doctor1-inner7">
                <div className="group-child67" />
              </div>
              <img
                className="doctor-4-19"
                alt=""
                src="../examination.png"
              />
            </button>
            <button className="hospital18" onClick={onHospital1Click}>
              <div className="doctor1-inner7">
                <div className="group-child67" />
              </div>
              <img
                className="doctor-4-19"
                alt=""
                src="../hospitalfacility.png"
              />
            </button>
          </div>
        </div>
      </div>
      <iframe
        className="map2"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15554.33360246679!2d77.61924415!3d12.934475849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677123295170!5m2!1sen!2sin"
      />
      <img className="chatbars-1-icon7" alt="" src="../chatbars.png" />
      <div className="search2">
        <div className="searchbar1">
          <input className="speciality2" type="text" placeholder="Speciality" />
          <button className="searchhome5" onClick={onSearchHomeClick} />
        </div>
      </div>
      <div className="locate-a-physician">Locate a Physician</div>
      <div className="popular-searches3">
        <div className="border-popular-searches2" />
        <div className="popular-specialities2">
          <p className="popular2">Popular</p>
          <p className="specialities3">Specialities</p>
        </div>
        <div className="popular-specialities3">
          <div className="property-1frame-10000008801">
            <div className="rectangle-parent28">
              <button className="frame-child5" />
              <div className="cancer2">Cancer</div>
              <button className="frame-child6" />
              <div className="cardio1">Cardio</div>
              <button className="frame-child7" />
              <div className="nephro1">Nephro</div>
              <button className="frame-child8" />
              <div className="migraine1">Migraine</div>
              <div className="frame-child9" />
              <div className="ulcer2">Ulcer</div>
              <div className="frame-child10" />
              <div className="implant2">Implant</div>
              <div className="frame-child11" />
              <div className="surgery2">Surgery</div>
              <div className="frame-child12" />
              <div className="neuro2">Neuro</div>
              <img
                className="kidney-1-icon1"
                alt=""
                src="../kidney.png"
              />
              <img
                className="breast-cancer-1-icon1"
                alt=""
                src="../breastcancer.png"
              />
              <img
                className="headache-1-icon1"
                alt=""
                src="../headache.png"
              />
              <img className="heart-1-icon1" alt="" src="../heart.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicianFinder1;
