import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Doctor = () => {
  const navigate = useNavigate();

  const onAsset21Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/doctor-dasboard");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-right text-base text-black-200 font-normal11">
      <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_2px_20px_rgba(0,_0,_0,_0.25)] w-[1440px] flex flex-row py-3 pr-[60px] pl-[22px] box-border items-start justify-start gap-[1122px]">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[176.41px] h-10 shrink-0 bg-[url(../public/logo@2x.png)] bg-cover bg-no-repeat bg-[top]"
          onClick={onAsset21Click}
        />
        <div className="rounded-small box-border w-[101px] h-[47px] shrink-0 overflow-hidden flex flex-row py-[5px] pr-[17px] pl-2.5 items-center justify-start gap-[11px] border-[1px] border-solid border-darkgray-100">
          <img
            className="relative w-[30px] h-[30px] shrink-0 overflow-hidden"
            alt=""
            src="../menu.svg"
          />
          <img
            className="relative w-[39.47px] h-[30px] shrink-0 object-cover"
            alt=""
            src="../image-142@2x.png"
          />
        </div>
      </div>
      <img
        className="absolute top-[409px] left-[1399px] w-[41px] h-[103px] overflow-hidden opacity-[0.5]"
        alt=""
        src="../frame-296.svg"
      />
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
            src="../twitter2.svg"
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
      <div className="absolute top-[280px] left-[137px] w-[1166px] h-[463px] text-9xl">
        <div className="absolute top-[0px] left-[0px] rounded-xxs bg-aliceblue-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1166px] h-[463px]" />
        <div className="absolute top-[77px] left-[38px] leading-[84px] font-black">
          Find Your
        </div>
        <div className="absolute top-[157px] left-[38px] leading-[84px] font-black">
          Patient
        </div>
        <img
          className="absolute top-[24px] left-[581px] w-[530px] h-[385px] object-cover"
          alt=""
          src="../patient-1@2x.png"
        />
      </div>
      <div className="absolute top-[150.5px] left-[405.5px] rounded-base bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[589px] h-[60px] border-[0.5px] border-solid border-black-black-50">
        <input
          className="[border:none] font-semibold font-normal11 text-xl bg-[transparent] absolute top-[21px] left-[28px] leading-[15px] text-darkslategray text-right inline-block w-[92px] h-[18px]"
          type="text"
        />
        <img
          className="absolute top-[5px] left-[534px] w-[49px] h-[49px]"
          alt=""
          src="../group-1000000813.svg"
        />
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-midnightblue-100 absolute top-[823px] left-[573px] rounded-xxs w-[294px] h-[88px] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1]"
        onClick={onRectangleButtonClick}
      />
      <div className="absolute top-[862px] left-[683px] text-xl leading-[15px] font-extrabold text-white">
        Find Now
      </div>
    </div>
  );
};

export default Doctor;
