import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import AddRemoveFavoriteMenu from './AddRemoveFavoriteButtonMenu'
// import ContextTabMenu from './ContextTabMenu'
// import Sonnet from '../../components/Sonnet';

function LeftTabsSection({ weekMenu, day }) {
  const { t } = useTranslation()

  // const location = useLocation()
  // const weekMenu = location.state

  // console.log(day)
  // console.log(weekMenu)
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="breakfast">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="breakfast">{t('weekMenuPage.breakfast')}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="lunch">{t('weekMenuPage.lunch')}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="dinner">{t('weekMenuPage.dinner')}</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="breakfast">
              {/* <AddRemoveFavoriteMenu /> */}
              {/* <ContextTabMenu /> */}
              {/* <ContextTabMenu weekMenu={weekMenu} /> */}
              {/* <p>{weekMenu.id}</p> */}
              {/* <Sonnet /> */}
            </Tab.Pane>
            <Tab.Pane eventKey="lunch">{/* <Sonnet /> */}</Tab.Pane>
            <Tab.Pane eventKey="dinner">{/* <Sonnet /> */}</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default LeftTabsSection
