export default function CharButton({ char, className, selectClick }) {
  return (
    <button
      className={`justify-center w-12 h-12 text-xl text-white items-center transition-all border-2 rounded  hover:bg-primary border-primary  bg-primary
        ${char.spec? 'hidden': 'flex'}  
        ${
            !char.selected
              ? 'opacity-100 active:-translate-y-1 cursor-pointer'
              : 'opacity-50 cursor-default'
          } ${className}`}
      onClick={() => {
        if (!char.selected) selectClick();
      }}
    >
      {char.char.toUpperCase()}
    </button>
  );
}
