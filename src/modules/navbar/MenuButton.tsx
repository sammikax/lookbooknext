interface MenuButtonProps {
  toggleMenu: () => void;
}

export default function MenuButton({ toggleMenu }: MenuButtonProps) {
  return (
    <div className="flex flex-col gap-1 cursor-pointer sm:hidden" onClick={toggleMenu}>
      <div className="w-6 h-[2px] bg-[#A15C61]"></div>
      <div className="w-6 h-[2px] bg-[#A15C61]"></div>
      <div className="w-6 h-[2px] bg-[#A15C61]"></div>
    </div>
  );
}
