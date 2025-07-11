import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { exchangeRates, localeToCurrency } from '@/core/utils/exchangeRates';
import { currencyFormat } from '@/core/utils/currencyFormat';

interface PriceCardProps {
  amount: number;
}

const PriceDisplay: React.FC<PriceCardProps> = ({ amount }) => {
  const currentLocale = useLocale(); 

  const currency = localeToCurrency[currentLocale] || 'USD';
  const rate = exchangeRates[currency] ?? 1;
  const convertedAmount = amount * rate;

  const formattedPrice = currencyFormat(convertedAmount, currency, currentLocale);

  return <span>{formattedPrice}</span>;
};

export default PriceDisplay;
