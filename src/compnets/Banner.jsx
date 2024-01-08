import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src="https://www.zudio.com/cdn/shop/files/2-AW_23_KIDSWEAR_cdd51d62-0062-42bb-9a2c-c7944cd9fc7e.jpg?v=1693203585" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://www.zudio.com/cdn/shop/files/1-AW_23_LOUNGEWEAR_dc3ec131-30d4-4760-8f60-05f322b9bf4a_1080x.jpg?v=1692879466" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://www.zudio.com/cdn/shop/files/8-MastHead-Web-Banner_67eff508-dbd8-45d9-a84e-3940bf7a6cc1_1080x.jpg?v=1692885492" alt="" />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Banner