import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function AppFooter() {
  const { t } = useTranslation()

  const informationLink = [
    {
      to: '/aboutUs',
      title: t('footer.aboutUs'),
    },
    {
      to: '/articles',
      title: t('navLinks.articles'),
    },
  ]

  const usefulInformationLink = [
    {
      to: '/generalTerms',
      title: t('footer.generalTerms'),
    },
    {
      to: '/usagePolicy',
      title: t('footer.usagePolicy'),
    },
  ]

  const servicesLink = [
    {
      to: '/weekMenu',
      title: t('navLinks.weekMenu'),
    },
    {
      to: '/recipes',
      title: t('navLinks.recipes'),
    },
  ]

  const getLinks = link => {
    return link.map((link, index) => {
      return (
        <li className="nav-item mb-2" key={index}>
          <Link to={link.to} className="nav-link p-0 text-muted">
            {link.title}
          </Link>
        </li>
      )
    })
  }

  return (
    <div className="container footer mt-auto py-3">
      <footer className="justify-content-between align-items-center py-3 my-4 border-top">
        <div className="row justify-content-between mx-4">
          <div className="my-2 col-lg-3">
            <h5 style={{ fontFamily: 'Lora' }}>{t('footer.information')}</h5>
            <ul className="nav flex-column">{getLinks(informationLink)}</ul>
          </div>

          <div className="my-2 col-lg-3">
            <h5 style={{ fontFamily: 'Lora' }}>{t('footer.usefulInformation')}</h5>
            <ul className="nav flex-column">{getLinks(usefulInformationLink)}</ul>
          </div>

          <div className="my-2 col-lg-3">
            <h5 style={{ fontFamily: 'Lora' }}>{t('footer.services')}</h5>
            <ul className="nav flex-column">{getLinks(servicesLink)}</ul>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-between align-items-center pt-3 mt-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb- me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg className="bi" width="30" height="24"></svg>
            </a>
            <span className="text-muted">© 2023</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24">
                  <BsTwitter />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24">
                  <BsInstagram />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24">
                  <BsFacebook />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default AppFooter
