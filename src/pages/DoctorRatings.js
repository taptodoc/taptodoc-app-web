const DoctorRatings = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-base text-black-200 font-be-vietnam-pro">
      <img
        className="absolute top-[71px] left-[787px] w-[651px] h-[889px] object-cover"
        alt=""
        src="../mapsicle-map@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_2px_20px_rgba(0,_0,_0,_0.25)] w-[1440px] flex flex-row py-3 pr-[60px] pl-[22px] box-border items-start justify-start gap-[411px] text-xl font-roboto">
        <img
          className="relative w-[176.41px] h-10 shrink-0 object-cover"
          alt=""
          src="../logo@2x.png"
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
            src="../image-142@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[173px] left-[62px] flex flex-row items-start justify-start gap-[4px] text-lg font-roboto">
        <div className="rounded-xxs bg-white flex flex-row py-[9px] px-[13px] items-center justify-center border-[1px] border-solid border-darkgray-100">
          <div className="relative">Rating</div>
        </div>
        <div className="rounded-xxs bg-whitesmoke-200 flex flex-row py-[9px] px-[13px] items-center justify-start border-[1px] border-solid border-black-200">
          <div className="relative">Availability</div>
        </div>
        <div className="rounded-xxs bg-white flex flex-row py-[9px] px-[13px] items-center justify-center border-[1px] border-solid border-darkgray-100">
          <div className="relative">Distance</div>
        </div>
        <div className="rounded-xxs bg-white flex flex-row py-[9px] px-[13px] items-center justify-center border-[1px] border-solid border-darkgray-100">
          <div className="relative">Speciality</div>
        </div>
        <div className="rounded-xxs bg-whitesmoke-200 flex flex-row py-[9px] px-[13px] items-center justify-start border-[1px] border-solid border-black-200">
          <div className="relative">More filters . 1</div>
        </div>
      </div>
      <div className="absolute top-[998px] left-[0px] bg-white w-[1440px] h-[25px] flex flex-row items-end justify-center gap-[393px] font-lato">
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
            src="../insta2.svg"
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
            className="absolute w-[9.03%] right-[0%] bottom-[5.35px] left-[90.97%] max-w-full overflow-hidden h-[8.64px]"
            alt=""
            src="../vector6.svg"
          />
          <div className="absolute bottom-[0px] left-[0px] tracking-[0.01em] leading-[20px] capitalize">{`Support & resources`}</div>
        </div>
      </div>
      <img
        className="absolute top-[472px] left-[1399px] w-[41px] h-[103px] overflow-hidden opacity-[0.5]"
        alt=""
        src="../frame-296.svg"
      />
      <div className="absolute top-[300px] left-[75px] rounded-xxs bg-gainsboro-200 w-[140px] h-[140px]" />
      <div className="absolute top-[311px] left-[303px] flex flex-row items-start justify-start gap-[25px]">
        <div className="relative rounded-xxs bg-mediumblue w-10 h-[18px] shrink-0" />
        <img
          className="relative rounded-xxs w-10 h-[18px] shrink-0"
          alt=""
          src="../rectangle-242.svg"
        />
      </div>
      <div className="absolute top-[401px] left-[287px] rounded-xxs bg-mediumblue w-[135px] h-7" />
      <b className="absolute top-[406px] left-[298px] text-white text-right">
        Get Appintment
      </b>
      <div className="absolute top-[512px] left-[78px] rounded-xxs bg-gainsboro-200 w-[619px] h-[171px]" />
      <div className="absolute top-[734px] left-[78px] rounded-xxs bg-gainsboro-200 w-[619px] h-[171px]" />
      <b className="absolute top-[471px] left-[78px] text-right">Reviews</b>
      <b className="absolute top-[700px] left-[78px] text-right">
        Patient Record
      </b>
      <img
        className="absolute top-[349px] left-[303px] w-[94px] h-6"
        alt=""
        src="../group-1000000822.svg"
      />
    </div>
  );
};

export default DoctorRatings;
