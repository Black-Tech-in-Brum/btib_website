import { useState } from 'react'
import useStrapiData from '@hooks/useStrapiData'
import Navbar from '@components/navbar'
import Footer from '@components/footer'
import SocialMediaContext from '@contexts/socialMediaContext'

export default function App() {
  const { links, footer, socialMedia, isLoading, strapiErrors } = useStrapiData(['menu', 'footer', 'social-media'])
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
        <Navbar links={links} />
        <Footer text={footer} />
      </div>
    </SocialMediaContext.Provider>
  )
}
