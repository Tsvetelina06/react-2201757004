import ListGroup from 'react-bootstrap/ListGroup'

function NecessaryProducts({ necessaryProducts }) {
  function returnNecessaryProduts(nProducts) {
    return nProducts.map((oProduct, key) => {
      return (
        <ListGroup.Item key={key}>
          {oProduct.quantityProduct} {oProduct.product[0].name}
        </ListGroup.Item>
      )
    })
  }

  return (
    <ListGroup variant="flush" className="rounded">
      {returnNecessaryProduts(necessaryProducts)}
    </ListGroup>
  )
}

export default NecessaryProducts
