import TopHeader from '../Components-Remin/Top-Header'
import Header from '../Components-Remin/Header'
import Footer from '../Components-Remin/Footer'

export default function MatchCenter() {
    return(
        <div>
            <TopHeader/>
            <Header/>
            <div className="h-screen pt-12.5 relative bg-gradient-to-r from-amber-300 to-blue-600 to-purple-500 flex justify-center items-center ">
                <h1 className="font-bold text-white text-4xl animate-fade animate-ease-in animate-once ">
                        Match Center is Currently Under Construction
                </h1>    
            </div>
            <Footer/>
        </div>
    )
}

