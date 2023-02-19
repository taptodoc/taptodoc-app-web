import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FindTreatment = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-gray-100 w-full h-[1092px] text-left text-5xl text-black-200 font-montserrat">
      <div className="absolute top-[218px] left-[22px] w-[50px] h-[50px]" />
      <img
        className="absolute top-[1px] left-[1340px] w-[78px] h-[60px] object-cover"
        alt=""
        src="../image-14@2x.png"
      />
      <div className="absolute top-[407px] left-[413px] w-[617px] h-[150px] text-6xl text-midnightblue-300">
        <div className="absolute top-[0px] left-[150px] leading-[31.5px] font-semibold inline-block w-[318px]">
          Treatment Needed
        </div>
        <div className="absolute top-[54px] left-[0px] w-[533.76px] h-24 text-center text-3xl text-darkgray-200 font-text-xs-regular">
          <div className="absolute top-[11.52px] left-[0px] rounded-base bg-aliceblue-100 w-[533.76px] h-[72.96px]" />
          <img
            className="absolute h-[35.15%] w-[6.33%] top-[34%] right-[87.55%] bottom-[30.85%] left-[6.12%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector8.svg"
          />
          <b className="absolute top-[0px] left-[103.68px] leading-[50px] flex items-center justify-center w-[113.28px] h-24">
            Search here
          </b>
        </div>
        <img
          className="absolute top-[74px] left-[567px] w-[50px] h-[50px]"
          alt=""
          src="../materialsymbolslocationonrounded1.svg"
        />
      </div>
      <img
        className="absolute top-[495px] left-[1399px] w-[41px] h-[103px] overflow-hidden opacity-[0.5]"
        alt=""
        src="../frame-296.svg"
      />
      <div className="absolute top-[15px] left-[585px] tracking-[-0.02em] leading-[32px] font-semibold font-text-xs-regular text-gray-200 text-center inline-block w-[138px]">
        Menu
      </div>
      <div className="absolute top-[15px] left-[718px] tracking-[-0.02em] leading-[32px] font-semibold font-text-xs-regular text-gray-200 text-center inline-block w-[138px]">
        Ask our bot
      </div>
      <div className="absolute top-[119px] left-[calc(50%_-_721.5px)] w-[1440px] flex flex-row py-7 px-16 box-border items-center justify-between text-sm">
        <div className="flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-[37.86px] h-[49.85px] shrink-0"
            alt=""
            src="../vector9.svg"
          />
          <div className="relative font-semibold">Labor</div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-[50px] h-[50px] shrink-0"
            alt=""
            src="../healthiconsdiarrhea.svg"
          />
          <div className="relative font-semibold">Diarrhea</div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-[50.19px] h-[50px] shrink-0"
            alt=""
            src="../group-13995.svg"
          />
          <div className="relative font-semibold">Back Pain</div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-[50px] h-[50px] shrink-0"
            alt=""
            src="../gameiconsstomach.svg"
          />
          <div className="relative font-semibold">Stomach ache</div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-[50px] h-[50px] shrink-0"
            alt=""
            src="../mdidiabetes.svg"
          />
          <div className="relative font-semibold">Diabates</div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-[50px] h-[50px] shrink-0"
            alt=""
            src="../mdifever.svg"
          />
          <div className="relative font-semibold">Fever</div>
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
              src="../frame1.svg"
            />
            <div className="relative font-semibold">Filters</div>
          </div>
          <img
            className="relative w-5 h-[21px] shrink-0"
            alt=""
            src="../vector5.svg"
          />
        </div>
      </div>
      <div className="absolute top-[670px] left-[152px] rounded-base bg-honeydew w-[1247px] h-[395px] overflow-hidden text-center text-lg font-kadwa">
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
            src="../group-139771.svg"
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
            src="../group-139752.svg"
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
            src="../group-139742.svg"
          />
        </div>
        <div className="absolute top-[178px] left-[1185px] rounded-base bg-black-black-50 w-10 h-10 overflow-hidden flex flex-row p-2.5 box-border items-center justify-center">
          <img
            className="relative w-7 h-7 shrink-0 overflow-hidden"
            alt=""
            src="../chevron-right2.svg"
          />
        </div>
      </div>
      <div className="absolute w-[99.79%] right-[0.21%] bottom-[0px] left-[0%] bg-white h-[25px] flex flex-row items-end justify-center gap-[393px] text-base font-lato">
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
      <img
        className="absolute top-[263px] left-[-3px] w-[137px] h-[572px]"
        alt=""
        src="../group-10000008042.svg"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[20px] left-[22px] w-[176.41px] h-10 bg-[url(../public/logo@2x.png)] bg-cover bg-no-repeat bg-[top]"
        onClick={onLogoClick}
      />
    </div>
  );
};

export default FindTreatment;
