import React from 'react'
import Dev from '../../../assets/images/devprofile.png'
import Stacks from '../../common/StackComponent/StackComponent.jsx';

const About = () => {

    return (
        <section className='border-1 border-danger w-full h-full flex flex-col px-4 bg-gray text-gray-300 p-20 text-center justify-center'>
            <h1 className='bg-gradient-to-r text-4xl from-emerald-500 to-gray-200 text-transparent bg-clip-text font-bold mb-8 mx-auto w-fit lg:text-6xl'>Sobre</h1>
            <div className='flex flex-col gap-20'>
                <div className='w-full flex flex-col gap-10'>
                    <p className='text-lg'>Olá! Meu nome é Vinícius Pereira, sou estudante de Análise e Desenvolvimento de Sistemas e um entusiasta do Desenvolvimento Web Front-End. Desde que comecei a estudar programação, fiquei fascinado com a possibilidade de criar interfaces funcionais e atraentes que proporcionem uma ótima experiência ao usuário. Meu objetivo é contribuir para projetos desafiadores enquanto desenvolvo minhas habilidades técnicas e colaborativas.</p>
                    <div>
                        <img src={Dev} alt="" />
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