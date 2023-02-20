import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SymptomChecker = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTreatmentIconClick = useCallback(() => {
    navigate("/find-treatment");
  }, [navigate]);

  const onPatientIconClick = useCallback(() => {
    navigate("/doctor-finder");
  }, [navigate]);

  const onFacilityIconClick = useCallback(() => {
    navigate("/facility-lookup");
  }, [navigate]);

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

  const onSearch1Click = useCallback(() => {
    navigate("/symtom-checker1");
  }, [navigate]);

  return (
    <div className="relative bg-gray-100 w-full h-[1325px] text-center text-5xl text-black-200 font-text-xs-regular">
      <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[1325px] overflow-hidden text-gray-200">
        
        <img
          className="absolute top-[495px] left-[1399px] w-[41px] h-[103px] overflow-hidden opacity-[0.5]"
          alt=""
          src="../chat.svg"
        />
        <div className="absolute w-[11.81%] top-[24px] right-[1.39%] left-[86.81%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-16 overflow-hidden text-white font-radio-canada">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[999px] bg-black" />
          </div>
          <b className="absolute h-[calc(100%_-_16px)] w-[calc(100%_-_32px)] top-[8px] left-[16px] tracking-[0.25px] leading-[36px] flex items-center justify-center [text-shadow:0px_2px_4px_rgba(38,_50,_56,_0.16),_0px_4px_8px_rgba(38,_50,_56,_0.08)]">
            Sign In
          </b>
          
        </div>
        <img
          className="absolute h-[26.82%] w-[2.92%] top-[34.25%] right-[94.01%] bottom-[38.92%] left-[3.07%] max-w-full overflow-hidden max-h-full"
          alt=""
        />
        <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] bg-white h-[25px] flex flex-row items-end justify-center gap-[393px] text-left text-base text-black-200 font-lato">
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
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[24px] left-[9px] w-[176.41px] h-10 bg-[url(../public/logo.png)] bg-cover bg-no-repeat bg-[top]"
          onClick={onLogoClick}
        />
        <div className="absolute top-[400px] left-[113px] rounded-t-xxs rounded-b-none bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[564px] h-[129px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[495px] left-[34px] w-[47px] h-[341px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[2px] w-10 h-[42px] bg-[url(../public/treatmenticon.png)] bg-cover bg-no-repeat bg-[top] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1]"
            onClick={onTreatmentIconClick}
          />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[142px] left-[0px] w-[42px] h-[43px] bg-[url(../public/patienticon.png)] bg-cover bg-no-repeat bg-[top] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1]"
            onClick={onPatientIconClick}
          />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[296px] left-[4px] w-[43px] h-[45px] bg-[url(../public/facilityicon.png)] bg-cover bg-no-repeat bg-[top] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1]"
            onClick={onFacilityIconClick}
          />
        </div>
        <img
          className="absolute top-[160px] left-[1363px] w-[82px] h-[82px] object-cover"
          alt=""
          src="../notificationicon.png"
        />
        <div className="absolute top-[681.5px] left-[442.5px] rounded-base bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[589px] h-[60px] border-[0.5px] border-solid border-black-black-50">
          <input
            className="[border:none] font-semibold font-normal11 text-xl bg-[transparent] absolute top-[21px] left-[28px] leading-[15px] text-darkslategray text-right inline-block w-[92px] h-[18px]"
            type="text"
            placeholder="Your Query"
          />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[5px] left-[539px] w-[49px] h-[49px] bg-[url(../public/searchicon.png)] bg-cover bg-no-repeat bg-[top] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
            onClick={onSearch1Click}
            data-animate-on-scroll
          />
        </div>
        <div className="absolute top-[42px] left-[585px] tracking-[-0.02em] leading-[32px] font-semibold inline-block w-[138px]">
          Menu
        </div>
        <div className="absolute top-[42px] left-[718px] tracking-[-0.02em] leading-[32px] font-semibold inline-block w-[138px]">
          Ask our bot
        </div>
      </div>
      <div className="absolute top-[833px] left-[151px] rounded-base bg-honeydew w-[1247px] h-[395px] overflow-hidden text-lg font-kadwa">
        <b className="absolute top-[157px] left-[117px] text-8xl tracking-[0.06em] leading-[125.5%] inline-block font-radio-canada text-darkslateblue text-left w-[233px] h-[50px]">
          Reviews
        </b>
        <div className="absolute top-[83px] left-[410px] w-[214px] h-[229px]">
          <div className="absolute top-[0px] left-[0px] rounded-2xxs bg-white w-[214px] h-[229px]" />
          <b className="absolute top-[30px] left-[113px] tracking-[0.06em] leading-[125.5%]">
            Name
          </b>
          <img
            className="absolute top-[12px] left-[8px] w-[74.68px] h-20"
            alt=""
            src="../mostSearchedicon-2.svg"
          />
        </div>
        <div className="absolute top-[83px] left-[684px] w-[214px] h-[229px]">
          <div className="absolute top-[0px] left-[0px] rounded-2xxs bg-aliceblue-200 w-[214px] h-[229px]" />
          <b className="absolute top-[35px] left-[114px] tracking-[0.06em] leading-[125.5%]">
            Name
          </b>
          <img
            className="absolute top-[12px] left-[9px] w-[74.68px] h-[79.56px]"
            alt=""
            src="../mostSearchedicon-1.svg"
          />
        </div>
        <div className="absolute top-[83px] left-[943px] w-[214px] h-[229px]">
          <div className="absolute top-[0px] left-[0px] rounded-2xxs bg-white w-[214px] h-[229px]" />
          <div className="absolute top-[0px] left-[0px] rounded-2xxs bg-white w-[214px] h-[229px]" />
          <b className="absolute top-[35px] left-[121px] tracking-[0.06em] leading-[125.5%]">
            Name
          </b>
          <img
            className="absolute top-[12px] left-[7px] w-[74.68px] h-[79.56px]"
            alt=""
            src="../mostSearchedicon-1.svg"
          />
        </div>
        <div className="absolute top-[178px] left-[1185px] rounded-base bg-black-black-50 w-10 h-10 overflow-hidden flex flex-row p-2.5 box-border items-center justify-center">
          <img
            className="relative w-7 h-7 shrink-0 overflow-hidden"
            alt=""
            src="../sidearrow.svg"
          />
        </div>
      </div>
      <div className="absolute top-[164px] left-[169px] w-[1166px] h-[463px] text-right text-9xl font-normal11">
        <div className="absolute top-[0px] left-[0px] rounded-xxs bg-aliceblue-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1166px] h-[463px]" />
        <div className="absolute top-[107px] left-[48px] leading-[84px] font-extrabold">
          Find Your
        </div>
        <div className="absolute top-[202px] left-[41px] leading-[84px] font-black">
          Doctor
        </div>
        <img
          className="absolute top-[26px] left-[595px] w-[530px] h-[385px] object-cover"
          alt=""
          src="../patient-1.png"
        />
      </div>
    </div>
  );
};

export default SymptomChecker;
