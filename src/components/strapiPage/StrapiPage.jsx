import { PropTypes } from 'prop-types'
import Button from '@components/Button'
import Carousel from '@components/Carousel'
import TabbedSections from '@components/tabbedSections'
import StrapiHeading from '@components/strapiHeading'
import StrapiBubbleImages from '@components/strapiBubbleImages'
import RichTextMarkdown from '@components/richTextMarkdown'

const strapiComponents = {
  "text-content.button": Button,
  "text-content.dynamic-text": RichTextMarkdown,
  "text-content.text-carousel": RichTextMarkdown,
  "multimedia.image-carousel": Carousel,
  "multimedia.tabbed-sections": TabbedSections
}

function StrapiPage({ 
  title, 
  description, 
  slug, 
  underlineTitle, 
  useGradientNoiseBackground, 
  desktopBubbleImages,
  components
 }) {
  const ComponentsCol = () => {
    return (
      <div className="z-10 my-10">
        {components &&
          components.map((component, index) => {
            const ComponentToRender = strapiComponents[component.__component]
            if (ComponentToRender) {
              return (
                <ComponentToRender
                  key={`component${index}`}
                  {...component}
                />
              )
            }
            return null
          })}
      </div>
    )
  }

  return (
    <section id={slug && slug.split('/')[1]} className={`relative flex justify-center items-center w-full ${useGradientNoiseBackground ? "py-16 bg-secondary-300 bg-noise-gradient-small bg-full bg-blend-hard-light md:bg-noise-gradient text-neutral-100" : "text-neutral-500"}`}>
      {desktopBubbleImages && <StrapiBubbleImages images={desktopBubbleImages}/>}
      <div className="text-center w-full md:max-w-2xl my-6 md:my-10 z-10">
        <StrapiHeading title={title} underlineTitle={underlineTitle} />
        {description && <p className="font-satoshi text-center text-xl md:text-2xl mt-5 px-5">{description}</p>}
        <ComponentsCol />
      </div>
    </section>
  )
}

StrapiPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  underlineTitle: PropTypes.bool,
  useGradientNoiseBackground: PropTypes.bool,
  desktopBubbleImages: PropTypes.array,
  components: PropTypes.array
}

export default StrapiPage
