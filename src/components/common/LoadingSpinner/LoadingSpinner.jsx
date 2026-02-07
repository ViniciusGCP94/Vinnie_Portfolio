const LoadingSpinner = ({ message = "Carregando..." }) => {
    return (
        <div className="flex flex-col justify-center items-center h-40 gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-danger"></div>
            <p className="text-white animate-pulse text-xl">{message}</p>
        </div>
    );
};

export default LoadingSpinner;