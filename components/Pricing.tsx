import Image from "next/image"
import check from "../public/assets/check.png"

export function Pricing () {
    return( 
        <div className="py-[48px] lg:py-[60px] " >
            <h1 className="text-[#172026] text-center font-meduim  text-2xl  lg:text-[42px]  ">
                felxble palns for you  </h1>
            <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px] ">
                no heeden fees </p>
            <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row " >
               
            <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between " >
                    <div>
                        <h3 className="font-meduim text-[#4328EB] text-[18px] lg:text-xl " > 
                            Free Trial
                        </h3>
                        <p className="pt-[12px] text[#36485C] lg:text-[18px] " >
                          Perfect for testing the waters 
                        </p>
                        <h2 className="pt-4 text-2xl font-meduim lg:text-[32px]  " >0$
                        <span className="text-[#5F7896]" >/mo</span> </h2>
                        <ul className="felx flex-col gap-y-2  pt-4 text-[#5F7896]" >
                            <li className="flex items-center gap-x-2  " >
                                <span  >
                                    <Image src={check} alt="check" width={20} height={20} ></Image>
                                </span>
                                lorem ipsum dec pum 


                            </li>
                            <li className="flex items-center gap-x-2  " >
                                <span  >
                                    <Image src={check} alt="check"  width={20} height={20} ></Image>
                                </span>
                                lorem ipsum dec pum 


                            </li>

                            <li className="flex items-center gap-x-2  " >
                                <span  >
                                    <Image src={check} alt="check"  width={20} height={20} ></Image>
                                </span>
                                lorem ipsum dec pum 


                            </li>

                            <li className="flex items-center gap-x-2  " >
                                <span  >
                                    <Image src={check} alt="check"  width={20} height={20} ></Image>
                                </span>
                                lorem ipsum dec pum 


                            </li>


                            

                        </ul>
                    </div>
                    <button className="mt-[16px] rounded-[4] bg-white py-[14px] text-[#4328EB] font-meduim  " >
                        Start Trial 
                    </button>


                </div>



                < div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col " >
                    <div>
                        <h3 className="font-meduim text-white text-[18px] lg:text-xl " > 
                            Business 
                        </h3>
                        <p className="pt-[12px] text[#F4F8FA] lg:text-[18px] " >
                          Perfect for small businesses 
                        </p>
                        <h2 className="pt-4 text-2xl font-meduim text-white lg:text-[32px]  " >0$
                        <span className="text-[#F4F8FA]" >500/mo</span> </h2>
                        <ul className="felx flex-col gap-y-2  pt-4 text-[#F4F8FA]" >
                            <li className="flex items-center gap-x-2  " >
                                <span  >
                                    <Image src={check} alt="check" width={20} height={20} ></Image>
                                </span>
                                lorem ipsum dec pum 


                            </li>
                            <li className="flex items-center gap-x-2  " >
                                <span  >
                                    <Image src={check} alt="check"  width={20} height={20} ></Image>
                                </span>
                                lorem ipsum dec pum 


                            </li>

                            <li className="flex items-center gap-x-2  " >
                                <span  >
                                    <Image src={check} alt="check"  width={20} height={20} ></Image>
                                </span>
                                lorem ipsum dec pum 


                            </li>

                            <li className="flex items-center gap-x-2  " >
                                <span  >
                                    <Image src={check} alt="check"  width={20} height={20} ></Image>
                                </span>
                                lorem ipsum dec pum 


                            </li>
                            <li className="flex items-center gap-x-2  " >
                                <span  >
                                    <Image src={check} alt="check"  width={20} height={20} ></Image>
                                </span>
                                lorem ipsum dec pum 


                            </li>
                            <li className="flex items-center gap-x-2  " >
                                <span  >
                                    <Image src={check} alt="check"  width={20} height={20} ></Image>
                                </span>
                                lorem ipsum dec pum 


                            </li>


                            

                        </ul>
                    </div>
                    <button className="mt-[16px] rounded-[4] bg-white py-[14px] text-[#4328EB] font-meduim  " >
                        Get Started  
                    </button>


                </div>





               < div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between " >
                    <div>
                        <h3 className="font-meduim text-[#4328EB] text-[18px] lg:text-xl " > 
                           Enterprise 
                        </h3>
                        <p className="pt-[12px] text[#36485C] lg:text-[18px] " >
                          Perfect for big companies 
                        </p>
                        <h2 className="pt-4 text-2xl font-meduim lg:text-[32px]  " >0$
                        Custom </h2>
                        <p className="pt-4 text-[16px] text-[#36485C] " >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


                       <p className="pt-2 text-[16px] text-[#36485C] " >Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                         Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. 
                         Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                          Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. 
                          Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta.</p>




                    </div>
                    <button className="mt-[16px] rounded-[4] bg-white py-[14px] text-[#4328EB] font-meduim  " >
                       Contact Us 
                    </button>


                </div>





            </div>

        </div>    

       

    )
}