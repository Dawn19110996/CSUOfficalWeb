import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ControlledCarousel from './ControlledCarousel'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/6.jpg'
import img7 from '../img/7.jpg'
import img8 from '../img/8.jpg'
import img9 from '../img/9.jpg'

function PopWindosws(props) {

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton/>
      <Modal.Body>
        <ControlledCarousel img = {[img3, img4, img5, img6, img7, img8, img9]}/>
      </Modal.Body>
    </Modal>
  );
}



export default PopWindosws;