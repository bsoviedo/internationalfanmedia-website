import TopHeader from './Components-Home/Top-Header'
import Header from './Components-Home/Header'
import Teams from './Components-Home/FCTeams'
import Footer from './Components-Home/Footer'
import AboutUs from './Components-Home/AboutUs'
import ContactUs from './Components-Home/ContactUs'


export default function Page() {
  return(
        <div>
          <TopHeader/>
          <Header/>
          <div className=''>
            <div className='snap-start'>
              <Teams/>
            </div>
            <div className='snap-start'>
              <AboutUs/>
            </div>
            <div className='snap-start'>
              <ContactUs/>
            </div>
          </div>
          {/* <Footer/> */}
        </div>
      )
}