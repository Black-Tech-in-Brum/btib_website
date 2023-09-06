import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import {
  useState
} from 'react'

import { getTextContrastColor } from '@utils/colorContrast'

function Button({ 
  text,
  link,
  color, 
  eventColor, 
 }) {

  const [buttonStyle, setButtonStyle] = useState({
    background: color,
    color: getTextContrastColor(color)
  })

  const eventButtonStyle = () => setButtonStyle({
    background: eventColor,
    color: getTextContrastColor(eventColor)
  })

  const resetStyle = () =>  setButtonStyle({
    background: color,
    color: getTextContrastColor(color)
  })

  const className = `mx-auto block rounded-lg px-4 py-3 font-satoshi font-bold ${color ? "" : "bg-primary-200 text-neutral-100"} ${eventColor ? "" : "hover:bg-primary-100 focus-visible:bg-primary-100 text-neutral-100"}`
  
  if (link) {
    <Link className={className} style={buttonStyle} onMouseOver={eventButtonStyle} onMouseOut={resetStyle} onFocus={eventButtonStyle} onBlur={resetStyle} href={link}>
      {text}
    </Link>
  }

  return (
    <button className={className} style={buttonStyle} onMouseOver={eventButtonStyle} onMouseOut={resetStyle} onFocus={eventButtonStyle} onBlur={resetStyle}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  color: PropTypes.string,
  eventColor: PropTypes.string
}

export default Button
