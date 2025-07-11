'use client';

import Image from "next/image";
import Avatar from "@/../public/images/pfp.jpg";
import { useEffect, useState } from "react";
import { deleteActiveUser, getActiveUser, type userData } from "@/lib/LocalStorage";
import { useRouter } from "next/navigation"; 
import { useTranslations } from "next-intl";

const Profile = () => {
    const t = useTranslations("profile");
    const [activeUser, setActiveUser] = useState<userData>();
    const router = useRouter();

    useEffect(() => {
        const data = getActiveUser();
        if (data == null) {
            router.push("/login");
        } else {
            setActiveUser(data);
        }
    }, []);

    const handleLogOut = () => {
        deleteActiveUser();
        router.push("/login");
    };

    return (
        <>
            <div className="flex items-center gap-4">
                <Image
                    src={activeUser?.avatarUrl || Avatar}
                    alt={t('profilePictureAlt', { username: activeUser?.username ?? 'usuario' })}
                    className="w-10 h-10 rounded-full object-cover"/>
                <p className="text-sm font-medium capitalize">
                    {t("welcome")} {activeUser?.username}!
                </p>
                <button
                    onClick={handleLogOut}
                    className="bg-transparent border-none text-sm font-bold cursor-pointer px-3 py-2 transition-all duration-300 ease-in-out uppercase hover:text-red-600">
                    {t("logout")}
                </button>
            </div>
        </>
    );
};

export default Profile;
