import Image from "next/image"
import recru2 from "../public/assets/recru2.png"
import Fleche from "../public/assets/Fleche.png"
import recru3 from "../public/assets/recru3.png"
import recru1 from "../public/assets/recru1.png"
import felchevert from "../public/assets/flechevert.png"
import flecherose from "../public/assets/felcherose.jpeg"


export function Features() {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
      <div className="flex flex-col gap-x-6 sm:flex-row">
        <div className="w-full sm:w-1/2 lg:py-[56px lg:pr-[56px] ">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px] ">Sales Monitoring</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px] ">Simplify your sales monitoring</h1>

          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Online recruitment is essential for modern businesses,
            enabling quick and efficient access to a vast pool of candidates through platforms like LinkedIn and Indeed.
            It streamlines the hiring process with targeted postings, 
            automated tests, and video interviews, enhancing a company's competitiveness in the job market.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px] ">
            <li>lorem ipsum dolor sit amet</li>
            <li>lorem ipsum dolor sit amet</li>
            <li>lorem ipsum dolor sit amet</li>
          </ul>
          <p className="flex items-center pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
            Learn more{""}
            <span className="ml-2"><Image src={Fleche} alt="Fleche" width={24} height={24} layout="fixed" /></span>
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <Image src={recru2} alt="recru2" className="w-full" />
        </div>
      </div>




      <div className="flex flex-col gap-x-6 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <Image src={recru3} alt="recru3" className="w-full" />
        </div>
        <div className="w-full sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#00A424] lg:text-[18px]">Customer support</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">Get in touch with your Customers</h1>
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Online recruitment is essential for modern businesses,
            enabling quick and efficient access to a vast pool of candidates through platforms like LinkedIn and Indeed.
            It streamlines the hiring process with targeted postings, 
            automated tests, and video interviews, enhancing a company's competitiveness in the job market.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li>lorem ipsum dolor sit amet</li>
            <li>lorem ipsum dolor sit amet</li>
            <li>lorem ipsum dolor sit amet</li>
          </ul>
          <p className="flex items-center pt-[24px] font-medium text-[#00A424] lg:text-[18px]">
            Learn more
            <span className="ml-2"><Image src={felchevert} alt="Fleche" width={24} height={24} layout="fixed" /></span>
          </p>
        </div>
      </div>


      <div className="flex flex-col gap-x-6 sm:flex-row">
        
        <div className="w-full sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px]">Customer support</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">Get in touch with your Customers</h1>
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Online recruitment is essential for modern businesses,
            enabling quick and efficient access to a vast pool of candidates through platforms like LinkedIn and Indeed.
            It streamlines the hiring process with targeted postings, 
            automated tests, and video interviews, enhancing a company's competitiveness in the job market.
          </p>
          <div className="flex w-full gap-x-[24px] pt-[24px] " >

            <div className="w-1/2 flex flex-col gap-y-3 " >
                <h3 className="text-[20px] font-meduim text-[#172026] " >100+</h3>
                <p className="text-[#36485C]" >Lorem ipsum dolor sit</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3 " >
                <h3 className="text-[20px] font-meduim text-[#172026] " >800+</h3>
                <p className="text-[#36485C]" >Conse adipscing elit</p>
            </div>


          </div>
          <p className="flex items-center pt-[24px] font-medium text-[#EB2891] lg:text-[18px]">
            Learn more
            <span className="ml-2"><Image src={flecherose} alt="Fleche" width={24} height={24} layout="fixed" /></span>
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <Image src={recru1} alt="recru3" className="w-full" />
        </div>
      </div>
   
    



    </div>
  );
}
