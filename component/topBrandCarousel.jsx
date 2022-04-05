import { Box, Text } from '@chakra-ui/react'
import * as React from 'react'
import { ProductCard } from './topBrandCard'
import { brands } from '../pages/api/_data'
import { ProductGrid } from './productGrid'

export const TopBrandCarousel = () => (
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
    mb={12}
  >
    <Box py={8}>
        <Text fontSize='2xl' fontWeight={700}>Top Brands</Text>    
    </Box>
    <ProductGrid>
      {brands.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  </Box>
)
