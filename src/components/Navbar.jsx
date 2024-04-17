import { useState } from "react"
import logo from "../assets/logo.png"
import { navItems } from "../constants"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="hover:text-gray-400">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center items-center space-x-6">
                        <a href="#" className="py-2 px-3 border rounded-md hover:opacity-70">
                            Sign In
                        </a>
                        <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 hover:opacity-70">
                            Create an account
                        </a>
                    </div>
                    {/* Mobile Btn */}
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar} className="hover:opacity-70">
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 mt-3 bg-neutral-900 w-full pt-4 pb-10 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4 hover:opacity-70">
                                    <a href={item.href}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6 mt-6">
                            <a href="#" className="py-2 px-3 border rounded-md hover:opacity-70">
                                Sign In
                            </a>
                            <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 hover:opacity-70">
                                Create an account
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav >
    )
}
