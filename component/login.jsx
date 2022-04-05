import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    ButtonGroup,
    VisuallyHidden,
    Center
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { PasswordField } from './passwordField'
  import { FcGoogle} from 'react-icons/fc'
  import { BsFacebook } from "react-icons/bs";
  import Link from 'next/link'
  
  const providers = [
    {
      name: 'Google',
      icon: <FcGoogle boxSize="5" />,
    },
    {
      name: 'Facebook',
      icon: <BsFacebook boxSize="5" color='#3b5998' />,
    },
  ]

  const Login = () => (
    <Box width='100vw' h='100%'  bg={useColorModeValue('gray.50', 'gray.800')} >
    <Container
      maxW="lg"
      py={{
        base: '12',
        md: '24',
      }}
      px={{
        base: '0',
        sm: '8',
      }}
      
    >
      <Stack spacing="8">
        <Stack spacing="6">
            <Center>
                <Text fontSize='3xl' >Logo</Text>
            </Center>
          <Stack
            spacing={{
              base: '2',
              md: '3',
            }}
            textAlign="center"
          >
            <Heading
              size={useBreakpointValue({
                base: 'sm',
                md: 'lg',
              })}
            >
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">First time here?</Text>
              <Button variant="link" colorScheme="blue">
                  <Link href='/signup'>
                    Sign up
                  </Link>
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{
            base: '0',
            sm: '8',
          }}
          px={{
            base: '4',
            sm: '10',
          }}
          bg={useBreakpointValue({
            base: 'transparent',
            sm: 'bg-surface',
          })}
          boxShadow={{
            base: 'none',
            sm: useColorModeValue('md', 'md-dark'),
          }}
          borderRadius={{
            base: 'none',
            sm: 'xl',
          }}
          bg={useColorModeValue('white', 'gray.700')}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultIsChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                <Link href='/forgotpassword'>
                  Forgot password?
                </Link>
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="solid" bg={'blue.400'} color='white' _hover={{
                bg: 'blue.500',
              }}>Sign in</Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <ButtonGroup variant="outline" spacing="4" width="full">
                {providers.map(({ name, icon }) => (
                <Button key={name} isFullWidth>
                    <VisuallyHidden>Sign in with {name}</VisuallyHidden>
                    {icon}
                </Button>
                ))}
            </ButtonGroup>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
    </Box>
  )
  

  export default Login;