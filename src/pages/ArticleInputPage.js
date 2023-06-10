import ArticleForm from '../components/articles/ArticleForm'
// import FileUploadForm from "../components/articles/FileUploadForm";
// import TagForm from "../components/articles/TagForm"
import { MdBackspace } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'

function ArticleInputPage() {
  const location = useLocation()
  const data = location.state

  const navigate = useNavigate()
  const handleClick = () => {
    const path = data ? '/article' : '/articles'
    const state = data ? data : ''

    navigate(path, { state })
  }

  return (
    <div className="container">
      <div className="row  justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="text-end icon mb-3 me-2">
                <MdBackspace className="custom-icon" onClick={handleClick} />
              </div>
              {/* <TagForm /> */}
              <ArticleForm data={data} />
              {/* <FileUploadForm /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleInputPage
