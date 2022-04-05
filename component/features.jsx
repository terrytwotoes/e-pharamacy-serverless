// import { ReactElement } from 'react';
// import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
// import { FcPrivacy, FcFactory, FcInTransit } from 'react-icons/fc';

// interface FeatureProps {
//   title: string;
//   text: string;
//   icon: ReactElement;
// }

import { Box, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

export const Feature = (props) => {
  const { title, children, icon } = props
  return (
    <Stack
      spacing={{
        base: '3',
        md: '6',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
    >
      <Box fontSize="6xl">{icon}</Box>
      <Stack spacing="1">
        <Text fontWeight="extrabold" fontSize="lg">
          {title}
        </Text>
        <Box color={mode('gray.600', 'gray.400')}>{children}</Box>
      </Stack>
    </Stack>
  )
}




// const Feature = ({ title, text, icon }) => {
//   return (
//     <Stack>
//       <Flex
//         w={16}
//         h={16}
//         align={'center'}
//         justify={'center'}
//         color={'white'}
//         rounded={'full'}
//         bg={'gray.100'}
//         mb={1}>
//         {icon}
//       </Flex>
//       <Text fontWeight={600}>{title}</Text>
//       <Text color={'gray.600'}>{text}</Text>
//     </Stack>
//   );
// };

// export default function Features() {
//   return (
//     <Box px={150} my={50}>
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
//         <Feature
//           icon={<Icon as={FcPrivacy} w={10} h={10} />}
//           title={'Secure Payments'}
//           text={
//             'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
//           }
//         />
//         <Feature
//           icon={<Icon as={FcFactory} w={10} h={10} />}
//           title={'Authentic Products'}
//           text={
//             'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
//           }
//         />
//         <Feature
//           icon={<Icon as={FcInTransit} w={10} h={10} />}
//           title={'Instant Delivery'}
//           text={
//             'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
//           }
//         />
//       </SimpleGrid>
//     </Box>
//   );
// }
