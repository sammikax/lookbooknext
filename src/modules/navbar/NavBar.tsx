'use client';
import { useEffect, useState } from "react";
import { getActiveUser } from "@/lib/LocalStorage";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import NavLinks from "./NavLinks";
import LanguageSelector from "./LanguageSelector";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(prev => !prev);

  useEffect(() => {
    const user = getActiveUser();
    setIsUserLoggedIn(!!user);
  }, [getActiveUser]);

  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-10 py-4 sm:py-5 bg-white shadow-md font-[var(--main-font)] relative z-10">
      <Logo />
      <MenuButton toggleMenu={toggleMenu} />
      <div className="hidden sm:flex items-center gap-4">
        <NavLinks isUserLoggedIn={isUserLoggedIn} isMobileMenuOpen={true} />
        <LanguageSelector />
      </div>

      {/* Menu desplegable solo en móvil */}
      <div className="sm:hidden absolute top-full left-0 w-full bg-white">
        <NavLinks isUserLoggedIn={isUserLoggedIn} isMobileMenuOpen={isMobileMenuOpen} />
        {isMobileMenuOpen && (
          <div className="px-4 py-2 border-t">
            <LanguageSelector />
          </div>
        )}
      </div>
    </nav>
  );
}
