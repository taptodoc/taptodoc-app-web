import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const DoctorDasboard = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/patient-lookup");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/facility-details");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-right text-base text-black-200 font-be-vietnam-pro">
      <iframe
        className="[border:none] absolute top-[76px] left-[854px] w-[586px] h-[952px] overflow-auto"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.55242954148!2d77.49050999664321!3d12.95429441351403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1676694933465!5m2!1sen!2sin"
      />
      <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_2px_20px_rgba(0,_0,_0,_0.25)] w-[1440px] flex flex-row py-3 pr-[60px] pl-[22px] box-border items-start justify-start gap-[411px] text-left text-xl font-roboto">
        <img
          className="relative w-[176.41px] h-10 shrink-0 object-cover"
          alt=""
          src="../logo.png"
        />
        <div className="rounded-large bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.08)] box-border w-[300px] h-[47px] shrink-0 overflow-hidden flex flex-row py-2.5 pr-[7px] pl-[15px] items-center justify-between border-[1px] border-solid border-gainsboro-100">
          <div className="relative font-medium">Headache</div>
          <div className="rounded-xxl bg-honeydew w-10 h-10 shrink-0 overflow-hidden flex flex-row p-2.5 box-border items-center justify-center">
            <img
              className="relative w-5 h-5 shrink-0 overflow-hidden"
              alt=""
              src="../search.svg"
            />
          </div>
        </div>
        <div className="rounded-small box-border w-[101px] h-[47px] shrink-0 overflow-hidden flex flex-row py-[5px] pr-[17px] pl-2.5 items-center justify-start gap-[11px] border-[1px] border-solid border-darkgray-100">
          <img
            className="relative w-[30px] h-[30px] shrink-0 overflow-hidden"
            alt=""
            src="../menu.svg"
          />
          <img
            className="relative w-[39.47px] h-[30px] shrink-0 object-cover"
            alt=""
            src="../signinLogo.png"
          />
        </div>
      </div>
      <div className="absolute top-[132px] left-[25px] rounded-xxs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[813px] h-[265px] overflow-hidden">
        <b className="absolute top-[115px] left-[8px]">Patients</b>
        <div className="absolute top-[39px] left-[150px] flex flex-row items-end justify-start gap-[40px]">
          <div className="flex flex-col items-center justify-start gap-[30px]">
            <div className="relative w-[140px] h-[140px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-gainsboro-200 w-[140px] h-[140px]" />
              <img
                className="absolute top-[6px] left-[123px] w-2.5 h-2.5"
                alt=""
                src="../onlineicon.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <div className="relative rounded-xxs bg-mediumblue w-10 h-[18px] shrink-0" />
              <img
                className="relative rounded-xxs w-10 h-[18px] shrink-0"
                alt=""
                src="../bluebar.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[30px]">
            <div className="relative w-[140px] h-[140px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-gainsboro-200 w-[140px] h-[140px]" />
              <img
                className="absolute top-[6px] left-[123px] w-2.5 h-2.5"
                alt=""
                src="../offline.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <div className="relative rounded-xxs bg-mediumblue w-10 h-[18px] shrink-0" />
              <img
                className="relative rounded-xxs w-10 h-[18px] shrink-0"
                alt=""
                src="../bluebar.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[30px]">
            <div className="relative w-[140px] h-[140px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-gainsboro-200 w-[140px] h-[140px]" />
              <img
                className="absolute top-[6px] left-[123px] w-2.5 h-2.5"
                alt=""
                src="../offline.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <div className="relative rounded-xxs bg-mediumblue w-10 h-[18px] shrink-0" />
              <img
                className="relative rounded-xxs w-10 h-[18px] shrink-0"
                alt=""
                src="../bluebar.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[30px]">
            <div className="relative w-[140px] h-[140px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-gainsboro-200 w-[140px] h-[140px]" />
              <img
                className="absolute top-[6px] left-[123px] w-2.5 h-2.5"
                alt=""
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <div className="relative rounded-xxs bg-mediumblue w-10 h-[18px] shrink-0" />
              <img
                className="relative rounded-xxs w-10 h-[18px] shrink-0"
                alt=""
                src="../bluebar.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[30px]">
            <div className="relative w-[140px] h-[140px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-gainsboro-200 w-[140px] h-[140px]" />
              <img
                className="absolute top-[6px] left-[123px] w-2.5 h-2.5"
                alt=""
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <div className="relative rounded-xxs bg-mediumblue w-10 h-[18px] shrink-0" />
              <img
                className="relative rounded-xxs w-10 h-[18px] shrink-0"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[146px] left-[8px] w-[68px] h-[18px] text-xs text-white font-normal11">
          <div className="absolute top-[0px] left-[0px] rounded-xxs bg-darkmagenta w-[68px] h-[18px]" />
          <b className="absolute top-[0px] left-[21px] tracking-[-0.02em] leading-[150%]">
            View
          </b>
        </div>
      </div>
      <div className="absolute top-[414px] left-[22px] rounded-xxs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[816px] h-[265px] overflow-hidden">
        <b className="absolute top-[124px] left-[8px]">My Patients</b>
        <div className="absolute top-[39px] left-[152px] flex flex-row items-end justify-start gap-[40px]">
          <div className="flex flex-col items-center justify-start gap-[30px]">
            <div className="relative w-[140px] h-[140px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-gainsboro-200 w-[140px] h-[140px]" />
              <img
                className="absolute top-[6px] left-[123px] w-2.5 h-2.5"
                alt=""
                src="../online.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <div className="relative rounded-xxs bg-mediumblue w-10 h-[18px] shrink-0" />
              <img
                className="relative rounded-xxs w-10 h-[18px] shrink-0"
                alt=""
                src="../bluebar.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[30px]">
            <div className="relative w-[140px] h-[140px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-gainsboro-200 w-[140px] h-[140px]" />
              <img
                className="absolute top-[6px] left-[123px] w-2.5 h-2.5"
                alt=""
                src="../offline.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <div className="relative rounded-xxs bg-mediumblue w-10 h-[18px] shrink-0" />
              <img
                className="relative rounded-xxs w-10 h-[18px] shrink-0"
                alt=""
                src="../bluebar.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[30px]">
            <div className="relative w-[140px] h-[140px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-gainsboro-200 w-[140px] h-[140px]" />
              <img
                className="absolute top-[6px] left-[123px] w-2.5 h-2.5"
                alt=""
                src="../offline.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <div className="relative rounded-xxs bg-mediumblue w-10 h-[18px] shrink-0" />
              <img
                className="relative rounded-xxs w-10 h-[18px] shrink-0"
                alt=""
                src="../bluebar.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[30px]">
            <div className="relative w-[140px] h-[140px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-gainsboro-200 w-[140px] h-[140px]" />
              
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <div className="relative rounded-xxs bg-mediumblue w-10 h-[18px] shrink-0" />
              <img
                className="relative rounded-xxs w-10 h-[18px] shrink-0"
                alt=""
                src="../bluebar.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[30px]">
            <div className="relative w-[140px] h-[140px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-gainsboro-200 w-[140px] h-[140px]" />
              <img
                className="absolute top-[6px] left-[123px] w-2.5 h-2.5"
                alt=""
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <div className="relative rounded-xxs bg-mediumblue w-10 h-[18px] shrink-0" />
              <img
                className="relative rounded-xxs w-10 h-[18px] shrink-0"
                alt=""
              />
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[161px] left-[8px] w-[68px] h-[18px] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1]"
          onClick={onFrameButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-xxs bg-darkmagenta w-[68px] h-[18px]" />
          <b className="absolute top-[0px] left-[21px] text-xs tracking-[-0.02em] leading-[150%] font-normal11 text-white text-right">
            View
          </b>
        </button>
      </div>
      <div className="absolute top-[703px] left-[25px] rounded-xxs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[816px] h-[265px] overflow-hidden">
        <div className="absolute top-[39px] left-[152px] flex flex-row items-end justify-start gap-[40px]">
          <div className="flex flex-col items-center justify-start gap-[30px]">
            <div className="relative w-[140px] h-[140px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-gainsboro-200 w-[140px] h-[140px]" />
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <div className="relative rounded-xxs bg-mediumblue w-10 h-[18px] shrink-0" />
              <img
                className="relative rounded-xxs w-10 h-[18px] shrink-0"
                alt=""
                src="../bluebar.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[30px]">
            <div className="relative w-[140px] h-[140px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-gainsboro-200 w-[140px] h-[140px]" />
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <div className="relative rounded-xxs bg-mediumblue w-10 h-[18px] shrink-0" />
              <img
                className="relative rounded-xxs w-10 h-[18px] shrink-0"
                alt=""
                src="../bluebar.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[30px]">
            <div className="relative w-[140px] h-[140px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-gainsboro-200 w-[140px] h-[140px]" />
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <div className="relative rounded-xxs bg-mediumblue w-10 h-[18px] shrink-0" />
              <img
                className="relative rounded-xxs w-10 h-[18px] shrink-0"
                alt=""
                src="../bluebar.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[30px]">
            <div className="relative w-[140px] h-[140px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-gainsboro-200 w-[140px] h-[140px]" />
             
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <div className="relative rounded-xxs bg-mediumblue w-10 h-[18px] shrink-0" />
              <img
                className="relative rounded-xxs w-10 h-[18px] shrink-0"
                alt=""
                src="../bluebar.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[30px]">
            <div className="relative w-[140px] h-[140px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-gainsboro-200 w-[140px] h-[140px]" />
              <img
                className="absolute top-[6px] left-[123px] w-2.5 h-2.5"
                alt=""
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <div className="relative rounded-xxs bg-mediumblue w-10 h-[18px] shrink-0" />
              <img
                className="relative rounded-xxs w-10 h-[18px] shrink-0"
                alt=""
              />
            </div>
          </div>
        </div>
        <b className="absolute top-[119px] left-[12px]">Facility</b>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[161px] left-[12px] w-[68px] h-[18px] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1]"
          onClick={onFrameButton1Click}
        >
          <div className="absolute top-[0px] left-[0px] rounded-xxs bg-darkmagenta w-[68px] h-[18px]" />
          <b className="absolute top-[0px] left-[21px] text-xs tracking-[-0.02em] leading-[150%] font-normal11 text-white text-right">
            View
          </b>
        </button>
      </div>
      <div className="absolute top-[998px] left-[0px] bg-white w-[1440px] h-[25px] flex flex-row items-end justify-center gap-[393px] text-left font-lato">
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
            src="../vector6.svg"
          />
          <div className="absolute bottom-[0px] left-[0px] tracking-[0.01em] leading-[20px] capitalize">{`Support & resources`}</div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDasboard;
