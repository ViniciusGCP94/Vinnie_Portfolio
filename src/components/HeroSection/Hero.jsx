import React from 'react'
import avatar from '../../assets/images/portfolio-image.jpg'

const Hero = () => {
    return (
        <section className="border-1 border-danger flex flex-col justify-center bg-gradient-to-tr from-black to-gray-900 text-emerald-500 lg:flex-row-reverse lg:py-40 px-6 lg:px-32">
            <div class="flex justify-center items-center w-64 md:w-80 lg:w-96 mb-12 mt-8">
                <div class="relative w-full aspect-square">
                    <div class="w-full h-full p-2 bg-emerald-500 shadow-none avatar-container">
                    <img
                        src={avatar}
                        alt="Vinícius"
                        class="w-full h-full object-cover avatar-image"
                    />
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto text-left">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">Bem-vindo ao Meu Portfólio</h1>
                <p className="text-lg lg:text-2xl mb-8">Descubra meus projetos e habilidades em desenvolvimento web.</p>
                <a href="#projetos" className="inline-block bg-emerald-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-emerald-600 hover:shadow-[5px_5px_10px_rgba(4,_255,_140,_0.5)] transition duration-300">Ver Projetos</a>
            </div>
        </section> 
    )
}

export default Hero