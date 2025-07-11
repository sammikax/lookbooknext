"use client";

import React, { useState } from 'react';
import Input from '../Input/Input';
import SubmitButton from '../Button/SubmitButton';
import { addNewUser, isUserRegistered, updateActiveUser } from '@/lib/LocalStorage';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import fontlogin from "@/../public/images/form-bg.jpg"

interface UserData {
    username: string;
    password: string;
    email?: string;
    avatarUrl?: string;
}

interface FormErrors {
    username?: string;
    password?: string;
    email?: string;
}

const LoginForm: React.FC = () => {
    const tLogin = useTranslations("login");
    const tErrors = useTranslations("errors");

    const [userData, setFormData] = useState<UserData>({
        username: '',
        password: '',
        email: '',
    });

    const [message, setMessage] = useState<string>("");
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id;
        const fieldValue = e.target.value;

        setFormData((prevData) => ({
            ...prevData,
            [id]: fieldValue,
        }));

        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [id]: '',
        }));

        setMessage("");
    };

    const validateForm = (): boolean => {
        const errors: FormErrors = {};

        if (!userData.username) {
            errors.username = tErrors('userRequired');
        }

        if (!userData.password) {
            errors.password = tErrors('passwordRequired');
        }

        if (!isLogin && !userData.email) {
            errors.email = tErrors('emailRequired');
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            if (isLogin) {
                if (isUserRegistered(userData.username)) {
                    setMessage(tLogin('loginSuccess'));
                    updateActiveUser(userData);
                    router.push("/profile");
                } else {
                    setMessage(tErrors('userNotFound'));
                }
            } else {
                if (isUserRegistered(userData.username)) {
                    setMessage(tErrors('userAlreadyRegistered'));
                } else {
                    addNewUser(userData);
                    setMessage(tErrors('successfullRegistration'));
                    setFormData({ username: '', password: '', email: '' });
                    router.push("/login");
                }
            }
        }
    };

    return (
        <div className="w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw] xl:max-w-[35vw] mt-10 mx-auto relative bg-center bg-no-repeat bg-cover shadow-[0_12px_15px_0_rgba(0,0,0,0.24),0_17px_50px_0_rgba(0,0,0,0.19)]">
            <Image fill src={fontlogin} alt="alt" className="-z-10" />
            <form onSubmit={handleSubmit}>
                <div className="w-full px-6 sm:px-8 md:px-12 lg:px-[6vw] pt-6 sm:pt-8 md:pt-10 pb-10 capitalize">
                    <div className="flex flex-col sm:flex-row mb-6 gap-2 sm:gap-5">
                        <button
                            type="button"
                            onClick={() => setIsLogin(true)}
                            className={`bg-none border-none text-base sm:text-lg font-bold cursor-pointer p-2 sm:p-[10px] transition-all duration-300 ease-in-out uppercase ${isLogin ? 'active' : ''}`}
                        >
                            {tLogin('signin')}
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsLogin(false)}
                            className={`bg-none border-none text-base sm:text-lg font-bold cursor-pointer p-2 sm:p-[10px] transition-all duration-300 ease-in-out uppercase ${!isLogin ? 'active' : ''}`}
                        >
                            {tLogin('signup')}
                        </button>
                    </div>

                    {/* Campos */}
                    {isLogin ? (
                        <>
                            <Input
                                label="username"
                                type="text"
                                id="username"
                                value={userData.username}
                                onChange={handleChange}
                                error={formErrors.username}
                            />
                            <Input
                                label="password"
                                type="password"
                                id="password"
                                value={userData.password}
                                onChange={handleChange}
                                error={formErrors.password}
                            />
                        </>
                    ) : (
                        <>
                            <Input
                                label="username"
                                type="text"
                                id="username"
                                value={userData.username}
                                onChange={handleChange}
                                error={formErrors.username}
                            />
                            <Input
                                label="email"
                                type="email"
                                id="email"
                                value={userData.email || ''}
                                onChange={handleChange}
                                error={formErrors.email}
                            />
                            <Input
                                label="password"
                                type="password"
                                id="password"
                                value={userData.password}
                                onChange={handleChange}
                                error={formErrors.password}
                            />
                        </>
                    )}

                    {message && <p className="text-black mt-2">{message}</p>}

                    <SubmitButton text={isLogin ? tLogin('signin') : tLogin('signup')} />
                </div>
            </form>
        </div>

    );
};

export default LoginForm;
