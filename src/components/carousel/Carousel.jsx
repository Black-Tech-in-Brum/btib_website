import { useState } from 'react'
import PropType from 'prop-types'
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevIndex = (currentIndex - 1 + images.length) % images.length
  const nextIndex = (currentIndex + 1) % images.length

  const slideLeft = () => setCurrentIndex(prevIndex)
  const slideRight = () => setCurrentIndex(nextIndex)

  return (
    <div className="relative w-full">
      
    </div>
  )
  }

Carousel.propTypes = {
  images: PropType.array.isRequired,
}

export default Carousel

/*<div className="hidden md:flex absolute inset-y-0 left-0 z-10 items-center justify-center">
        <img
          src={items[prevIndex]}
          alt=""
          className="h-64 w-1/2 object-cover"
        />
      </div>

      <div className="flex overflow-hidden">
        {items.map((imageUrl, index) => (
          <div
            key={index}
            className={`w-full md:w-1/2 ${
              index === currentIndex ? 'block' : 'hidden'
            } md:flex items-center justify-center`}
          >
            <img
              src={imageUrl}
              alt=""
              className="md:h-64 w-full md:w-auto object-cover"
            />
          </div>
        ))}
      </div>

      <div className="hidden md:flex absolute inset-y-0 right-0 z-10 items-center justify-center">
        <img
          src={items[nextIndex]}
          alt=""
          className="h-64 w-1/2 object-cover"
        />
      </div>
      <div className="absolute inset-y-0 left-0 md:hidden z-10 flex items-center justify-center">
        <button
          onClick={slideLeft}
          className="bg-gray-500 p-2 rounded-full text-white"
        >
          {'<'}
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 md:hidden z-10 flex items-center justify-center">
        <button
          onClick={slideRight}
          className="bg-gray-500 p-2 rounded-full text-white"
        >
          {'>'}
        </button>
      </div>*/