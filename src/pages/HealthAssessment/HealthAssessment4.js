import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HealthAssessment4.css";

const HealthAssessment4 = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDoctor1Click = useCallback(() => {
    navigate("/health-assessment1");
  }, [navigate]);

  const onExamineClick = useCallback(() => {
    navigate("/health-assessment1");
  }, [navigate]);

  const onHospital1Click = useCallback(() => {
    navigate("/facility-finder");
  }, [navigate]);

  return (
    <div className="health-assessment-4">
      <div className="backgroundcolor4" />
      <div className="footer4">
        <div className="tap2doc-all-rights4">{`© 2023 Tap2Doc. All Rights Reserved.. `}</div>
        <div className="social-media4">
          <img className="facebook-icon4" alt="" src="../facebook.png" />
          <img className="instagram-icon4" alt="" src="../instagram.png" />
          <img className="linkedin-icon4" alt="" src="../linkedin.png" />
          <img className="twitter-icon4" alt="" src="../twitter.png" />
        </div>
        <div className="support-and-resources4">
          <img className="uparrow-icon4" alt="" src="../uparrow.svg" />
          <div className="support-resources4">{`Support & resources`}</div>
        </div>
      </div>
      <img className="chatbars-1-icon2" alt="" src="../chatbars.png" />
      <div className="navbar4">
        <button className="logo3" onClick={onLogoClick} />
        <button className="primary2">
          <div className="background-99-dp2">
            <div className="bg2" />
          </div>
          <b className="sign-in3">Sign out</b>
          <img
            className="icon-arrow-right2"
            alt=""
            src="../iconarrow-right.svg"
          />
          <img
            className="icon-arrow-left2"
            alt=""
            src="../iconarrow-left.svg"
          />
        </button>
        <div className="patient-navigation3">
          <div className="navigation13">
            <button className="doctor13" onClick={onDoctor1Click}>
              <div className="doctor1-inner2">
                <div className="group-child39" />
              </div>
              <img className="doctor-4-14" alt="" src="../doctor-icon.png" />
            </button>
            <button className="examine3" onClick={onExamineClick}>
              <div className="doctor1-inner2">
                <div className="group-child39" />
              </div>
              <img
                className="doctor-4-14"
                alt=""
                src="../examination.png"
              />
            </button>
            <button className="hospital13" onClick={onHospital1Click}>
              <div className="doctor1-inner2">
                <div className="group-child39" />
              </div>
              <img
                className="doctor-4-14"
                alt=""
                src="../hospitalfacility.png"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="symtoms" />
      <div className="types-rectangle" />
      <div className="possible-treatmentsrectangle" />
      <b className="symptoms">Symptoms</b>
      <b className="types">Types</b>
      <b className="possible-treatments">Possible Treatments</b>
      <div className="leukaemia">Leukaemia</div>
      <b className="recommended-physicians">{`Recommended Physicians `}</b>
      <div className="doctors-list">
        <div className="group-parent2">
          <div className="frame-wrapper">
            <div className="group-parent3">
              <div className="group-parent3">
                <div className="group-child41" />
                <img
                  className="group-child42"
                  alt=""
                  src="../online-icon.svg"
                />
              </div>
              <img
                className="usman-yousaf-sakqlf78kvo-unspl-icon"
                alt=""
                src="../dr.patrik.png"
              />
              <img
                className="mdicards-heart-icon1"
                alt=""
                src="../heart.svg"
              />
              <div className="dr-patrik-parent">
                <b className="dr-patrik">Dr. Patrik</b>
                <div className="group-parent4">
                  <img
                    className="group-child43"
                    alt=""
                    src="../YellowstarRatings.svg"
                  />
                  <div className="div">4.0</div>
                </div>
                <b className="dr-patrik">Heart Surgeon</b>
              </div>
              <img className="vector-icon" alt="" src="../Location.svg" />
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="group-parent3">
              <div className="group-parent3">
                <div className="group-child41" />
                <img
                  className="group-child42"
                  alt=""
                  src="../online-icon.svg"
                />
              </div>
              <img
                className="rian-ramirez-rm7rzydl3ry-unspl-icon"
                alt=""
                src="../dr.mary.png"
              />
              <img
                className="mdicards-heart-icon2"
                alt=""
                src="../heartfill.svg"
              />
              <div className="dr-mary-parent">
                <b className="dr-patrik">Dr. Mary</b>
                <div className="group-parent4">
                  <img
                    className="group-child43"
                    alt=""
                    src="../YellowstarRatings.svg"
                  />
                  <div className="div">4.0</div>
                </div>
                <b className="dr-patrik">Heart specialist</b>
              </div>
              <img className="vector-icon" alt="" src="../Location.svg" />
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="group-parent3">
              <div className="group-parent3">
                <div className="group-child41" />
                <img
                  className="group-child42"
                  alt=""
                  src="../offline-icon.svg"
                />
              </div>
              <img
                className="usman-yousaf-sakqlf78kvo-unspl-icon"
                alt=""
                src="../Dr.John.png"
              />
              <img
                className="mdicards-heart-icon3"
                alt=""
                src="../heart.svg"
              />
              <div className="dr-john-parent">
                <b className="dr-patrik">Dr. John</b>
                <div className="group-parent4">
                  <img
                    className="group-child43"
                    alt=""
                    src="../YellowstarRatings.svg"
                  />
                  <div className="div">4.0</div>
                </div>
                <b className="dr-patrik">General surgeon</b>
              </div>
              <img className="vector-icon2" alt="" src="../Location.svg" />
            </div>
          </div>
        </div>
        <div className="group-parent2">
          <div className="frame-wrapper">
            <div className="group-parent3">
              <div className="group-parent3">
                <div className="group-child41" />
                <img
                  className="group-child42"
                  alt=""
                  src="../offline-icon.svg"
                />
              </div>
              <img
                className="usman-yousaf-sakqlf78kvo-unspl-icon"
                alt=""
                src="../usmanyousafsakqlf78kvounsplash-1@2x.png"
              />
              <img
                className="mdicards-heart-icon1"
                alt=""
                src="../heart.svg"
              />
              <div className="dr-patrik-parent">
                <b className="dr-patrik">Dr. Patrik</b>
                <div className="group-parent4">
                  <img
                    className="group-child43"
                    alt=""
                    src="../YellowstarRatings.svg"
                  />
                  <div className="div">4.0</div>
                </div>
                <b className="dr-patrik">Heart Surgeon</b>
              </div>
              <img className="vector-icon" alt="" src="../Location.svg" />
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="group-parent3">
              <div className="group-parent3">
                <div className="group-child41" />
                <img
                  className="group-child42"
                  alt=""
                  src="../offline-icon.svg"
                />
              </div>
              <img
                className="rian-ramirez-rm7rzydl3ry-unspl-icon"
                alt=""
                src="../dr.mary.png"
              />
              <img
                className="mdicards-heart-icon2"
                alt=""
                src="../heart.svg"
              />
              <div className="dr-mary-parent">
                <b className="dr-patrik">Dr. Mary</b>
                <div className="group-parent4">
                  <img
                    className="group-child43"
                    alt=""
                    src="../YellowstarRatings.svg"
                  />
                  <div className="div">4.0</div>
                </div>
                <b className="dr-patrik">Heart specialist</b>
              </div>
              <img className="vector-icon4" alt="" src="../Location.svg" />
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="group-parent3">
              <div className="group-parent3">
                <div className="group-child41" />
                <img
                  className="group-child42"
                  alt=""
                  src="../online-icon.svg"
                />
              </div>
              <img
                className="usman-yousaf-sakqlf78kvo-unspl-icon"
                alt=""
                src="../Dr.John.png"
              />
              <img
                className="mdicards-heart-icon3"
                alt=""
                src="../heart.svg"
              />
              <div className="dr-john-parent">
                <b className="dr-patrik">Dr. John</b>
                <div className="group-parent4">
                  <img
                    className="group-child43"
                    alt=""
                    src="../YellowstarRatings.svg"
                  />
                  <div className="div">4.0</div>
                </div>
                <b className="dr-patrik">General surgeon</b>
              </div>
              <img className="vector-icon4" alt="" src="../Location.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthAssessment4;
