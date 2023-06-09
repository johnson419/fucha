import React from "react";

import { Text, Img, Carousel } from "components";
import { useNavigate } from "react-router-dom";

const HOMEPAGEPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-repeat bg-white_A700 flex flex-col font-syne h-full items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_homepage.png')" }}
      >
        <div className="flex flex-row items-start justify-end ml-auto w-[23%] md:w-full">
          <Text
            className="common-pointer font-medium mt-[3px] text-black_900 text-left w-auto"
            variant="body2"
            onClick={() => navigate("/homepage")}
          >
            Home
          </Text>
          <Text
            className="common-pointer font-medium ml-[49px] mt-1 text-black_900 text-left w-auto"
            variant="body2"
            onClick={() => navigate("/loginpage")}
          >
            Log in
          </Text>
          <Text
            className="bg-bluegray_100 flex sm:flex-row sm:flex-nowrap font-medium h-[22px] ml-[37px] px-[9px] py-[3px] rounded-[11px] text-black_900 text-left text-shadow-ts1 w-[104px]"
            variant="body2"
          >
            connect wallet
          </Text>
        </div>

        <div className="flex flex-col justify-start max-w-[1175px] mx-auto my-[11px] md:px-5 w-full">
          <div className="h-[125px] mt-[12px] md:ml-[0] ml-[15px] relative w-[86%] sm:w-full">
            <Text
              className="m-auto text-black_900 text-left mt-7"
              as="h1"
              variant="h1"
            >
              <>
                Karibu
                <br />
                Chatafisha
              </>
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-full md:mt-[50px]">
            <div className="flex md:flex-col flex-row gap-10 md:gap-1 items-center justify-start max-w-[1123px] mb-[55px] md:mb-[10px] mx-auto w-full">
              <div className="h-[344px] md:h-[344px] md:w-[87%] mr-[3px] relative w-1/2 sm:w-full sm:h-[344px]">
                <Img
                  src="images/img_rectangle4_344x549.png"
                  className="h-[344px] m-auto object-cover rounded-[16px] w-full"
                  alt="rectangleFour"
                />
                <div className="absolute mb-0 top-[0] right-0 h-16 w-16">
                  <Img
                    src="images/img_cut_white_a700.svg"
                    className="h-[51px] md:ml-[0] ml-[404px] w-auto ml-[0.5rem]"
                    alt="cut"
                  />
                </div>
                <div className="absolute flex flex-col md:gap-10 gap-[118px] h-max inset-[0] justify-center m-auto w-[85%]">
                  <Text
                    className="font-semibold mr-[25px] text-left text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    <>
                      Pata thamani
                      <br />
                      Earn carbon credits through the offsets of plastic waste
                      into usable goods and building materials.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col justify-start w-1/2 md:w-full">
                <div className="flex gap-2 md:flex-row flex-wrap  sm:flex-row sm:flex-wrap flex-row sm:gap-4 items-center justify-start w-full mt-[120px] sm:mt-[10px] md:mt-[50px]">
                  <div className="common-pointer bg-black_900 flex sm:flex-1 flex-col gap-[45px] items-end justify-start sm:mt-0 mt-0.5 p-[9px] rounded-[23px] w-[120px] sm:w-[120px]">
                    <Img
                      src="images/img_plus.svg"
                      className="h-4 mt-0.5 w-4"
                      alt="plus"
                    />
                    <Text
                      className="font-bold mb-2.5 mr-[31px] text-left text-white_A700"
                      variant="body2"
                    >
                      <>
                        News &<br />
                        Updates
                      </>
                    </Text>
                  </div>
                  <div className="common-pointer bg-green_403 flex sm:flex-1 flex-col gap-[45px] items-end justify-start mb-0.5 p-[9px] rounded-[23px] w-[120px] sm:w-[120px] ">
                    <Img
                      src="images/img_plus.svg"
                      className="h-4 mt-0.5 w-4"
                      alt="plus_One"
                    />
                    <div className="flex flex-col items-start justify-start mr-1 w-auto ">
                      <Text
                        className="font-bold  text-center ml-[10px] text-center text-white_A700"
                        variant="body2"
                      >
                        Sokoni
                      </Text>
                      <Text
                        className="font-bold text-center ml-[10px] text-center text-white_A700"
                        variant="body2"
                      >
                        Market place
                      </Text>
                    </div>
                  </div>

                  <div className="common-pointer bg-indigo_A200 flex sm:flex-1 flex-col gap-[45px] items-end justify-start mb-0.5 p-2 rounded-[23px] w-[120px] sm:w-[120px]">
                    <Img
                      src="images/img_plus.svg"
                      className="h-4 w-4"
                      alt="plus_Two"
                    />
                    <Text
                      className="font-bold mb-2.5 md:ml-[0] ml-[5px] mr-[31px] text-left text-white_A700"
                      variant="body2"
                    >
                      <>
                        Tupe
                        <br />
                        Support
                      </>
                    </Text>
                  </div>
                  <div className="common-pointer bg-blue_400 flex sm:flex-1 flex-col gap-[59px] items-end justify-start mb-0.5 p-2 rounded-[23px] w-[120px] sm:w-[120px]">
                    <Img
                      src="images/img_plus.svg"
                      className="h-4 md:ml-[0] ml-[85px] w-4"
                      alt="plus_Three"
                    />
                    <Text
                      className="font-bold mb-2.5 md:ml-[0] ml-[5px] mr-[31px] text-left text-white_A700"
                      variant="body2"
                    >
                      Tufahamu
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col h-[344px] md:h-[344px] lg:h-[344px] mr-[3px] items-start justify-start md:mt-0 mt-[5px] w-[100%] md:w-full">
                  <Text
                    className="font-bold ml-0.5 md:ml-[0] mt-[40px] text-black_900 text-left"
                    as="h4"
                    variant="h4"
                  >
                    <>
                      Get all the latest news happening around the Chatazen
                      community.
                    </>
                  </Text>
                  <Text
                    className="font-normal ml-0.5 md:ml-[0] mt-[13px] not-italic text-gray_601 text-left"
                    as="h4"
                    variant="h4"
                  >
                    <>
                      For the first time we have created an application that
                      will allow you to impact real change while earning carbon
                      credits. Our platform features plastic collectors and
                      recycling projects
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:gap-4 mt-[0px] items-end justify-between mt-[22px] w-[99%] md:w-full">
              <Text
                className="text-black_900 text-left w-auto"
                as="h3"
                variant="h3"
              >
                PROJECTS
              </Text>
              <div className="flex flex-row gap-2.5 items-center justify-between my-1 w-[9%]">
                <Text
                  className="font-normal not-italic text-black_900 text-left w-auto h-auto"
                  as="h6"
                  variant="h6"
                >
                  View All
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="common-pointer h-auto w-auto"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[10px] shadow-bs w-full">
              <div className="flex md:flex-col flex-row gap-[11px] items-start justify-start max-w-[1175px] overflow-auto sm:pr-5 pr-[25px] w-full">
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOMEPAGEPage;
