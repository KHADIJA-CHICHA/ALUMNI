import * as React from "react";
import { useCallback } from "react";
import { navigate } from "gatsby";

const SignUp = () => {
  const onButtonContainerClick = useCallback(() => {
    navigate("/frame4");
  }, []);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/log-in");
  }, []);

  return (
    <div className="relative bg-white w-full h-[1480px] overflow-hidden text-left text-5xl text-darkslategray font-avenir">
      <div className="absolute top-[330px] left-[449px] w-[202px] h-[820px] flex flex-col items-center justify-center gap-[48px]">
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="relative rounded-13xl bg-white box-border w-[578px] h-16 overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray">
            <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_156px)] flex flex-row items-center justify-center gap-[16px]">
              <img
                className="relative w-8 h-8"
                alt=""
                src="/social-media-logo.svg"
              />
              <div className="relative">Sign up with Facebook</div>
            </div>
          </div>
          <div className="relative rounded-13xl bg-white box-border w-[578px] h-16 overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray">
            <div className="absolute top-[calc(50%_-_17px)] left-[calc(50%_-_139px)] flex flex-row items-center justify-center gap-[16px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo1.svg"
              />
              <div className="relative">Sign up with Google</div>
            </div>
          </div>
          <div className="relative rounded-13xl bg-white box-border w-[578px] h-16 overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray">
            <div className="absolute top-[calc(50%_-_17px)] left-[calc(50%_-_139px)] flex flex-row items-center justify-center gap-[16px]">
              <img
                className="relative w-8 h-8"
                alt=""
                src="/social-media-logo2.svg"
              />
              <div className="relative">Sign up with Twitter</div>
            </div>
          </div>
        </div>
        <div className="w-[578px] flex flex-row items-center justify-start gap-[23px] text-dimgray-100">
          <div className="flex-1 relative bg-dimgray-600 h-0.5" />
          <div className="relative">OR</div>
          <div className="flex-1 relative bg-dimgray-600 h-0.5" />
        </div>
        <div className="flex flex-col items-center justify-center gap-[40px] text-base font-poppins">
          <div className="relative text-lg font-medium text-center">
            Sign up with your email address
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px] text-dimgray-100">
            <div className="w-[578px] flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch relative h-[27px]">
                <div className="absolute top-[0px] left-[0px]">
                  Profile name
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
                <div className="absolute top-[15px] left-[24px] flex flex-row items-center justify-start">
                  <div className="relative">Enter your profile name</div>
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
            <div className="w-[578px] flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch relative h-[27px]">
                <div className="absolute top-[0px] left-[0px]">Email</div>
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
            <div className="w-[578px] flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch relative h-[27px]">
                <div className="absolute top-[0px] left-[0px]">Password</div>
                <div className="absolute top-[0px] right-[8.9px] w-[73px] h-[27px] text-right text-lg text-dimgray-400">
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
                  <div className="relative">Enter your password</div>
                  <div className="relative bg-gray-100 w-px h-6 hidden" />
                </div>
                <img
                  className="absolute top-[40px] right-[24px] w-6 h-6 overflow-hidden hidden"
                  alt=""
                  src="/icons.svg"
                />
              </div>
              <div className="relative text-sm">{`Use 8 or more characters with a mix of letters, numbers & symbols`}</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[32px] text-gray-100">
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <div className="relative">
                <span>{`What’s your gender? `}</span>
                <span className="text-dimgray-100">(optional)</span>
              </div>
              <div className="flex flex-row items-start justify-start gap-[32px]">
                <div className="flex flex-row items-center justify-center py-0 px-2 gap-[8px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/radio-button.svg"
                  />
                  <div className="relative">Female</div>
                </div>
                <div className="flex flex-row items-center justify-center py-0 px-2 gap-[8px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/radio-button.svg"
                  />
                  <div className="relative">Male</div>
                </div>
                <div className="flex flex-row items-center justify-center py-0 px-2 gap-[8px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/radio-button.svg"
                  />
                  <div className="relative">Non-binary</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <div className="relative">What’s your date of borth?</div>
              <div className="flex flex-row items-start justify-start gap-[20px] text-dimgray-100">
                <div className="w-[180px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative h-[27px]">
                    <div className="absolute top-[0px] left-[0px]">Month</div>
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
                      <div className="relative">Enter your profile name</div>
                      <div className="relative bg-gray-100 w-px h-6 hidden" />
                    </div>
                    <img
                      className="absolute top-[40px] right-[24px] w-6 h-6 overflow-hidden"
                      alt=""
                      src="/icons.svg"
                    />
                  </div>
                  <div className="relative text-sm text-crimson hidden">
                    Error message
                  </div>
                </div>
                <div className="w-[179px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative h-[27px]">
                    <div className="absolute top-[0px] left-[0px]">Date</div>
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
                      <div className="relative">Enter your profile name</div>
                      <div className="relative bg-gray-100 w-px h-6 hidden" />
                    </div>
                    <img
                      className="absolute top-[40px] right-[24px] w-6 h-6 overflow-hidden"
                      alt=""
                      src="/icons.svg"
                    />
                  </div>
                  <div className="relative text-sm text-crimson hidden">
                    Error message
                  </div>
                </div>
                <div className="w-[179px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative h-[27px]">
                    <div className="absolute top-[0px] left-[0px]">Year</div>
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
                      <div className="relative">Enter your profile name</div>
                      <div className="relative bg-gray-100 w-px h-6 hidden" />
                    </div>
                    <img
                      className="absolute top-[40px] right-[24px] w-6 h-6 overflow-hidden"
                      alt=""
                      src="/icons.svg"
                    />
                  </div>
                  <div className="relative text-sm text-crimson hidden">
                    Error message
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <div className="flex flex-row items-start justify-start py-2 pr-2 pl-0 gap-[8px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/check-box.svg"
              />
              <div className="relative">
                <p className="m-0">{`Share my registration data with our content providers for `}</p>
                <p className="m-0">marketing purposes.</p>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-2 pr-2 pl-0 text-gray-100">
              <div className="relative">
                <span className="text-darkslategray">{`By creating an account, you agree to the `}</span>
                <span className="[text-decoration:underline]">
                  Terms of use
                </span>
                <span className="text-dimgray-100">{` `}</span>
                <span className="text-darkslategray">and</span>
                <span className="text-dimgray-100">{` `}</span>
                <span className="[text-decoration:underline]">
                  <span>Privacy Policy.</span>
                  <span className="text-dimgray-100">{` `}</span>
                </span>
              </div>
            </div>
            <div className="relative rounded-lg bg-white box-border w-[363px] h-[68px] text-center border-[1px] border-solid border-darkslategray">
              <div className="absolute top-[22px] left-[24px] flex flex-row items-center justify-center gap-[8px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/check-box1.svg"
                />
                <div className="relative font-light">I’m not a robot</div>
              </div>
              <img
                className="absolute top-[11px] right-[24px] w-12 h-[46.3px] overflow-hidden"
                alt=""
                src="/google-recaptchaofficial-2.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[16px] text-center text-3xl text-white">
            <div
              className="relative rounded-21xl bg-gray-100 w-[578px] h-16 overflow-hidden shrink-0 opacity-[0.25] cursor-pointer"
              onClick={onButtonContainerClick}
            >
              <div className="absolute top-[calc(50%_-_17px)] left-[calc(50%_-_42px)] flex flex-row items-center justify-center gap-[8px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icons1.svg"
                />
                <div className="relative font-medium">Sign up</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start p-0.5 text-left text-base text-gray-100">
              <div
                className="relative whitespace-pre-wrap cursor-pointer"
                onClick={onAlreadyHaveAnClick}
              >
                <span className="text-darkslategray">
                  Already have an ccount?
                </span>
                <span className="text-dimgray-100">{` `}</span>
                <span className="[text-decoration:underline]">{`Log in  `}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[1401px] left-[10px] w-[251px] h-[67px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
    </div>
  );
};

export default SignUp;
