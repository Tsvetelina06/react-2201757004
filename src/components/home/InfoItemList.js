import InfoItem from './InfoItem'
import { useTranslation } from 'react-i18next'
import ConstIndexActivity from './ConstIndexActivity'

function InfoItemList({ user }) {
  const { t } = useTranslation()

  const matchedActivity = ConstIndexActivity.find(
    level => level.indexActivity === user.indexActivity,
  )
  const activity = matchedActivity ? matchedActivity.activity : ''

  function returnModeText(userKg, kgGoal) {
    return userKg > kgGoal ? 'download' : userKg === kgGoal ? 'maintenance' : 'uploading'
  }

  const infoItems = [
    {
      title: t('info.mainInfoTitle'),
      rowFirst: t(`activity.${activity}`),
      // rowFirstDescription: t(`activity.${activity}`), t('info.action')
      rowSecond: t('info.kg'),
      rowSecondDescription: user.kg,
    },
    {
      title: t('info.goalTitle'),
      rowFirst: t('info.mode'),
      rowFirstDescription: t(`mode.${returnModeText(user.kg, user.kgGoal)}`),
      rowSecond: t('info.kg'),
      rowSecondDescription: user.kgGoal,
    },
  ]
  const getInfoItems = () => {
    return infoItems.map((item, index) => {
      return (
        <div key={index} className="col-md-6 mb-4">
          <InfoItem
            title={item.title}
            rowFirst={item.rowFirst}
            rowFirstDescription={item.rowFirstDescription}
            rowSecond={item.rowSecond}
            rowSecondDescription={item.rowSecondDescription}
          />
        </div>
      )
    })
  }

  return <>{getInfoItems()}</>
}

export default InfoItemList
