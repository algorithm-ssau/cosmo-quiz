export default function Button({ children, onClick, isActive }) {
  let classes =
    "px-6 py-2 mt-4 transition-colors bg-white ring-2 rounded-full ring-gold text-base";
  if (isActive)
    classes +=
      " hover:bg-gold hover:ring-gold text-primary hover:text-black active:bg-secondary";
  return (
    <button className={classes} onClick={onClick} disabled={!isActive}>
      {children}
    </button>
  );
}
