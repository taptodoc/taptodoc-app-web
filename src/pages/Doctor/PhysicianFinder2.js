import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PhysicianFinder2.css";

const PhysicianFinder2 = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/physician-finder3");
  }, [navigate]);

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

  return (
    <div className="physician-finder-2">
      <div className="backgroundcolor10" />
      <div className="footer10">
        <div className="tap2doc-all-rights10">{`© 2023 Tap2Doc. All Rights Reserved.. `}</div>
        <div className="social-media10">
          <img className="facebook-icon10" alt="" src="../facebook.png" />
          <img className="instagram-icon10" alt="" src="../instagram.png" />
          <img className="linkedin-icon10" alt="" src="../linkedin.png" />
          <img className="twitter-icon10" alt="" src="../twitter.png" />
        </div>
        <div className="support-and-resources10">
          <img className="uparrow-icon10" alt="" src="../uparrow.svg" />
          <div className="support-resources10">{`Support & resources`}</div>
        </div>
      </div>
      <div className="doctor-list">
        <div className="list-1-parent">
          <div className="list-1">
            <button className="list-1-inner" onClick={onGroupButtonClick}>
              <div className="group-parent16">
                <div className="group-parent16">
                  <div className="group-child69" />
                  <img
                    className="group-child70"
                    alt=""
                    src="../online-icon.svg"
                  />
                </div>
                <img
                  className="bruno-rodrigues-279xihympyy-un-icon"
                  alt=""
                  src="../dr.patrik.png"
                />
                <button className="mdicards-heart">
                  <img className="vector-icon12" alt="" src="../heart.svg" />
                </button>
                <div className="dr-patrik-container">
                  <b className="dr-rahim">Dr. Patrik</b>
                  <div className="group-parent17">
                    <img
                      className="group-child71"
                      alt=""
                      src="../YellowstarRatings.svg"
                    />
                    <div className="div6">4.0</div>
                  </div>
                  <b className="dr-rahim">Heart Surgeon</b>
                </div>
              </div>
            </button>
            <button className="list-1-child">
              <div className="group-parent16">
                <div className="group-parent16">
                  <div className="group-child69" />
                  <img
                    className="group-child70"
                    alt=""
                    src="../online-icon.svg"
                  />
                </div>
                <img
                  className="rian-ramirez-rm7rzydl3ry-unspl-icon2"
                  alt=""
                  src="../dr.mary.png"
                />
                <img
                  className="mdicards-heart-icon8"
                  alt=""
                  src="../heartfill.svg"
                />
                <div className="dr-mary-container">
                  <b className="dr-rahim">Dr. Mary</b>
                  <div className="group-parent17">
                    <img
                      className="group-child71"
                      alt=""
                      src="../YellowstarRatings.svg"
                    />
                    <div className="div6">4.0</div>
                  </div>
                  <b className="dr-rahim">Heart specialist</b>
                </div>
              </div>
            </button>
            <button className="list-1-child">
              <div className="group-parent16">
                <div className="group-parent16">
                  <div className="group-child69" />
                  <img
                    className="group-child70"
                    alt=""
                    src="../offline-icon.svg"
                  />
                </div>
                <img
                  className="bruno-rodrigues-279xihympyy-un-icon"
                  alt=""
                  src="../Dr.John.png"
                />
                <img
                  className="mdicards-heart-icon9"
                  alt=""
                  src="../heart.svg"
                />
                <div className="dr-john-container">
                  <b className="dr-rahim">Dr. John</b>
                  <div className="group-parent17">
                    <img
                      className="group-child71"
                      alt=""
                      src="../YellowstarRatings.svg"
                    />
                    <div className="div6">4.0</div>
                  </div>
                  <b className="dr-rahim">General surgeon</b>
                </div>
              </div>
            </button>
            <button className="list-1-child">
              <div className="group-parent16">
                <div className="group-parent16">
                  <div className="group-child69" />
                  <img
                    className="group-child70"
                    alt=""
                    src="../online-icon.svg"
                  />
                </div>
                <img
                  className="bruno-rodrigues-279xihympyy-un-icon"
                  alt=""
                  src="../Dr.Rahim.png"
                />
                <img
                  className="mdicards-heart-icon8"
                  alt=""
                  src="../heartfill.svg"
                />
                <div className="dr-rahim-parent">
                  <b className="dr-rahim">Dr. Rahim</b>
                  <div className="group-parent17">
                    <img
                      className="group-child71"
                      alt=""
                      src="../YellowstarRatings.svg"
                    />
                    <div className="div6">4.0</div>
                  </div>
                  <b className="dr-rahim">Infection analyst</b>
                </div>
              </div>
            </button>
          </div>
          <div className="list-1">
            <button className="list-1-child">
              <div className="group-parent16">
                <div className="group-parent16">
                  <div className="group-child69" />
                  <img
                    className="group-child70"
                    alt=""
                    src="../offline-icon.svg"
                  />
                </div>
                <img
                  className="bruno-rodrigues-279xihympyy-un-icon"
                  alt=""
                  src="../dr.patrik.png"
                />
                <img
                  className="mdicards-heart-icon11"
                  alt=""
                  src="../heart.svg"
                />
                <div className="dr-patrik-container">
                  <b className="dr-rahim">Dr. Patrik</b>
                  <div className="group-parent17">
                    <img
                      className="group-child71"
                      alt=""
                      src="../YellowstarRatings.svg"
                    />
                    <div className="div6">4.0</div>
                  </div>
                  <b className="dr-rahim">Heart Surgeon</b>
                </div>
              </div>
            </button>
            <button className="list-1-child">
              <div className="group-parent16">
                <div className="group-parent16">
                  <div className="group-child69" />
                  <img
                    className="group-child70"
                    alt=""
                    src="../online-icon.svg"
                  />
                </div>
                <img
                  className="rian-ramirez-rm7rzydl3ry-unspl-icon2"
                  alt=""
                  src="../dr.mary.png"
                />
                <img
                  className="mdicards-heart-icon8"
                  alt=""
                  src="../heart.svg"
                />
                <div className="dr-mary-container">
                  <b className="dr-rahim">Dr. Mary</b>
                  <div className="group-parent17">
                    <img
                      className="group-child71"
                      alt=""
                      src="../YellowstarRatings.svg"
                    />
                    <div className="div6">4.0</div>
                  </div>
                  <b className="dr-rahim">Heart specialist</b>
                </div>
              </div>
            </button>
            <button className="list-1-child">
              <div className="group-parent16">
                <div className="group-parent16">
                  <div className="group-child69" />
                  <img
                    className="group-child70"
                    alt=""
                    src="../offline-icon.svg"
                  />
                </div>
                <img
                  className="bruno-rodrigues-279xihympyy-un-icon"
                  alt=""
                  src="../Dr.John.png"
                />
                <img
                  className="mdicards-heart-icon9"
                  alt=""
                  src="../heartfill.svg"
                />
                <div className="dr-john-container">
                  <b className="dr-rahim">Dr. John</b>
                  <div className="group-parent17">
                    <img
                      className="group-child71"
                      alt=""
                      src="../YellowstarRatings.svg"
                    />
                    <div className="div6">4.0</div>
                  </div>
                  <b className="dr-rahim">General surgeon</b>
                </div>
              </div>
            </button>
            <button className="list-1-child">
              <div className="group-parent16">
                <div className="group-parent16">
                  <div className="group-child69" />
                  <img
                    className="group-child70"
                    alt=""
                    src="../offline-icon.svg"
                  />
                </div>
                <img
                  className="bruno-rodrigues-279xihympyy-un-icon"
                  alt=""
                  src="../Dr.Rahim.png"
                />
                <img
                  className="mdicards-heart-icon8"
                  alt=""
                  src="../heartfill.svg"
                />
                <div className="dr-rahim-parent">
                  <b className="dr-rahim">Dr. Rahim</b>
                  <div className="group-parent17">
                    <img
                      className="group-child71"
                      alt=""
                      src="../YellowstarRatings.svg"
                    />
                    <div className="div6">4.0</div>
                  </div>
                  <b className="dr-rahim">Infection analyst</b>
                </div>
              </div>
            </button>
          </div>
          <div className="list-1">
            <button className="list-1-child">
              <div className="group-parent16">
                <div className="group-parent16">
                  <div className="group-child69" />
                  <img
                    className="group-child70"
                    alt=""
                    src="../online-icon.svg"
                  />
                </div>
                <img
                  className="bruno-rodrigues-279xihympyy-un-icon"
                  alt=""
                  src="../dr.patrik.png"
                />
                <img
                  className="mdicards-heart-icon11"
                  alt=""
                  src="../heart.svg"
                />
                <div className="dr-patrik-container">
                  <b className="dr-rahim">Dr. Patrik</b>
                  <div className="group-parent17">
                    <img
                      className="group-child71"
                      alt=""
                      src="../YellowstarRatings.svg"
                    />
                    <div className="div6">4.0</div>
                  </div>
                  <b className="dr-rahim">Heart Surgeon</b>
                </div>
              </div>
            </button>
            <button className="list-1-child">
              <div className="group-parent16">
                <div className="group-parent16">
                  <div className="group-child69" />
                  <img
                    className="group-child70"
                    alt=""
                    src="../online-icon.svg"
                  />
                </div>
                <img
                  className="rian-ramirez-rm7rzydl3ry-unspl-icon2"
                  alt=""
                  src="../dr.mary.png"
                />
                <img
                  className="mdicards-heart-icon8"
                  alt=""
                  src="../heart.svg"
                />
                <div className="dr-mary-container">
                  <b className="dr-rahim">Dr. Mary</b>
                  <div className="group-parent17">
                    <img
                      className="group-child71"
                      alt=""
                      src="../YellowstarRatings.svg"
                    />
                    <div className="div6">4.0</div>
                  </div>
                  <b className="dr-rahim">Heart specialist</b>
                </div>
              </div>
            </button>
            <button className="list-1-child">
              <div className="group-parent16">
                <div className="group-parent16">
                  <div className="group-child69" />
                  <img
                    className="group-child70"
                    alt=""
                    src="../offline-icon.svg"
                  />
                </div>
                <img
                  className="bruno-rodrigues-279xihympyy-un-icon"
                  alt=""
                  src="../Dr.John.png"
                />
                <img
                  className="mdicards-heart-icon9"
                  alt=""
                  src="../heart.svg"
                />
                <div className="dr-john-container">
                  <b className="dr-rahim">Dr. John</b>
                  <div className="group-parent17">
                    <img
                      className="group-child71"
                      alt=""
                      src="../YellowstarRatings.svg"
                    />
                    <div className="div6">4.0</div>
                  </div>
                  <b className="dr-rahim">General surgeon</b>
                </div>
              </div>
            </button>
            <button className="list-1-child">
              <div className="group-parent16">
                <div className="group-parent16">
                  <div className="group-child69" />
                  <img
                    className="group-child70"
                    alt=""
                    src="../offline-icon.svg"
                  />
                </div>
                <img
                  className="bruno-rodrigues-279xihympyy-un-icon"
                  alt=""
                  src="../Dr.Rahim.png"
                />
                <img
                  className="mdicards-heart-icon8"
                  alt=""
                  src="../heartfill.svg"
                />
                <div className="dr-rahim-parent">
                  <b className="dr-rahim">Dr. Rahim</b>
                  <div className="group-parent17">
                    <img
                      className="group-child71"
                      alt=""
                      src="../YellowstarRatings.svg"
                    />
                    <div className="div6">4.0</div>
                  </div>
                  <b className="dr-rahim">Infection analyst</b>
                </div>
              </div>
            </button>
          </div>
          <div className="list-4" />
        </div>
        <div className="group-parent40">
          <div className="frame-wrapper6">
            <div className="group-parent16">
              <div className="group-parent16">
                <div className="group-child69" />
                <img
                  className="group-child70"
                  alt=""
                  src="../offline-icon.svg"
                />
              </div>
              <img
                className="bruno-rodrigues-279xihympyy-un-icon"
                alt=""
                src="../dr.patrik.png"
              />
              <img
                className="mdicards-heart-icon11"
                alt=""
                src="../heart.svg"
              />
              <div className="dr-patrik-container">
                <b className="dr-patrik5">Dr. Patrik</b>
                <div className="group-parent42">
                  <img
                    className="group-child71"
                    alt=""
                    src="../YellowstarRatings.svg"
                  />
                  <div className="div18">4.0</div>
                </div>
                <b className="dr-patrik5">Heart Surgeon</b>
              </div>
            </div>
          </div>
          <div className="frame-wrapper6">
            <div className="group-parent16">
              <div className="group-parent16">
                <div className="group-child69" />
                <img
                  className="group-child70"
                  alt=""
                  src="../online-icon.svg"
                />
              </div>
              <img
                className="rian-ramirez-rm7rzydl3ry-unspl-icon2"
                alt=""
                src="../dr.mary.png"
              />
              <img
                className="mdicards-heart-icon8"
                alt=""
                src="../heart.svg"
              />
              <div className="dr-mary-container">
                <b className="dr-patrik5">Dr. Mary</b>
                <div className="group-parent42">
                  <img
                    className="group-child71"
                    alt=""
                    src="../YellowstarRatings.svg"
                  />
                  <div className="div18">4.0</div>
                </div>
                <b className="dr-patrik5">Heart specialist</b>
              </div>
            </div>
          </div>
          <div className="frame-wrapper6">
            <div className="group-parent16">
              <div className="group-parent16">
                <div className="group-child69" />
                <img
                  className="group-child70"
                  alt=""
                  src="../online-icon.svg"
                />
              </div>
              <img
                className="bruno-rodrigues-279xihympyy-un-icon"
                alt=""
                src="../Dr.John.png"
              />
              <img
                className="mdicards-heart-icon9"
                alt=""
                src="../heart.svg"
              />
              <div className="dr-john-container">
                <b className="dr-patrik5">Dr. John</b>
                <div className="group-parent42">
                  <img
                    className="group-child71"
                    alt=""
                    src="../YellowstarRatings.svg"
                  />
                  <div className="div18">4.0</div>
                </div>
                <b className="dr-patrik5">General surgeon</b>
              </div>
            </div>
          </div>
          <div className="frame-wrapper6">
            <div className="group-parent16">
              <div className="group-parent16">
                <div className="group-child69" />
                <img
                  className="group-child70"
                  alt=""
                  src="../offline-icon.svg"
                />
              </div>
              <img
                className="bruno-rodrigues-279xihympyy-un-icon"
                alt=""
                src="../Dr.Rahim.png"
              />
              <img
                className="mdicards-heart-icon8"
                alt=""
                src="../heartfill.svg"
              />
              <div className="dr-rahim-parent">
                <b className="dr-patrik5">Dr. Rahim</b>
                <div className="group-parent42">
                  <img
                    className="group-child71"
                    alt=""
                    src="../YellowstarRatings.svg"
                  />
                  <div className="div18">4.0</div>
                </div>
                <b className="dr-patrik5">Infection analyst</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="rating1">
        <div className="guests3">Rating</div>
      </button>
      <button className="availability">
        <div className="guests3">Availability</div>
      </button>
      <button className="distance1">
        <div className="guests3">Distance</div>
      </button>
      <button className="speciality3">
        <div className="guests3">Speciality</div>
      </button>
      <b className="doctors">Doctors</b>
      <iframe
        className="map3"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15554.33360246679!2d77.61924415!3d12.934475849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677522975507!5m2!1sen!2sin"
      />
      <div className="navbar10">
        <button className="image-141" />
        <button className="logo9" onClick={onLogoClick} />
        <div className="patient-navigation9">
          <div className="navigation19">
            <button className="doctor19" onClick={onDoctor1Click}>
              <div className="doctor1-inner8">
                <div className="group-child117" />
              </div>
              <img
                className="doctor-4-110"
                alt=""
                src="../doctor-icon.png"
              />
            </button>
            <button className="examine9" onClick={onExamineClick}>
              <div className="doctor1-inner8">
                <div className="group-child117" />
              </div>
              <img
                className="doctor-4-110"
                alt=""
                src="../examination.png"
              />
            </button>
            <button className="hospital19" onClick={onHospital1Click}>
              <div className="doctor1-inner8">
                <div className="group-child117" />
              </div>
              <img
                className="doctor-4-110"
                alt=""
                src="../hospitalfacility.png"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicianFinder2;
