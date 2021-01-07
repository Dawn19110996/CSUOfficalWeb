import style from 'styled-components'
import { Jumbotron } from 'react-bootstrap'

export const TitleH2Style = style.h2`
background-color : rgb(252, 228, 214);
margin : 20px;

`

export const JBStyle = style(Jumbotron)`
background: url("${props => props.img}") no-repeat; 
background-size: cover; 
background-position:center; 
height: 100vh;
opacity: 0.6;
padding:0!important;
color : white;

div{
	height:100%;
}

`
export const JBTContainStyle = style.div`
display: flex;
align-items: center; 
justify-content: center;
font-size: ${props => props.fontSize || 6}vmin;
	span{
		background-color:rgba(0, 0, 0, 0.7);
	}
`





