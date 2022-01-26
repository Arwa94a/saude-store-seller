import { useContext, useState } from "react"
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap"
import ProfileEdit from "../compnents/ProfileEdit"
import StoreContext from "../uiltes/StoreContext"
import "../App.css"
import ProfileRemove from "../compnents/ProfileRemove"

import ProductAdd from "../compnents/ProductAdd"
function Profile() {
  const { profile } = useContext(StoreContext)
  const [editShow, setEditShow] = useState(false)
  const [deleteShow, setDelete] = useState(false)
  const [show, setShow] = useState(false)
  if (!profile) return <h1>Loding...</h1>
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)}>
          <i class="fas fa-cart-plus" title="add product"></i>
        </Button>
      </div>
      {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }}variant="outline-primary" className="me-2" onClick={() => setEditShow(true)}>
          <EditTwoToneIcon />
        </Button>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} variant="outlined" color="error" className="me-2" onClick={() => setDelete(true)}>
          <EditTwoToneIcon />
        </Button>
      </div>
     <Container>
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Header><h1>أسم المتجر</h1>{profile.nameStore}</Card.Header>
        <Card.Body>
          <Card.Text><h4>نبذة تعريفية بالمتجر</h4>{profile.aboutYourBusiness}</Card.Text>
        </Card.Body>
      </Card>
  <Row>
    <Col xs={6} md={4}>
      <Image src={profile.photo} roundedCircle height={200}/>
    </Col>
  </Row>
  <h5>{profile.firstName} {profile.lastName}</h5>
  <h5>{profile.email}</h5>
  <h5>{profile.phone}</h5>
  <h5>{profile.commercialRegister}</h5>
</Container> */}
      <h3>
        <h1>أسم المتجر</h1>
        {profile.nameStore}
      </h3>
      <div className="wrapper">
        <div className="left">
          <img src={profile.photo} alt="user" width="100" />
          <h4>
            {profile.firstName} {profile.lastName}
          </h4>
        </div>
        <div className="right">
          <div className="info">
            <h3 style={{ color: "#ADD8E6", fontSize: "20px", fontWeight: "bolder" }}>المعلومات</h3>
            <span>الأسم</span>
            <h5>
              {profile.firstName} {profile.lastName}
            </h5>
            <span>السجل التجاري</span>
            <h5>{profile.commercialRegister}</h5>
            <div className="info_data">
              <div className="data">
                <h4 style={{ color: "#ADD8E6", fontSize: "20px", fontWeight: "bolder" }}>البريد الإلكتروني</h4>
                <p>{profile.email}</p>
              </div>
              <br />
              <div className="data">
                <h4 style={{ fontsize: "40px", color: "#ADD8E6", fontWeight: "bolder" }}>رقم الجوال</h4>
                <p>{profile.phone}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  style={{ marginRight: 40, marginBottom: 10 }}
                  variant="outline-primary"
                  className="me-2"
                  onClick={() => setEditShow(true)}
                >
                  <i className="fas fa-user-edit"></i>
                </Button>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  style={{ marginRight: 40, marginBottom: 10, background: "red" }}
                  variant="outlined"
                  classNameName="me-2"
                  onClick={() => setDelete(true)}
                >
                  <i className="fas fa-user-times"></i>
                </Button>
              </div>
            </div>
          </div>

          <div className="social_media">
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ProfileEdit show={editShow} setShow={setEditShow} />
      <ProfileRemove show={deleteShow} setShow={setDelete} profileId={profile._id} />
      <ProductAdd show={show} setShow={setShow} />
    </>
  )
}

export default Profile
