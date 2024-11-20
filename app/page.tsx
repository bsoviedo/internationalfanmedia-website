import TopHeader from './Components-Home/Top-Header'
import Header from './Components-Home/Header'
import Teams from './Components-Home/FCTeams'
import Footer from './Components-Home/Footer'
import AboutUs from './Components-Home/AboutUs'
import ContactUs from './Components-Home/ContactUs'


export default function Page() {
  return(
  
<div >
  <TopHeader />
<Header />
<div className="flex flex-col snap-y snap-mandatory overflow-hidden flex flex-col space-y-4">
  <div className="snap-start">
    <Teams />
  </div>
  <div className="snap-start">
    <AboutUs />
  </div>
  <div className="snap-start">
    <ContactUs />
  </div>
</div>
{/* <Footer /> */}
</div>

      )
}