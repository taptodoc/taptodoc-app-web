import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin1.css";

const Signin1 = ({ onClose }) => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/email1");
  }, [navigate]);

  return (
    <div className="signin-1">
      <div className="background-signin" />
      <button className="login-button1" onClick={onLoginButtonClick}>
        <div className="login-button-item" />
      </button>
      <div className="signin-1-child" />
      <div className="login-or-signup1">Login or signup</div>
      <div className="welcome-to-tap2doc1">Welcome to Tap2Doc</div>
      <div className="phone-number">
        <div className="phone-number-child" />
      </div>
      <div className="country">
        <div className="phone-number-child" />
      </div>
      <img className="france-icon" alt="" src="../france@2x.png" />
      <div className="france">France</div>
      <div className="countryregion">Country/Region</div>
      <b className="login2">Login</b>
      <div className="or-continue-with">or continue with</div>
      <div className="google">Google</div>
      <div className="facebook">Facebook</div>
      <div className="email2">Email</div>
      <div className="apple">Apple</div>
      <img className="apple-icon" alt="" src="../apple.png" />
      <img className="fb-icon" alt="" src="../fb@2x.png" />
      <img className="google-icon" alt="" src="../google@2x.png" />
      <img className="email-icon" alt="" src="../email@2x.png" />
      <img className="drop-down-icon" alt="" src="../dropdown@2x.png" />
      <div className="div22">+33</div>
      <div className="div23">0 00 00 00 00</div>
      <div className="signin-1-item" />
    </div>
  );
};

export default Signin1;
