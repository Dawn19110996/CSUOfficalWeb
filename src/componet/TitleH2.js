import {Row, Col} from 'react-bootstrap'
import {TitleH2Style} from '../style'

export default function TitleH2(props){
  return(
    <Row className='mt-3' id={props.id}>
      <Col lg={3} xs={7} className='mb-3 text-center'>
        <TitleH2Style>{props.children}</TitleH2Style>
      </Col>
    </Row>
  )
}