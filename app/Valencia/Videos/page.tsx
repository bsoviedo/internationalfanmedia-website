import TopHeader from "../Components-Valencia/TopHeader"
import Header from "../Components-Valencia/Header"
import Footer from "../Components-Valencia/Footer"

export default function Videos() {
    return(
        <div>
            <TopHeader/>
            <Header/>
            <div className="h-screen pt-12.5 relative bg-gradient-to-t from-orange-600 to-neutral-900 flex justify-center items-center ">
            <h1 className="font-bold text-white text-4xl animate-fade animate-once animate-ease-in">
                Coming Soon
            </h1>    
        </div>
            <Footer/>
        </div>
    )
}