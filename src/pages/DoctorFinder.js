import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const DoctorFinder = () => {
  const navigate = useNavigate();

  const onTreatmentIconClick = useCallback(() => {
    navigate("/find-treatment");
  }, [navigate]);

  const onPatientIconClick = useCallback(() => {
    navigate("/doctor-finder");
  }, [navigate]);

  const onFacilityIconClick = useCallback(() => {
    navigate("/facility-lookup");
  }, [navigate]);


  return (
    <div className="relative w-full h-[1159px] text-left text-base text-black-200 font-lato">
      <div className="absolute top-[0px] left-[2px] bg-white w-[1440px] h-[1159px] overflow-hidden">
        <div className="absolute bottom-[0px] left-[1011px] flex flex-row items-start justify-start gap-[48px]">
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
        <div className="absolute bottom-[1px] left-[8px] tracking-[0.01em] leading-[20px] capitalize">{`© 2022 Tap2Doc. All Rights Reserved.. `}</div>
        <div className="absolute w-[10.76%] right-[0.63%] bottom-[4px] left-[88.61%] h-5">
          <img
            className="absolute w-[9.03%] right-[0%] bottom-[5.35px] left-[90.97%] max-w-full overflow-hidden h-[8.65px]"
            alt=""
            src="../uparrow.svg"
          />
          <div className="absolute bottom-[0px] left-[0px] tracking-[0.01em] leading-[20px] capitalize">{`Support & resources`}</div>
        </div>
      </div>
      <div className="absolute top-[23px] left-[0px] w-[1443px] h-[1068px] text-center text-5xl text-gray-200 font-text-xs-regular">
        <div className="absolute top-[218px] left-[22px] w-[50px] h-[50px]" />
        <img
          className="absolute top-[0px] left-[53px] w-50 h-[61px] object-cover"
          alt=""
          src="../logo.png"
        />
        <img
          className="absolute top-[1px] left-[1340px] w-[78px] h-[60px] object-cover"
          alt=""
          src="../signinLogo.png"
        />
        <div className="absolute top-[392px] left-[427px] w-[589px] h-[145px] text-left text-6xl text-midnightblue-300 font-playfair-display">
          <div className="absolute top-[0px] left-[185px] leading-[31.5px] font-semibold inline-block w-[219px]">
            Doctor Needed
          </div>
          <div className="absolute top-[49px] left-[0px] w-[533.76px] h-24 text-center text-3xl text-darkgray-200 font-text-xs-regular">
            <div className="absolute top-[11.52px] left-[0px] rounded-base bg-aliceblue-100 w-[533.76px] h-[72.96px]" />
            <img
              className="absolute h-[34.38%] w-[6.33%] top-[23.16%] right-[87.55%] bottom-[42.47%] left-[6.12%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../searchicon2.svg"
            />
            <b className="absolute top-[0px] left-[103.68px] leading-[50px] flex items-center justify-center w-[113.28px] h-24">
              Search here
            </b>
          </div>
          <img
            className="absolute top-[74px] left-[539px] w-[50px] h-[50px]"
            alt=""
            src="../Location.svg"
          />
        </div>
        <img
          className="absolute top-[495px] left-[1399px] w-[41px] h-[103px] overflow-hidden opacity-[0.5]"
          alt=""
          src="../chat.svg"
        />
        <div className="absolute top-[15px] left-[585px] tracking-[-0.02em] leading-[32px] font-semibold inline-block w-[138px]">
          Menu
        </div>
        <div className="absolute top-[15px] left-[718px] tracking-[-0.02em] leading-[32px] font-semibold inline-block w-[138px]">
          Ask our bot
        </div>
        <div className="absolute top-[119px] left-[calc(50%_-_721.5px)] w-[1440px] flex flex-row py-7 px-16 box-border items-center justify-between text-left text-sm text-black-200 font-montserrat">
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <img
              className="relative w-[50px] h-[50px] shrink-0"
              alt=""
              src="../dermatology.svg"
            />
            <div className="relative font-semibold">{`Dermatology `}</div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <img
              className="relative w-[50px] h-[50px] shrink-0"
              alt=""
              src="../orthopedic.svg"
            />
            <div className="relative font-semibold">{`Ortho `}</div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <img
              className="relative w-[50px] h-[50px] shrink-0"
              alt=""
              src="../neurology.svg"
            />
            <div className="relative font-semibold">Neurology</div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <img
              className="relative w-[50px] h-[50px] shrink-0"
              alt=""
              src="../consspine.svg"
            />
            <div className="relative font-semibold">{`Thoracic surgery `}</div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <img
              className="relative w-[50px] h-[50px] shrink-0"
              alt=""
              src="../surology.svg"
            />
            <div className="relative font-semibold">surology</div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <img
              className="relative w-[50px] h-[50px] shrink-0"
              alt=""
              src="../surgery.svg"
            />
            <div className="relative font-semibold">Vascular surgery</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px] text-black-800">
            <img
              className="relative rounded-3xl w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="../arrow1.svg"
            />
            <div className="rounded-lg bg-white box-border h-12 flex flex-row p-2 items-center justify-start gap-[8px] border-[1px] border-solid border-black-200">
              <img
                className="relative w-4 h-4 shrink-0 overflow-hidden"
                alt=""
                src="../filter.svg"
              />
              <div className="relative font-semibold">Filters</div>
            </div>
            <img
              className="relative w-5 h-[21px] shrink-0"
              alt=""
              src="../alerticon.svg"
            />
          </div>
        </div>
        <div className="absolute top-[653px] left-[152px] rounded-base bg-honeydew w-[1247px] h-[395px] overflow-hidden text-lg text-black-200 font-kadwa">
          <b className="absolute top-[132px] left-[71px] text-8xl tracking-[0.06em] leading-[125.5%] inline-block font-radio-canada text-darkslateblue text-left w-[257px] h-[127px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`Most `}</p>
            <p className="m-0">Searched</p>
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
        
      </div>
    </div>
  );
};

export default DoctorFinder;
