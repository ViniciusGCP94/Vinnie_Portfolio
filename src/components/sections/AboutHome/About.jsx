import React from 'react'
import Dev from '../../../assets/images/devprofile.png'
import Stacks from '../../common/StackComponent/StackComponent.jsx';

const About = () => {

    return (
        <section className="w-full min-h-screen flex flex-col px-4 bg-gradient-to-b from-gray-900 to-black text-gray-300 py-32 lg:py-40 text-center justify-center max-w-7xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-black font-display mb-16 text-white relative inline-block">Sobre</h1>
            <div className="flex flex-col gap-20 lg:gap-32">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <p className="text-xl lg:text-2xl leading-relaxed text-gray-300 text-left font-normal">Olá! Meu nome é Vinícius Pereira, sou estudante de Análise e Desenvolvimento de Sistemas e um entusiasta do Desenvolvimento Web Front-End. Desde que comecei a estudar programação, fiquei fascinado com a possibilidade de criar interfaces funcionais e atraentes que proporcionem uma ótima experiência ao usuário. Meu objetivo é contribuir para projetos desafiadores enquanto desenvolvo minhas habilidades técnicas e colaborativas.</p>
                    <div className="relative group max-w-md mx-auto lg:mx-0">
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#04ff8c]/40 to-cyan-500/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                        <div className="relative border-2 border-emerald-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-2">
                            <img src={Dev} alt="Vinícius Pereira" className="w-full h-auto" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <Stacks />
                </div>
            </div>    
        </section>
    )
}

export default About