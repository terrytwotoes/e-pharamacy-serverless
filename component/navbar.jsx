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
                

              {/* <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList> */}
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
