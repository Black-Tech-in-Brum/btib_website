import { ReactComponent as Scribble } from '@assets/icons/scribble.svg'
import { PropTypes } from 'prop-types'

function StrapiHeading({ title, underlineTitle, underlineColor }) {
  return (
    <h2 className="relative inline-block px-5 md:px-24 font-atype md:font-atype -tracking-[0.75px] text‑inherit text-4xl md:text-5/4xl font-semibold">
        <span className='hyphens-auto break-words'>{title}</span>
        {underlineTitle && <Scribble className="text‑inherit mt-2 rotate-1 w-full h-full" aria-hidden="true" style={{ color: underlineColor ? underlineColor : "" }} />}
    </h2>
  )
}

StrapiHeading.propTypes = {
  title: PropTypes.string,
  underlineTitle: PropTypes.bool,
  underlineColor: PropTypes.string
}

export default StrapiHeading
