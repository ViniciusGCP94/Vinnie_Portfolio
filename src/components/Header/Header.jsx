import React from 'react'
import { Github, Linkedin, Download } from 'lucide-react';

const Header = () => {

    return (
            <header className="w-screen flex flex-col gap-10  bg-emerald-500 p-4">
                <div className='main-header flex justify-between'>
                    <h1 className="text-3xl font-bold text-white">Meu Site</h1>
                    <nav className='w-32 border-1' >
                        <ul className="w-full flex-col space-y-8 p-2">
                            <li className='text-end'><a href="#home"    className="text-white text-2xl font-bold active:text-slate-800 hover:text-black">Home</a></li>
                            <li className='text-end'><a href="#about"   className="text-white text-2xl font-bold active:text-slate-800 hover:text-black">Sobre</a></li>
                            <li className='text-end'><a href="#about"   className="text-white text-2xl font-bold active:text-slate-800 hover:text-black">Projetos</a></li>
                            <li className='text-end'><a href="#contact" className="text-white text-2xl font-bold active:text-slate-800 hover:text-black">Contato</a></li>
                        </ul>
                    </nav>
                </div>
                <nav className='flex flex-col items-end gap-5 p-2 border-1'>
                    <a className='text-end text-xl flex items-center justify-end gap-2 border-2 border-black rounded-full p-2 bg-black' href=""><Github className='bg-black text-white' size={25} /></a>
                    <a className='text-end text-xl flex items-center justify-end gap-2 border-2 rounded-full p-2' style={{ backgroundColor: '#0077B5', borderColor:'#0077B5' }} href=""><Linkedin style={{ backgroundColor: '#0077B5' }} className='text-white' size={25} /></a>
                    <button className='w-50 text-end text-xl border-2 rounded-full p-2'>Download Curriculo</button>
                </nav>
            </header>
    )
}

export default Header