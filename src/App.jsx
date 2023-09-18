import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import About from './components/about/About'
import Event from './components/event/Event'
import Membership from './components/membership/Membership'
import JoinDiscord from './components/joinDiscord/JoinDiscord'
import ContactUs from './components/contactUs/ContactUs'


export default function App() {
  
  return (
    <div>

       <Navbar /> 
        <Header/>
        <About/>
        <Membership/>
        <JoinDiscord/>
        <Event/>
        <ContactUs/> 
        <Footer />
    </div>
  )
}
