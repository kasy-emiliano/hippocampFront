import React from 'react';

import Headform from '@/formateurs/components/Headform';
import Navform from '../components/Navform';
import { Outlet, Link} from 'react-router-dom';



const DashboardFormateur = () => {
    return (
        <>
        <div className="antialiased bg-gray-50 dark:bg-gray-900">
            <Navform/>

            <aside className="fixed top-0 left-0 z-40 w-54 h-screen pt-14 transition-transform -translate-x-full 
                              border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700" 
                              aria-label="Sidenav" id="drawer-navigation">
                              
                <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">

                    <ul className="space-y-2 ">
                        <li>
                            <a href="/dashboardformateur" className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg 
                            dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 
                            dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                            </svg>

                            <span className="ml-3 text-gray-500 transition duration-75 
                            dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">Dashboard</span>
                            </a>
                        </li>

                        <li>
                            <Link to="/newformation" className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg 
                            dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 
                            dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                            </svg>
                            <span className="ml-3 text-gray-500 transition duration-75 
                            dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">Nouvelle Formation</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/formationlist" className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg 
                                                    dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 
                            dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                            <span className="ml-3 text-gray-500 transition duration-75 dark:text-gray-400 
                            group-hover:text-gray-900 dark:group-hover:text-white">Mes Formations</span>
                            </Link>
                        </li>

                    </ul>

                </div>
            </aside> 

            <main className="p-4 md:ml-64 h-auto pt-10">
                <Outlet/>
            </main>
        </div>
        </>
    );
};

export default DashboardFormateur;