export default function Sec3() {
    return (
        <div style={{
            backgroundImage: "url('/img/space.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            
            
        }} className="flex justify-center items-center space-x-4 p-3 w-full h-100">
            
            <a className="flex flex-col group bg-zinc-950 border-2 border-white shadow-2xs rounded-xl overflow-hidden hover:shadow-lg focus:outline-hidden focus:shadow-lg transition w-60" href="#">
                <div className="relative pt-[50%] rounded-t-xl overflow-hidden">
                    <img className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" 
                         src="./img/banoo1.jpg" 
                         alt="Card Image" />
                </div>
                <div className="p-4">
                    <h3 dir="rtl" className="text-lg font-bold text-gray-800">دنیای جدید</h3>
                    <p dir="rtl" className="mt-1 text-gray-500">دنیای جدید پنجره‌ای بی‌پایان به سوی فرصت‌ها، کشفیات و ایده‌های نوین است.</p>
                </div>
            </a>
            <a className="flex flex-col group bg-zinc-950 border-2 border-white shadow-2xs rounded-xl overflow-hidden hover:shadow-lg focus:outline-hidden focus:shadow-lg transition w-60" href="#">
                <div className="relative pt-[50%] rounded-t-xl overflow-hidden">
                    <img className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" 
                         src="./img/banoo2.jpg" 
                         alt="Card Image" />
                </div>
                <div className="p-4">
                    <h3 dir="rtl" className="text-lg font-bold text-gray-800">عصر جدید</h3>
                    <p dir="rtl" className="mt-1 text-gray-500">تکنولوژی، مرزهای خیال و واقعیت را در دنیای جدید به هم نزدیک‌تر کرده است.</p>
                </div>
            </a>
            <a className="flex flex-col group bg-zinc-950 border-2 border-white shadow-2xs rounded-xl overflow-hidden hover:shadow-lg focus:outline-hidden focus:shadow-lg transition w-60" href="#">
                <div className="relative pt-[50%] rounded-t-xl overflow-hidden">
                    <img className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" 
                         src="./img/banoo3.jpg" 
                         alt="Card Image" />
                </div>
                <div className="p-4">
                    <h3 dir="rtl" className="text-lg font-bold text-gray-800">تونل زمان</h3>
                    <p dir="rtl" className="mt-1 text-gray-500">دنیای جدید، جایی است که تغییر، تنها قانون ثابت آن به شمار می‌رود.</p>
                </div>
            </a>
        </div>
    );
}
