import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import StoreContext from "../uiltes/StoreContext"

function OrderEdit(props) {
  const { order, show, setShow } = props
  const { editOrder } = useContext(StoreContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editOrder(e, order._id)}>
        <Modal.Header closeButton>
          <Modal.Title>تغيير الحالة لهذه الطلبية</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              الحالة
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="status" defaultValue={order.status} required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
         إغلاق
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
      تأكيد
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default OrderEdit
