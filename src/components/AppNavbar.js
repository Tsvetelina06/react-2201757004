import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import brandLogo from '../assets/logo.png'
import LanguageSwitch from './LanguageSwitch'
import { useTranslation } from 'react-i18next'
import UserMenu from './UserMenu'

function AppNavbar() {
  const location = useLocation()
  const currentPath = location.pathname
  const { t } = useTranslation()
  const navLinks = [
    {
      to: '/',
      title: t('navLinks.home'),
    },
    {
      to: '/weekMenu',
      title: t('navLinks.weekMenu'),
    },
    // {
    //   to: '/movies',
    //   title: t('navLinks.movies'),
    // },
    // {
    //   to: '/users',
    //   title: t('navLinks.users'),
    // },
    // {
    //   to: '/weather',
    //   title: t('navLinks.weather'),
    // },
    // {
    //   to: '/booking',
    //   title: t('navLinks.booking'),
    // },
    {
      to: '/recipes',
      title: t('navLinks.recipes'),
    },
    {
      to: '/nutritionalComposition',
      title: t('navLinks.nutritionalComposition'),
    },
    {
      to: '/articles',
      title: t('navLinks.articles'),
    },
  ]

  const isActive = to => {
    return currentPath === to
  }

  const getNavLinks = () => {
    return navLinks.map((navLink, index) => {
      return (
        <Nav.Link
          key={index}
          as={Link}
          className={isActive(navLink.to) ? 'active' : ''}
          to={navLink.to}
        >
          {navLink.title}
        </Nav.Link>
      )
    })
  }

  return (
    <Navbar bg="white" expand="lg" className="mb-2 mb-md-5">
      <Container>
        <Navbar.Brand href="#home">
          {/* <img src={brandLogo} alt="logo" /> */}
          <img src="https://i.ibb.co/fdbPGq5/logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggler collapsed" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">{getNavLinks()}</Nav>
          <Nav className="ms-auto">
            <LanguageSwitch />
            <UserMenu />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <>
    //   {['xxl'].map((expand) => (
    //     <Navbar key={expand} bg="light" expand={expand} className="mb-3">
    //       <Navbar.Offcanvas
    //           id={`offcanvasNavbar-expand-${expand}`}
    //           aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
    //           placement="end"
    //         >
    //           <Offcanvas.Header closeButton>
    //             <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
    //               Offcanvas
    //             </Offcanvas.Title>
    //           </Offcanvas.Header>
    //           <Offcanvas.Body>
    //             <Nav className="justify-content flex-grow-1 pe-3">
    //               {getNavLinks()}
    //             </Nav>
    //           </Offcanvas.Body>
    //         </Navbar.Offcanvas>
    //       <Container>

    //         <Navbar.Brand href="#home">
    //           <img src={brandLogo} alt="logo" />
    //         </Navbar.Brand>
    //         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
    //         <LanguageSwitch />
    //       </Container>
    //     </Navbar>
    //   ))}
    // </>
  )
}

export default AppNavbar
