import React from 'react'
import Avatar from '../../components/ViniciusAvatar/Vinicius.jsx'

const Hero = () => {
    return (
        <section className="border-1 border-danger pt-24 min-h-screen flex flex-col items-center bg-gradient-to-tr from-black to-gray-900 text-emerald-500 lg:flex-row-reverse lg:py-40 px-6 lg:px-32">
            <Avatar />
            <div className="container mx-auto text-center text-gray-200">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">Olá, sou Vinicius!</h1>
                <h2 className="bg-gradient-to-r from-emerald-500 via-green-400 to-gray-200 text-transparent bg-clip-text text-2xl font-bold mb-8">Desenvolvedor Front-End.</h2>
                <p className='text-lg mb-6'>Qualidade, Proatividade, Fundamentos</p>
                <a href="#projetos" className="inline-block bg-emerald-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-emerald-600 hover:shadow-[5px_5px_10px_rgba(4,_255,_140,_0.5)] transition duration-300">Ver Projetos</a>
            </div>
        </section> 
    )
}

export default Hero