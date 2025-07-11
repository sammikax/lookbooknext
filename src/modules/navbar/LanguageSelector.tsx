'use client';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSelector() {
  const locale = useLocale();
  const t = useTranslations("navbar");
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lng: string) => {
    const segments = pathname.split('/');
    segments[1] = lng;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <select
      value={locale}
      onChange={(e) => changeLanguage(e.target.value)}
      className="border-none outline-none text-sm sm:text-lg cursor-pointer bg-transparent text-[#A15C61]"
    >
      {[{ label: 'english', code: 'en' }, { label: 'spanish', code: 'es' }, { label: 'french', code: 'fr' }, { label: 'japanese', code: 'ja' }].map((lang) => (
        <option key={lang.code} value={lang.code} className="text-black">
          {t(`navbar.${lang.label}`)}
        </option>
      ))}
    </select>
  );
}
