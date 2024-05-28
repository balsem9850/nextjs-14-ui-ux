import Image from "next/image"
import logo from "../public/assets/logo.png"
import menu from "../public/assets/menu.png"
import userprofile from "../public/assets/userprofile.png"

const navLinks = [
    { name: 'Features' },
    { name: 'Pricing' },
    { name: 'Entreprise' },
    { name: 'Careers' },
    { name: 'Open an Account' }  // Ajout du nouveau lien
];

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex w-full items-center justify-between px-5 py-4 lg:container lg:mx-auto lg:px-20">
            <div className="flex items-center">
                <Image src={logo} alt="logo" width={50} height={50} />
                <div className="hidden lg:flex pl-20 gap-x-14"> {/* Modification des espaces entre les liens */}
                    {navLinks.map((item, index) => (
                        <p className="text-[#36485C] font-medium cursor-pointer" key={index}>{item.name}</p> // Ajout de 'cursor-pointer' pour interactivité
                    ))}
                </div>
            </div>

            <div className="flex gap-x-5">
                <div className="flex items-center gap-x-2">
                    <Image src={userprofile} alt="user profile" width={50} height={50} />
                    <span className="hidden font-medium text-[#36485C] lg:block">Sign In</span>
                </div>
                
                <Image src={menu} alt="menu" width={25} height={25} className="lg:hidden" />
            </div>
        </nav>
    );
}
