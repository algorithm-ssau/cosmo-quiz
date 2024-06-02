export default function CharBox({ char, unselectClick, className }) {
  return (
    <button
      className={`flex justify-center w-12 h-12 text-xl text-white items-center transition-all border-2 rounded  hover:bg-primary hover:text-white border-primary bg-lightBlue font-bold ${className}`}
      onClick={() => {
        if (char.char) unselectClick();
      }}
    >
      {char.char.toUpperCase()}
    </button>
  );
}
