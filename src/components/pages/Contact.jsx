import { useNavigate } from "react-router-dom"

export default function Contact () {
    let nvigate = useNavigate();
    return(
        <div>
            <h2>this is Contact page</h2>
            <button onClick={()=>{nvigate("/")}}>صفحه اصلی</button>
        </div>
    )
}