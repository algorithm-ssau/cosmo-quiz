export default function Button({ children, onClick, isActive = true }) {
  return (
    <button
      className={`px-6 py-2 font-bold transition-colors rounded  text-base text-black ${
        isActive ? 'hover:bg-secondary bg-gold' : 'bg-secondary opacity-50'
      }`}
      onClick={onClick}
      disabled={!isActive}
    >
      {children}
    </button>
  );
}
