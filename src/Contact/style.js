import style from 'styled-components'

export const TitleH2Style = style.h2`
  background-color : rgb(252, 228, 214);
  margin : 20px;
  
`
export const MapStyle = style.div`
  @media screen and (max-width: 991px) {
    margin-top:10px;
  }
  iframe{
    border:0;
    width:100%;
    height:45vh;
  }
`