import { useContext } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import StoreContext from "../uiltes/StoreContext";

function ProfileEdit(props) {
    const {profile,editProfile}=useContext(StoreContext)
    const{show,setShow}=props
   
    return ( <>
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editProfile(e)}>
        <Modal.Header closeButton>
          <Modal.Title>تعديل الملف الشخصي</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
           الأسم الأول
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="firstName" defaultValue={profile.firstName} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
         الأسم الأخير
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" defaultValue={profile.lastName} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
    أسم المستخدم
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="username" defaultValue={profile.username} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
         أسم المتجر
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="nameStore" defaultValue={profile.nameStore} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
        البريد الإلكتروني
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email" defaultValue={profile.email} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            رقم الجوال
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="phone" defaultValue={profile.phone} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
          نبذة بسيطة عن مشروعك
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="aboutYourBusiness" defaultValue={profile.aboutYourBusiness} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            الصورة
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" defaultValue={profile.photo} required />
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
    
    </> );
}

export default ProfileEdit;