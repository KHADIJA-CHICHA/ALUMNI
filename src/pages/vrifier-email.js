import * as React from "react";
import { useCallback } from "react";
import { navigate } from "gatsby";

const VrifierEmail = () => {
  const onRectangle4Click = useCallback(() => {
    navigate("/changer-password");
  }, []);

  const onLineIconClick = useCallback(() => {
    navigate("/forget-password");
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-base text-dimgray-100 font-poppins">
      <div className="absolute top-[64px] left-[588px] text-5xl font-scope-one text-slateblue-200 inline-block w-[265px] h-[47px]">
        Vérifiez Votre E-mail
      </div>
      <div className="absolute top-[195px] left-[588px] rounded-[50%] bg-cornflowerblue-800 w-[188px] h-44" />
      <div className="absolute top-[404px] left-[388px] text-5xl font-scope-one text-slateblue-200 text-center inline-block w-[555px] h-[94px]">{`Veuillez saisir le code de 4 chiffres envoyé a votre E-mail `}</div>
      <div className="absolute top-[512px] left-[441px] w-20 flex flex-col items-start justify-start gap-[4px]">
        <div className="self-stretch relative h-[27px]">
          <div className="absolute top-[0px] left-[0px] hidden">E-mail</div>
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
            <div className="relative hidden">
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
      <div className="absolute top-[512px] left-[810px] w-20 flex flex-col items-start justify-start gap-[4px]">
        <div className="self-stretch relative h-[27px]">
          <div className="absolute top-[0px] left-[0px] hidden">E-mail</div>
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
            <div className="relative hidden">
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
      <div className="absolute top-[512px] left-[687px] w-20 flex flex-col items-start justify-start gap-[4px]">
        <div className="self-stretch relative h-[27px]">
          <div className="absolute top-[0px] left-[0px] hidden">E-mail</div>
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
            <div className="relative hidden">
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
      <div className="absolute top-[512px] left-[564px] w-20 flex flex-col items-start justify-start gap-[4px]">
        <div className="self-stretch relative h-[27px]">
          <div className="absolute top-[0px] left-[0px] hidden">E-mail</div>
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
            <div className="relative hidden">
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
      <div className="absolute top-[649px] left-[596px] text-gray-1500 inline-block w-[214px] h-[46px]">
        Renvoyer le code
      </div>
      <div className="absolute top-[671.5px] left-[595.5px] box-border w-[138px] h-px border-t-[1px] border-solid border-black" />
      <div
        className="absolute top-[795px] left-[568px] rounded-3xs bg-royalblue-300 w-[193px] h-[33px] cursor-pointer"
        onClick={onRectangle4Click}
      />
      <div className="absolute top-[804px] left-[626px] text-xs font-rubik-mono-one text-white inline-block w-[135px] h-6">
        vérifier
      </div>
      <img
        className="absolute h-[2.15%] w-[0.9%] top-[6.35%] right-[95.97%] bottom-[91.5%] left-[3.13%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src="/line.svg"
        onClick={onLineIconClick}
      />
      <img
        className="absolute top-[245px] left-[640px] w-[84px] h-[76px] overflow-hidden"
        alt=""
        src="/emailaddress-svgrepocom.svg"
      />
    </div>
  );
};

export default VrifierEmail;
