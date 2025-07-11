'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputFieldProps> = ({ label, type, id, value, onChange, error }) => {
  const t = useTranslations("login");

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-[#525e4d] text-xs uppercase mb-2 font-semibold tracking-wide"
      >
        {t(label)}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={`
          w-full px-[4vw] py-[1vw] rounded-full bg-white/10 border border-white
          mb-1 text-black placeholder:text-black/70 focus:outline-none
          focus:ring-2 focus:ring-[#525e4d] transition-all
        `}
      />

      {error && (
        <p className="text-red-600 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;
