import {Row, Col} from 'react-bootstrap'
import {JoinUsImag1BgStyle, JoinUsImag2BgStyle, JoinUsTextStyle} from './style'
import TitleH2 from '../componet/TitleH2'

export default function JoinUs({setModalShow}){
  return(
    <>
      <TitleH2 id='joinUs'>加入正修</TitleH2>
      <Row className='justify-content-around mt-3' >
        <Col lg={6} xs={10} data-aos='fade-up' data-aos-once='true' >
          <JoinUsImag1BgStyle>
            <Row>
              <Col onClick={() => setModalShow(true)}>
                <JoinUsTextStyle>
                  學校環境
                </JoinUsTextStyle>
              </Col>
            </Row>
          </JoinUsImag1BgStyle>
        </Col>
        <Col lg={6} xs={10} data-aos='fade-up' data-aos-once='true' data-aos-delay='500'>
          <JoinUsImag2BgStyle>
            <Row>
              <Col>
                <JoinUsTextStyle href={'http://visit.csu.edu.tw/wSite/mp?mp=A03002'} target='_blank' >
                  報名方法
                </JoinUsTextStyle>
              </Col>
            </Row>
          </JoinUsImag2BgStyle>
        </Col>
      </Row>
    </>
  )
}

