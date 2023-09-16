 import Navbar from './components/navbar'
// import { Routes, Route } from "react-router-dom"
import Footer from './components/footer'
import Header from './components/Header'
import About from './components/about/About'
import Event from './components/Event'
import Membership from './components/Membership'
import JoinDiscord from './components/JoinDiscord'
import ContactUs from './components/contactUs/ContactUs'

export default function App() {
  return (
    <div>
      <Navbar /> 
      <Header />
      <About />
      <Membership />
      <JoinDiscord />
      <Event />
      <ContactUs />
      <Footer />
    </div>
  )
}
