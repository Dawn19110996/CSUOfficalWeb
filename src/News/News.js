import {Row, Col, Accordion, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import TitleH2 from '../componet/TitleH2'


export default function News(){
  return(
    <>
      <TitleH2 id='news'>最新消息</TitleH2>
        <Row className='justify-content-center'>
          <Col  xs={10}>
            <AccordionList className='mb-4' title='教育部「109年數位學伴計畫」109-1學期大學伴招募'>
            教育部「109年數位學伴計畫」109-1學期大學伴甄選開始囉，請同學把握機會報名喔!<br/>
            採線上報名，報名網址：<a href='https://reurl.cc/gm2o7L'>https://reurl.cc/gm2o7L</a><br/>

            報名日期：即日起至 9/20(日) 止，額滿為止<br/>

            招募對象：本校學生(有志服務偏鄉學童且具愛心耐心並能守時者)<br/>

            甄選說明會：報名者請於 9/16(三)12:00~13:00 至人文大樓2樓11-0208教室參加甄選說明會，有興趣進一步了解的同學也歡迎一起來參加說明會。<br/>

            錄取者將務必參加 9/27(日)8:20~17:30 大學伴期初教育訓練<br/>

            參與教育訓練皆可認證專業學習分數喔~<br/>

            有任何問題歡迎洽詢 本校師資培育中心  尤琬珺助理<br/>

            聯絡電話07-7358800分機2790<br/>

            正修數位學伴官方line帳號：<a href='http://nav.cx/9aUQdVM'>http://nav.cx/9aUQdVM</a><br/>
            </AccordionList>

            <AccordionList className='mb-4' title='資訊安全宣導通知'>
            近來發生多起因物聯網(IoT)設備(例如網路印表機、監視系統網路攝影機等)<br/>
            設置不當(例如未設置密碼，使用預設密碼，開啟非必要服務)，造成資料外洩的事件。<br/>

            請各單位詳細檢查單位內之連網設備是否已設置密碼(請務必修改預設密碼)<br/>
            並確認已關閉不必要之服務，同時將設備之靱體更新至最新版本。<br/>

            單位若有使用具備掃描與傳真功能之印表機，請特別注意！除了修改密碼外，建議限制存取來源，禁止非使用單位人員存取。<br/>
            若利用FTP軟體或網路芳鄰接收掃瞄檔案者，請務必設置密碼，並開啟電腦之防火牆，限制存取來源。<br/>
            以上相關設定若有疑問，可請設備之維護廠商協助或向圖書資訊處咨詢。<br/>

            圖書資訊處將不定期檢測物聯網相關設備，以掃除正修校園個資外洩及資安風險的火苗，<br/>
            未確實管理之單位，將列入年度個資與資安稽核之優先名單。<br/>
            </AccordionList>

            <AccordionList className='mb-4' title='【重要公告】 109學年第2學期宿舍申請，即將開跑!'>
            1.109-1已住宿同學，下學期續住者不須再申請。<br/>

            2.新申請109-2學期住宿同學，請至本校網站/正修訊息網/學務資訊/宿舍管理系統，選擇正修宿舍或文山學園申請。<br/>

            3.申請日期：自109年12月27日至110年1月3日止。<br/>

            4.繳費期限：自110年1月4日至110年2月8日止(請至元大銀行校務網下載列印繳費單)，期限內完成繳費。<br/>

            5.床位公告：110年2月19日。<br/>

            6.請至宿舍管理系統頁面［登入後→申請一覽表］查詢。<br/>
            </AccordionList>

            <AccordionList className='mb-4' title='109學年度中等學校教師教育學程甄選開始了!!'>
            歡迎同學報名本校 109 學年度中等學校教育學程<br/>

            本校教育學程培育師資類科有中等學校科技領域(資訊科技、生活科技專長)、健康與體育領域體育專長、<br/>
            外語群-英語專長、家政群(幼保、美容科)、機械群、電機與電子群、土木與建築群、設計群 (室內設計、數位多媒體)<br/>
            、商業與管理群、餐旅群 (餐飲、觀光科)等。<br/>

            報名日期: <br/>
            109年6月01日(一)至109年6月30日(三)<br/>
            週一至週五08:30-12:00 / 14:00-17:00<br/>
            109年7月20日(一)至109年7月24日(五)<br/>
            週一、二、四08:30-16:00 週三、五 9:00-12:00<br/>

            報名地點：人文大樓二樓11-0201師資培育中心辦公室<br/>

            詳情請參閱師資培育中心網頁:<br/>
            <a href='http://cte.csu.edu.tw/wSite/mp?mp=105'>http://cte.csu.edu.tw/wSite/mp?mp=105</a><br/>

            諮詢電話：07-7358800#6400<br/>
            </AccordionList>
            
          </Col>
        </Row>

    </>
  )
}

function AccordionList(props){
  return(
    <Accordion className='mb-4'>
      <Card >
        <Accordion.Toggle as={Card.Header} eventKey='0'>
          {props.title}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            {props.children}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}