import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/use-language';

export default function Countdown() {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-09-21T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-primary/10 backdrop-blur-md rounded-lg p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold mb-6 text-center text-white">{t('countdown.title')}</h3>
      <div className="grid grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-primary">{timeLeft.days}</div>
          <div className="text-sm text-white/80">{t('countdown.days')}</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-primary">{timeLeft.hours}</div>
          <div className="text-sm text-white/80">{t('countdown.hours')}</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-primary">{timeLeft.minutes}</div>
          <div className="text-sm text-white/80">{t('countdown.minutes')}</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-primary">{timeLeft.seconds}</div>
          <div className="text-sm text-white/80">{t('countdown.seconds')}</div>
        </div>
      </div>
    </div>
  );
}