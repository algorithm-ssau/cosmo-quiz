export default function CharBox({ char, unselectClick, fail}) {
  return (
    <button
      className={`flex justify-center text-white items-center transition-all border-2 rounded   hover:text-white border-primary font-bold ${char.right ? 'bg-green' : 'bg-lightBlue'}
      hover:${char.right ? 'bg-green' : 'bg-primary'} ${fail ? "md:w-10 h-10 text-xl w-8 md:text-2xl" : "w-9 h-9 text-xl md:w-12 md:h-12"}`}
      onClick={() => {
        if (char.char) unselectClick();
      }}
      disabled = {char.right}
    >
      {char.char.toUpperCase()}
    </button>
  );
}
