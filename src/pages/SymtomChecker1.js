import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SymtomChecker1 = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/symtom-checker2");
  }, [navigate]);

  const onNextClick = useCallback(() => {
    navigate("/symtom-checker2");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-center text-7xl text-black-200 font-normal11">
      <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_2px_20px_rgba(0,_0,_0,_0.25)] w-[1440px] flex flex-row py-3 pr-[60px] pl-[22px] box-border items-start justify-start gap-[411px]">
        <img
          className="relative w-[176.41px] h-10 shrink-0 object-cover"
          alt=""
          src="../logo@2x.png"
        />
        <div className="rounded-large bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.08)] box-border w-[300px] h-[47px] shrink-0 overflow-hidden flex flex-row py-2.5 pr-[7px] pl-[15px] items-center justify-between border-[1px] border-solid border-gainsboro-100">
          <input
            className="[border:none] font-medium font-roboto text-xl bg-[transparent] relative text-black-200 text-left"
            type="text"
            placeholder="Enter the Disease"
            required
          />
          <div className="rounded-xxl bg-honeydew w-10 h-10 shrink-0 overflow-hidden flex flex-row p-2.5 box-border items-center justify-center">
            <img
              className="relative w-5 h-5 shrink-0 overflow-hidden"
              alt=""
              src="../search6.svg"
            />
          </div>
        </div>
        <div className="rounded-small box-border w-[101px] h-[47px] shrink-0 overflow-hidden flex flex-row py-[5px] pr-[17px] pl-2.5 items-center justify-start gap-[11px] border-[1px] border-solid border-darkgray-100">
          <img
            className="relative w-[30px] h-[30px] shrink-0 overflow-hidden"
            alt=""
            src="../menu7.svg"
          />
          <img
            className="relative w-[39.47px] h-[30px] shrink-0 object-cover"
            alt=""
            src="../image-142@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[244px] left-[160px] rounded-xxs bg-aliceblue-200 w-[1120px] h-[563px]" />
      <div className="absolute top-[278px] left-[203px] rounded-2xxs [background:linear-gradient(#fff,_#fff),_#7b7b7b] w-[1033px] h-[15px]" />
      <div className="absolute top-[278px] left-[203px] rounded-2xxs [background:linear-gradient(#2934ff,_#2934ff),_#7b7b7b] w-[73px] h-[15px]" />
      <div className="absolute top-[310px] left-[541px] leading-[84px] font-black flex items-center justify-center w-[359px] h-[37px]">
        Symptom Checker
      </div>
      <div className="absolute top-[387px] left-[566px] text-xl leading-[15px] font-semibold">
        This tool does not provide medical advice
      </div>
      <div className="absolute top-[513px] left-[501px] w-[439px] h-[181px] text-5xl">
        <div className="absolute top-[4px] left-[0px] tracking-[-0.02em] leading-[150%] font-extrabold">
          Age
        </div>
        <div className="absolute top-[0px] left-[59px] rounded-2xxs bg-white w-[59px] h-[43px]" />
        <div className="absolute top-[0px] left-[341px] rounded-2xxs bg-white w-[98px] h-[43px]" />
        <div className="absolute top-[0px] left-[224px] rounded-2xxs bg-white w-[98px] h-[43px]" />
        <div className="absolute top-[4px] left-[245px] tracking-[-0.02em] leading-[150%] font-extrabold">
          Male
        </div>
        <div className="absolute top-[4px] left-[349px] tracking-[-0.02em] leading-[150%] font-extrabold">
          Female
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-midnightblue-100 absolute top-[131px] left-[144px] rounded-2xxs w-[150px] h-[50px] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1]"
          onClick={onRectangleButtonClick}
        />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[138px] left-[193px] text-5xl tracking-[-0.02em] leading-[150%] font-extrabold font-normal11 text-white text-center inline-block"
          onClick={onNextClick}
        >
          Next
        </button>
      </div>
      <img
        className="absolute h-[1.17%] w-[0.42%] top-[64.75%] right-[45.42%] bottom-[34.08%] left-[54.17%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../vector18.svg"
      />
      <img
        className="absolute top-[461px] left-[1400px] w-[41px] h-[103px] overflow-hidden opacity-[0.5]"
        alt=""
        src="../frame-2908.svg"
      />
      <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] bg-white h-[25px] flex flex-row items-end justify-center gap-[393px] text-left text-base font-lato">
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
            src="../insta10.svg"
          />
          <img
            className="relative w-6 h-6 shrink-0 overflow-hidden"
            alt=""
            src="../linkedin.svg"
          />
          <img
            className="relative w-6 h-6 shrink-0 overflow-hidden"
            alt=""
            src="../twitter10.svg"
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

export default SymtomChecker1;
