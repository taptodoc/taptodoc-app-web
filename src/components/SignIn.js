const SignIn = ({ onClose }) => {
  return (
    <div className="relative w-[786px] h-[876px] max-w-full max-h-full overflow-auto text-center text-xl text-dimgray font-radio-canada">
      <div className="absolute top-[0px] left-[0px] rounded-base bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[786px] h-[876px]" />
      <div className="absolute top-[444px] left-[56px] w-[669px] h-[70px]">
        <div className="absolute top-[0px] left-[0px] rounded-base bg-midnightblue-100 w-[669px] h-[70px]" />
      </div>
      <div className="absolute w-full top-[calc(50%_-_438px)] right-[0%] left-[0%] rounded-t-base rounded-b-none bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-[129px]" />
      <div className="absolute w-[21.12%] top-[45px] left-[37.53%] text-5xl tracking-[-0.02em] leading-[32px] text-black-200 inline-block h-8">
        Login or signup
      </div>
      <div className="absolute top-[160px] left-[56px] text-7xl tracking-[-0.02em] leading-[32px] font-medium text-black-200">
        Welcome to Tap2Doc
      </div>
      <div className="absolute top-[337px] left-[56px] w-[669px] h-[70px]">
        <div className="absolute top-[0px] left-[0px] rounded-base bg-whitesmoke-100 w-[669px] h-[70px]" />
      </div>
      <div className="absolute top-[229px] left-[58px] w-[669px] h-[70px]">
        <div className="absolute top-[0px] left-[0px] rounded-base bg-whitesmoke-100 w-[669px] h-[70px]" />
      </div>
      <img
        className="absolute top-[260px] left-[93px] w-[30px] h-[30px] object-cover"
        alt=""
        src="../franceflag.png"
      />
      <div className="absolute top-[264px] left-[141px] text-2xl leading-[125%] font-text-xs-regular text-black-200 text-left">
        France
      </div>
      <div className="absolute top-[232px] left-[81px] tracking-[-0.02em] leading-[32px] font-light text-gray-200">
        Country/Region
      </div>
      <b className="absolute top-[463px] left-[361px] text-5xl tracking-[-0.02em] leading-[32px] text-white">
        Login
      </b>
      <div className="absolute top-[560px] left-[303px] text-5xl tracking-[-0.02em] leading-[32px]">
        or continue with
      </div>
      <div className="absolute top-[739px] left-[101px] tracking-[-0.02em] leading-[32px]">
        Google
      </div>
      <div className="absolute top-[739px] left-[269px] tracking-[-0.02em] leading-[32px]">
        Facebook
      </div>
      <div className="absolute top-[739px] left-[460px] tracking-[-0.02em] leading-[32px]">
        Email
      </div>
      <div className="absolute top-[735px] left-[639px] tracking-[-0.02em] leading-[32px]">
        Apple
      </div>
      <img
        className="absolute h-[6.85%] w-[7.63%] top-[76.94%] right-[12.47%] bottom-[16.21%] left-[79.9%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../colorapple.svg"
      />
      <img
        className="absolute h-[6.85%] w-[7.63%] top-[76.94%] right-[57.51%] bottom-[16.21%] left-[34.86%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../colorfb.svg"
      />
      <img
        className="absolute h-[6.85%] w-[7.63%] top-[77.05%] right-[80.03%] bottom-[16.1%] left-[12.34%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../colorgoogle.svg"
      />
      <img
        className="absolute h-[6.85%] w-[7.63%] top-[77.05%] right-[34.99%] bottom-[16.1%] left-[57.38%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../email.svg"
      />
      <div className="absolute top-[361px] left-[81px] text-2xl leading-[125%] font-text-xs-regular text-black-200 text-left">
        +33
      </div>
      <img
        className="absolute top-[248px] left-[673px] w-[30px] h-[30px] object-cover"
        alt=""
        src="../dropdown.png"
      />
    </div>
  );
};

export default SignIn;