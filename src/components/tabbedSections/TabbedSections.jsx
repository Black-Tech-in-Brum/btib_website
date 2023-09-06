import {
  useEffect,
  useRef,
  useState,
} from 'react'

import { PropTypes } from 'prop-types'
import ReactMarkdown from 'react-markdown'

import { getTextContrastColor } from '@utils/colorContrast'

const Tab = ({ section }) => {
  const [tabStyle, setTabStyle] = useState({})
  const buttonEventHandler = () => setTabStyle({
    background: section.highlightColor,
    color: getTextContrastColor
  })
  return (
    <li>
      <button className='pointer-events-auto w-48 py-2 px-8 rounded-[100px] bg-neutral-300 text-neutral-400 font-satoshi font-bold' style={tabStyle} onMouseOver={setTabStyle} >

      </button>
    </li>
  )
}


const Tabs = ({
  sections,
  sectionClassNames
}) => {
  const classNames = sections.map((section) => section.highlightColor)
 
  return (
  <ul className='flex flex-col items-center md:flex-row gap-6 md:gap-14 w-full'>
  {sections.map((section, index) =>  (
      <li key={`ts${sections.length}${section.id}`}>
        <button className={`bg-[${classNames[index]}]`}>{section.heading}</button>
      </li>
    ))}
</ul>)
}

const TabbedSections = ({
  sections
 }) => {
  const classNamesRef = useRef(null)
  const [classNamesReady, setClassNamesReady] = useState(false)

  useEffect(() => {
    setClassNamesReady(true)
  }, [])
 
  return (
    <div className='flex flex-col items-center gap-10 w-screen'>
      <nav className="w-full px-4 md:px-0" aria-label="Sections">
       {classNamesReady && <Tabs sections={sections} sectionClassNames={classNamesRef.current} />}
      </nav>
      {sections.map((section) => {
        <article key={`section${section.id}`}>
          <div className='font-satoshi md:text-lg text-center'><ReactMarkdown>{section.body}</ReactMarkdown></div> 
        </article>
      })}
    </div>

  )
}

Tabs.propTypes = {
  sections: PropTypes.array.isRequired,
  sectionClassNames: PropTypes.array.isRequired
}

TabbedSections.propTypes = {
  sections: PropTypes.array.isRequired
}

export default TabbedSections
