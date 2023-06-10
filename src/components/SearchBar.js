import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

function SearchBar({ keyword, onChange }) {
  const { t } = useTranslation()

  return (
    <InputGroup>
      <InputGroup.Text>
        <BiSearchAlt2 />
      </InputGroup.Text>
      <Form.Control
        placeholder={t('form.search')}
        aria-label="Search"
        aria-describedby="basic-addon2"
        value={keyword}
        onChange={e => onChange(e.target.value)}
      />
    </InputGroup>
  )
}

export default SearchBar
