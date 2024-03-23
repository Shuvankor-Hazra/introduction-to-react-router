import { NavLink } from "react-router-dom";
import "./Header.css";


const Header = () => {
    return (
        <div>
            <nav className="space-x-10 text-xl font-bold">
                <h1>My Website</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>

            </nav>
        </div>
    );
};

export default Header;