import { useState } from 'react'
import {Carousel} from 'react-bootstrap'


export default function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {props.img.map( (item) => {
          return(
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={item}
                alt='First slide'
              />
            </Carousel.Item>
        )})}
        
      </Carousel>
    );
  }