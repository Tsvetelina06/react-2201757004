import { useState, useEffect } from 'react'
// import { usePostContext } from '../context/PostContext'
// import imageLogo from '../assets/logo.png';
import { isMobile } from 'react-device-detect'
import { Link } from 'react-router-dom'
import GetTags from './GetTags'

function ArticleListItem({ article }) {
  const imageSrc = article.images[0]

  return (
    <>
      <div className="card mb-3">
        <div className="row">
          <div className="col-lg-4 text-center my-auto">
            <img
              src={imageSrc}
              alt="imageSrc"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null
                currentTarget.src = 'https://i.ibb.co/kMj0gfX/horizontel-logo.jpg'
              }}
              className="img-fluid rounded ms-lg-3 py-3"
            />
          </div>
          <div className="col-lg-8">
            <div className="card-body">
              <Link to="/article" state={article}>
                <div className="flex-grow-1 d-lg-flex align-items-center">
                  <h5 className="card-title ms-1 mb-0">{article.name}</h5>
                  <div className="rounded-pill ms-auto text-end my-2">
                    <GetTags tags={article.tags} />
                  </div>
                </div>
              </Link>
              {isMobile && (
                <div className="rounded-pill ms-auto text-center">
                  <GetTags tags={article.tags} />
                </div>
              )}
              <p className="card-text my-1 text-truncate">{article.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleListItem
