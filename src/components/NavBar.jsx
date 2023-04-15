import React from 'react'
import Logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <header className="py-2 w-3/5 mx-auto px-2 bg-white border-gray-200  dark:border-gray-700">
            <div className="container  flex flex-wrap items-center justify-between mx-auto">
                <Link to="/" className="flex items-center">
                    <img src={ Logo} className="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
                </Link>
                <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <nav  className="hidden w-full lg:block lg:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800  dark:border-gray-700">
                        <li>
                            <Link to="/" className="block py-2 pl-3 pr-4 text-black font-bold rounded md:bg-transparent  md:p-0 md:dark:text-black  dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Link>
                        </li>
                        <li>
                        <Link to="/about" className="block py-2 pl-3 pr-4 text-black font-bold rounded md:bg-transparent  md:p-0 md:dark:text-black  dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">About</Link>
                        </li>
                        <li>
                            <Link to="/" className="block py-2 pl-3 pr-4 text-black font-bold rounded md:bg-transparent  md:p-0 md:dark:text-black  dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Menu</Link>
                        </li>
                        <li>
                        <Link to="/booking" className="block py-2 pl-3 pr-4 text-black font-bold rounded md:bg-transparent  md:p-0 md:dark:text-black  dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Reservations</Link>
                        </li>
                        <li>
                            <Link to="/booking" className="block py-2 pl-3 pr-4 text-black font-bold rounded md:bg-transparent  md:p-0 md:dark:text-black  dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Order Online</Link>
                        </li>
                        <li>
                            <Link to="/login" className="block py-2 pl-3 pr-4 text-black font-bold rounded md:bg-transparent  md:p-0 md:dark:text-black  dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}
