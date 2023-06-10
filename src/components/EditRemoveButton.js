import { MdOutlineEditNote, MdOutlineBookmarkRemove } from 'react-icons/md'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

function EditRemoveButton({ editTo, deleteToSucces, stateInfo }) {
  let navigate = useNavigate()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const routeChange = deleteToSucces => {
    navigate(deleteToSucces)
  }
  const { t } = useTranslation()

  return (
    <div className="ms-auto text-end my-2 icon mb-3">
      {/* <BiBookAddBiBookAdd /> */}
      {/* <MdOutlineBookmarkAdd className='me-5' /> */}
      <Link to={editTo} state={stateInfo}>
        <MdOutlineEditNote className="me-5" />
      </Link>
      <Link to={''} state={stateInfo} onClick={handleShow}>
        <MdOutlineBookmarkRemove />
      </Link>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{t('form.delete')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t('form.deleteConfirmation')}</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary b-cancel" onClick={handleClose}>
            {t('form.cancel')}
          </Button>
          {/* navigate(deleteToSucces) */}
          <Button variant="primary text-white" onClick={''}>
            {t('form.confirm')}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditRemoveButton
