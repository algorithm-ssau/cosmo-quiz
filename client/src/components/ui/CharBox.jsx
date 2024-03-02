import { useState } from 'react';

export default function CharBox({
  children,
  className,
  pushClick,
  spliceClick,
}) {
  const [isActive, setIsActive] = useState(true);
  return (
    <button
      className={`flex justify-center w-12 h-12 text-xl text-white items-center transition-all border-2 rounded cursor-pointer hover:bg-primary border-primary active:-translate-y-1 bg-primary
          ${isActive ? 'opacity-100' : 'opacity-50'} ${className}`}
      onClick={() => {
        if (isActive) {
          pushClick();
        } else {
          spliceClick();
        }
        setIsActive(!isActive);
      }}
    >
      {children.toUpperCase()}
    </button>
  );
}
