import Navbar from './assets/components/Navbar'
import './App.css'
import Hero from './assets/components/Hero'
import Meta from "./assets/components/Meta"
import Services from './assets/components/Services'
import Carousel from './assets/components/Carousel'
import  ProfileComponent  from './assets/components/ProfileComponent'
import Review from './assets/components/ReviewComponent'
import ContactUs from './assets/components/ContactUs'
import Location from './assets/components/Location'

const App = () => {
  return (
    <div >
    <Meta/>
      <Navbar/>
      <Hero/>
<Services/>
<Carousel/>
<ProfileComponent/>
<Review/>
<ContactUs/>
<Location/>
    </div>
  )
}

export default App