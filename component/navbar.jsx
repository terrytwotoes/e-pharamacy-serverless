import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, Search2Icon } from '@chakra-ui/icons';
import {BsFillCartFill} from 'react-icons/bs'

const Links = ['login', 'signup'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg:useColorModeValue('gray.100', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={{ base: '10', md: '30' }}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link href={`/${link}`} key={link}>{`${link.charAt(0).toUpperCase()}` +  link.slice(1)}</Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
                <Box display={{ base: 'none', md: 'flex' }} mr={35}>
                    <InputGroup>
                        <InputLeftElement
                        children={<Search2Icon color='gray.300' />} pointerEvents='none'>
                        </InputLeftElement>
                        <Input placeholder='Search for medicines...' backgroundColor='white' focusBorderColor='blue.500'  _placeholder={{color:'black'}}  />
                    </InputGroup>
                </Box>
                <Link href='/cart'><BsFillCartFill size='20px'/></Link>
                
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} >
                <InputGroup>
                    <InputLeftElement
                    children={<Search2Icon />} pointerEvents='none'>
                    </InputLeftElement>
                    <Input placeholder='Search for medicines...' w='70%'  _placeholder={{color:'black'}}  />
                </InputGroup>
               
              {Links.map((link) => (
                <Link href={`/${link}`} key={link}>{`${link.charAt(0).toUpperCase()}` +  link.slice(1)}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}
