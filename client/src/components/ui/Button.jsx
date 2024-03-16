export default function Button({ children, onClick, isActive }) {
  let classes =
    "px-6 py-2 mt-4 transition-colors bg-white ring-2 rounded-full ring-secondary";
  if (isActive)
    classes +=
      " bg- hover:bg-accent hover:ring-primary text-primary hover:text-white active:bg-secondary";
  return (
    <button className={classes} onClick={onClick} disabled={!isActive}>
      {children}
    </button>
  );
}
