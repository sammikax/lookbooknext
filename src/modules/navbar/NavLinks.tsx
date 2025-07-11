import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

interface NavLinksProps {
  isUserLoggedIn: boolean;
  isMobileMenuOpen: boolean;
}

export default function NavLinks({ isUserLoggedIn, isMobileMenuOpen }: NavLinksProps) {
  const t = useTranslations("navbar");
  const locale = useLocale();

  return (
    <ul
      className={`
        ${isMobileMenuOpen ? "flex" : "hidden"}
        flex-col sm:flex sm:flex-row 
        gap-4 sm:gap-[50px]
        absolute sm:static top-full left-0 w-full sm:w-auto bg-white sm:bg-transparent px-4 py-4 sm:p-0 z-50
        list-none text-pink transition-all duration-300
      `}
    >
      <li>
        <Link href={`/${locale}`} className="no-underline text-[#A15C61] font-bold text-lg sm:text-2xl uppercase">
          {t("navbar.home")}
        </Link>
      </li>

      {isUserLoggedIn ? (
        <>
          <li>
            <Link href={`/${locale}/books`} className="no-underline text-[#A15C61] font-bold text-lg sm:text-2xl uppercase">
              {t("navbar.books")}
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/profile`} className="no-underline text-[#A15C61] font-bold text-lg sm:text-2xl uppercase">
              {t("navbar.profile")}
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link href={`/${locale}/login`} className="no-underline text-[#A15C61] font-bold text-lg sm:text-2xl uppercase">
            {t("navbar.login")}
          </Link>
        </li>
      )}

      <li>
        <Link href={`/${locale}/membership`} className="no-underline text-[#A15C61] font-bold text-lg sm:text-2xl uppercase">
          {t("navbar.membership")}
        </Link>
      </li>
    </ul>
  );
}
