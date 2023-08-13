import TopHeader from './Components-Home/Top-Header'
import Header from './Components-Home/Header'
import Body from './Components-Home/Body'
import Footer from './Components-Home/Footer'
// import Construction from './Components-Home/ConstructionPage'
// import AboutUs from './Components-Home/AboutUs'
// import ContactUs from './Components-Home/Contact'
// import Careers from './Components-Home/Careers'

export default function Page() {
  return(
        <div>
          <TopHeader/>
          <Header/>
          {/* <Construction/> */}
          <Body/>
          {/* <AboutUs/>
          <ContactUs/>
          <Careers/> */}
          <Footer/>
        </div>
      )
}