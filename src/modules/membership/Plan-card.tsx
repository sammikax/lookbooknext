import React from 'react';
import { useTranslations } from 'next-intl';
import PriceDisplay from '@/modules/membership/PriceDisplay';

interface PlanCardProps {
  planKey: string;
}

const pricesUSD: Record<string, number> = {
  basic: 2,
  professional: 5,
  premium: 10,
};

const PlanCard: React.FC<PlanCardProps> = ({ planKey }) => {
  const  t  = useTranslations('membership');
  const basePrice = pricesUSD[planKey];

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
      <div className="text-center bg-transparent bg-[url('https://cdn.cosmos.so/f4aa2b25-c0b0-4257-aa3f-2cfaa2e882ad?format=jpeg')] bg-center bg-cover bg-no-repeat rounded-xl shadow-md p-6">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold capitalize text-white">{t(planKey)}</h3>

          <p className="pink text-[3vh] py-1">
            <PriceDisplay amount={basePrice} />
          </p>

          <p className="pink text-[3vh] py-1">
            {t(`description-${planKey}`)}
          </p>

          <button
            className="bg-darkGreen text-white capitalize font-bold px-6 py-2 rounded-full mt-4 hover:dark-green transition-colors duration-300"
          >
            {t('btn-join')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
