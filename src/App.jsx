import Navbar from './components/Navbar'
// import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Event from './components/Event'
import Membership from './components/Membership'
import JoinDiscord from './components/JoinDiscord'
import ContactUs from './components/contact-us'

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Membership />
      <Event />
      <JoinDiscord />
      <ContactUs />
      <Footer />
    </div>
  )
}
