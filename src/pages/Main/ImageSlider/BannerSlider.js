import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import BANNER_DATAS from './BANNER_DATAS';

function BannerSlider() {
  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '160px',
    className: 'center',
  };

  return (
    <Container>
      <StyleSlider {...settings}>
        {BANNER_DATAS.map(data => {
          return (
            <div key={data.id}>
              <ImageContainer>
                <Image src={data.img} alt="제품이미지" />
              </ImageContainer>
            </div>
          );
        })}
      </StyleSlider>
    </Container>
  );
}

export default BannerSlider;

const Container = styled.div`
  overflow: hidden;
  padding: 100px 0;
`;

const StyleSlider = styled(Slider)`
  width: 100vw;
  div {
  }

  .slick-slider {
  }

  .slick-list {
  }

  .slick-track {
  }

  .slick-slide {
    width: 1000px;
    div {
      outline: none;

      img {
      }
    }
  }
  .slick-arrow {
    font-color: black;
  }
  .slick-prev {
    position: absolute;
    left: 90px;
    background-color: #f8f8fa;
    opacity: 0.5;
    width: 30px;
    height: 60px;
    border-radius: 20px;
    cursor: pointer;
    z-index: 1;
  }

  .slick-next {
    position: absolute;
    right: 90px;
    background-color: #f8f8fa;
    opacity: 0.5;
    width: 30px;
    height: 60px;
    border-radius: 20px;
    cursor: pointer;
    z-index: 1;
  }
`;

const ImageContainer = styled.div`
  margin: 0 16px;
  aspect-ratio: 3 / 1;
  overflow: hidden;
`;

const Image = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
`;
