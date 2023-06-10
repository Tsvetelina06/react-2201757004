import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { useTranslation } from 'react-i18next'
// import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';

function ArticleBreadcrumbs() {
  const { t } = useTranslation()

  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">{t('navLinks.home')}</Breadcrumb.Item>
      <Breadcrumb.Item href="/articles">{t('navLinks.articles')}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default ArticleBreadcrumbs
