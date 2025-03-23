export default function CharBox({ char, unselectClick}) {
  return (
    <button
      className={`flex justify-center w-12 h-12 text-xl text-white items-center transition-all border-2 rounded   hover:text-white border-primary font-bold ${char.right ? 'bg-green' : 'bg-lightBlue'}
      hover:${char.right ? 'bg-green' : 'bg-primary'}`}
      onClick={() => {
        if (char.char) unselectClick();
      }}
      disabled = {char.right}
    >
      {char.char.toUpperCase()}
    </button>
  );
}
