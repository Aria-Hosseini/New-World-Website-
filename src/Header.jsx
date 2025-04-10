import { useNavigate } from "react-router-dom"

export default function Header() {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center">
  <div className="flex flex-col items-center mt-3 justify-center w-300 bg-[#161616]/50 shadow-xl p-3 space-y-3 backdrop-blur-md rounded-2xl">
    <div>
      <h2 className="text-shadow-lg text-[#17635d]">خوش اومدید به وبسایت من</h2>
    </div>
    <div className="space-x-5">
      <button
        className="cursor-pointer p-2 text-sm bg-[#7FCBB2] rounded-md hover:bg-[#6bb9a5] text-white text-shadow-lg"
        onClick={() => {
          navigate("/");
        }}
      >
        خانه
      </button>
      <button
        className="cursor-pointer p-2 text-sm bg-[#7FCBB2] rounded-md hover:bg-[#6bb9a5] text-white text-shadow-lg"
        onClick={() => {
          navigate("/aboute");
        }}
      >
        درباره من
      </button>
      <button
        className="cursor-pointer p-2 text-sm bg-[#7FCBB2] rounded-md hover:bg-[#6bb9a5] text-white text-shadow-lg"
        onClick={() => {
          navigate("/contactus");
        }}
      >
        تماس با من
      </button>
    </div>
  </div>
</div>

    )
}
