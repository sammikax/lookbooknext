'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

interface SubmitButtonProps {
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  const t = useTranslations('login');

  return (
    <button
      type="submit"
      className="
        w-full py-[1vw] bg-[#525e4d] text-white rounded-full cursor-pointer text-[16px] font-extrabold transition-colors duration-300 hover:bg-[#95A78D] uppercase tracking-wide">
      {t('button')}
    </button>
  );
};

export default SubmitButton;
