import React from "react";
import {BiChevronRight,BiChevronDown} from "react-icons/bi";
import{FaSearch} from "react-icons/fa";
import {FiMenu} from "react-icons/fi";

//for small devices/mobile devices
const NavSm=()=>{
    return(
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold">It all starts Here!</h2>
                <span className="text-gray-400 text-xm flex items-center">
                    Jaipur <BiChevronRight/>
                </span>
            </div>
            <div className="w-8 h-8">
                 <FaSearch className="w-full h-full"/>
            </div>
        </div>
        </>
    );
};

//for medium devices
const NavMd=()=>{
    return(
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <FaSearch/>
            <input type="search" 
            className="w-full bg-transparent border-none focus:outline-none" 
            placeholder="Search for movies, events, plays, Sports and Activities."
            />
        </div>
    );
};

//for large devices
const NavLg=()=>{
    return(
        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-12 h-12">
                        <img src="https://downloadr2.apkmirror.com/wp-content/uploads/2022/07/77/62e93c4720b03.png"
                        alt="logo"
                        className="w-full h-full"
                        />
                    </div>
                    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                        <FaSearch/>
                        <input type="search" 
                        className="w-full bg-transparent border-none focus:outline-none" 
                        placeholder="Search for movies, events, plays, Sports and Activities."
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-gray-300 text-xm flex items-center hover:text-white cursor-pointer">
                        Jaipur <BiChevronDown/>
                    </span>
                    <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
                        Sign in
                    </button>
                    <div className="w-8 h-8 text-white">
                        <FiMenu className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </>
    );
};

const Navbar=()=>{
    return (
        <>
            <nav className="bg-bms-500 p-4">
                <div className="md:hidden">
                    <NavSm/>
                </div>
                <div className="hidden md:flex lg:hidden">
                    <NavMd/>
                </div>
                <div className="hidden lg:flex">
                    <NavLg/>
                </div>
            </nav>
        </>
    );
};

export default Navbar;