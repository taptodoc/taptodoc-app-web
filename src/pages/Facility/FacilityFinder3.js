import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import YourQuery from "../../components/YourQuery";
import PortalPopup from "../../components/PortalPopup";
import "./FacilityFinder3.css";

const FacilityFinder3 = () => {
  const navigate = useNavigate();
  const [isYourQueryPopupOpen, setYourQueryPopupOpen] = useState(false);

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

  const openYourQueryPopup = useCallback(() => {
    setYourQueryPopupOpen(true);
  }, []);

  const closeYourQueryPopup = useCallback(() => {
    setYourQueryPopupOpen(false);
  }, []);

  return (
    <>
      <div className="facility-finder-3">
        <div className="backgroundcolor1" />
        <div className="footer1">
          <div className="tap2doc-all-rights1">{`© 2023 Tap2Doc. All Rights Reserved.. `}</div>
          <div className="social-media1">
            <img className="facebook-icon1" alt="" src="../facebook.png" />
            <img className="instagram-icon1" alt="" src="../instagram.png" />
            <img className="linkedin-icon1" alt="" src="../linkedin.png" />
            <img className="twitter-icon1" alt="" src="../twitter.png" />
          </div>
          <div className="support-and-resources1">
            <img className="uparrow-icon1" alt="" src="../uparrow.svg" />
            <div className="support-resources1">{`Support & resources`}</div>
          </div>
        </div>
        <div className="navbar1">
          <button className="usericon" />
          <button className="logo" onClick={onLogoClick} />
          <div className="patient-navigation">
            <div className="navigation1">
              <button className="doctor1" onClick={onDoctor1Click}>
                <div className="doctor1-inner">
                  <div className="treatment-child" />
                </div>
                <img
                  className="examination-1-icon"
                  alt=""
                  src="../doctor-icon.png"
                />
              </button>
              <button className="examine" onClick={onExamineClick}>
                <div className="doctor1-inner">
                  <div className="treatment-child" />
                </div>
                <img
                  className="examination-1-icon"
                  alt=""
                  src="../examination.png"
                />
              </button>
              <button className="hospital1" onClick={onHospital1Click}>
                <div className="doctor1-inner">
                  <div className="treatment-child" />
                </div>
                <img
                  className="examination-1-icon"
                  alt=""
                  src="../hospitalfacility.png"
                />
              </button>
            </div>
          </div>
        </div>
        <button className="facility-finder-3-child" />
        <button className="rectangle-parent8" onClick={openYourQueryPopup}>
          <div className="group-child11" />
          <b className="submit-a-query">Submit a query</b>
        </button>
        <div className="facility-finder-3-item" />
        <div className="facility-finder-3-inner" />
        <div className="facility-finder-3-child1" />
        <div className="facility-finder-3-child2" />
        <div className="facility-finder-3-child3" />
        <div className="facility-finder-3-child4" />
        <b className="badges">Badges</b>
        <b className="facility-profile">Facility Profile</b>
        <b className="equipments">Equipments</b>
        <b className="physicians">Physicians</b>
        <b className="specialities">Specialities</b>
        <b className="services">Services</b>
        <img className="group-icon" alt="" src="../BlackstarRatings.svg" />
        <b className="childrens-hospital">Childrens hospital</b>
        <b className="park-ave-san">
          456 Park Ave, San Francisco, California, 94109
        </b>
        <b className="general-plastic-surgery">General Plastic Surgery</b>
        <img
          className="mdicards-heart-icon"
          alt=""
          src="../heart.svg"
        />
      </div>
      {isYourQueryPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeYourQueryPopup}
        >
          <YourQuery onClose={closeYourQueryPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default FacilityFinder3;
