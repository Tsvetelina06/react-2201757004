import { useTranslation } from 'react-i18next'
import Data from '../Data'

function ArticleInfo({ dateOfEntry, timeRead }) {
  const { t } = useTranslation()

  return (
    <div className="text-end text-muted">
      <p>
        {t('article.from')} <Data dateOfEntry={dateOfEntry} />, {t('article.read')} {timeRead}{' '}
        {t('article.min')}
      </p>
    </div>
  )
}

export default ArticleInfo
