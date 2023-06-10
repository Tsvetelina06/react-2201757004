import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useTranslation } from 'react-i18next'
import AddRemoveFavoriteButtonMenu from './AddRemoveFavoriteButtonMenu'
import LeftTabsSection from '../../components/menu/LeftTabsSection'
import ContextTabMenu from './ContextTabMenu'

function WeekMenuTabbed({ weekMenu }) {
  const { t } = useTranslation()

  // console.log(weekMenu)
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const meal = ['breakfast', 'lunch', 'dinner']

  const d = new Date()
  let today = weekday[d.getDay()]

  function getItemWeek(weekMenu, day) {
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
                <AddRemoveFavoriteButtonMenu />
                <ContextTabMenu weekM={weekMenu} d={day} m={'breakfast'} />
              </Tab.Pane>
              <Tab.Pane eventKey="lunch">
                <AddRemoveFavoriteButtonMenu />
                <ContextTabMenu weekM={weekMenu} d={day} m={'lunch'} />
              </Tab.Pane>
              <Tab.Pane eventKey="dinner">
                <AddRemoveFavoriteButtonMenu />
                <ContextTabMenu weekM={weekMenu} d={day} m={'dinner'} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    )
  }

  function getWeek(weekday, weekMenu, meal) {
    const sunday = weekday.shift()
    weekday.push(sunday)
    // console.log(weekMenu)
    return weekday.map((day, key) => {
      let nameDay = 'weekday.' + day
      // console.log(weekMenu)
      return (
        <Tab key={key} eventKey={day} title={t(nameDay)}>
          {getItemWeek(weekMenu, day, meal)}
          {/* <LeftTabsSection weekMenu={weekMenu} day={day} /> */}
          {/* <LeftTabsSection day={day} /> */}
          {/* <Sonnet /> */}
        </Tab>
      )
    })
  }

  return (
    <Tabs defaultActiveKey={today} id="fill-tab-example" className="tabs" fill>
      {getWeek(weekday, weekMenu)}
    </Tabs>
  )
}

export default WeekMenuTabbed
