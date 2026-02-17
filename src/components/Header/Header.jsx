import { useState } from "react";
import {Github,Linkedin, Download, Menu} from 'lucide-react'
import Logo from '../../assets/images/logo-VP.webp'

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
        {isMenuOpen && (
            <div 
            className="fixed inset-0 bg-[#000000CC] z-40 lg:hidden transition-all duration-300"
            onClick={closeMenu}
            />
        )}

        <nav className=" fixed top-0 left-0 w-full z-50 p-4 text-emerald-500 bg-[#0a0a0a] lg:bg-[#0a0a0a]/80 lg:backdrop-blur-md border-b border-[#04ff8c]/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] lg:px-30 lg:py-4 border-1 ">
            <div className="container mx-auto flex items-center justify-between flex-wrap">
                <div className="font-bold border-3 border-emerald-500 rounded-full w-16 lg:w-24 p-3 hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40">
                    <img src={Logo} 
                        alt="Logo VP Websites" 
                        width="60" 
                        height="60" 
                        fetchPriority="high" 
                        className="w-full h-full object-contain"
                    />
                </div>

                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-gray-800 focus:outline-none border-4 border-emerald-500 rounded-full p-2"
                    aria-label="Toggle menu"
                >
                <Menu className="h-8 w-8 text-emerald-500" />
                </button>

                <div
                className={`flex flex-col gap-y-9 lg:flex lg:flex-row lg:gap-x-12 lg:items-center lg:w-4/5 ${
                    isMenuOpen ? "flex" : "hidden"
                } w-full`}
                >
                    <div className="text-xl lg:flex-grow lg:flex lg:justify-evenly">
                        <a
                            href="#"
                            className="block py-2 mt-4 lg:inline-block lg:mt-0 text-white text-left hover:text-emerald-500 mr-4 font-semibold transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-emerald-500 after:to-cyan-500 hover:after:w-full after:transition-all after:duration-300"
                        >
                        Home
                        </a>
                        <a
                            href="#"
                            className="block py-2 mt-4 lg:inline-block lg:mt-0 text-white text-left hover:text-emerald-500 mr-4 font-semibold transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-emerald-500 after:to-cyan-500 hover:after:w-full after:transition-all after:duration-300"
                        >
                        Sobre
                        </a>
                        <a
                            href="#"
                            className="block py-2 mt-4 lg:inline-block lg:mt-0 text-white text-left hover:text-emerald-500 mr-4 font-semibold transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-emerald-500 after:to-cyan-500 hover:after:w-full after:transition-all after:duration-300"
                        >
                        Projetos
                        </a>
                        <a
                            href="#"
                            className="block py-2 mt-4 lg:inline-block lg:mt-0 text-white text-left hover:text-emerald-500 mr-4 font-semibold transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-emerald-500 after:to-cyan-500 hover:after:w-full after:transition-all after:duration-300"
                        >
                        Contato
                        </a>
                    </div>
                    <div className="flex text-left text-lg gap-x-5 lg:hidden">
                        <a className="p-2 border-1 rounded-full bg-black border-white"><Github size={28} color="white" /></a>
                        <a className="p-2 border-1 rounded-lg bg-blue-400 border-blue-400 "><Linkedin size={28} color="#d1d5db" /></a>
                    </div>
                    <div>
                        <button className="w-2/3 flex justify-center items-center gap-x-2 border-2 border-emerald-500 rounded-lg px-6 py-3 md:w-64 font-bold hover:bg-emerald-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:-translate-y-0.5">
                            Download Curriculo
                            <Download size={22} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  );
};

export default ResponsiveNavbar;
