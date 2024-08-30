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
      <title>M.K. Demolators - Professional Demolition Services in Delhi</title>
      <meta name="description" content="M.K. Demolators offers top-notch demolition services in Delhi and surrounding areas. Contact us for safe and efficient demolition." />
                <meta name="keywords" content="demolition services, Delhi demolition, building demolition, concrete demolition, residential demolition, commercial demolition, demolition contractors, demolition near me, site clearance, demolition waste management, eco-friendly demolition, demolition experts, demolition cost estimate, industrial demolition, asbestos removal, wrecking services, local demolition services, affordable demolition services, complete building demolition services, best demolition company, trusted demolition services, demolition consultation, government demolition contractors, demolition trends, demolition project management, high safety construction demolition, construction project demolition services" />
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