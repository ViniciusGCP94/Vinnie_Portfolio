import { useState, useEffect } from 'react';
import Avatar from '../../ViniciusAvatar/Vinicius'

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
        <section className="pt-32 pb-20 px-4 min-h-screen flex flex-col items-center bg-gradient-to-tr from-black to-gray-900 text-emerald-500 lg:flex-row-reverse lg:justify-between lg:px-32 lg:pt-40 relative overflow-hidden bg-grid-pattern">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-radial from-emerald-500/8 to-transparent pointer-events-none"></div>
  
            <Avatar />
            <div className="container mx-auto text-center text-white tracking-tighter lg:w-3/5 lg:text-left lg:ms-0">
                <h1 className="text-5xl lg:text-7xl font-black font-display mb-6 leading-none tracking-tight drop-shadow-[0_0_40px_rgba(4,255,140,0.2)] relative z-10">Olá, sou Vinícius!</h1>
                <h2 className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 text-transparent bg-clip-text text-3xl text-center lg:w-fit font-black font-display mb-8 lg:text-5xl bg-[length:200%_200%] animate-gradient-shift relative z-10">Desenvolvedor {''}
                    <span className="transition-all duration-500 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text" key={words[currentWordIndex]}> {words[currentWordIndex]} </span>    
                </h2>
                <p className="tracking-wide leading-relaxed text-gray-300 text-lg mb-8 max-w-2xl mx-auto lg:mx-0 lg:text-xl font-normal relative z-10">Escrevendo código não! Construindo projetos. Da validação de cartões de crédito à criação de experiências com IA, o meu portfólio demonstra o meu entusiasmo por construir a web na prática.</p>
                <p className="text-lg mb-8 text-gray-400 font-medium relative z-10">Qualidade, Proatividade, Fundamentos</p>

                <a href="#projetos" className="inline-block bg-transparent text-emerald-500 border-2 border-emerald-500 font-bold py-4 px-8 rounded-xl hover:bg-emerald-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:-translate-y-1 relative z-10">Ver Projetos</a>
            </div>
        </section> 
    )
}

export default Hero