import { useNavigate } from "react-router-dom"
export default function Notfound () {
    const navigate = useNavigate()
    return(
        <div className="">
            <h2>Not found</h2>
            <p>it looks you lost!</p>
            <button onClick={()=>{navigate('/')}}>صفحه اصلی</button>
            <button onClick={()=>{navigate('/aboute')}}>درباره ما</button>
        </div>
    )
}