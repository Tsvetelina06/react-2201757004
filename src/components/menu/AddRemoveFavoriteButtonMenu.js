import { MdOutlineBookmarkAdd, MdOutlineBookmarkRemove, MdFavoriteBorder } from 'react-icons/md'
import { Link } from 'react-router-dom'

function AddRemoveFavoriteButtonMenu() {
  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-1">
          <Link to={'/recipes'} state={''} className="icon-min me-4">
            <MdOutlineBookmarkAdd />
          </Link>
        </div>
        <div className="col-1">
          <Link to={''} state={''} className="icon-min me-4">
            <MdOutlineBookmarkRemove />
          </Link>
        </div>
        <div className="col-1">
          <Link to={''} state={''} className="icon-min">
            <MdFavoriteBorder />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AddRemoveFavoriteButtonMenu
