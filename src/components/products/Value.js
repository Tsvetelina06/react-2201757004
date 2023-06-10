function Value({ name, value }) {
  return (
    <div className="col-md-2 my-1 me-4">
      <div className="my-4">
        <p className="mt-2 mb-0 text-center custemPValue">
          {value[0]} {value[1]}
        </p>
        <p className="mt-2 text-center">{name}</p>
      </div>
    </div>
  )
}

export default Value
