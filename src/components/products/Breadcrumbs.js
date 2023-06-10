import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { useTranslation } from 'react-i18next'

function Breadcrumbs({ items }) {
  const { t } = useTranslation()

  function BreadcrumbItem(items) {
    return items.map(item => {
      ;<Breadcrumb.Item href="/articles">{t('navLinks.articles')}</Breadcrumb.Item>
    })
  }

  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">{t('navLinks.home')}</Breadcrumb.Item>
      <Breadcrumb.Item href="/articles">{t('navLinks.articles')}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Breadcrumbs
