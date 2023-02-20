import { useState, useCallback, useEffect } from "react";
import SignIn from "../components/SignIn";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isSignInPopupOpen, setSignInPopupOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const openSignInPopup = useCallback(() => {
    setSignInPopupOpen(true);
  }, []);

  const closeSignInPopup = useCallback(() => {
    setSignInPopupOpen(false);
  }, []);

  const ongetstartedClick = useCallback(() => {
    navigate("/symptom-checker");
  }, [navigate]);

  const onpatientButtonClick = useCallback(() => {
    navigate("/symptom-checker");
  }, [navigate]);

  const ondoctorButtonClick = useCallback(() => {
    navigate("/doctor");
  }, [navigate]);

  const onhospitalButtonClick = useCallback(() => {
    navigate("/doctor-finder");
  }, [navigate]);

  return (
    <>
      <div
        className="relative bg-white w-full h-[1024px] overflow-hidden [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] text-left text-5xl text-dimgray font-radio-canada"
        data-animate-on-scroll
      >
        <div className="absolute h-[97.56%] w-full top-[0%] right-[0%] bottom-[2.44%] left-[0%] [background:linear-gradient(180deg,_#e5f7ff,_rgba(217,_217,_217,_0))]" />
        <img
          className="absolute top-[94px] left-[892px] w-[475px] h-[367px] object-cover"
          alt=""
          src="../docotorsmask.png"
        />
        <div className="absolute top-[389px] left-[426px] flex flex-col items-center justify-start gap-[22px]">
          <div className="relative rounded-base bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[589px] h-[60px] shrink-0 border-[0.5px] border-solid border-black-black-50">
            <input
              className="[border:none] font-extrabold font-normal11 text-xl bg-[transparent] absolute top-[21px] left-[28px] leading-[15px] text-darkslategray text-right inline-block w-[75px] h-[18px]"
              type="text"
              placeholder="Question"
              autoFocus
            />
            <img
              className="absolute top-[4px] left-[525px] w-[49px] h-[49px] object-cover"
              alt=""
              src="../searchicon.png"
            />
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-midnightblue-100 relative rounded-base shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-32 h-[31px] shrink-0">
            <div className="absolute top-[7px] left-[24px] text-xs tracking-[-0.02em] leading-[150%] font-semibold font-radio-canada text-white text-right">
              Advanced mode
            </div>
          </button>
        </div>
        <div className="absolute top-[13px] left-[606.4px] flex flex-row items-start justify-start text-center">
          <div className="relative tracking-[-0.02em] leading-[32px] inline-block w-[138px] shrink-0">
            Menu
          </div>
          <div className="relative tracking-[-0.02em] leading-[32px] inline-block w-[138px] shrink-0">
            Ask our bot
          </div>
        </div>
        <div className="absolute top-[13px] right-[50.6px] rounded-[48px] bg-white box-border h-11 flex flex-row py-1 pr-2 pl-5 items-center justify-end gap-[12px] border-[1px] border-solid border-black-200">
          <img
            className="relative w-3 h-[9.4px] shrink-0"
            alt=""
            src="../hamburger.svg"
          />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-8 h-8 shrink-0 overflow-hidden"
            onClick={openSignInPopup}
          >
            <img
              className="absolute h-[95.63%] w-[95.63%] top-[2.19%] right-[2.19%] bottom-[2.19%] left-[2.19%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../UserSignin.svg"
            />
          </button>
        </div>
        <div className="absolute bottom-[0px] left-[calc(50%_-_720px)] bg-white w-[1440px] h-[25px] flex flex-row items-end justify-center gap-[393px] text-base text-black-200 font-lato">
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
              src="../uparrow.svg"
            />
            <div className="absolute bottom-[0px] left-[0px] tracking-[0.01em] leading-[20px] capitalize">{`Support & resources`}</div>
          </div>
        </div>
        <div className="absolute top-[116px] left-[78px] w-[827px] h-[173px] text-9xl text-midnightblue-100 font-normal11">
          <div className="absolute top-[0px] left-[0px] leading-[84px] font-black [text-shadow:0px_4px_20px_#fff]">
            Platform to connect
          </div>
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
        <button
          className="cursor-pointer [border:none] py-2 px-[17px] bg-midnightblue-100 absolute top-[305px] left-[78px] rounded-base h-11 flex flex-row box-border items-start justify-start hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1]"
          autoFocus
          onClick={ongetstartedClick}
        >
          <div className="relative text-[13px] tracking-[0.25px] leading-[36px] font-medium font-text-xs-regular text-white text-center flex items-center justify-center w-[75px] h-[26px] shrink-0 [text-shadow:0px_2px_4px_rgba(38,_50,_56,_0.16),_0px_4px_8px_rgba(38,_50,_56,_0.08)]">
            Get Started
          </div>
        </button>
        <img
          className="absolute top-[9px] left-[11px] w-[176.41px] h-10 object-cover"
          alt=""
          src="../logo.png"
        />
        <div className="absolute top-[749px] left-[197px] rounded-2xxs bg-whitesmoke-100 w-[178px] h-[178px]" />
        <div className="absolute top-[749px] left-[474px] rounded-2xxs bg-whitesmoke-100 w-[178px] h-[178px]" />
        <div className="absolute top-[749px] left-[751px] rounded-2xxs bg-whitesmoke-100 w-[178px] h-[178px]" />
        <div className="absolute top-[749px] left-[1028px] rounded-2xxs bg-whitesmoke-100 w-[178px] h-[178px]" />
        <div className="absolute top-[512px] left-[495px] rounded-xxs bg-aliceblue-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[397px] flex flex-row p-[30px] box-border items-start justify-start gap-[30px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[90px] h-[90px] shrink-0 hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1]"
            onClick={onpatientButtonClick}
          >
            <div className="absolute top-[0px] left-[0px] rounded-xxs bg-white shadow-[5px_5px_25px_rgba(0,_0,_0,_0.25)] w-[90px] h-[90px]" />
            <img
              className="absolute top-[20px] left-[19.5px] w-[50px] h-[50px] object-cover"
              alt=""
              src="../patient.png"
            />
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[90px] h-[90px] shrink-0 hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1]"
            onClick={ondoctorButtonClick}
          >
            <div className="absolute top-[0px] left-[0px] rounded-xxs bg-white shadow-[5px_5px_25px_rgba(0,_0,_0,_0.25)] w-[90px] h-[90px]" />
            <img
              className="absolute top-[20px] left-[20.5px] w-[50px] h-[50px] object-cover"
              alt=""
              src="../doctor.png"
            />
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[90px] h-[90px] shrink-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
            onClick={onhospitalButtonClick}
            data-animate-on-scroll
          >
            <b className="absolute top-[94px] left-[11px] text-4xl tracking-[-0.02em] leading-[26px] hidden font-podkova text-midnightblue-200 text-center w-[68px] h-7">
              Patient
            </b>
            <b className="absolute top-[93px] left-[215px] text-4xl tracking-[-0.02em] leading-[26px] hidden font-podkova text-midnightblue-200 text-center w-16 h-[31px]">
              Doctor
            </b>
            <b className="absolute top-[94px] left-[416px] text-4xl tracking-[-0.02em] leading-[26px] hidden font-podkova text-midnightblue-200 text-center w-[70px] h-7">
              Facility
            </b>
            <div className="absolute top-[0px] left-[0px] w-[90px] h-[90px]">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-white shadow-[5px_5px_25px_rgba(0,_0,_0,_0.25)] w-[90px] h-[90px]" />
            </div>
            <img
              className="absolute top-[20px] left-[20.5px] w-[50px] h-[50px] object-cover"
              alt=""
              src="../hospital.png"
            />
          </button>
        </div>
      </div>
      {isSignInPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignInPopup}
        >
          <SignIn onClose={closeSignInPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Home;
