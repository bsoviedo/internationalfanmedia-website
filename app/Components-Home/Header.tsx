// import img from "next/img"
// import Logo from './Media/intfanmedia.jpeg'
import Link from 'next/link'
// import ReminLogo from '/app/ReMin/Components-Remin/Media/RMLogo.png'
// import BarcaLogo from '/app/Barcelona/Components-Barca/Media/Barcelona.png'
// import ValenciaLogo from '/app/Valencia/Components-Valencia/Media/Valencia-Logo.png'

export default function Header() {
    return (
        <header className="sticky top-0 z-50 ">
            <nav className="bg-white px-4 lg:px-6 py-4 dark:bg-white-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="#" className="flex items-center">
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
                        <div className="hover:scale-150">
                            <Link href="/Barcelona" target="_blank" rel="noopener noreferrer">
                                
                                    <img src="/Barcelona.png" alt="Logo 2 Description" width={40} height={40} />
                                
                            </Link>
                        </div>
                        <div className="hover:scale-150">
                            <Link href="/Valencia" target="_blank" rel="noopener noreferrer">
                                
                                    <img src="/Valencia-Logo.png" alt="Logo 3 Description" width={40} height={40} />
                                
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-bold lg:flex-row lg:space-x-12 lg:mt-0 text-xl">
                            <li>
                                <Link href="/" className="block py-2 pr-4 pl-3 text-black  rounded bg-blue-700 lg:bg-transparent lg:text-yellow-600 lg:p-0 dark:text-white" aria-current="page">Teams</Link>
                            </li>
                            <li>
                                <Link href="/" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
                            </li>
                            <li>
                                <Link href="/" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Careers</Link>
                            </li>
                            <li>
                                <Link href="/" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact Us</Link>
                            </li>
                            {/* <li>
                                <Link href="/ReMin/Podcasts" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Test</Link>
                            </li>
                            <li>
                                <Link href="/ReMin/Shop" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Test</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}