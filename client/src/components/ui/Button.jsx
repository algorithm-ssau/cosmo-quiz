
export default function Button({children, onClick, isActive}){
    let classes = "px-6 py-2 transition-colors bg-white border-2 rounded-full"
    if(isActive) classes += " bg- hover:bg-primary border-primary text-primary hover:text-white active:bg-secondary"
    return(
        <button className={classes} 
                onClick={onClick}
                disabled = {!isActive}>
            {children}
        </button>
    )
}