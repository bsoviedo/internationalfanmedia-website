import Link from 'next/link'
import Image from 'next/image'



export default function Construction() {
   
    return (
        <main className='h-screen bg-slate-900 flex flex-col justify-start items-center pt-20'>
            <h1 className="font-bold text-white text-4xl mb-10 animate-fade animate-once animate-ease-in">
                Visit Our Teams
            </h1>  
            <ul className="space-y-10 w-4/5 animate-fade animate-once animate-delay-500 animate-ease-in">
                <li className="w-1/2 mx-auto">
                    <Link href="/ReMin" target="_blank" rel="noopener noreferrer">
                        <button className="font-bold text-white w-full h-60 text-3xl py-10 px-6 rounded-xl flex items-center bg-gradient-to-r from-amber-300 to-blue-600 to-purple-500 hover:scale-110 ">
                            <Image src="/RMLogo.png " alt="ReMin Logo" width={120} height={120}  />
                            <div className="flex-grow flex items-center justify-center ml-[-10%]"> {/* Added a negative margin here */}
                                <span className='hover:underline'>ReMin Fan Media</span>
                            </div>
                        </button>
                    </Link>
                </li>
                <li className="w-2/4 mx-auto">
                    <Link href="/Barcelona" target="_blank" rel="noopener noreferrer">
                        <button className="font-bold text-white w-full h-60 text-3xl py-10 px-6 rounded-xl flex items-center bg-gradient-to-l from-blue-700 via-violet-600 to-red-700 hover:bg-orange-600 hover:scale-110">
                            <Image src="/Barcelona.png" alt="Barça Logo" width={120} height={120}  />
                            <div className="flex-grow flex items-center justify-center space-x-3">
                                <span className='hover:underline'>Barça International Fan Media</span>
                            </div>
                        </button>
                    </Link>
                </li>
                <li className="w-2/4 mx-auto">
                    <Link href="/Valencia" target="_blank" rel="noopener noreferrer">
                        <button className="font-bold text-white w-full h-60 text-3xl py-10 px-6 rounded-xl flex items-center bg-gradient-to-r from-orange-600 to-red-600 hover:scale-110">
                            <Image src="/Valencia-Logo.png " alt="Valencia Logo" width={120} height={120} />
                            <div className="flex-grow flex items-center justify-center space-x-3">
                                <span className='hover:underline'>Valencia International Fan Media</span>
                            </div>
                        </button>
                    </Link>
                </li>
            </ul>
        </main>
    )
}
