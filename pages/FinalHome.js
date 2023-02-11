import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PopupSignIn from "../components/PopupSignIn";
import PortalPopup from "../components/PortalPopup";

const FinalHome = () => {
  const navigate = useNavigate();
  const [isPopupSignInOpen, setPopupSignInOpen] = useState(false);

  const onDoctor1Click = useCallback(() => {
    navigate("/doctor");
  }, [navigate]);

  const openPopupSignIn = useCallback(() => {
    setPopupSignInOpen(true);
  }, []);

  const closePopupSignIn = useCallback(() => {
    setPopupSignInOpen(false);
  }, []);

  return (
    <>
      <div className="relative bg-white w-full h-[1024px] overflow-hidden text-right text-4xl text-dimgray font-normal">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#e5f7ff,_rgba(217,_217,_217,_0))] w-[1440px] h-[999px]" />
        <img
          className="absolute top-[94px] left-[892px] w-[548px] h-[411px]"
          alt=""
          src="../2050001.svg"
        />
        <div className="absolute top-[389px] left-[426px] flex flex-col items-center justify-start gap-[27px] text-xl text-darkslategray">
          <div className="flex flex-col items-center justify-start gap-[22px]">
            <div className="relative rounded-large bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[589px] h-[60px] shrink-0 border-[0.5px] border-solid border-gray-300">
              <div className="absolute top-[21px] left-[28px] leading-[15px] font-extrabold inline-block w-[75px] h-[18px]">
                Question
              </div>
              <img
                className="absolute top-[11px] left-[293px] w-0.5 h-[36.51px]"
                alt=""
                src="../vector-2.svg"
              />
              <div className="absolute top-[21px] left-[307px] leading-[15px] font-extrabold text-gray-200 inline-block w-[72px] h-[19px]">
                Location
              </div>
              <img
                className="absolute top-[5px] left-[534px] w-[49px] h-[49px]"
                alt=""
                src="../group-1000000813.svg"
              />
            </div>
            <div className="relative rounded-large bg-midnightblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-32 h-[31px] shrink-0 text-[11px] text-white font-radio-canada">
              <div className="absolute top-[7px] left-[24px] tracking-[-0.02em] leading-[150%] font-semibold">
                Advanced mode
              </div>
            </div>
          </div>
          <div className="rounded-base bg-aliceblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[397px] flex flex-row p-[30px] box-border items-start justify-start gap-[30px] text-center text-3xl text-midnightblue-200 font-podkova">
            <div className="relative w-[90px] h-[90px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-base bg-white shadow-[5px_5px_25px_rgba(0,_0,_0,_0.25)] w-[90px] h-[90px]" />
              <img
                className="absolute top-[30px] left-[29.5px] w-[30px] h-[30px] object-cover"
                alt=""
                src="../people-1@2x.png"
              />
            </div>
            <div className="relative w-[90px] h-[90px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-base bg-white shadow-[5px_5px_25px_rgba(0,_0,_0,_0.25)] w-[90px] h-[90px]" />
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[30px] left-[29.5px] w-[30px] h-[30px] bg-[url(../public/doctor1@3x.png)] bg-cover bg-no-repeat bg-[top]"
                onClick={onDoctor1Click}
              />
            </div>
            <div className="relative w-[90px] h-[90px] shrink-0">
              <b className="absolute top-[94px] left-[11px] tracking-[-0.02em] leading-[26px] hidden w-[68px] h-7">
                Patient
              </b>
              <b className="absolute top-[93px] left-[215px] tracking-[-0.02em] leading-[26px] hidden w-16 h-[31px]">
                Doctor
              </b>
              <b className="absolute top-[94px] left-[416px] tracking-[-0.02em] leading-[26px] hidden w-[70px] h-7">
                Facility
              </b>
              <div className="absolute top-[0px] left-[0px] w-[90px] h-[90px]">
                <div className="absolute top-[0px] left-[0px] rounded-base bg-white shadow-[5px_5px_25px_rgba(0,_0,_0,_0.25)] w-[90px] h-[90px]" />
              </div>
              <img
                className="absolute top-[30px] left-[29.5px] w-[30px] h-[30px] object-cover"
                alt=""
                src="../hospital-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[999px] left-[0px] bg-white w-[1440px] h-[25px] flex flex-row items-end justify-center gap-[393px] text-left text-base text-black font-lato">
          <div className="relative tracking-[0.01em] leading-[20px] capitalize">{`© 2022 Tap2Doc. All Rights Reserved.. `}</div>
          <div className="flex flex-row items-start justify-start gap-[48px]">
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="../fb.svg"
            />
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="../insta.svg"
            />
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="../linkedin.svg"
            />
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="../twitter.svg"
            />
          </div>
          <div className="relative w-[155px] h-5 shrink-0">
            <img
              className="absolute w-[9.03%] right-[0%] bottom-[5.35px] left-[90.97%] max-w-full overflow-hidden h-[8.65px]"
              alt=""
              src="../vector.svg"
            />
            <div className="absolute bottom-[0px] left-[0px] tracking-[0.01em] leading-[20px] capitalize">{`Support & resources`}</div>
          </div>
        </div>
        <div className="absolute top-[731px] left-[34px] rounded-base bg-honeydew shadow-[5px_5px_20px_#5e9bb5] flex flex-row p-[25px] items-center justify-start gap-[99px]">
          <div className="relative tracking-[-0.02em] leading-[150%] font-semibold">
            Reviews
          </div>
          <div className="relative rounded-small bg-whitesmoke-100 w-[178px] h-[178px] shrink-0" />
          <div className="relative rounded-small bg-whitesmoke-100 w-[178px] h-[178px] shrink-0" />
          <div className="relative rounded-small bg-whitesmoke-100 w-[178px] h-[178px] shrink-0" />
          <div className="relative rounded-small bg-whitesmoke-100 w-[178px] h-[178px] shrink-0" />
          <img
            className="relative w-6 h-6 shrink-0 overflow-hidden"
            alt=""
            src="../systemarrowrightsfill.svg"
          />
        </div>
        <div className="absolute top-[116px] left-[78px] w-[827px] h-[173px] text-left text-5xl text-midnightblue-100">
          <b className="absolute top-[0px] left-[0px] leading-[84px]">
            Platform to connect
          </b>
          <div className="absolute top-[84px] left-[0px] w-[303px] h-[89px] overflow-hidden text-red">
            <div className="absolute top-[0px] left-[0px] leading-[84px] font-black">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Doctor
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Patient
              </p>
              <p className="m-0">Facility</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[305px] left-[78px] flex flex-col items-start justify-start text-center text-[13px] text-white font-inter">
          <div className="rounded-large bg-midnightblue-100 h-11 shrink-0 flex flex-row py-2 px-[17px] box-border items-start justify-start">
            <div className="relative tracking-[0.25px] leading-[36px] font-medium flex items-center justify-center w-[75px] h-[26px] shrink-0 [text-shadow:0px_2px_4px_rgba(38,_50,_56,_0.16),_0px_4px_8px_rgba(38,_50,_56,_0.08)]">
              Get Started
            </div>
          </div>
        </div>
        <div className="absolute top-[13px] left-[8px] w-[1381.4px] h-[47px] text-center font-radio-canada">
          <div className="absolute top-[0px] left-[598.4px] flex flex-row items-start justify-start">
            <div className="relative tracking-[-0.02em] leading-[32px] inline-block w-[138px] shrink-0">
              Menu
            </div>
            <div className="relative tracking-[-0.02em] leading-[32px] inline-block w-[138px] shrink-0">
              Ask our bot
            </div>
          </div>
          <div className="absolute top-[0px] left-[1297.4px] rounded-[48px] bg-white box-border h-11 flex flex-row py-1 pr-2 pl-5 items-center justify-start gap-[12px] border-[1px] border-solid border-black-200">
            <img
              className="relative w-3 h-[9.4px] shrink-0"
              alt=""
              src="../hamburger.svg"
            />
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-8 h-8 shrink-0 overflow-hidden"
              onClick={openPopupSignIn}
            >
              <img
                className="absolute h-[95.62%] w-[95.62%] top-[2.19%] right-[2.19%] bottom-[2.19%] left-[2.19%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="../vector1.svg"
              />
              <div className="absolute h-1/4 w-3/12 top-[6.25%] right-[0%] bottom-[68.75%] left-[75%] flex flex-row items-start justify-start">
                <img
                  className="relative w-[9px] h-2.5 shrink-0"
                  alt=""
                  src="../float-online.svg"
                />
              </div>
            </button>
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1px] left-[0px] w-[198px] h-[46px] bg-[url(../public/logonew111@3x.png)] bg-cover bg-no-repeat bg-[top]"
            autoFocus
          />
        </div>
      </div>
      {isPopupSignInOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupSignIn}
        >
          <PopupSignIn onClose={closePopupSignIn} />
        </PortalPopup>
      )}
    </>
  );
};

export default FinalHome;
