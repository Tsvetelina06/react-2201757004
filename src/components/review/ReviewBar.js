import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
// import 'react-rater/lib/react-rater.css'

function ReviewBar({ rating, interactive }) {
  return <Rater total={5} rating={rating} interactive={interactive} />
}

export default ReviewBar
