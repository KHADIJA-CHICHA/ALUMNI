import * as React from "react";
import { useCallback } from "react";
import { navigate } from "gatsby";

const ForgetPassword = () => {
  const onRectangle1Click = useCallback(() => {
    navigate("/vrifier-email");
  }, []);

  const onLineIconClick = useCallback(() => {
    navigate("/log-in");
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-5xl text-slateblue-200 font-scope-one">
      <div className="absolute top-[64px] left-[588px] inline-block w-[211px] h-[47px]">
        Forget Password
      </div>
      <div className="absolute top-[195px] left-[588px] rounded-[50%] bg-cornflowerblue-800 w-[188px] h-44" />
      <img
        className="absolute top-[247px] left-[652px] w-[60px] h-[60px] overflow-hidden"
        alt=""
        src="/lock-svgrepocom.svg"
      />
      <div className="absolute top-[404px] left-[388px] text-center inline-block w-[555px] h-[94px]">{`Veuillez entrer votre adresse e-mail pour recevoir un cordon de vérification `}</div>
      <div className="absolute top-[512px] left-[393px] w-[578px] flex flex-col items-start justify-start gap-[4px] text-base text-dimgray-100 font-poppins">
        <div className="self-stretch relative h-[27px]">
          <div className="absolute top-[0px] left-[0px]">E-mail</div>
          <div className="absolute top-[0px] right-[8.9px] w-[73px] h-[27px] hidden text-right text-lg text-dimgray-400">
            <img
              className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
              alt=""
              src="/icon.svg"
            />
            <div className="absolute top-[0px] right-[0px]">Hide</div>
          </div>
        </div>
        <div className="self-stretch relative rounded-xl box-border h-14 overflow-hidden shrink-0 text-dimgray-300 border-[1px] border-solid border-dimgray-500">
          <div className="absolute top-[15px] left-[24px] flex flex-row items-center justify-start">
            <div className="relative">
              ............................................... @um5.ac.ma
            </div>
            <div className="relative bg-gray-100 w-px h-6 hidden" />
          </div>
          <img
            className="absolute top-[40px] right-[24px] w-6 h-6 overflow-hidden hidden"
            alt=""
            src="/icons.svg"
          />
        </div>
        <div className="relative text-sm text-crimson hidden">
          Error message
        </div>
      </div>
      <div className="absolute top-[649px] left-[558px] text-base font-poppins text-gray-1500 inline-block w-[214px] h-[46px]">
        essayez d’une autre façon
      </div>
      <div className="absolute top-[671.5px] left-[561.5px] box-border w-[205px] h-px border-t-[1px] border-solid border-black" />
      <div
        className="absolute top-[795px] left-[568px] rounded-3xs bg-royalblue-300 w-[193px] h-[33px] cursor-pointer"
        onClick={onRectangle1Click}
      />
      <div className="absolute top-[804px] left-[626px] text-xs font-rubik-mono-one text-white inline-block w-[135px] h-6">
        Envoyer
      </div>
      <img
        className="absolute h-[2.15%] w-[0.9%] top-[6.35%] right-[95.97%] bottom-[91.5%] left-[3.13%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src="/line.svg"
        onClick={onLineIconClick}
      />
    </div>
  );
};

export default ForgetPassword;
