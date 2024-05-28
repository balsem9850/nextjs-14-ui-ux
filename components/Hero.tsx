import Image from "next/image";
import Fleche from "../public/assets/Fleche.png";
import HeroImage from "../public/assets/HeroImage.png";
import google from "../public/assets/google.png";
import slackIcon from "../public/assets/Slack_icon.png";
import trust from "../public/assets/trust.png";
import clutch from "../public/assets/clutch.png";
import cnn from "../public/assets/CNN.png";

export function Hero() {
    return (
        <div className=" mt-20 pt-4 lg:pt-10 bg-gradient-to-b from-purple-500 to-pink-500">
            <div className="px-4 lg:px-[280px]">
                <h1 className="text-center text-[32px] lg:text-[64px] font-medium text-white">
                    Start monitoring your website like a pro
                </h1>
                <p className="pt-6 text-center text-white text-[16px] lg:text-[18px] lg:leading-7">
                    Get a bird's eye view with our customizable dashboard. Stay on top of things!
                    Revamp your work process with our game-changing features. Boost productivity and efficiency!
                </p>
                <div className="flex justify-center gap-x-6 pt-8">
                    <button className="py-4 px-8 rounded-lg bg-[#4328EB] text-white">
                        Try for free
                    </button>
                    <button className="flex items-center justify-center px-8 text-[#4328EB]">
                        View Pricing <span className="pl-2">
                            <Image src={Fleche} alt="Learn more" width={24} height={24} layout="fixed" />
                        </span>
                    </button>
                </div>
            </div>
            <div className="relative w-full flex flex-col items-center">
                <Image src={HeroImage} alt="Dashboard overview" className="w-[40%] lg:w-[20%] h-auto translate-y-3 lg:translate-y-5 " />
                <p className="mt-4 text-white">Trusted by these companies</p>
                <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 px-4 mt-4">
                    <Image src={google} alt="Google" width={50} height={25} />
                    <Image src={clutch} alt="Clutch" width={50} height={25} />
                    <Image src={trust} alt="Trust" width={50} height={25} />
                    <Image src={cnn} alt="CNN" width={50} height={25} />
                    <Image src={slackIcon} alt="Slack" width={50} height={25} />
                </div>
            </div>
        </div>
    );
}
