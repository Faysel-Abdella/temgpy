// import Navbar from "@/components/common/blogs-navbar";
import Home from "@/components/sections/blogs/home";
import Subscribe from "@/components/sections/blogs/subscribe";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

export default function BlogsWrapper() {
  return (
    <div className="flex flex-col">
      {/* <Navbar /> */}
      <Home />

      <div className="sticky top-[153px] bg-white z-40 py-3 flex items-center justify-center rounded-ss-[56px] rounded-se-[56px]">
        <div className="absolute bg-white size-[56px] top-0 z-20 rounded-ss-[56px] left-0" />
        <div className="absolute bg-muted size-[56px] top-0 z-10 left-0" />
        <div className="absolute bg-white size-[56px] top-0 z-20 rounded-se-[56px] right-0" />
        <div className="absolute bg-muted size-[56px] top-0 z-10 right-0" />
        <div className="flex flex-col md:flex-row w-full py-2 max-w-[1070px] justify-between items-center h-full">
          {/* className="w-full md:w-auto h-full items-center flex"> */}
          <div className="flex items-center w-full justify-between">
            <p className="self-stretch relative justify-start  text-[32px] font-medium font-clash leading-10">
              The Latest Out-source Publications
            </p>
            <p className="">See more</p>
          </div>
        </div>
      </div>

      <div className="flex pt-8 w-full z-20 bg-white  items-center justify-center mx-auto pb-8">
        <div className="flex  flex-col items-start justify-center lg:flex-row space-x-10 max-w-[1072px] ">
          <div className="flex w-full lg:w-1/2">
            <div className="flex flex-col h-full">
              <div className="relative w-full aspect-[16/9] bg-[#F2F2FA] rounded-lg overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Featured article image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col flex-grow gap-2 font-instrument">
                <p className="text-md font-normal  opacity-75 mb-2">Politics</p>
                <h2 className="text-2xl font-medium font-clash">
                  A Decisive Victory for Progressive Policies
                </h2>
                <p className="text-lg text-description mt-2  font-normal">
                  World leaders gathered at the Global Climate Summit to discuss
                  urgent climate action
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-lg font-medium tracking-wide">
                    Jane Smith
                  </span>
                  <span className=" size-[7px] bg-black rounded-full items-center justify-center" />
                  <span className="text-md font-medium tracking-wide">
                    October 10, 2023
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full lg:w-1/2 font-instrument">
            <div className="flex flex-col space-y-6">
              {/* Article 1 */}
              <div className="flex space-x-5">
                <div className="flex-shrink-0 w-[140px] h-[140px] bg-[#F2F2FA] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="AI article image"
                    width={140}
                    height={140}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col ">
                  <span className="text-md font-normal opacity-80 mb-1">
                    AI and Machin learning
                  </span>
                  <h3 className="text-xl font-medium font-clash leading-[27px]">
                    The Future of AI: How Businesses Can Stay Ahead
                  </h3>
                  <span className="mt-4 text-md opacity-80 font-normal">
                    Thomas Dohmke
                  </span>
                </div>
              </div>

              {/* Article 2 */}

              <div className="flex space-x-5">
                <div className="flex-shrink-0 w-[140px] h-[140px] bg-[#F2F2FA] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="AI article image"
                    width={140}
                    height={140}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col ">
                  <span className="text-md font-normal opacity-80 mb-1">
                    Cloud Computing
                  </span>
                  <h3 className="text-xl font-medium font-clash leading-[27px]">
                    Cloud Computing Trends: What&#39;s Next for Enterprises?
                  </h3>
                  <span className="mt-4 text-md opacity-80 font-normal">
                    Ahmed Tarif
                  </span>
                </div>
              </div>

              {/* Article 3 */}

              <div className="flex space-x-5">
                <div className="flex-shrink-0 w-[140px] h-[140px] bg-[#F2F2FA] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="AI article image"
                    width={140}
                    height={140}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col ">
                  <span className="text-md font-normal opacity-80 mb-1">
                    Software Solutions
                  </span>
                  <h3 className="text-xl font-medium font-clash leading-[27px]">
                    Why Custom Software Solutions are Key to Business Growth
                  </h3>
                  <span className="mt-4 text-md opacity-80 font-normal">
                    Alexa.A
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full mx-auto items-center justify-center bg-white">
        <Separator className="w-full max-w-[1082px] bg-[#d0d2d8]" />
      </div>

      <div className="flex pt-14 w-full z-20 bg-white  items-center justify-center mx-auto pb-20">
        <div className="flex flex-col gap-8 items-start justify-start w-full max-w-[1072px] mx-auto">
          <p className="self-stretch relative justify-start text-[32px] font-medium font-clash leading-10">
            Out-source Blogs
          </p>
          <div className="flex flex-wrap gap-6 items-start w-full">
            <div className="w-[341px] px-0 inline-flex flex-col justify-start items-start gap-4">
              <div className="relative w-full aspect-[16/9] bg-[#F2F2FA] rounded-lg overflow-hidden ">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Featured article image"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-start mt-2 items-start gap-1 px-2 ">
                <p className="relative justify-start opacity-75 text-base font-normal font-instrument leading-normal">
                  UI/UX Design
                </p>
                <p className="w-[318px] relative justify-start text-[#222222] text-xl font-medium font-['Clash_Grotesk'] leading-[25px]">
                  How UI/UX Design Impacts Software Success
                </p>
              </div>
            </div>

            <div className="w-[341px] px-0 inline-flex flex-col justify-start items-start gap-4">
              <div className="relative w-full aspect-[16/9] bg-[#F2F2FA] rounded-lg overflow-hidden ">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Featured article image"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-start mt-2 items-start gap-1 px-2 ">
                <p className="relative justify-start opacity-75 text-base font-normal font-instrument leading-normal">
                  Data Analytics
                </p>
                <p className="w-[318px] relative justify-start text-[#222222] text-xl font-medium font-['Clash_Grotesk'] leading-[25px]">
                  How Data Analytics is Transforming Decision-Making
                </p>
              </div>
            </div>

            <div className="w-[341px] px-0 inline-flex flex-col justify-start items-start gap-4">
              <div className="relative w-full aspect-[16/9] bg-[#F2F2FA] rounded-lg overflow-hidden ">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Featured article image"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-start mt-2 items-start gap-1 px-2 ">
                <p className="relative justify-start opacity-75 text-base font-normal font-instrument leading-normal">
                  IT Consultation
                </p>
                <p className="w-[318px] relative justify-start text-[#222222] text-xl font-medium font-['Clash_Grotesk'] leading-[25px]">
                  The Role of IT Consultation in Digital Transformation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-4 w-full z-20 bg-white  items-center justify-center mx-auto pb-10">
        <div className="flex w-full mt-10 max-w-[1012px] items-center gap-8">
          <Separator className="flex-1" />
          <div className="flex size-16 bg-gradient-to-b from-primary to-primary-faded rounded-full" />
          <Separator className="flex-1" />
        </div>
        <p className="self-center mt-5 relative justify-start text-2xl font-medium font-clash leading-10">
          Out Source
        </p>
      </div>

      <Subscribe />
    </div>
  );
}
