import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import YourQuery from "../../components/YourQuery";
import PortalPopup from "../../components/PortalPopup";
import "./PhysicianFinder3.css";

const PhysicianFinder3 = () => {
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
      <div className="physician-finder-3">
        <div className="backgroundcolor8" />
        <div className="footer8">
          <div className="tap2doc-all-rights8">{`© 2023 Tap2Doc. All Rights Reserved.. `}</div>
          <div className="social-media8">
            <img className="facebook-icon8" alt="" src="../facebook.png" />
            <img className="instagram-icon8" alt="" src="../instagram.png" />
            <img className="linkedin-icon8" alt="" src="../linkedin.png" />
            <img className="twitter-icon8" alt="" src="../twitter.png" />
          </div>
          <div className="support-and-resources8">
            <img className="uparrow-icon8" alt="" src="../uparrow.svg" />
            <div className="support-resources8">{`Support & resources`}</div>
          </div>
        </div>
        <div className="navbar8">
          <button className="image-14" />
          <button className="logo7" onClick={onLogoClick} />
          <div className="patient-navigation7">
            <div className="navigation17">
              <button className="doctor17" onClick={onDoctor1Click}>
                <div className="doctor1-inner6">
                  <div className="group-child65" />
                </div>
                <img
                  className="doctor-4-18"
                  alt=""
                  src="../doctor-icon.png"
                />
              </button>
              <button className="examine7" onClick={onExamineClick}>
                <div className="doctor1-inner6">
                  <div className="group-child65" />
                </div>
                <img
                  className="doctor-4-18"
                  alt=""
                  src="../examination.png"
                />
              </button>
              <button className="hospital17" onClick={onHospital1Click}>
                <div className="doctor1-inner6">
                  <div className="group-child65" />
                </div>
                <img
                  className="doctor-4-18"
                  alt=""
                  src="../hospitalfacility.png"
                />
              </button>
            </div>
          </div>
        </div>
        <button className="appointment">
          <div className="appointment-child" />
          <b className="get-appintment">Get Appintment</b>
        </button>
        <button className="query" onClick={openYourQueryPopup}>
          <div className="submitquerry">
            <div className="appointment-child" />
            <b className="submit-a-query1">Submit a query</b>
          </div>
        </button>
        <input className="pysicianprofile" type="text" />
        <div className="physician-finder-3-child" />
        <div className="physician-finder-3-item" />
        <b className="physician-profile">Physician Profile</b>
        <b className="specialities2">Specialities</b>
        <b className="facilities1">Facilities</b>
        <img
          className="physician-finder-3-inner"
          alt=""
          src="../BlackstarRatings.svg"
        />
        <b className="john-doe">John doe</b>
        <b className="park-ave-san1">
          456 Park Ave, San Francisco, California, 94109
        </b>
        <b className="general-plastic-surgery1">General Plastic Surgery</b>
        <b className="exp">20+exp</b>
        <img
          className="mdicards-heart-icon7"
          alt=""
          src="../heartfill.svg"
        />
        <img
          className="usman-yousaf-sakqlf78kvo-unspl-icon2"
          alt=""
          src="../dr.patrik.png"
        />
        <div className="reviews" />
        <div className="badges1" />
        <b className="reviews1">Reviews</b>
        <b className="badges2">Badges</b>
        <img className="chatbars-1-icon6" alt="" src="../chatbars.png" />
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

export default PhysicianFinder3;
