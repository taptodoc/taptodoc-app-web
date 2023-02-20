import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SymtomChecker4 = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/symtom-checker3");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-black-200 font-normal11">
      <div className="absolute top-[237px] left-[160px] rounded-xxs bg-lavender w-[1120px] h-[676px]" />
      <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_2px_20px_rgba(0,_0,_0,_0.25)] w-[1440px] flex flex-row py-3 pr-[60px] pl-[22px] box-border items-start justify-start gap-[411px] font-roboto">
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
      <div className="absolute top-[278px] left-[203px] rounded-2xxs [background:linear-gradient(#2934ff,_#2934ff),_#7b7b7b] w-[842px] h-[15px]" />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[831px] left-[198px] w-[150px] h-[50px] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1]"
        onClick={onGroupButtonClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-2xxs bg-midnightblue-100 w-[150px] h-[50px]" />
        <div className="absolute top-[7px] left-[27px] text-5xl tracking-[-0.02em] leading-[150%] font-extrabold font-normal11 text-white text-center">
          Previous
        </div>
        
      </button>
      <div className="absolute top-[432px] left-[216px] leading-[15px] font-semibold text-gainsboro-200 text-center">
        Type your symptoms here
      </div>
      <div className="absolute top-[371px] left-[208px] rounded-xxs bg-aliceblue-200 w-[382px] h-[408px]" />
      <div className="absolute top-[419px] left-[237px] leading-[15px] font-semibold text-center">
        Symptoms added
      </div>
      <div className="absolute top-[514px] left-[237px] text-base leading-[15px] font-extrabold text-center">
        Knee pain
      </div>
      <img
        className="absolute top-[515px] left-[513px] w-5 h-5"
        alt=""
        src="../icrounddelete.svg"
      />
      <div className="absolute top-[838px] left-[1102px] w-[150px] h-[50px] text-center text-5xl text-white">
        <div className="absolute top-[0px] left-[0px] rounded-2xxs bg-midnightblue-100 w-[150px] h-[50px]" />
        <div className="absolute top-[7px] left-[49px] tracking-[-0.02em] leading-[150%] font-extrabold">
          Next
        </div>
        
      </div>
      <div className="absolute top-[373px] left-[645px] rounded-2xxs bg-aliceblue-200 w-[519px] h-[402px]" />
      <div className="absolute top-[405px] left-[684px] text-5xl tracking-[-0.02em] leading-[150%] font-extrabold">
        Possible cause found
      </div>
      <div className="absolute top-[492px] left-[683px] bg-gainsboro-200 w-[438px] h-[42px]" />
      <div className="absolute top-[545px] left-[683px] bg-gainsboro-200 w-[438px] h-[42px]" />
      <div className="absolute top-[599px] left-[683px] bg-gainsboro-200 w-[438px] h-[42px]" />
      <div className="absolute top-[652px] left-[683px] bg-gainsboro-200 w-[438px] h-[42px]" />
      <div className="absolute top-[706px] left-[683px] bg-gainsboro-200 w-[438px] h-[42px]" />
      <img
        className="absolute top-[450px] left-[683px] w-6 h-6"
        alt=""
        src="../flag.svg"
      />
      <img
        className="absolute top-[503px] left-[1090px] w-6 h-6"
        alt=""
        src="../flag.svg"
      />
      <img
        className="absolute top-[661px] left-[1090px] w-6 h-6"
        alt=""
        src="../flag.svg"
      />
      <b className="absolute top-[453px] left-[720px] text-xs tracking-[-0.02em] leading-[150%]">
        More the flag severe is the cause
      </b>
      <img
        className="absolute top-[461px] left-[1399px] w-[41px] h-[103px] overflow-hidden opacity-[0.5]"
        alt=""
        src="../chat.svg"
      />
      <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] bg-white h-[25px] flex flex-row items-end justify-center gap-[393px] text-base font-lato">
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
    </div>
  );
};

export default SymtomChecker4;
