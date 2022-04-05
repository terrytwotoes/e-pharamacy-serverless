import { Box,Text, Flex, Center, IconButton } from '@chakra-ui/react'
import React, { Component } from "react";
import Slider from "react-slick";
import { ProductCard } from './productCard'
import { products } from '../pages/api/_data'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'

export default class ProductCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (   
          <Box
        maxW="7xl"
        mx="auto"
        px={{
          base: '4',
          md: '8',
          lg: '12',
        }}
        py={{
          base: '6',
          md: '8',
          lg: '12',
        }}
        mb={6}
      >
        <Flex  py={8} justifyContent='space-between'>
            <Text fontSize='2xl' fontWeight={700}>Deals of the Day</Text>  
            <Center>
              <BsFillArrowLeftCircleFill size='32px' style={{marginRight: '25px', cursor: 'pointer', color: '#3182ce'}} onClick={this.previous}/>
              <BsFillArrowRightCircleFill size='32px' style={{ cursor: 'pointer', color: '#3182ce'}} onClick={this.next}/>  
            </Center>
        </Flex>
        <Slider ref={c => (this.slider = c)} {...settings}>
            {products.map((product) => (
              <Box p={5}>
                <ProductCard key={product.id} product={product} />
              </Box >
            ))}
              
          </Slider>
        </Box>

    );
  }
}