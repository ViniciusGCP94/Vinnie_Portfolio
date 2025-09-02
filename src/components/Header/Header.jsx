import React, { useState } from "react";
import { Linkedin, Github, Download, Menu} from 'lucide-react'
import Logo from '../../assets/images/logo512x512.png'

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-tr from-black to-gray-900 p-4 text-emerald-500 lg:px-30 lg:py-6 border-1 border-danger">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
            {/* Marca ou Logo */}
            <div className="font-bold border-3 border-emerald-500 rounded-full w-15 p-3 lg:w-18">
                <img src={Logo} alt="" />
            </div>

            {/* Botão para telas pequenas (ícone de hambúrguer) */}
            <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-800 focus:outline-none border-4 border-emerald-500 rounded-full p-2"
            aria-label="Toggle menu"
            >
            <Menu className="h-8 w-8 text-emerald-500" />
            </button>

            {/* Links do Menu */}
            <div
            className={`flex flex-col gap-y-9 lg:flex lg:flex-row lg:gap-x-12 lg:items-center lg:w-4/5 ${
                isMenuOpen ? "flex" : "hidden"
            } w-full`}
            >
                <div className="text-xl lg:flex-grow lg:flex lg:justify-evenly">
                    <a
                    href="#"
                    className="block py-2 mt-4 lg:inline-block lg:mt-0 text-emerald-500 text-left hover:text-gray-400 mr-4"
                    >
                    Home
                    </a>
                    <a
                    href="#"
                    className="block py-2 mt-4 lg:inline-block lg:mt-0 text-emerald-500 text-left hover:text-gray-400 mr-4"
                    >
                    Sobre
                    </a>
                    <a
                    href="#"
                    className="block py-2 mt-4 lg:inline-block lg:mt-0 text-emerald-500 text-left hover:text-gray-400 mr-4"
                    >
                    Projetos
                    </a>
                    <a
                    href="#"
                    className="block py-2 mt-4 lg:inline-block lg:mt-0 text-emerald-500 text-left hover:text-gray-400"
                    >
                    Contato
                    </a>
                </div>
                <div className="flex text-left text-lg gap-x-5 lg:hidden">
                    <a className="p-2 border-1 rounded-full bg-black border-white"><Github size={28} color="white" /></a>
                    <a className="p-2 border-1 rounded-lg bg-blue-400 border-blue-400 "><Linkedin size={28} color="#d1d5db" /></a>
                </div>
                <div>
                    <button className="w-2/3 flex justify-center items-center gap-x-2 border-2 rounded-lg p-2 md:w-64">
                        Download Curriculo
                        <Download size={22} />
                    </button>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default ResponsiveNavbar;
