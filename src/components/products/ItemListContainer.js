import { Link } from 'react-router-dom'
import EditRemoveButton from '../EditRemoveButton'

function ItemListContainer({ link, item }) {
  const imageSrc = item.image

  return (
    <>
      <div className="col-md-2 my-1 me-lg-4 card">
        <div className="h-75 my-4">
          <Link to={link} state={item}>
            <img
              src={imageSrc}
              alt="imageSrc"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null
                currentTarget.src = 'https://i.ibb.co/kMj0gfX/horizontel-logo.jpg'
              }}
              className="w-75 d-flex mx-auto h-75 rounded"
            />
            <h5 className="mt-2 text-center pb-lg-5">{item.name}</h5>
          </Link>
        </div>
        {link === '/products' ? (
          <div className="mx-auto">
            <EditRemoveButton
              editTo={'/nutritionalCompositionForm'}
              deleteToSucces={''}
              stateInfo={item}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default ItemListContainer
