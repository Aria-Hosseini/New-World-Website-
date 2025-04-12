export default function Contact() {
    return (
        <div className="h-screen overflow-hidden flex flex-col items-center justify-center p-4">
        <div className="bg-[#7FCBB2] rounded-lg shadow-lg p-6 w-full max-w-md text-center">
          <h2 className="text-xl font-bold text-[#161616] mb-4">تماس با ما</h2>
          <p className="text-[#161616]">برای اطلاعات بیشتر با ما در تماس باشید:</p>
          <form className="space-y-4 mt-4">
            <input
              dir="rtl"  
              type="text"
              placeholder="نام"
              className="w-full p-2 rounded-md bg-[#161616] text-[#7FCBB2] border border-[#7FCBB2]"
            />
            <input
              dir="rtl"  
              type="email"
              placeholder="ایمیل"
              className="w-full p-2 rounded-md bg-[#161616] text-[#7FCBB2] border border-[#7FCBB2]"
            />
            <textarea
              dir="rtl"  
              placeholder="پیام"
              className="w-full p-2 rounded-md bg-[#161616] text-[#7FCBB2] border border-[#7FCBB2] resize-none"
              rows="4"
            ></textarea>
            <button className="cursor-pointer w-full p-2 bg-[#161616] text-[#7FCBB2] rounded-md hover:bg-[#7FCBB2] hover:text-[#161616]">
              ارسال پیام
            </button>
          </form>
        </div>
      </div>
    );
  }
  