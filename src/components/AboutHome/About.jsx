import React from 'react'
import Html5 from '../../assets/images/html.png'
import Css3 from '../../assets/images/css_3.png'
import Javascript from '../../assets/images/js.png'
import ReactJS from '../../assets/images/reactjs.svg'
import Dev from '../../assets/images/devprofile.png'

const About = () => {

    return (
        <section className='border-1 border-danger w-full h-full flex flex-col px-4 bg-gray text-gray-300 p-20 text-center justify-center'>
            <h1 className='bg-gradient-to-r text-4xl from-emerald-500 to-gray-200 text-transparent bg-clip-text font-bold mb-8 mx-auto w-fit lg:text-6xl'>Sobre</h1>
            <div className='flex flex-col gap-20'>
                <div className='w-full flex flex-col gap-10'>
                    <p className='text-lg'>Olá! Meu nome é Vinícius Pereira, sou estudante de Análise e Desenvolvimento de Sistemas e um entusiasta do Desenvolvimento Web Front-End. Desde que comecei a estudar programação, fiquei fascinado com a possibilidade de criar interfaces funcionais e atraentes que proporcionem uma ótima experiência ao usuário. Meu objetivo é contribuir para projetos desafiadores enquanto desenvolvo minhas habilidades técnicas e colaborativas.</p>
                    <ul className='flex text-emerald-50 text-sm text-center items-end'>
                        <li className='w-1/4 p-2 '><img src={Html5} alt="html5 logo" /> Html 5</li>
                        <li className='w-1/4 p-2 '><img src={Css3} alt="css3 logo " />Css 3</li>
                        <li className='w-1/4 p-2 '><img src={Javascript} alt="javascript" />Javascript</li>
                        <li className='w-1/4 p-2 '><img src={ReactJS} alt="ReactJS" />React</li>
                    </ul>
                </div>
                <div>
                    <img src={Dev} alt="" />
                </div>
            </div>
                
        </section>
    )
}

export default About