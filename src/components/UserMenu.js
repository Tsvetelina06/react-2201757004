import { useUserContext } from '../context/UserContext'
import { NavDropdown } from 'react-bootstrap'
import { BiUserCircle } from 'react-icons/bi'
import { queryClient } from '../providers/Providers'
import { client } from '../network/client'
import { removeUserToken } from '../utils/token'
import { useTranslation } from 'react-i18next'

function UserMenu() {
  const { t } = useTranslation()

  const { currentUser, setCurrentUser } = useUserContext()
  const handleMenuSelect = eventKey => {
    if (eventKey === 'logout') {
      removeUserToken()
      client.setHeader('Authorization', '')
      setCurrentUser({})
    }
  }
  return (
    <NavDropdown
      onSelect={handleMenuSelect}
      align="end"
      title={
        <div className="d-flex align-items-center">
          <BiUserCircle size="1.5rem" color="#222222" />
          <span className="mx-2">{currentUser?.firstName}</span>
        </div>
      }
    >
      <NavDropdown.Item eventKey="profile" href="#">
        <span>{t('navLinks.myProfile')}</span>
      </NavDropdown.Item>
      <NavDropdown.Item eventKey="logout" href="#">
        <span>{t('navLinks.logout')}</span>
      </NavDropdown.Item>
    </NavDropdown>
  )
}
export default UserMenu
