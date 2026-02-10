const LoadingSpinner = ({ message = "Carregando..." }) => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[400px] gap-6">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-emerald-500 shadow-lg shadow-emerald-500/50"></div>
            <p className="text-white animate-pulse text-2xl font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 text-transparent bg-clip-text">{message}</p>
        </div>
    );
};

export default LoadingSpinner;