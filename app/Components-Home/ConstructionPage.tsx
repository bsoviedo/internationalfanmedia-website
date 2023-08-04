import Link from 'next/link'

export default function Construction() {
    return (
    <main className='h-screen bg-gradient-to-r from-yellow-600 to-zinc-900'>
        <div className='pt-12.5 justify-center items-center relative flex pt-20 '>
            <h1 className="font-bold text-white text-4xl hover:text-orange-500 ">
                Website is Currently Under Construction
            </h1>  
        </div>
        <div className="pt-12.5 relative justify-center items-center relative flex pt-20 " >
            <h2 className="font-bold text-white text-4xl ">
                <Link href="/remin">Visit ReMin</Link>
            </h2>
        </div>
        <div className="pt-12.5 relative justify-center items-center relative flex pt-20 " >
            <h2 className="font-bold text-white text-4xl ">
                <Link href="/barcelona">Visit Barçin</Link>
            </h2>
        </div>
        <div className="pt-12.5 relative justify-center items-center relative flex pt-20 " >
            <h2 className="font-bold text-white text-4xl ">
                <Link href="/valencia">Visit Valencia</Link>
            </h2>
        </div>
    </main>
    )
}