import { NavLink, Outlet } from "react-router-dom"
import InputCustom from "../Component/CustomInput"

export default function ThemeLayout() {
    const handleActive = (params) => {
        console.log(params);
        return params.isActive ? "active" : ""
      }
    return (
        <div className="theme-container">
            <h1>#Todo</h1>
            <ul className="ul">
                <li className="li">
                    <NavLink to='all'>All</NavLink>
                </li>
                <li className="li">
                    <NavLink to='active'>Active</NavLink>
                </li>
                <li className="li">
                    <NavLink to='complete'>Complete</NavLink>
                </li>
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}