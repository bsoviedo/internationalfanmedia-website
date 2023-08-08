import TopHeader from "../Components-Valencia/TopHeader"
import Header from "../Components-Valencia/Header"
import Footer from "../Components-Valencia/Footer"

export default function Shop() {
    return(
        <div>
            <TopHeader/>
            <Header/>
            <div className="h-screen pt-12.5 relative bg-gradient-to-t from-orange-600 to-neutral-900   ">
                    <h1 className="pt-7 pl-7 font-bold text-white text-4xl hover:text-orange-500">
                        Shop is Currently Under Construction
                    </h1>   
            </div>
            <Footer/>
        </div>
    )
}