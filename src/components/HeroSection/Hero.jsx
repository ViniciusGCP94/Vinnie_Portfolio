import React from 'react'
import { useState, useEffect } from 'react';
import Avatar from './ViniciusAvatar/Vinicius'

const Hero = () => {
    const words = ['Front-End', 'Web', 'JavaScript'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const wordInterval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2500);

        return () => {
            clearInterval(wordInterval);
        };
    }, [words.length]);

    return (
        <section className=" border-1 border-danger pt-24 pb-5 px-4 min-h-screen flex flex-col items-center bg-gradient-to-tr from-black to-gray-900 text-emerald-500 lg:flex-row-reverse lg:justify-between lg:pb-20 lg:px-32 lg:max-h-full lg:pt-60">
            <Avatar />
            <div className="container mx-auto text-center text-gray-200 lg:w-3/5 lg:text-left lg:ms-0">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">Olá, sou Vinícius!</h1>
                <h2 className="bg-gradient-to-r from-emerald-500 via-green-400 to-gray-200 text-transparent bg-clip-text text-2xl text-center lg:w-fit font-bold mb-8 lg:text-4xl">Desenvolvedor {''}
                    <span className='transition-all duration-500' key={words[currentWordIndex]}> {words[currentWordIndex]} </span>    
                </h2>
                <p className=" tracking-wide leading-relaxed text-emerald-50 text-lg mb-6 max-w-lg mx-auto lg:mx-0 lg:text-xl lg:max-w-full">Escrevendo código não! Construindo projetos. Da validação de cartões de crédito à criação de experiências com IA, o meu portfólio demonstra o meu entusiasmo por construir a web na prática.</p>
                <p className='text-lg mb-6'>Qualidade, Proatividade, Fundamentos</p>

                <a href="#projetos" className="inline-block bg-emerald-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-emerald-600 hover:shadow-[5px_5px_10px_rgba(4,_255,_140,_0.5)] transition duration-300">Ver Projetos</a>
            </div>
        </section> 
    )
}

export default Hero