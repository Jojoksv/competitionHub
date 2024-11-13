import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/images/opport.png'
import { GoPerson } from "react-icons/go";

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
            <div>
                <div
                    className={`${
                    mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } w-4/5 fixed z-50 inset-0 bg-zinc-900 rounded-md cursor-pointer lg:hidden transition-transform duration-300 ease-in-out`}
                >
                    <div className="flex items-center justify-between h-20 bg-white border">
                        <Link to='/' onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-indigo-600">
                            <div className="fixed text-indigo-600 lg:text-gray-300 font-semibold top-3 left-2 lg:bottom-3 lg:top-auto z-20 flex items-center gap-1">
                                <img src={logo} alt="logo" className="h-14" />
                            </div>
                            <div className="fixed p-1 cursor-pointer hover:bg-gray-200 rounded-3xl z-20 right-4 top-6">
                                <GoPerson size={26} color="#000"/>
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col flex-grow border-t py-4">
                        <nav className="flex-1 px-2 space-y-2">
                            {navigation.map((item) => (
                                <NavLink
                                    end
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={({ isActive }) => 
                                        `${isActive
                                        ? 'bg-gray-800 text-white'
                                        : 'text-gray-300 hover:bg-gray-500'
                                    }  group flex items-center px-2 py-3 text-sm font-normal rounded-md w-full`}
                                >
                                    <item.icon className='mr-2 h-4 w-4' />
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