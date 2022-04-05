import {
    AspectRatio,
    Box,
    Button,
    Center,
    Divider,
    HStack,
    Image,
    Link,
    Skeleton,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { PriceTag } from './PriceTag'
  
  export const ProductCard = (props) => {
    const { product, rootProps } = props
    const { name, imageUrl, price, salePrice, rating } = product
    return (
      <Stack
        spacing={useBreakpointValue({
          base: '4',
          md: '5',
        })}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        cursor='pointer'
        {...rootProps}
      >
        <Box position="relative">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={imageUrl}
              alt={name}
              draggable="false"
              fallback={<Skeleton />}
              borderRadius={useBreakpointValue({
                base: 'md',
                md: 'xl',
              })}
            />
          </AspectRatio>
          
        </Box>
          {/* <Divider/> */}
        <Stack>
          <Center spacing="1" >
            <Text fontWeight="medium" mb={2} color={useColorModeValue('gray.700', 'gray.400')}>
              {name}
            </Text>
          </Center>
          
        </Stack>
        
      </Stack>
    )
  }
  