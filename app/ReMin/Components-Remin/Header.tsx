'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type CustomLinkProps = {
    href: string;
    className?: string;
    children: React.ReactNode;
    rel?: string;
    target?: string;
};

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú

    const CustomLink: React.FC<CustomLinkProps> = ({ href, children, className, rel, target }) => {
        const isActive = pathname === href;
        const activeClass = isActive ? 'text-violet-500' : '';

        return (
            <Link href={href} rel={rel} target={target}>
                <span className={`${className} ${activeClass} cursor-pointer`}>
                    {children}
                </span>
            </Link>
        );
    };

    // Función para manejar la apertura y cierre del menú
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-4 dark:bg-white-800">
          <div className="flex flex-wrap justify-between items-center mx-auto">
            <a href="/ReMin" className="flex items-center">
              <img src="/imgs/Remin/logo remin.png" width={84} height={84} alt="RMLogo" />
            </a>
            <div className="flex items-center lg:order-2">
              {/* Botón de hamburguesa */}
              <button 
                type="button" 
                className="inline-flex items-center p-2 ml-4 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                onClick={toggleMenu} // Alternar el estado del menú
                aria-controls="mobile-menu-2" 
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
                <svg className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            {/* Menú desplegable */}
            <div 
              className={`lg:flex lg:w-auto lg:order-1 absolute ${isMenuOpen ? 'top-20 right-0 mr-6' : 'top-12 right-0 mr-6'} bg-white lg:bg-transparent lg:h-auto lg:block ${isMenuOpen ? 'border-2 border-purple-500' : ''} ${isMenuOpen ? 'block' : 'hidden'}`} 
              id="mobile-menu-2"
            >
              <ul className="flex flex-col items-center justify-center lg:flex-row lg:space-x-8 lg:mt-0 font-bold">
                {[{ href: "/ReMin", name: "HOME", className: "text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" },
                  { href: process.env.NEXT_PUBLIC_CONTEST_URL || '', name: "ROAD TO THE BERNABEU", className: "text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" },
                  { href: "/ReMin/Videos", name: "SOCIAL MEDIA", className: "text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" },
                  { href: "/ReMin/Podcasts", name: "PODCASTS", className: "text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" },
                  { href: "/ReMin/Shop", name: "SHOP", className: "text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" }
                ].map((link) => (
                  <li key={link.name}>
                    <CustomLink href={link.href} className={link.className} rel="noopener noreferrer" target="_blank">
                      {link.name}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      
    );
}
