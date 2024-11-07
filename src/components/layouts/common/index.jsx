import { useState } from "react";
import NavBar from "./NavBar"
import { PiSealQuestion } from "react-icons/pi";
import { RxCountdownTimer } from "react-icons/rx";
import { RiBarChart2Fill } from "react-icons/ri";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuHome } from "react-icons/lu";
import { GoTrophy } from "react-icons/go";
import { Link, Outlet } from "react-router-dom";

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
                <div className="lg:hidden fixed top-6 right-6 z-50">
                    <div
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`rounded-md bg-white shadow-lg ${mobileMenuOpen ? 'menuOpen' : 'menuClosed'} menu`}
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
                <div className="fixed text-indigo-800 lg:text-gray-300 font-semibold top-8 left-6 lg:bottom-3 lg:top-auto z-20">
                    <Link to='http://joseph-kossouvi.vercel.app' target="_blank" rel="noopener noreferrer">&copy; Joseph Kossouvi</Link>
                </div>
                <main className="lg:pl-64">
                    <div className={`px-4 py-16 py-24 sm:px-6 lg:px-8`}>
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}
export default CommonLayout