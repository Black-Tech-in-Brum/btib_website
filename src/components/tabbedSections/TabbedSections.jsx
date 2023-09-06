import {
  useEffect,
  useState,
} from 'react'

import { PropTypes } from 'prop-types'
import { getTextContrastColor } from '@utils/colorContrast'
import RichTextMarkdown from '@components/richTextMarkdown';
import StrapiHeading from '@components/strapiHeading';

const strapiUrl = import.meta.env.VITE_REACT_APP_STRAPI_URL ?? ''
const Tab = ({ uniqueId, heading, highlightColor, currentSectionId, clickHandler }) => {
  const [tabStyle, setTabStyle] = useState({})

  const eventTabStyle = () => currentSectionId !== uniqueId && setTabStyle({
    background: highlightColor,
    color: getTextContrastColor(highlightColor)
  })

  const resetStyle = () => currentSectionId !== uniqueId && setTabStyle({})

  useEffect(() => {
    if(
      currentSectionId === uniqueId 
    ) {
      setTabStyle({
        background: highlightColor,
        color: getTextContrastColor(highlightColor)
      })
    } else {
      setTabStyle({})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSectionId])
  
  return (
    <li>
      <button 
        className='w-48 py-2 px-8 rounded-[100px] bg-neutral-300 text-neutral-400 font-satoshi font-bold' style={tabStyle} onMouseOver={eventTabStyle} onMouseOut={resetStyle} onFocus={eventTabStyle} onBlur={resetStyle} onClick={() => clickHandler(uniqueId)}
        aria-controls={uniqueId}
        >
        {heading}
      </button>
    </li>
  )
}


const TabbedSections = ({
  sections
 }) => {
  const [currentSectionId, setCurrentSectionId] = useState(sections[0].uniqueIdText)
  function tabHandler(id) {
    setCurrentSectionId(id)
  } 
  return (
    <div className='flex flex-col items-center gap-10 w-full'>
      <nav className="w-full px-4 md:px-0" aria-label="Sections">
      <ul className='flex flex-col items-center md:flex-row gap-6 md:gap-14 w-full px-24 md:justify-center'>
        {sections.map((section) => <Tab key={section.uniqueIdText} uniqueId={section.uniqueIdText} heading={section.heading} highlightColor={section.highlightColor} currentSectionId={currentSectionId} clickHandler={tabHandler} />)}
      </ul>
      </nav>
      {sections.map((section) => (
        <article key={section.uniqueIdText} className={`py-10 md:py-32 rounded-3xl border-4 border-neutral-200 bg-neutral-300 md:mx-24 ${currentSectionId === section.uniqueIdText ? "" : "hidden"}`} id={section.uniqueIdText}>
            <StrapiHeading title={section.heading} underlineTitle={true} underlineColor={section.highlightColor} />
            <div className='flex-col justify-center items-center gap-6 inline-flex md:inline-block'>
              <div className='px-5 pt-2 md:px-24 md:w-1/2 md:inline-block'>
                <RichTextMarkdown markdown={section.body} />
              </div>
              {section.image && <img className="rounded-3xl w-full h-full px-5 md:px-24 md:w-1/2 md:h-auto md:float-right md:-mt-36" src={`${strapiUrl}${section.image.data.attributes.url}`} width={128} height={128} alt={section.image.alternativeText || ""}/>}
            </div>
        </article>)
      )}
    </div>

  )
}


Tab.propTypes = {
  uniqueId: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  highlightColor: PropTypes.string.isRequired,
  currentSectionId: PropTypes.string.isRequired,
  clickHandler: PropTypes.func
}

TabbedSections.propTypes = {
  sections: PropTypes.array.isRequired
}

export default TabbedSections
