// src/components/sections/Contact/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState("idle");
    const [focusedField, setFocusedField] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            formRef.current.reset();
        } catch (error) {
            console.error("Erro ao enviar:", error);
            setStatus("error");
        }
    };

    const inputBase = "w-full bg-black/30 border-2 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none transition-all duration-300 font-body text-base";
    const inputIdle = "border-emerald-500/20 focus:border-emerald-500 focus:shadow-[0_0_20px_rgba(4,255,140,0.15)]";

    return (
        <section 
            id="contato"
            className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-32 lg:py-40 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-[radial-gradient(ellipse_at_bottom,rgba(4,255,140,0.08),transparent_70%)] pointer-events-none"></div>
            <div className="relative z-10 text-center mb-16">
                <h2 className="text-5xl lg:text-7xl font-black font-display text-white mb-4">
                    Contato
                </h2>
                <p className="text-gray-400 text-lg font-body max-w-md mx-auto leading-relaxed">
                    Tem um projeto em mente ou quer trocar uma ideia? Me manda uma mensagem!
                </p>

                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto mt-6"></div>
            </div>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative z-10 w-full max-w-2xl flex flex-col gap-5"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative group">
                        <label className={`absolute -top-2.5 left-4 text-xs font-bold px-1 bg-gray-900 transition-all duration-300 ${focusedField === "nome" ? "text-emerald-500" : "text-gray-500"}`}>
                            NOME
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Seu nome"
                            required
                            className={`${inputBase} ${inputIdle}`}
                            onFocus={() => setFocusedField("nome")}
                            onBlur={() => setFocusedField(null)}
                        />
                    </div>

                    <div className="relative group">
                        <label className={`absolute -top-2.5 left-4 text-xs font-bold px-1 bg-gray-900 transition-all duration-300 ${focusedField === "email" ? "text-emerald-500" : "text-gray-500"}`}>
                            EMAIL
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            placeholder="seu@email.com"
                            required
                            className={`${inputBase} ${inputIdle}`}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                        />
                    </div>
                </div>

                <div className="relative">
                    <label className={`absolute -top-2.5 left-4 text-xs font-bold px-1 bg-gray-900 transition-all duration-300 ${focusedField === "assunto" ? "text-emerald-500" : "text-gray-500"}`}>
                        ASSUNTO
                    </label>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Sobre o que você quer falar?"
                        required
                        className={`${inputBase} ${inputIdle}`}
                        onFocus={() => setFocusedField("assunto")}
                        onBlur={() => setFocusedField(null)}
                    />
                </div>

                <div className="relative">
                    <label className={`absolute -top-2.5 left-4 text-xs font-bold px-1 bg-gray-900 transition-all duration-300 ${focusedField === "mensagem" ? "text-emerald-500" : "text-gray-500"}`}>
                        MENSAGEM
                    </label>
                    <textarea
                        name="message"
                        placeholder="Escreva sua mensagem aqui..."
                        required
                        rows={6}
                        className={`${inputBase} ${inputIdle} resize-none`}
                        onFocus={() => setFocusedField("mensagem")}
                        onBlur={() => setFocusedField(null)}
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="relative w-full py-5 rounded-xl font-black font-display text-lg tracking-wide overflow-hidden group transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed bg-gradient-to-r from-emerald-500 to-cyan-500 text-black hover:shadow-lg hover:shadow-emerald-500/50 hover:-translate-y-1"
                >
                    <span className="relative z-10">
                        {status === "sending" ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
                    </span>

                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                </button>

                {status === "success" && (
                    <div className="flex items-center gap-4 p-5 rounded-xl border-2 border-emerald-500/30 bg-emerald-500/10 animate-[fadeIn_0.4s_ease]">
                        <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-emerald-400 font-bold font-display text-lg">Mensagem enviada!</p>
                            <p className="text-gray-400 text-sm font-body mt-0.5">Responderei em breve. Obrigado pelo contato!</p>
                        </div>
                    </div>
                )}

                {status === "error" && (
                    <div className="flex items-center gap-4 p-5 rounded-xl border-2 border-red-500/30 bg-red-500/10 animate-[fadeIn_0.4s_ease]">
                        <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-red-400 font-bold font-display text-lg">Ops, algo deu errado!</p>
                            <p className="text-gray-400 text-sm font-body mt-0.5">Tente novamente ou me contate pelo LinkedIn.</p>
                        </div>
                    </div>
                )}
            </form>
        </section>
    );
};

export default Contact;