
export default function Button({children, onClick}){
    return(
        <button className="px-3 py-1 border-2 rounded-full hover:bg-primary border-primary text-primary hover:text-white" onClick={onClick}>
            {children}
        </button>
    )
}