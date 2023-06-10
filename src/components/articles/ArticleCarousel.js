import Carousel from 'react-bootstrap/Carousel'
// import carousel01 from '../assets/carousel_01.jpg';
// import carousel02 from '../assets/carousel_02.jpg';

function ArticleCarousel({ images }) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  const imgDefault = [
    'https://res.cloudinary.com/mateassets/image/upload/v1680943398/carousel_01_ft6zin.jpg',
    'https://res.cloudinary.com/mateassets/image/upload/v1680943398/carousel_02_f0kset.jpg',
  ]

  function CarouselItem(images) {
    return images.map(image => {
      return (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image}
            alt={image}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null
              currentTarget.src = imgDefault[getRandomInt(2)]
            }}
          />
          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
      )
    })
  }

  return <Carousel>{CarouselItem(images)}</Carousel>
}

export default ArticleCarousel
