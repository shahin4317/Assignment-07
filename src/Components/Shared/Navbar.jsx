
import { FaHome } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { TfiStatsUp } from 'react-icons/tfi';
import keenkeeper from '../../assets/logo.png'
import {  NavLink } from 'react-router';
const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar max-w-7xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <div className=''>
                                <NavLink to={'/'}>                                <button className='btn btn-success mb-3'> <FaHome />Home</button></NavLink>
                                <div className='space-y-3 text-center items-center'>
                                    <NavLink to={'/Timeline'} className={({ isActive }) => `
                                flex gap-1 items-center hover:bg-green-100 p-1 rounded-2xl  ${isActive ? "bg-green-800 text-white" : ""}
                                `
                                    }> <IoMdTime /> Timeline</NavLink>
                                    <NavLink to={'/Stats'} className={({ isActive }) => `
                                flex gap-1 items-center hover:bg-green-100 p-1 rounded-2xl  ${isActive ? "bg-green-800 text-white" : ""}
                                `
                                    }> <TfiStatsUp /> Stats</NavLink>
                                </div>
                            </div>

                        </ul>
                    </div>
                    <img src={keenkeeper} alt="" />

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="">
                        <div className='flex text-center items-center gap-5'>
                            <NavLink to={'/'}>                                <button className='btn btn-success mb-3'> <FaHome />Home</button></NavLink>
                            <div className='flex gap-3 text-center items-center'>
                                <NavLink to={'/Timeline'} className={({ isActive }) => `
                                flex gap-1 items-center hover:bg-green-100 p-1 rounded-2xl  ${isActive ? "bg-green-800 text-white" : ""}
                                `
                                }> <IoMdTime /> Timeline</NavLink>
                                <NavLink to={'/Stats'} className={({ isActive }) => `
                                flex gap-1 items-center hover:bg-green-100 p-1 rounded-2xl  ${isActive ? "bg-green-800 text-white" : ""}
                                `
                                }> <TfiStatsUp /> Stats</NavLink>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;