import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const SampleNextArrow = props => {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          color: 'black',
          fontSize: '15px',
          lineHeight: '1.5715'
        }}
        onClick={onClick}
      >
        <RightOutlined />
      </div>
    )
  }

  const SamplePrevArrow = props => {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          color: 'black',
          fontSize: '15px',
          lineHeight: '1.5715'
        }}
        onClick={onClick}
      >
        <LeftOutlined />
      </div>
    )
  }



function productCardCarouselComponent({ images }) {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  
  return (
    <Carousel 
    lazyLoad={true}
    arrows={true}
    {...settings}
    >
      {images.map((im, i) => (
        <img
          key={`productimagescaresol ${i}`}
          src={`${process.env.REACT_APP_API_ROOT_URI}${im.thumb}`}
          alt="tv1"
        />
      ))}
    </Carousel>
  );
}

export default productCardCarouselComponent;
