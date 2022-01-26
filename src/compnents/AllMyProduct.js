import { useState } from "react"
import { Button, Card, Col } from "react-bootstrap"
import ProductEdit from "./ProductEdit"
import ProductRemove from "./ProductRemove"

function AllMyProduct(props) {
  const { product } = props
  const [editShow, setEditShow] = useState(false)
  const [deleteShow, setDelete] = useState(false)
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>
              <h5>السعر:{product.price}</h5> <h5>الكمية:{product.quantity}</h5>
            </Card.Text>
            <Card.Text>
              <h5>متوسط التقيمييات:{product.ratingAverage}</h5>
            </Card.Text>
            <Button
              variant="success"
              style={{ marginRight: 40, marginBottom: 10 }}
              className="me-2"
              onClick={() => setEditShow(true)}
            >
             تعديل
            </Button>
            <Button  style={{ marginRight: 40, marginBottom: 10 }} variant="danger" className="me-2" onClick={() => setDelete(true)}>Delete</Button>
          </Card.Body>
        </Card>
        <Card.Footer>
        <h1>تعليقات</h1>
          {product.comments.map(comment => (
            <Card.Title>{comment.comment}</Card.Title>
          ))}
        </Card.Footer>
      </Col>
      <ProductEdit product={product} setShow={setEditShow} show={editShow} />
      <ProductRemove  productId={product._id} setShow={setDelete} show={deleteShow} />
    </>
  )
}

export default AllMyProduct
