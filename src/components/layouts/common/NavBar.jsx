import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


function NavBar(props){
    const {
        navigation,
        mobileMenuOpen,
        setMobileMenuOpen
    } = props;

    return(
        <>
            {/* Desktop sidebar */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
                <div className="flex flex-col flex-grow bg-blue-800">
                    <div className="flex items-center justify-center h-20">
                        <span className="text-2xl font-bold text-gray-50">CompetitionHub</span>
                    </div>
                    <div className="flex flex-col flex-grow border-t pt-10">
                        <nav className="flex-1 px-3 space-y-2">
                            {navigation.map((item) => (
                                <NavLink
                                    end
                                    key={item.name}
                                    to={item.href}
                                    className={({ isActive }) => 
                                        `${isActive
                                        ? 'bg-gray-200 text-black'
                                        : 'text-gray-300 hover:bg-gray-300 hover:text-gray-800'
                                    }  group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full`}
                                >
                                    <item.icon className='mr-3 h-5 w-5' />
                                    {item.name}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="bg-white fixed z-10 w-screen h-24 shadow-sm border">
                <div
                    className={`${
                    mobileMenuOpen ? 'block z-20' : 'hidden'
                    } fixed top-16 right-6 bg-gray-100 bg-white rounded-md cursor-pointer lg:hidden`}
                >
                    <div className="flex items-center justify-center h-14">
                        <Link to='/' onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-indigo-600">CompetitionHub</Link>
                    </div>
                    <div className="flex flex-col flex-grow border-t py-2">
                        <nav className="flex-1 px-2 space-y-1">
                            {navigation.map((item) => (
                                <NavLink
                                    end
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={({ isActive }) => 
                                        `${isActive
                                        ? 'bg-gray-200 text-indigo-600'
                                        : 'text-gray-300 hover:bg-gray-300 hover:text-gray-800'
                                    }  group flex items-center px-2 py-1.5 text-sm font-medium rounded-md w-full`}
                                >
                                    <item.icon className='mr-1 h-4 w-4' />
                                    {item.name}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;