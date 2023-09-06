import { useState } from 'react'
import useStrapiData from '@hooks/useStrapiData'
import Navbar from '@components/navbar'
import Footer from '@components/footer'
import SocialMediaContext from '@contexts/socialMediaContext'
import SpaLandingLayout from '@layouts/SpaLandingLayout'

export default function App() {
  const { spaPages, links, footer, socialMedia, isLoading, strapiErrors } = useStrapiData(['spaLanding', 'menu', 'footer', 'social-media'])
  const [serverError, setServerError] = useState(false)
  
  Object.values(strapiErrors).forEach((error) => {
    if(error.response.status >= 500) setServerError(true)
  })

  // TODO: Splash/skeleton screen
  if (isLoading) {
    return <div>Loading...</div>
  }

  // TODO: Error Pages
  if (serverError) {
    return <div>The server is down. Please try again later.</div>
  }

  return (
    <SocialMediaContext.Provider value={socialMedia}>
      <div className='relative'>
        {links && <Navbar links={links} />}
        <SpaLandingLayout pages={spaPages} />
        <Footer text={footer} />
      </div>
    </SocialMediaContext.Provider>
  )
}
