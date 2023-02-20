import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SymtomChecker3 = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/symtom-checker2");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/symtomchecker4");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-center text-base text-black-200 font-text-xs-regular">
      <div className="absolute top-[237px] left-[160px] rounded-xxs bg-lavender w-[1120px] h-[676px]" />
      <div className="absolute top-[440px] left-[660px] rounded-2xxs bg-white w-[472px] h-[332px]" />
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
            className="rounded-xxl w-10 h-10 shrink-0 overflow-hidden object-cover"
            alt=""
            src="../searchicon1.png"
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
      <div className="absolute top-[278px] left-[203px] rounded-2xxs [background:linear-gradient(#fff,_#fff),_#7b7b7b] w-[1033px] h-[15px]" />
      <div className="absolute top-[278px] left-[203px] rounded-2xxs [background:linear-gradient(#2934ff,_#2934ff),_#7b7b7b] w-[616px] h-[15px]" />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[831px] left-[198px] w-[150px] h-[50px] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1]"
        onClick={onGroupButtonClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-2xxs bg-midnightblue-100 w-[150px] h-[50px]" />
        <div className="absolute top-[7px] left-[27px] text-5xl tracking-[-0.02em] leading-[150%] font-extrabold font-normal11 text-white text-center">
          Previous
        </div>
        
      </button>
      <div className="absolute top-[432px] left-[216px] text-xl leading-[15px] font-semibold font-normal11 text-gainsboro-200">
        Type your symptoms here
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[838px] left-[1102px] w-[150px] h-[50px] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1]"
        onClick={onGroupButton1Click}
      >
        <div className="absolute top-[0px] left-[0px] rounded-2xxs bg-midnightblue-100 w-[150px] h-[50px]" />
        <div className="absolute top-[7px] left-[49px] text-5xl tracking-[-0.02em] leading-[150%] font-extrabold font-normal11 text-white text-center">
          Next
        </div>
        <img
          className="absolute h-[24%] w-[4%] top-[38%] right-[6%] bottom-[38%] left-[90%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../uparrow.svg"
        />
      </button>
      <b className="absolute top-[456px] left-[680px] tracking-[0.25px] leading-[36px] flex font-montserrat items-center justify-center w-[100px] h-[46px]">
        How often
      </b>
      <b className="absolute top-[507px] left-[681px] tracking-[0.25px] leading-[36px] flex font-montserrat items-center justify-center w-[97px] h-[45px]">
        How Long
      </b>
      <b className="absolute top-[576px] left-[691px] tracking-[0.25px] leading-[18px] flex font-montserrat text-left items-center w-[120px] h-[46px]">
        <span className="[line-break:anywhere] w-full">
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`How do feel `}</p>
          <p className="m-0">recently</p>
        </span>
      </b>
      <b className="absolute top-[626px] left-[678px] tracking-[0.25px] leading-[36px] flex font-montserrat items-center justify-center w-[124px] h-[45px]">
        How distress
      </b>
      <div className="absolute top-[566px] left-[809px] rounded w-[455px] h-[61px] flex flex-row py-2 px-4 box-border items-center justify-start gap-[16px] text-right text-sm text-coolgray-500">
        <div className="relative leading-[16px] inline-block w-[72px] shrink-0">
          Worse or same
        </div>
        <div className="relative w-[152px] h-3 shrink-0">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-row py-0 px-2 box-border items-center justify-between">
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-500 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
          </div>
          <div className="absolute w-full top-[4px] right-[0px] left-[0px] rounded-2xxl bg-mediumspringgreen h-1" />
          <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_4px)] w-2 flex flex-row items-center justify-between">
            <img
              className="relative w-[22px] h-[26px] shrink-0"
              alt=""
              src="../slider.svg"
            />
          </div>
        </div>
        <div className="relative leading-[16px] text-coolgray-700 text-left inline-block w-[72px] shrink-0">
          0
        </div>
      </div>
      <div className="absolute top-[512px] left-[809px] rounded w-[455px] h-10 flex flex-row py-2 px-4 box-border items-center justify-start gap-[16px] text-right text-sm text-coolgray-500">
        <div className="relative leading-[16px] inline-block w-[72px] shrink-0">
          Duration
        </div>
        <div className="relative w-[152px] h-3 shrink-0">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-row py-0 px-2 box-border items-center justify-between">
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-500 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
          </div>
          <div className="absolute w-full top-[4px] right-[0px] left-[0px] rounded-2xxl bg-mediumspringgreen h-1" />
          <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_4px)] w-2 flex flex-row items-center justify-between">
            <img
              className="relative w-[22px] h-[26px] shrink-0"
              alt=""
              src="../slider.svg"
            />
          </div>
        </div>
        <div className="relative leading-[16px] text-coolgray-700 text-left inline-block w-[72px] shrink-0">
          0
        </div>
      </div>
      <div className="absolute top-[457px] left-[809px] rounded w-[455px] h-[41px] flex flex-row py-2 px-4 box-border items-center justify-start gap-[16px] text-right text-sm text-coolgray-500">
        <div className="relative leading-[16px] inline-block w-[72px] shrink-0">
          In a day
        </div>
        <div className="relative w-[152px] h-3 shrink-0">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-row py-0 px-2 box-border items-center justify-between">
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-500 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
          </div>
          <div className="absolute w-full top-[4px] right-[0px] left-[0px] rounded-2xxl bg-mediumspringgreen h-1" />
          <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_4px)] w-2 flex flex-row items-center justify-between">
            <img
              className="relative w-[22px] h-[26px] shrink-0"
              alt=""
              src="../slider.svg"
            />
          </div>
        </div>
        <div className="relative leading-[16px] text-coolgray-700 text-left inline-block w-[72px] shrink-0">
          0
        </div>
      </div>
      <div className="absolute top-[621px] left-[809px] rounded w-[455px] h-[60px] flex flex-row py-2 px-4 box-border items-center justify-start gap-[16px] text-right text-sm text-coolgray-500">
        <div className="relative leading-[16px] inline-block w-[72px] shrink-0">
          Comfort level
        </div>
        <div className="relative w-[152px] h-3 shrink-0">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-row py-0 px-2 box-border items-center justify-between">
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-500 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
          </div>
          <div className="absolute w-full top-[4px] right-[0px] left-[0px] rounded-2xxl bg-mediumspringgreen h-1" />
          <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_4px)] w-2 flex flex-row items-center justify-between">
            <img
              className="relative w-[22px] h-[26px] shrink-0"
              alt=""
              src="../slider.svg"
            />
          </div>
        </div>
        <div className="relative leading-[16px] text-coolgray-700 text-left inline-block w-[72px] shrink-0">
          0
        </div>
      </div>
      <div className="absolute top-[681px] left-[809px] rounded w-[455px] h-[61px] flex flex-row py-2 px-4 box-border items-center justify-start gap-[16px] text-right text-sm text-coolgray-500">
        <div className="relative leading-[16px] inline-block w-[72px] shrink-0">
          Your condition
        </div>
        <div className="relative w-[152px] h-3 shrink-0">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-row py-0 px-2 box-border items-center justify-between">
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-500 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
            <div className="relative bg-coolgray-300 w-px h-0.5 shrink-0" />
          </div>
          <div className="absolute w-full top-[4px] right-[0px] left-[0px] rounded-2xxl bg-mediumspringgreen h-1" />
          <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_4px)] w-2 flex flex-row items-center justify-between">
            <img
              className="relative w-[22px] h-[26px] shrink-0"
              alt=""
              src="../slider.svg"
            />
          </div>
        </div>
        <div className="relative leading-[16px] text-coolgray-700 text-left inline-block w-[72px] shrink-0">
          0
        </div>
      </div>
      <div className="absolute w-full right-[0%] bottom-[1px] left-[0%] bg-white h-[25px] flex flex-row items-end justify-center gap-[393px] text-left font-lato">
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
          
          <div className="absolute bottom-[0px] left-[0px] tracking-[0.01em] leading-[20px] capitalize">{`Support & resources`}</div>
        </div>
      </div>
      <div className="absolute top-[371px] left-[calc(50%_-_522px)] rounded-xxs bg-honeydew w-[382px] h-[408px]" />
      <div className="absolute top-[418px] left-[216px] text-xl leading-[15px] font-semibold font-normal11">
        Symptoms added
      </div>
    </div>
  );
};

export default SymtomChecker3;
