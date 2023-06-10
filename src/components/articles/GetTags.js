import Badge from 'react-bootstrap/Badge'

function GetTags({ tags }) {
  return tags.map(tag => {
    return (
      <>
        <Badge pill bg="success">
          {tag}
        </Badge>{' '}
      </>
    )
  })
}

export default GetTags
