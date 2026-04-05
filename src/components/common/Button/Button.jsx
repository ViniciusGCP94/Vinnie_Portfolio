const BaseButton = ({
    children,
    icon:Icon,
    href,
    onClick,
    className = "",
    ...props
}) => {
    const baseStyles = `
    flex items-center gap-2 px-6 py-2 border-2 border-emerald-500/50 rounded-full text-emerald-400 font-bold uppercase tracking-wider transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] ${className}`;
    if (href) {
        return (
            <a href={href} className={baseStyles} {...props}>
                {Icon && <Icon size={20} />}
                {children}
            </a>
        )
    }
    return ( 
        <button className={baseStyles} onClick={onClick} {...props}>
            {Icon && <Icon size={20} />}
            {children}
        </button>
    )
}

export default BaseButton