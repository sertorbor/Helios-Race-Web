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
    <div className="bg-yellow-500 text-black rounded-xl p-6 max-w-xl ml-12 shadow-lg -mt-20">
      <h3 className="text-[26px] font-extrabold text-center drop-shadow-lg mb-6 tracking-wide text-[#121620]">
        <span className="text-[#121620] lowercase font-extrabold">i</span><span className="text-[#121620] font-extrabold uppercase">ESC</span> 2026 SOLAR RACING CHALLENGE
      </h3>

      <div className="flex justify-center gap-6">
        <div className="bg-white text-black rounded-lg p-6 text-center shadow-lg">
          <div className="text-5xl font-extrabold">{timeLeft.days}</div>
          <div className="text-lg font-semibold">{t('countdown.days')}</div>
        </div>
        <div className="bg-white text-black rounded-lg p-6 text-center shadow-lg">
          <div className="text-5xl font-extrabold">{timeLeft.hours}</div>
          <div className="text-lg font-semibold">{t('countdown.hours')}</div>
        </div>
        <div className="bg-white text-black rounded-lg p-6 text-center shadow-lg">
          <div className="text-5xl font-extrabold">{timeLeft.minutes}</div>
          <div className="text-lg font-semibold">{t('countdown.minutes')}</div>
        </div>
        <div className="bg-white text-black rounded-lg p-6 text-center shadow-lg">
          <div className="text-5xl font-extrabold">{timeLeft.seconds}</div>
          <div className="text-lg font-semibold">{t('countdown.seconds')}</div>
        </div>
      </div>
    </div>
  );
}
