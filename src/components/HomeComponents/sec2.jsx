import RotatingText from './RotatingText';
import './Sec2.css';

export default function Sec2() {
  return (
    <div className="text-center ">
      <div className="flex items-center justify-center w-300">
        <RotatingText
          texts={['SomeWhere', 'Your Dreams', 'Comes', 'True!']}
          mainClassName="px-2 sm:px-2 md:px-3 bg-[#7FCBB2] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={'last'}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-120%' }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
      {/* <div className="flex justify-center space-x-4 mt-5">
        <img className="w-16 h-16" src="/img/jupiter.png" alt="jupiter" />
        <img className="w-16 h-16" src="/img/neptune.png" alt="neptune" />
        <img className="w-16 h-16" src="/img/planet.png" alt="planet" />
        <img className="w-16 h-16" src="/img/uranus.png" alt="uranus" />
      </div> */}
      <div className="relative w-300 mt-9 flex items-center justify-center">
        <div className="relative w-300 p-4 border-2 border-white rounded-lg animate-border-light">
          <p dir="rtl" className="text-amber-50 w-300 flex items-center ">
            در دنیای جدید، مرزها میان واقعیت و رویا در حال محو شدن است. فضا، با بی‌انتهایی‌اش،
            همواره ما را به چالش می‌کشد تا مرزهای دانش و فناوری را گسترش دهیم. هر ستاره‌ای که در آسمان می‌درخشد، نشان‌دهنده جهانی است
            که در انتظار کشف است. شاید در این عصر جدید، سفر به سیاره‌های دور دست همان‌قدر ممکن شود که روزگاری پرواز رویایی به نظر می‌رسید. آینده‌ای پیش روی ماست که در آن کاوشگران
            به کشف ناشناخته‌های کائنات خواهند پرداخت و رازهای کهکشان‌ها را فاش خواهند کرد.
          </p>
        </div>
      </div>
    </div>
  );
}