import * as React from "react";
import { useCallback } from "react";
import { navigate } from "gatsby";

const FAQ = () => {
  const onVectorIconClick = useCallback(() => {
    navigate("/frame4");
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-black font-scope-one">
      <img
        className="absolute top-[13px] left-[542px] rounded-xl w-[178px] h-[129px] object-cover"
        alt=""
        src="/image-7@2x.png"
      />
      <div className="absolute top-[172px] left-[30px] flex items-center w-[1379px] h-[839px]">
        <span className="w-full">
          <ul className="m-0 font-inherit text-inherit pl-[27px] text-mediumblue-100">
            <li className="mb-0">
              <span>
                Comment puis-je ajouter un lauréat sur votre plateforme ?
              </span>
            </li>
          </ul>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Pour ajouter un lauréat, connectez-vous à votre compte
            administrateur, accédez à la page Home et cliquez sur le bouton
            "Ajouter un Lauréat". Remplissez les informations requises telles
            que le nom du lauréat, la catégorie, et téléchargez une photo le cas
            échéant. Enregistrez les modifications pour publier le lauréat sur
            notre plateforme.
          </p>
          <p className="m-0 text-mediumblue-100">&nbsp;</p>
          <ul className="m-0 font-inherit text-inherit pl-[27px] text-mediumblue-100">
            <li className="mb-0">
              <span>{`J'ai oublié mon mot de passe. Comment puis-je le réinitialiser ? `}</span>
            </li>
          </ul>
          <p className="m-0">
             Si vous avez oublié votre mot de passe, rendez-vous sur la page de
            connexion et cliquez sur "Mot de passe oublié". Suivez les étapes
            pour réinitialiser votre mot de passe via l'e-mail de
            réinitialisation que vous recevrez.
          </p>
          <p className="m-0">&nbsp;</p>
          <ul className="m-0 font-inherit text-inherit pl-[27px] text-mediumblue-100">
            <li className="mb-0">
              <span>{`Comment puis-je contacter votre service client ? `}</span>
            </li>
          </ul>
          <p className="m-0">
             Notre équipe du service client est là pour vous aider ! Vous pouvez
            nous contacter via notre formulaire de contact sur le site ou par
            e-mail à khadija.chicha.2003gamil.com. Nous répondons généralement
            dans les 24 heures suivant votre demande.
          </p>
          <p className="m-0">&nbsp;</p>
          <ul className="m-0 font-inherit text-inherit pl-[27px] text-mediumblue-100">
            <li className="mb-0">
              <span>
                Comment supprimer un lauréat de la liste publiée sur votre site
                ?
              </span>
            </li>
          </ul>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            {" "}
            En tant qu'administrateur, vous avez le pouvoir de retirer un
            lauréat de notre plateforme. Allez dans la section "Gestion des
            Lauréats", sélectionnez le lauréat à supprimer, puis cherchez
            l'option "Supprimer" pour retirer le lauréat de la liste publiée.
          </p>
          <p className="m-0 text-mediumblue-100">&nbsp;</p>
          <ul className="m-0 font-inherit text-inherit pl-[27px] text-mediumblue-100">
            <li className="mb-0">
              <span>
                J'ai des problèmes techniques lors de l'ajout de lauréats,
                comment puis-je obtenir de l'aide ?
              </span>
            </li>
          </ul>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            {" "}
            Pour toute difficulté technique ou question supplémentaire
            concernant la gestion des lauréats, veuillez contacter notre équipe
            de support via l'adresse e-mail support@votresite.com ou par
            téléphone au +1 (800) 123-4567. Nous serons ravis de vous aider.
          </p>
        </span>
      </div>
      <img
        className="absolute h-[1.37%] w-[0.42%] top-[3.52%] right-[97.5%] bottom-[95.12%] left-[2.08%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src="/vector2.svg"
        onClick={onVectorIconClick}
      />
    </div>
  );
};

export default FAQ;
