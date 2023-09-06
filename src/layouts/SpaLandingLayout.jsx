import { PropTypes } from 'prop-types'
import StrapiPage from '@components/strapiPage'

function SpaLandingLayout({ pages }) {
  return (
    <div className='w-screen relative h-auto pt-[5.5rem] md:pt-0 flex flex-col gap-12 md:gap-20'>
      {pages.map((page) => <StrapiPage 
                              key={`strapiPage${page.id}`}
                              title={page.attributes.title}
                              description={page.attributes.description}
                              slug={page.attributes.slug}
                              underlineTitle={page.attributes.underlineTitle}
                              useGradientNoiseBackground={page.attributes.useGradientNoiseBackground}
                              desktopBubbleImages={page.attributes.desktopBubbleImages.data}
                              components={page.attributes.components}
                              />)}
    </div>
  )
}

SpaLandingLayout.propTypes = {
  pages: PropTypes.array
}

export default SpaLandingLayout
