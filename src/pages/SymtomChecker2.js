import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SymtomChecker2 = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/symtom-checker3");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/symtom-checker1");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-center text-base text-black-200 font-normal11">
      <div className="absolute w-full top-[0px] right-[0%] left-[0%] bg-white shadow-[0px_2px_20px_rgba(0,_0,_0,_0.25)] flex flex-row py-3 pr-[60px] pl-[22px] box-border items-start justify-start gap-[411px]">
        <img
          className="relative w-[176.41px] h-10 shrink-0 object-cover"
          alt=""
          src="../logo@2x.png"
        />
        <div className="rounded-large bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.08)] box-border w-[300px] h-[47px] shrink-0 overflow-hidden flex flex-row py-2.5 pr-[7px] pl-[15px] items-center justify-between border-[1px] border-solid border-gainsboro-100">
          <input
            className="[border:none] font-medium font-roboto text-xl bg-[transparent] relative text-black-200 text-left"
            type="text"
            placeholder="Enter the disease"
            required
          />
          <img
            className="rounded-xxl w-10 h-10 shrink-0 overflow-hidden object-cover"
            alt=""
            src="../frame-11@2x.png"
          />
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
      <div className="absolute top-[237px] left-[160px] rounded-xxs bg-aliceblue-200 w-[1120px] h-[676px]" />
      <div className="absolute top-[349px] left-[203px] text-5xl tracking-[-0.02em] leading-[150%] font-extrabold">
        What are your symptoms?
      </div>
      <div className="absolute top-[278px] left-[203px] rounded-2xxs [background:linear-gradient(#fff,_#fff),_#7b7b7b] w-[1033px] h-[15px]" />
      <div className="absolute top-[278px] left-[203px] rounded-2xxs [background:linear-gradient(#2934ff,_#2934ff),_#7b7b7b] w-[286px] h-[15px]" />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[837px] left-[1086px] w-[150px] h-[50px] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1]"
        onClick={onGroupButtonClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-2xxs bg-midnightblue-100 w-[150px] h-[50px]" />
        <div className="absolute top-[7px] left-[49px] text-5xl tracking-[-0.02em] leading-[150%] font-extrabold font-normal11 text-white text-center">
          Next
        </div>
        <img
          className="absolute h-[24%] w-[4%] top-[38%] right-[6%] bottom-[38%] left-[90%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector18.svg"
        />
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[831px] left-[198px] w-[150px] h-[50px] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1]"
        onClick={onGroupButton1Click}
      >
        <div className="absolute top-[0px] left-[0px] rounded-2xxs bg-midnightblue-100 w-[150px] h-[50px]" />
        <div className="absolute top-[7px] left-[27px] text-5xl tracking-[-0.02em] leading-[150%] font-extrabold font-normal11 text-white text-center">
          Previous
        </div>
        <img
          className="absolute h-[24%] w-[4%] top-[38%] right-[92.67%] bottom-[38%] left-[3.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector17.svg"
        />
      </button>
      <input
        className="[border:none] bg-white absolute top-[410px] left-[203px] rounded-2xxs w-[450px] h-[60px]"
        type="text"
        placeholder="Type your symptoms here"
      />
      <div className="absolute top-[498px] left-[208px] rounded-xxs bg-aliceblue-200 w-[445px] h-[313px]" />
      <div className="absolute top-[526px] left-[237px] text-xl leading-[15px] font-semibold">
        Symptoms added
      </div>
      <img
        className="absolute top-[370px] left-[1192px] w-11 h-[95px]"
        alt=""
        src="../group-1000000839.svg"
      />
      <div className="absolute top-[605px] left-[237px] leading-[15px] font-extrabold">
        Knee pain
      </div>
      <img
        className="absolute top-[605px] left-[513px] w-5 h-5"
        alt=""
        src="../icrounddelete.svg"
      />
      <img
        className="absolute top-[461px] left-[1400px] w-[41px] h-[103px] overflow-hidden opacity-[0.5]"
        alt=""
        src="../frame-2908.svg"
      />
      <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] bg-white h-[25px] flex flex-row items-end justify-center gap-[393px] text-left font-lato">
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
            src="../insta11.svg"
          />
          <img
            className="relative w-6 h-6 shrink-0 overflow-hidden"
            alt=""
            src="../linkedin.svg"
          />
          <img
            className="relative w-6 h-6 shrink-0 overflow-hidden"
            alt=""
            src="../twitter11.svg"
          />
        </div>
        <div className="relative w-[155px] h-5 shrink-0">
          <img
            className="absolute w-[9.03%] right-[0%] bottom-[5.35px] left-[90.97%] max-w-full overflow-hidden h-[8.64px]"
            alt=""
            src="../vector1.svg"
          />
          <div className="absolute bottom-[0px] left-[0px] tracking-[0.01em] leading-[20px] capitalize">{`Support & resources`}</div>
        </div>
      </div>
      <img
        className="absolute top-[300px] left-[728px] w-[252.07px] h-[556px] object-cover"
        alt=""
        src="../humanbody@2x.png"
      />
    </div>
  );
};

export default SymtomChecker2;
