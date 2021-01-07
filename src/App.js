import {JBStyle, JBTContainStyle} from './style.js'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import PopWindosws from './componet/PopWindow'
import NavBar from './NavBar'
import News from './News'
import Product from './Product'
import JoinUs from './JoinUs'
import Contact from './Contact'
import Footer from './Footer'
import img2 from './img/11.jpg'
import img from './img/10.jpg'

function App() {

  const [modalShow, setModalShow] = useState(false);
  
  useEffect(() => {
    Aos.init({ duration : 1500})
  }, [])
  return (
    <div className='App'>
      <NavBar />

      <JBStyle img={img}>
        <Container className='text-center'>
          <JBTContainStyle fontSize = '20' data-aos='fade-up' data-aos-once='true'>
            welcome
          </JBTContainStyle>
        </Container>
      </JBStyle>
      
      <Container>
        <News/>
        <Product/>
      </Container>
      <div id='about'></div>
      <JBStyle  img={img2} >
        <Container className='text-center'>
          <JBTContainStyle data-aos='fade-in' data-aos-once='true'>
          <span>
            民國54年（1965）<br/>
            由鄭駿源、龔金柯、李金盛等先生<br/>
            擇定高雄澄清湖畔創建本校<br/>
            取《大學》「正心」「修身」之宏旨<br/>
            特定校名為『正修』<br/>
            並以「止於至善」為校訓<br/>
          </span>
          
          </JBTContainStyle>
        </Container>
      </JBStyle>

      <Container>
        <JoinUs setModalShow = {setModalShow}/>
        <Contact/>
      </Container>

      <Footer/>

      <PopWindosws
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;
