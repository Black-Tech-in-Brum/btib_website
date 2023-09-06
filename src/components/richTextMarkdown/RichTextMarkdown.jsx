import { PropTypes } from 'prop-types'
import ReactMarkdown from 'react-markdown'

const RichTextMarkdown = ({ markdown }) => (<div className='font-satoshi md:text-lg text-center'><ReactMarkdown>{markdown}</ReactMarkdown></div>)

RichTextMarkdown.propTypes = {
  markdown: PropTypes.string.isRequired,
}

export default RichTextMarkdown
