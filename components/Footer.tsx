import Image from "next/image"
import logo from "../public/assets/logo.png"
export function Footer(){
    return (

        <div className="pt-[80px] pb-[40px] " >
            <div className="flex items-center justify-center gap-x-[12px] " >
                <Image src={logo} alt="logo" width={25} height={25}  ></Image>
                <p className="font-bold text-[#36485C] text-[17px] " >Balsem Elloumi </p>

                

            </div>
            <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5 " >
                <li>Features</li>
                <li>Pricing</li>
                <li>Enterprise</li>
                <li>Careers</li>

            </ul>

            <p className="pt-[56px] text-center text-[14px] font-meduim text-[#5F7896] sm:pt-5 " >© Copyright 2024 , Your Site. All rights reserverd . </p>
              
        </div>

    )
} 