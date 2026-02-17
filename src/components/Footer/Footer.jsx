// src/components/sections/Footer/Footer.jsx
import { TechSkills } from '../../data/TechSkills';

const Footer = () => {
    const GitHubIcon = TechSkills.find(s => s.name === "Github")?.icon;
    const LinkedInIcon = TechSkills.find(s => s.name === "Linkedin")?.icon;
    const MailIcon = TechSkills.find(s => s.name === "Gmail")?.icon;

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full bg-gradient-to-t from-black via-gray-900 to-transparent border-t border-emerald-500/10 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-48 bg-[radial-gradient(ellipse_at_top,rgba(4,255,140,0.06),transparent_70%)] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:py-20">
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
                    
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="w-16 h-16 rounded-full border-3 border-emerald-500 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300">
                            <span className="text-3xl font-black font-display text-emerald-500">VP</span>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 font-body text-sm">
                                Desenvolvedor Front-End
                            </p>
                            <p className="text-gray-500 font-body text-xs mt-1">
                                Construindo experiências digitais
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <p className="text-gray-400 font-semibold text-sm uppercase tracking-wider">
                            Conecte-se
                        </p>
                        <div className="flex gap-4">
                            <a 
                                href="https://github.com/ViniciusGCP94" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-emerald-500/10 flex items-center justify-center hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <GitHubIcon className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300" />
                            </a>
                            
                            <a 
                                href="https://linkedin.com/in/vinicius-gcp" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-emerald-500/10 flex items-center justify-center hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <LinkedInIcon className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300" />
                            </a>
                            
                            <a 
                                href="mailto:viniciusgcp94@gmail.com"
                                className="group w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-emerald-500/10 flex items-center justify-center hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-300"
                                aria-label="Email"
                            >
                                <MailIcon className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent mb-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    
                    <p className="text-gray-500 text-sm font-body text-center md:text-left">
                        &copy; {currentYear} Vinícius Pereira. Todos os direitos reservados.
                    </p>

                    <div className="flex gap-6 text-sm font-body">
                        <a 
                            href="#home" 
                            className="text-gray-400 hover:text-emerald-500 transition-colors duration-300"
                        >
                            Início
                        </a>
                        <a 
                            href="#about" 
                            className="text-gray-400 hover:text-emerald-500 transition-colors duration-300"
                        >
                            Sobre
                        </a>
                        <a 
                            href="#projetos" 
                            className="text-gray-400 hover:text-emerald-500 transition-colors duration-300"
                        >
                            Projetos
                        </a>
                        <a 
                            href="#contato" 
                            className="text-gray-400 hover:text-emerald-500 transition-colors duration-300"
                        >
                            Contato
                        </a>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-gray-600 text-xs font-body">
                        Feito com <span className="text-emerald-500 animate-pulse">♥</span> usando React, Tailwind CSS e muito café ☕
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;