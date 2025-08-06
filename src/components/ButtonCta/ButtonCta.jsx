import React from 'react'
import '../../index.css'

const ButtonCta = () => {

    const ButtonName = 'Clique Aqui'
    return (
        <>
            <button className="text-lg font-bold font-[Montserrat] text-emerald-500 border-4 rounded-xl border-emerald-500 px-8 py-2 hover:text-black hover:border-black hover:bg-emerald-500 hover:shadow-[5px_5px_10px_rgba(4,_255,_140,_0.5)]" >
                {ButtonName}
            </button>
        </>
    )
}

export default ButtonCta