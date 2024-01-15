import * as React from "react";
import { useCallback } from "react";
import { navigate } from "gatsby";

const ContactUs = () => {
  const onVectorIcon1Click = useCallback(() => {
    navigate("/frame4");
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-5xl text-black font-scope-one">
      <img
        className="absolute top-[38px] left-[17px] rounded-11xl w-[119px] h-[100px] object-cover"
        alt=""
        src="/rectangle-60@2x.png"
      />
      <img
        className="absolute top-[12px] left-[514px] rounded-xl w-[342.2px] h-[251.4px] object-contain"
        alt=""
        src="/image-8@2x.png"
      />
      <div className="absolute top-[285px] left-[87px] rounded-xl bg-mediumblue-400 w-[293px] h-[71px]" />
      <div className="absolute top-[285px] left-[1017px] rounded-xl bg-mediumblue-500 w-[293px] h-[71px]" />
      <div className="absolute top-[285px] left-[552px] rounded-xl bg-mediumblue-500 w-[293px] h-[71px]" />
      <div className="absolute top-[409px] left-[61px] rounded-xl [background:linear-gradient(180deg,_rgba(5,_66,_222,_0.17),_rgba(89,_128,_228,_0))] w-[345px] h-[454px]" />
      <div className="absolute top-[409px] left-[991px] rounded-xl [background:linear-gradient(180deg,_rgba(5,_66,_222,_0.22),_rgba(5,_66,_222,_0))] w-[345px] h-[454px]" />
      <div className="absolute top-[409px] left-[526px] rounded-xl [background:linear-gradient(180deg,_rgba(5,_66,_222,_0.29),_rgba(89,_128,_228,_0))] w-[345px] h-[454px]" />
      <img
        className="absolute top-[290px] left-[186px] w-[60px] h-[60px] overflow-hidden"
        alt=""
        src="/email1-svgrepocom.svg"
      />
      <div className="absolute top-[290px] left-[186px] w-[60px] h-[60px] overflow-hidden" />
      <div className="absolute top-[290px] left-[639px] w-[60px] h-[60px] overflow-hidden" />
      <img
        className="absolute h-[4.39%] w-[3.13%] top-[28.52%] right-[49.93%] bottom-[67.09%] left-[46.94%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector3.svg"
      />
      <img
        className="absolute top-[285px] left-[1124px] w-[60px] h-[60px] overflow-hidden"
        alt=""
        src="/messagereceived-svgrepocom.svg"
      />
      <div className="absolute top-[320px] left-[69px] flex items-center w-[339px] h-[457px]">
        <span className="w-full">
          <span>{`Pour toute question ou préoccupation, envoyez-nous un e-mail à `}</span>
          <span className="text-mediumblue-100 text-xl">
            <span>khadija.chicha.2003@gmail.com</span>
          </span>
          <span>
            <span className="text-mediumblue-100 text-xl">{` `}</span>
            <span>
              Nous répondons généralement dans un délai de 24 heures ouvrables.
            </span>
          </span>
        </span>
      </div>
      <div className="absolute top-[410px] left-[545px] flex items-center w-[308px] h-[244px]">
        <span className="w-full">
          <span>{`Besoin d'une assistance immédiate ? Appelez notre ligne d'assistance au `}</span>
          <span className="text-mediumblue-100">0647384612</span>
          <span> du lundi au vendredi, de 9h à 17h, heure locale.</span>
        </span>
      </div>
      <div className="absolute top-[375px] left-[1005px] flex items-center w-[307px] h-[368px]">
        {" "}
        Vous pouvez également nous contacter via nos réseaux sociaux.
        Envoyez-nous un message direct sur WhatssApp, Facebook ou Instagram et
        nous vous répondrons dès que possible.
      </div>
      <img
        className="absolute top-[806px] left-[1271px] w-[41px] h-[41px] object-cover"
        alt=""
        src="/image-9@2x.png"
      />
      <img
        className="absolute top-[806px] left-[1218px] w-11 h-[41px] object-cover"
        alt=""
        src="/image-10@2x.png"
      />
      <img
        className="absolute top-[806px] left-[1164px] w-[41px] h-[41px] object-cover"
        alt=""
        src="/image-11@2x.png"
      />
      <div className="absolute top-[396.3px] left-[1105.7px] w-[60px] h-[60px] overflow-hidden" />
      <div className="absolute top-[919px] left-[61px] rounded-xl bg-mediumblue-600 w-[1277px] h-[74px]" />
      <div className="absolute top-[901px] left-[82px] text-white flex items-center w-[1309px] h-[111px]">
        Quel que soit le moyen que vous choisissez pour nous contacter, nous
        nous efforçons de répondre rapidement et de fournir une assistance
        efficace à toutes vos demandes.
      </div>
      <img
        className="absolute h-[1.37%] w-[0.42%] top-[2.34%] right-[98.4%] bottom-[96.29%] left-[1.18%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src="/vector2.svg"
        onClick={onVectorIcon1Click}
      />
    </div>
  );
};

export default ContactUs;
