import * as React from "react";
import { useCallback } from "react";
import { navigate } from "gatsby";

const Aide = () => {
  const onVectorIconClick = useCallback(() => {
    navigate("/frame4");
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-45xl text-gray-400 font-sedgwick-ave-display">
      <div className="absolute top-[126px] left-[0px] bg-royalblue-100 [filter:blur(4px)] w-[1440px] h-[276px]" />
      <div className="absolute top-[241.1px] left-[-74px] flex items-center w-[430px] h-[141px] [filter:blur(4px)] [transform:_rotate(-42.24deg)] [transform-origin:0_0]">
        ALUMNI
      </div>
      <div className="absolute top-[289.2px] left-[113px] flex items-center w-[430px] h-[141px] [filter:blur(4px)] [transform:_rotate(-15.95deg)] [transform-origin:0_0]">
        ALUMNI
      </div>
      <div className="absolute top-[100px] left-[312.1px] flex items-center w-[430px] h-[141px] [filter:blur(4px)] [transform:_rotate(27.48deg)] [transform-origin:0_0]">
        ALUMNI
      </div>
      <div className="absolute top-[297.6px] left-[491px] flex items-center w-[430px] h-[141px] [filter:blur(4px)] [transform:_rotate(-31.64deg)] [transform-origin:0_0]">
        ALUMNI
      </div>
      <div className="absolute top-[100px] left-[719.5px] flex items-center w-[430px] h-[141px] [filter:blur(4px)] [transform:_rotate(12.09deg)] [transform-origin:0_0]">
        ALUMNI
      </div>
      <div className="absolute top-[121px] left-[1024.9px] flex items-center w-[430px] h-[141px] [filter:blur(4px)] [transform:_rotate(64.16deg)] [transform-origin:0_0]">
        ALUMNI
      </div>
      <div className="absolute top-[149.1px] left-[1083px] flex items-center w-[430px] h-[141px] [filter:blur(4px)] [transform:_rotate(-13.33deg)] [transform-origin:0_0]">
        ALUMNI
      </div>
      <div className="absolute top-[306.1px] left-[1212px] flex items-center w-[430px] h-[141px] [filter:blur(4px)] [transform:_rotate(-42.24deg)] [transform-origin:0_0]">
        ALUMNI
      </div>
      <div className="absolute top-[252.6px] left-[712px] flex items-center w-[446.1px] h-[207.8px] [filter:blur(4px)] [transform:_rotate(-16.48deg)] [transform-origin:0_0]">
        ALUMNI
      </div>
      <div className="absolute top-[168px] left-[415px] font-poller-one text-white flex items-center w-[640px] h-[69px] mix-blend-normal">
        Besion d’aide ?
      </div>
      <div className="absolute top-[249px] left-[339px] rounded-xl bg-gray-500 w-[742px] h-[81px]" />
      <div className="absolute top-[260px] left-[366px] text-5xl font-gafata text-white flex items-center w-[549px] h-[57px]">{`Trouvez les réponses à toutes vos questions `}</div>
      <img
        className="absolute top-[14px] left-[675px] rounded-11xl w-[119px] h-[100px] object-cover"
        alt=""
        src="/rectangle-60@2x.png"
      />
      <div className="absolute top-[431px] left-[43px] text-xl font-scope-one text-black flex items-center w-[1343px] h-[81px]">
        Merci de visiter notre page d'aide. Vous y trouverez des réponses à des
        questions fréquentes, des guides pas à pas et des moyens de contacter
        notre équipe de support. Si vous rencontrez des problèmes ou avez besoin
        d'aide, veuillez consulter les sections ci-dessous ou nous contacter
        directement.
      </div>
      <div className="absolute top-[570px] left-[77px] bg-mediumslateblue w-[262px] h-[63px]" />
      <div className="absolute top-[780px] left-[77px] bg-mediumslateblue w-[262px] h-[63px]" />
      <div className="absolute top-[675px] left-[77px] bg-mediumslateblue w-[262px] h-[63px]" />
      <div className="absolute top-[570px] left-[370px] bg-mediumblue-200 w-[1001px] h-[63px]" />
      <div className="absolute top-[780px] left-[370px] bg-mediumblue-300 w-[1001px] h-[63px]" />
      <div className="absolute top-[675px] left-[370px] bg-mediumblue-300 w-[1001px] h-[63px]" />
      <div className="absolute top-[584px] left-[161px] text-xl font-poller-one text-white flex items-center w-36 h-[35px]">
        FAQ
      </div>
      <div className="absolute top-[689px] left-[133px] text-xl font-poller-one text-white flex items-center w-36 h-[35px]">
        Contact Us
      </div>
      <div className="absolute top-[794px] left-[121px] text-xl font-poller-one text-white text-center flex items-center justify-center w-[181px] h-[35px]">
        Mises à jour et Annonces
      </div>
      <div className="absolute top-[573px] left-[394px] text-xl font-scope-one text-black text-center flex items-center justify-center w-[962px] h-[60px]">
        Trouvez des réponses aux questions fréquemment posées sur nos services,
        fonctionnalités et conseils de dépannage.
      </div>
      <div className="absolute top-[680px] left-[394px] text-xl font-scope-one text-black text-center flex items-center justify-center w-[932px] h-[58px]">
        Joignez notre équipe de support par e-mail, téléphone ou chat en direct
        pour une assistance immédiate.
      </div>
      <div className="absolute top-[783px] left-[366px] text-xl font-scope-one text-black text-center flex items-center justify-center w-[947px] h-[60px]">
        {" "}
        Restez informé(e) des dernières mises à jour et des nouvelles
        fonctionnalités ajoutées sur notre site.
      </div>
      <img
        className="absolute h-[1.37%] w-[0.42%] top-[4.1%] right-[97.5%] bottom-[94.53%] left-[2.08%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src="/vector2.svg"
        onClick={onVectorIconClick}
      />
    </div>
  );
};

export default Aide;
