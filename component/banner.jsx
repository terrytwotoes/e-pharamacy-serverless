import { Box, ButtonGroup, Center, Container, Divider, Flex, Spacer, Stack, Text,useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Image from "next/image"
import svg1 from "../public/svg-1.png"

const Banner = () => (
  <Box
        bg={useColorModeValue('gray.100', 'gray.700')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          {/* <Logo /> */}
          <Box>
            <Text fontSize='2xl' textTransform='uppercase' fontWeight='800'>order medicine online</Text>
            <Divider />
            <Text fontWeight='300' >Genuine medicines & essentials delivered in a jiffy!</Text>
          </Box>
          <Stack direction={'row'} spacing={6}>
          <Center position='relative' top={{ base: '0px', md: '-60px' }} >
             <Image width='250' height='250' objectFit='contain' src={svg1} alt='fast delivery' />
          </Center>
          </Stack>
        </Container>
      </Box>


    // <Box w='100%' px='40' bg='cyan.100' my='10' direction={{ base: 'column', md: 'row' }}
    // spacing={4}
    // justify={{ base: 'center', md: 'space-between' }}
    // align={{ base: 'center', md: 'center' }}>
    //   <Flex justify="space-between" direction="row" align="center">
    //     <Box>
    //         <Text fontSize='2xl' textTransform='uppercase' fontWeight='800'>order medicine online</Text>
    //         <Divider />
    //         <Text fontWeight='300' >Genuine medicines & essentials delivered in a jiffy!</Text>
    //     </Box>
    //     <Center position='relative' top='-60px' >
    //         <Image width='250' height='250' objectFit='contain' src={svg1} alt='fast delivery' />
    //     </Center>
    //   </Flex>
    // </Box>

)


export default Banner;