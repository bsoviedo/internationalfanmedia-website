import TopHeader from './Components-Home/Top-Header'
import Header from './Components-Home/Header'
import Body from './Components-Home/Body'
import Footer from './Components-Home/Footer'
import AboutUs from './Components-Home/AboutUs'


export default function Page() {
  return(
        <div>
          <TopHeader/>
          <Header/>
          <div className='snap-y snap-mandatory overflow-scroll h-screen '>
            <div className='snap-center'>
              <Body/>
            </div>
            <div className='snap-center'>
              <AboutUs/>
            </div>
          </div>
          {/* <Footer/> */}
        </div>
      )
}