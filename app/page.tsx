import TopHeader from './Components-Home/Top-Header'
import Header from './Components-Home/Header'
import Body from './Components-Home/Body'
import Footer from './Components-Home/Footer'
import Construction from './Components-Home/ConstructionPage'

export default function Page() {
  return(
        <div>
          <TopHeader/>
          <Header/>
          <Construction/>
          {/* <Body/> */}
          <Footer/>
        </div>
      )
}