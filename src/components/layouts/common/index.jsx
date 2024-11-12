import { useState } from "react";
import NavBar from "./NavBar"
import logo from '../../../assets/images/logo1.webp'
import { PiSealQuestion } from "react-icons/pi";
import { RxCountdownTimer } from "react-icons/rx";
import { RiBarChart2Fill } from "react-icons/ri";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuHome } from "react-icons/lu";
import { GoPerson, GoTrophy } from "react-icons/go";
import { Link, Outlet } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { TfiBell } from "react-icons/tfi";

function CommonLayout(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigation = [
        { name: 'Accueil', href: '', icon: LuHome },
        { name: 'Challenges', href: 'challenges', icon: GoTrophy  },
        { name: 'Comment ça marche', href: 'howItWorks', icon: PiSealQuestion  },
        { name: 'Éditions passées', href: 'pastEditions', icon: RxCountdownTimer  },
        { name: 'Classement', href: 'ranking', icon: RiBarChart2Fill  },
        { name: 'A propos', href: 'about', icon: AiOutlineExclamationCircle  },
    ];

    return(
        <div className="min-h-screen bg-gray-100">
            <div>
                <div className="lg:hidden fixed top-8 right-3 z-50 flex items-center gap-3">
                    <div className="p-1 cursor-pointer hover:bg-gray-200 rounded-3xl">
                        <GoPerson
                            size={ 26 }
                        />
                    </div>
                    <div className="p-1 cursor-pointer hover:bg-gray-200 rounded-3xl">
                        <TfiBell
                            size={ 24 }
                        />
                    </div>
                    <div
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`rounded-md bg-white cursor-pointer ${mobileMenuOpen ? 'menuOpen' : 'menuClosed'} menu`}
                    >
                        <div className="barre1"></div>
                        <div className="barre2"></div>
                        <div className="barre3"></div>
                    </div>
                </div>
                <NavBar
                    navigation={navigation}
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                />
                <Link to="/" className="fixed text-indigo-600 lg:text-gray-300 font-semibold top-4 left-3 lg:bottom-3 lg:top-auto z-20 flex items-center gap-1">
                    <img src={logo} alt="logo" className="h-16" />
                    {/* <span className="font-extrabold text-2xl">Skillify</span> */}
                </Link>
                <main className="lg:pl-64">
                    <div className={`px-4 py-10 pt-36 sm:px-6 lg:px-8`}>
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}
export default CommonLayout