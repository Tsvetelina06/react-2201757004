import Carousel from 'react-bootstrap/Carousel'

function BaseCarousel({ images }) {
  function getRandomInt(max) {
    // console.log(Math.floor(Math.random() * max))
    return Math.floor(Math.random() * max)
  }

  // const imgDefault = ['https://i.ibb.co/fdbPGq5/logo.png']

  const imgDefault = ['https://i.ibb.co/kMj0gfX/horizontel-logo.jpg']

  function CarouselItem(images) {
    return images.map((image, index) => {
      return (
        <Carousel.Item key={index}>
          <img
            onError={event => {
              event.target.onerror = null
              event.target.src = imgDefault[0]
            }}
            className="w-100 rounded"
            src={image}
            alt={image}
          />
        </Carousel.Item>
      )
    })
  }

  return <Carousel>{CarouselItem(images)}</Carousel>
}

export default BaseCarousel
