import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FacilityLookup = () => {
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
  return (
    <div className="relative bg-white w-full h-[1249px] text-center text-5xl text-gray-200 font-text-xs-regular">
      <div className="absolute top-[218px] left-[22px] w-[50px] h-[50px]" />
      
      <img
        className="absolute top-[1px] left-[1340px] w-[78px] h-[60px] object-cover"
        alt=""
        src="../signinLogo.png"
      />
      <div className="absolute top-[281px] left-[211px] w-[589px] h-36 text-left text-6xl text-midnightblue-300 font-playfair-display">
        <div className="absolute top-[0px] left-[33px] leading-[31.5px] font-semibold inline-block w-[227px]">
          Facility Needed
        </div>
        <div className="absolute top-[48px] left-[0px] w-[533.76px] h-24 text-center text-3xl text-darkgray-200 font-text-xs-regular">
          <div className="absolute top-[11.52px] left-[0px] rounded-base bg-aliceblue-100 w-[533.76px] h-[72.96px]" />
          <img
            className="absolute h-[40.2%] w-[6.33%] top-[34.38%] right-[89.17%] bottom-[25.42%] left-[4.5%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../searchicon2.svg"
          />
          <b className="absolute top-[0px] left-[103.68px] leading-[50px] flex items-center justify-center w-[113.28px] h-24">
            Search here
          </b>
        </div>
        <img
          className="absolute top-[73px] left-[539px] w-[50px] h-[50px]"
          alt=""
          src="../Location.svg"
        />
      </div>
      <div className="absolute top-[15px] left-[585px] tracking-[-0.02em] leading-[32px] font-semibold inline-block w-[138px]">
        Menu
      </div>
      <div className="absolute top-[15px] left-[718px] tracking-[-0.02em] leading-[32px] font-semibold inline-block w-[138px]">
        Ask our bot
      </div>
      <iframe
        className="[border:none] absolute top-[73px] left-[882px] w-[561px] h-[711px] overflow-auto"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.55242954148!2d77.49050999664321!3d12.95429441351403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1676694933465!5m2!1sen!2sin"
      />
     
      <img
        className="absolute top-[316px] left-[842px] w-[41px] h-[103px] overflow-hidden opacity-[0.5]"
        alt=""
        src="../chat.svg"
      />
      <div className="absolute top-[809px] left-[168px] rounded-base bg-honeydew w-[1247px] h-[395px] overflow-hidden text-lg text-black-200 font-kadwa">
        <b className="absolute top-[132px] left-[71px] text-8xl tracking-[0.06em] leading-[125.5%] inline-block font-radio-canada text-darkslateblue text-left w-[257px] h-[127px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`Popular `}</p>
          <p className="m-0">Facility</p>
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
    </div>
  );
};

export default FacilityLookup;
