import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

import { getTextContrastColor } from '@utils/colorContrast'

function Button({ 
  text,
  link,
  color, 
  eventColor, 
 }) {
  const textColorClassName = color ? getTextContrastColor(color) : "text-neutral-100"
  const eventTextColorClassName = eventColor ? getTextContrastColor(eventColor) : textColorClassName
  const eventClassName = eventColor ? `hover:bg-[${eventColor}] focus-visible:bg-[${eventColor}] hover:${eventTextColorClassName} focus-visible:${eventTextColorClassName}` : "hover:bg-primary-100 focus-visible:bg-primary-100"
  const className = `mx-auto block rounded-lg ${color ? `bg-[${color}]` : "bg-primary-200"} ${textColorClassName} px-4 py-3 font-satoshi font-bold text-neutral-100 ${eventClassName}`
  
  if (link) {
    <Link className={className} href={link}>
      {text}
    </Link>
  }

  return (
    <button className={className}>
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
