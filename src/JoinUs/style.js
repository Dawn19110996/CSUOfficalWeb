import style from 'styled-components'
import img3 from '../img/1.jpg'
import img4 from '../img/8.jpg'

export const TitleH2Style = style.h2`
  background-color : rgb(252, 228, 214);
  margin : 20px;
  
`
export const JoinUsImag1BgStyle = style.div`
  
  background: url("${img3}") no-repeat;
  background-size: cover; 
  background-position:center;
  height:25em;
  opacity: 0.6;
  color:white;
  div{
    display: flex;
    align-items: center;
    font-size:50px;
    height:100%;
  }
  @media screen and (max-width: 991px) {
    margin-bottom:10px;
  }
`
export const JoinUsImag2BgStyle = style.div`
  
  background: url("${img4}") no-repeat;
  background-size: cover; 
  background-position:center;
  height:25em;
  opacity: 0.6;
  
  div{
    display: flex;
    align-items: center;
    font-size:50px;
    height:100%;
  }
`
export const JoinUsTextStyle = style.a`
  margin:0 auto;
  text-decoration: none!important;
  color:white;
`
