import { useTranslation } from 'react-i18next'
import InfoItemList from '../components/home/InfoItemList'
import BaseCarousel from '../components/BaseCarousel'
import NutritionalCompositionSection from '../components/home/NutritionalCompositionSection'

function HomePage() {
  const { t } = useTranslation()
  const images = [
    'https://images.pexels.com/photos/299352/pexels-photo-299352.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600',
  ]

  const user = {
    _id: '12345',
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    password: 'mypassword',
    roles: ['USER'],
    kg: 65,
    kgGoal: 60,
    height: 175,
    age: 26,
    indexActivity: 1.2,
    gender: 'woman',
  }

  return (
    <div className="container pb-5">
      <div className="row">
        <InfoItemList user={user} />
        <div className="col-12">
          {/* <HomePageCarousel /> */}
          <BaseCarousel images={images} />
        </div>
        <div className="col-12">
          <NutritionalCompositionSection title={t('page.recommendedIntake')} user={user} />
        </div>
      </div>
    </div>
  )
}

export default HomePage
