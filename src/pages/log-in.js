import * as React from "react";
import { useCallback } from "react";
import { navigate } from "gatsby";

const LogIn = () => {
  const onForgetYourPasswordClick = useCallback(() => {
    navigate("/forget-password");
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/frame4");
  }, []);

  return (
    <div className="relative bg-white w-full h-[1480px] overflow-hidden text-left text-13xl text-darkslategray font-poppins">
      <div className="absolute h-[calc(100%_-_677px)] top-[102px] bottom-[575px] left-[-279px] w-[1364px] overflow-hidden">
        <div className="absolute top-[-52px] left-[495px] flex flex-col items-center justify-center gap-[32px]">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative font-medium">Log in</div>
            <div className="flex flex-row items-start justify-start p-0.5 text-left text-base text-gray-100">
              <div className="relative whitespace-pre-wrap">
                <span className="text-darkslategray">
                  Don’t have an acount?
                </span>
                <span className="text-dimgray-100">{` `}</span>
                <span className="[text-decoration:underline]">{`Sign up  `}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px] text-lg font-avenir">
            <div className="relative rounded-21xl bg-white box-border w-[580px] h-16 overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray">
              <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_109px)] flex flex-row items-center justify-center gap-[16px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/social-media-logo1.svg"
                />
                <div className="relative">Continue with Google</div>
              </div>
            </div>
            <div className="relative rounded-21xl bg-white box-border w-[580px] h-16 overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray">
              <div className="absolute top-[calc(50%_-_15.5px)] left-[calc(50%_-_123px)] flex flex-row items-center justify-center gap-[16px]">
                <img
                  className="relative w-8 h-8"
                  alt=""
                  src="/social-media-logo5.svg"
                />
                <div className="relative">Continue with Facebook</div>
              </div>
            </div>
            <div className="relative rounded-21xl bg-white box-border w-[580px] h-16 overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray">
              <div className="absolute top-[calc(50%_-_16.5px)] left-[calc(50%_-_107.5px)] flex flex-row items-center justify-center gap-[16px]">
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/social-media-logo6.svg"
                />
                <div className="relative">Continue with Apple</div>
              </div>
            </div>
          </div>
          <div className="w-[580px] flex flex-row items-center justify-start gap-[23px] text-xl text-gray-100 font-avenir">
            <div className="flex-1 relative bg-dimgray-600 h-0.5" />
            <div className="relative">Or continue with email</div>
            <div className="flex-1 relative bg-dimgray-600 h-0.5" />
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px] text-base text-dimgray-100">
            <div className="w-[580px] flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch relative h-[27px]">
                <div className="absolute top-[0px] left-[0px]">
                  Email address or user name
                </div>
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
                <div className="absolute top-[15px] left-[24px] hidden flex-row items-center justify-start">
                  <div className="relative">Enter your email address</div>
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
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-end justify-start gap-[8px]">
                <div className="w-[580px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative h-[27px]">
                    <div className="absolute top-[0px] left-[0px]">
                      Password
                    </div>
                    <div className="absolute top-[0px] right-[8.9px] w-[73px] h-[27px] text-right text-lg text-dimgray-400">
                      <img
                        className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="absolute top-[0px] right-[0px]">Hide</div>
                    </div>
                  </div>
                  <div className="self-stretch relative rounded-xl box-border h-14 overflow-hidden shrink-0 text-gray-100 border-[1px] border-solid border-dimgray-500">
                    <div className="absolute top-[15px] left-[24px] hidden flex-row items-center justify-start">
                      <div className="relative">123456</div>
                      <div className="relative bg-gray-100 w-px h-6" />
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
                <div
                  className="relative [text-decoration:underline] text-gray-100 text-right cursor-pointer"
                  onClick={onForgetYourPasswordClick}
                >
                  Forget your password
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-2 pr-2 pl-0 gap-[8px] text-darkslategray">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/check-box.svg"
                />
                <div className="relative">Remember me</div>
              </div>
            </div>
            <div
              className="relative rounded-13xl bg-gray-100 w-[580px] h-16 overflow-hidden shrink-0 opacity-[0.25] cursor-pointer text-center text-3xl text-white"
              onClick={onButtonContainerClick}
            >
              <div className="absolute top-[calc(50%_-_17px)] left-[calc(50%_-_32.5px)] flex flex-row items-center justify-center gap-[8px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icons1.svg"
                />
                <div className="relative font-medium">Log in</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[1390px] left-[15px] w-[318px] h-[85px] object-cover"
        alt=""
        src="/image-21@2x.png"
      />
    </div>
  );
};

export default LogIn;
