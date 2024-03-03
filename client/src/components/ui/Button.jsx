
export default function Button({children, onClick}){
    return(
        <button className="px-6 py-2 transition-colors border-2 rounded-full hover:bg-primary border-primary text-primary hover:text-white active:bg-secondary" onClick={onClick}>
            {children}
        </button>
    )
}