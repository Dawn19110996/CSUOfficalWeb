import {Row, Col, Card } from 'react-bootstrap'
import {MapStyle} from './style'
import TitleH2 from '../componet/TitleH2'

export default function Contact(){
  return(
    <>
      <TitleH2 id='contact'>聯絡正修</TitleH2>
      <Row className='justify-content-around mt-3 align-items-center'>
        <Col lg={6} xs={10} >
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title style={{fontSize:'xx-large'}}>本校位置</Card.Title>
              <Card.Text style={{fontSize:'x-large'}}>
                地址：高雄市鳥松區澄清路840號<br/>
                電話：07-7358800<br/>
                傳真：07-7315367<br/>
                學務長室：分機1115、2728<br/>
                課外活動組：分機1121、1122、1123<br/>
                學生輔導中心：分機1126、1127<br/>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xs={10}>
          <MapStyle>
            <iframe 
              title='map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.0750856672958!2d120.34673871521552!3d22.650988935796423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e1ad670a77b39%3A0xd5e63e802beb4dc0!2z5q2j5L-u56eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1610008466041!5m2!1szh-TW!2stw'   
              frameborder='0' 
              allowfullscreen='' 
              aria-hidden='false' 
              tabindex='0'>
            </iframe>
          </MapStyle>
        </Col>
      </Row>
    </>
  )
}

