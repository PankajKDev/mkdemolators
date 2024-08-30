import Navbar from './assets/components/Navbar'
import './App.css'
import Hero from './assets/components/Hero'
import { Helmet } from 'react-helmet-async'
import Services from './assets/components/Services'
import Carousel from './assets/components/Carousel'
import  ProfileComponent  from './assets/components/ProfileComponent'
import Review from './assets/components/ReviewComponent'
import ContactUs from './assets/components/ContactUs'
import Location from './assets/components/Location'

const App = () => {
  return (
    <div >
      <Helmet>
                <title>M.K Demolators - Our Location</title>
                <meta name="description" content="Visit M.K Demolators at our location in Delhi,India We specialize in safe and efficient demolition services." />
                <meta name="keywords" content="demolition, M.K Demolators, Delhi,demolition,tin shed,basement excavation,construction,tudaai,building tudaai,services" />
                <meta name="author" content="M.K Demolators" />
            </Helmet>
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