import Dev from '../../../assets/images/devprofile.png'
import Stacks from '../../common/StackComponent/StackComponent.jsx';

const About = () => {
    return (
        <section className="w-full min-h-screen flex flex-col px-4 bg-gradient-to-b from-gray-900 to-black text-gray-300 py-32 lg:py-40 text-center justify-center max-w-7xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-black font-display mb-16 text-white relative inline-block">Sobre</h1>
            
            <div className="flex flex-col gap-12 lg:gap-20">
                
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <p className="text-xl lg:text-4xl leading-relaxed text-gray-200 text-left font-medium">
                        Olá! Eu sou o <span className="text-emerald-400 font-bold">Vinícius Pereira</span>, 
                        estudante de Análise e Desenvolvimento de Sistemas e apaixonado pelo ecossistema 
                        <span className="text-cyan-400 font-bold"> Front-End</span>.
                    </p>

                    <div className="relative group max-w-md mx-auto lg:mr-0">
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#04ff8c]/40 to-cyan-500/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                        <div className="relative border-2 border-emerald-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-2">
                            <img src={Dev} alt="Vinícius Pereira" width="450" height="450" fetchpriority="high" className="w-full h-auto" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                        </div>
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <p className="text-lg lg:text-xl leading-relaxed text-gray-400 text-left">
                        Minha jornada na programação é movida pela curiosidade de transformar linhas de código em 
                        <span className="text-white border-b border-emerald-500/50"> interfaces funcionais e atraentes</span>. 
                        Acredito que o design e a performance devem caminhar juntos para criar experiências memoráveis.
                    </p>
                    
                    <p className="flex items-center text-lg lg:text-xl leading-relaxed text-gray-400 text-left italic border-l-4 border-emerald-500 pl-6 py-2 bg-white/5 rounded-r-xl">
                        "Meu objetivo é contribuir em projetos desafiadores, unindo rigor técnico e colaboração para construir o futuro da web."
                    </p>
                </div>

                <div className="mt-10">
                    <Stacks />
                </div>
            </div>    
        </section>
    )
}

export default About