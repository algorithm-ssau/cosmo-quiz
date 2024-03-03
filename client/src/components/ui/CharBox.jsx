export default function CharBox({ char, unselectClick, className }) {
  return (
    <button
      className={`flex justify-center w-12 h-12 text-xl text-primary items-center transition-all border-2 rounded  hover:bg-primary hover:text-white border-primary  bg-secondary ${className}`}
      onClick={() => {
        if (char.char) unselectClick();
      }}
    >
      {char.char.toUpperCase()}
    </button>
  );
}
