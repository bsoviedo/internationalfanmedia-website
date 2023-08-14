'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type CustomLinkProps = {
    href: string;
    className?: string;
    children: React.ReactNode;
};

export default function Header() {
    const pathname = usePathname();

    const CustomLink: React.FC<CustomLinkProps> = ({ href, children, className }) => {
        const isActive = pathname === href;
        const activeClass = isActive ? 'text-yellow-600' : '';

        return (
            <Link href={href}>
                <span className={`${className} ${activeClass} cursor-pointer`}>
                    {children}
                </span>
            </Link>
        );
    };
    return (
        <header className="sticky top-0 z-50" id="header">
            <nav className="bg-white px-4 lg:px-6 py-4 dark:bg-white-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center">
                        <img src="/intfanmedia.jpeg" width={120} height={120} alt="RMLogo"/>
                    </a>
                    <div className="flex items-center lg:order-2">
                        {/* <a href="#" className="text-white hover:text-yellow-500 bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download ReMin+ App</a> */}
                        <div className="flex space-x-5"> {/* Add space between logos */}
                        <div className="hover:scale-150">
                            <Link href="/ReMin" target="_blank" rel="noopener noreferrer">
                                
                                    <img src="/RMLogo.png" alt="Logo 1 Description" width={40} height={40} /> 
                                    {/* Adjust width and height as per your requirement */}
                            </Link>
                        </div>
                        <div className="filter grayscale">
                            <Link href="/Barcelona" target="_blank" rel="noopener noreferrer">
                                
                                    <img src="/Barcelona.png" alt="Logo 2 Description" width={40} height={40} />
                                
                            </Link>
                        </div>
                        <div className="filter grayscale">
                            <Link href="/Valencia" target="_blank" rel="noopener noreferrer">
                                
                                    <img src="/Valencia-Logo.png" alt="Logo 3 Description" width={50} height={50} />
                                
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 lg:text-lg" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-bold lg:flex-row lg:space-x-8 lg:mt-0">
                            {[
                                { href: "/#top", name: "Teams", className: "text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" },
                                { href: "/#about-us", name: "About Us", className: "text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" },
                                { href: "/#contact-us", name: "Contact Us", className: "text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" },
                                { href: "/#careers", name: "Careers", className: "text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" },
                                // { href: "/shop", name: "Shop", className: "text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <CustomLink href={link.href} className={link.className}>
                                        {link.name}
                                    </CustomLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}