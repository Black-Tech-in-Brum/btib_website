import { PropTypes } from 'prop-types'

const strapiUrl = import.meta.env.VITE_REACT_APP_STRAPI_URL ?? ''

const imageClassNames = [
  "w-14 h-14",
  "w-24 h-24",
  "w-14 h-14 ml-auto",
  "w-32 h-32 ml-auto",
  "w-16 h-16 mx-auto",
  "w-16 h-16 mx-auto"
]

function StrapiBubbleImages({ images }) {
  const getImageClassName = (index) => {
    const largeEndImage = index === images.length - 1 && images.length <= 4

    if (largeEndImage) {
      return imageClassNames[4]
    }

    return imageClassNames[index % 6]
  } 
  return (
    <div className="hidden md:flex flex-wrap items-center overflow-hidden absolute z-10 inset-5" aria-hidden="true">
      {images.map((image, index) => (
        <div key={`image${image.id}`} className={`${index % 8 === 4 || index % 8 === 5 ? "w-1/2" : "w-1/4"}`}>
          <img className={`mb-1 ${getImageClassName(index)}`} src={`${strapiUrl}${image.attributes.url}`} width={128} height={128}/>
        </div>
        ))
      }
    </div>
  )
}

StrapiBubbleImages.propTypes = {
  images: PropTypes.array.isRequired
}

export default StrapiBubbleImages
