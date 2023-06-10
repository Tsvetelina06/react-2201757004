import Data from '../Data'
import ReviewBar from './ReviewBar'

function ReviewUser({ reviews }) {
  function getReviewUser(reviews) {
    return reviews.map((review, key) => {
      return (
        <div key={key} className="card my-3 py-2 px-3">
          <div className="flex-grow-1 d-flex align-items-center">
            <h5 className="card-title ms-1 mb-0">
              {review.user.firstName} {review.user.lastName}
            </h5>
            <div className="ms-auto text-end my-2 text-greay-600 star">
              <ReviewBar rating={review.rating} interactive={false} />
              {/* <Data dateOfEntry={review.date} /> */}
            </div>
          </div>
          <p className="card-text my-1">{review.text}</p>
        </div>
      )
    })
  }

  return <div className="my-3">{getReviewUser(reviews)}</div>
}

export default ReviewUser
