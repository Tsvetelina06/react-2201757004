import ReviewUser from './ReviewUser'
import ReviewInput from './ReviewInput'
import { useTranslation } from 'react-i18next'

function ReviewSection({ reviews }) {
  const { t } = useTranslation()
  // console.log(reviews)

  function reviewUser(rating) {
    if (rating) {
      return (
        <div>
          <h4 style={{ fontFamily: 'Lora' }} className="ms-1">
            {t('review.raitings')}
          </h4>
          <div>
            <ReviewUser reviews={rating} />
          </div>
        </div>
      )
    }
  }

  return (
    <div className="my-4">
      {reviewUser(reviews)}
      <div className="my-5">
        <ReviewInput />
      </div>
    </div>
  )
}

export default ReviewSection
