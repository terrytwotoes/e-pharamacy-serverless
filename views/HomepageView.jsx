import Banner from '../component/banner'
import Carousel from '../component/carousel'
import Footer from '../component/footer'
import Navbar from '../component/navbar'
import { Box, SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'
import { FcPrivacy, FcFactory, FcInTransit, FcViewDetails } from 'react-icons/fc';
import { Feature } from '../component/features'
import { TopBrandCarousel } from '../component/topBrandCarousel'
import  ProductCarousel  from '../component/productCarousel'
import WithSpeechBubbles from '../component/testimonials'


const HomepageView = () => {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <Box
      as="section"
      maxW="5xl"
      mx="auto"
      py="12"
      px={{
        base: '6',
        md: '8',
      }}
    >
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        spacingX="10"
        spacingY={{
          base: '8',
          md: '14',
        }}
      >
        <Feature title="Secure Payment" icon={<FcPrivacy />}>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus.
        </Feature>
        <Feature title="Authentic Products" icon={<FcFactory />}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore.
        </Feature>
        <Feature title="Fast Delivery" icon={<FcInTransit />}>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus.
        </Feature>
        <Feature title="100+ Brands" icon={<FcViewDetails />}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore.
        </Feature>
      </SimpleGrid>
    </Box>
    <Banner/>
    <TopBrandCarousel/>
    <ProductCarousel/>
    <WithSpeechBubbles/>
    <Footer/>
    </>
  )
}

export default HomepageView