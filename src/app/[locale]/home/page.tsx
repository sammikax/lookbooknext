'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import magazine from "@/../public/images/magazine.png";
function Home() {
    const t = useTranslations("home");
    return (

        <div>
            <Image src={magazine} className="bg-no-repeat h-screen z-[-10] absolute opacity-20 m-0 top-10 -translate-y-10" alt="background-image" />
            <div className="flex justify-center items-end mt-10 text-center">
                <h1 className="flex justify-end text-[15vh] coffee uppercase font-playfair [text-shadow:1px_1px_3px_rgba(70,47,29,0.4)]">{t("homepage.mainTitle")}</h1>
            </div>
            <div className="flex justify-center items-center text-center sm:h-[60vh] md:h-[80vh] lg:h-screen">
                <h1 className="font-bold text-[3rem] uppercase coffee font-montserrat [text-shadow:1px_1px_3px_rgba(70,47,29,0.4)]">{t("homepage.subtitle")}</h1>
            </div>
        </div >
    );
};

export default Home;