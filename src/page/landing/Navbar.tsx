import React from 'react'
import { Link, NavLink } from 'react-router-dom'

interface Props {

}
const Navbar: React.FC<Props> = () => {
    return (
        <nav className="flex overflow-hidden flex-col w-full bg-darkblue sm:p-6 p-4 text-white">
            <div className="flex justify-between items-center text-white">
                <Link to="/" className="text-3xl font-sora font-bold" >Pathsala</Link>
                <svg className="md:hidden block w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                <div className="hidden md:flex flex items-center justify-center space-x-40">
                    <div className="space-x-2 text-xl">
                        {/* <NavLink to="/home">Home</NavLink>
                        <NavLink to="/browse">Browse</NavLink>
                        <NavLink to="/create">Create</NavLink> */}
                    </div>
                    <div className="space-x-5 font-sora font-medium">
                        <Link to="/login">Login</Link>
                        <Link to="/signup" className="bg-darkerBlue p-3 rounded ">Signup</Link>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;