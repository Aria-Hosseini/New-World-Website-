import Sec2 from "../HomeComponents/sec2"
import Sec3 from "../HomeComponents/Sec3"
import Sec4 from "../HomeComponents/Sec4"
import './Style.css';
export default function Home (){
    return(
        <div className="relative flex flex-col space-y-3 justify-center items-center">
            <h2 className="text-5xl text-amber-50 font-bold absolute top-13 z-0 glowing-text" >خوشــــــ آمدیـــــــد به دنیـــــــای جــــــدیــــــد</h2>
            
            <img className="relative z-10 w-120 h-120 opacity-90 animated-image " src="../../../img/pngwing.com.png"></img>
            <Sec2 />
            <Sec3 />
            <Sec4 />
        </div>
    )
}