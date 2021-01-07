import {Row, Col, Container} from 'react-bootstrap'
import { animateScroll as scroll} from 'react-scroll'
import { FooterStyle } from './style'

export default function Footer(){
  
  return(
    <>
      <Row style={{margin:'10px 0'}}>
        <Col style={{background:'rgb(252, 228, 214)', fontSize:'30px'}} className='text-center' onClick={scroll.scrollToTop}>TOP</Col>
      </Row>
      <Container>
        <Row className='mt-5 justify-content-center'>
          <Col lg={6} xs={10} >
            <FooterStyle>
              正修科技大學<br/>
              83347 高雄市鳥松區澄清路840號<br/>
              <br/>
              <br/>
              TEL:07-7358800<br/>
            </FooterStyle>
          </Col>
          <Col lg={6} xs={10}>
            <FooterStyle>
              Cheng Shiu University<br/>
              No. 840, Chengqing Rd., Niaosong Dist.<br/>
              Kaohsiung City 833, Taiwan (R.O.C.)<br/>
              <br/>
              FAX:07-7315367<br/>
            </FooterStyle>
            
          </Col>
        </Row>
        <Row style={{marginTop:'100px'}}>
          <Col style={{fontSize:'10px'}} className='text-center'>Ⓒ2021 90718137田宗龍、90718126陳榮偉，Ltd All Rights Reserved.</Col>
        </Row>
      </Container>
    </>
  )
}

