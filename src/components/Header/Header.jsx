import { useState } from "react";
import {Github,Linkedin, Download, Menu} from 'lucide-react';
import Logo from '../../assets/images/Logo-VP-Quadrado.webp';
import Botao from '../common/Button/Button'

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
                <div className="font-bold border-3 border-emerald-500 rounded-full w-16 lg:w-24 hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40">
                    <img src={Logo} 
                        alt="Logo VP Websites" 
                        width="60" 
                        height="60" 
                        fetchPriority="high" 
                        className="w-full h-full object-contain rounded-full"
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
                            href="#home"
                            onClick={closeMenu}
                            className="block py-2 mt-4 lg:inline-block lg:mt-0 text-white text-left hover:text-emerald-500 mr-4 font-semibold transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-emerald-500 after:to-cyan-500 hover:after:w-full after:transition-all after:duration-300"
                        >
                        Home
                        </a>
                        <a
                            href="#about"
                            onClick={closeMenu}
                            className="block py-2 mt-4 lg:inline-block lg:mt-0 text-white text-left hover:text-emerald-500 mr-4 font-semibold transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-emerald-500 after:to-cyan-500 hover:after:w-full after:transition-all after:duration-300"
                        >
                        Sobre
                        </a>
                        <a
                            href="#projects"
                            onClick={closeMenu}
                            className="block py-2 mt-4 lg:inline-block lg:mt-0 text-white text-left hover:text-emerald-500 mr-4 font-semibold transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-emerald-500 after:to-cyan-500 hover:after:w-full after:transition-all after:duration-300"
                        >
                        Projetos
                        </a>
                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="block py-2 mt-4 lg:inline-block lg:mt-0 text-white text-left hover:text-emerald-500 mr-4 font-semibold transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-emerald-500 after:to-cyan-500 hover:after:w-full after:transition-all after:duration-300"
                        >
                        Contato
                        </a>
                    </div>
                    <div className="flex text-left text-lg gap-x-5 lg:hidden">
                        <Botao 
                            href="https://github.com/ViniciusGCP94" 
                            target="_blank" 
                            rel="noreferrer"
                            icon={Github}
                            className=""
                        />

                        <Botao 
                            href="https://www.linkedin.com/in/vinicius-gcp/" 
                            target="_blank" 
                            rel="noreferrer"
                            icon={Linkedin}
                            className=""
                        />
                    </div>
                    <div>
                        <Botao
                            href="/docs/curriculo_Vinicius_Pereira-Desenvolvimento_Fullstack_Javascript.docx.pdf" 
                            download="Curriculo_Vinicius_Pereira.pdf"
                            icon={Download}
                            className="text-center text-xs lg:text-md px-4 py-4 w-auto justify-center">
                                Download Curriculo
                                <Download size={22} />
                        </Botao>
                    </div>
                </div>
            </div>
        </nav>
    </>
  );
};

export default ResponsiveNavbar;
