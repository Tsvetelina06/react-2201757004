function InfoItem({ title, rowFirst, rowFirstDescription, rowSecond, rowSecondDescription }) {
  return (
    <div className="card mt-2">
      <div className="d-flex flex-column align-items-center py-3 px-5 mt-3">
        <h5 className="text-truncate text-center" style={{ fontFamily: 'Lora' }}>
          {title}
        </h5>
      </div>
      <div className="px-5" style={{ fontFamily: 'Montserrat' }}>
        <div className="d-flex justify-content-between mx-3">
          <p className="font-weight-bold text-truncate">{rowFirst}</p>
          <p className="ms-5 text-end ">{rowFirstDescription}</p>
        </div>
        <hr />
        <div className="d-flex justify-content-between mx-3 mt-2">
          <p className="font-weight-bold">{rowSecond}</p>
          <p className="text-end text-truncate">{rowSecondDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoItem
