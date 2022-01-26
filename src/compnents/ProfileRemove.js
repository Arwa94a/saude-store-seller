import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import StoreContext from "../uiltes/StoreContext"

function ProfileRemove(props) {
  const { deleteProfile } = useContext(StoreContext)
  const { show, setShow ,profileId} = props
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>حذف الحساب الشخصي</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل انت متأكد من حذ حسابك الشخصي</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
         إغلاق
          </Button>
          <Button variant="danger" onClick={() => deleteProfile(profileId)}>
         تأكيد
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProfileRemove
