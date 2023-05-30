import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

function Notfound(props){
    const navigate = useNavigate()

    useEffect(()=>{
        console.log("abcd");
        setTimeout(()=>{
            console.log("Navigate");
            navigate('home');
        },3000)
    })
    return (
        <div>
            <h3>NotFound</h3>
            <button onClick={() => {
                navigate('home')
            }}>home</button>
            {/* <Link to='home'>Home</Link> */}
        </div>
    )
}
export default Notfound