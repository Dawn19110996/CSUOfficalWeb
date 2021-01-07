import {Row, Col} from 'react-bootstrap'
import csulogo from '../img/csu.png'
import TitleH2 from '../componet/TitleH2'
import {ProductContainStyle} from './style'

export default function Product(){
  return(
    <>
      <TitleH2 id='product'>學術單位</TitleH2>

      <ProductItem img={csulogo}>
      <h3>工學院</h3><br/>
      採取『大學』正心、修身、治國、平天下之宏旨以「止於至善」<br/>
      為校訓成立化學工程科土木工程科、建築工程科(54年)<br/>
      工業管理科(55 年)、電子工程科(57年)、機械工程科(58年)<br/>
      電機工程科(60年)為本院之前身。<br/>
      </ProductItem>

      <ProductItem img={csulogo}>
      <h3>管理學院</h3><br/>
      本校創校於民國54年，校名取自於《大學》「正心」「修身」之宏旨。<br/>
      本著「止於至善」校訓以及「務實創新、追求卓越」之理念<br/>
      在既有教學研究基礎與產學合作技術之下，融合「創新」與「務實」<br/>
      連結「產業」與「校園」，展現學校務實創新特色，以達「教學卓越、產學典範、永續發展」目標<br/>
      ，並透過建構優良的教學與學習環境，培育具有創新<br/>
      人文與科技之工程、管理、生活創意的實務技術職業人才。<br/>
      本校創校時為「正修工專」，79年增設商業類科，改制為「正修工商專校」<br/>
      ，88年改制為「正修技術學院」， 92年改名「正修科技大學」<br/>
      同時設置工學院、商業暨管理學院、人文社會學院三個學院。
      </ProductItem>

      <ProductItem img={csulogo}>
      <h3>生活創意學院</h3><br/>
      本院目前共有8個學系：包括幼兒保育系（以下簡稱幼保系）、應用外語系（以下簡稱應外系）<br/>
      休閒與運動管理系（以下簡稱休運系）、觀光遊憩系（以下簡稱觀光系）<br/>
      數位多媒體設計系（以下簡稱數位系）、視覺傳達設計系（以下簡稱視傳系）<br/>
      化妝品與時尚彩妝系（以下簡稱妝彩系）及餐飲管理系（以下簡稱餐管系）。<br/>
      其中幼保系、休運系、妝彩系及視傳系設有碩士班。另為配合國家產業政策與學校研究發展<br/>
      設立院級「生活產業創新中心」，專責媒合產業與院內同仁，爭取執行產官學合作計畫。
      </ProductItem>

      <ProductItem img={csulogo}>
      <h3>電競科技管理系</h3><br/>
      本校擬設立之「電競科技管理系」是與電競產業發展最直接相關之系所<br/>
      民國97年成立之「數位多媒體設計系」為基礎，配合特色教室與各系資源<br/>
      以「電競設備技術服務」為主，結合電競運營人才能力需求，配合當前AI與大數據之應用人才需求發展<br/>
      協助加強開發電競遊戲內容，課程規劃也導入電競技術分析，作為未來電競訓練科學化訓練<br/>
      受眾消費行為分析等大數據應用之先備知識，達成學生畢業即就業之目標。
      </ProductItem>
    </>
  )
}

function ProductItem(props){
  return(
    <Row className='mb-5 align-items-center' data-aos='fade-up' data-aos-once='true'>
      <Col lg={6} xs={12} className='text-center justify-content-center '>
        <img
          width={170}
          height={170}
          className='mr-3 mt-4'
          src={props.img}
          alt='Generic placeholder'
        />
      </Col>
      <Col lg={6} xs={12} className='justify-content-center'>
        <ProductContainStyle>
          {props.children}
        </ProductContainStyle>
      </Col>
    </Row>
  )
}

