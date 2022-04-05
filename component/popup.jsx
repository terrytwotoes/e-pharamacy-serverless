import React, {useState} from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Portal,
    Input,
    Center,
    Box,
    Flex,
    NumberInput,
    InputLeftElement,
    InputGroup,
    NumberInputField
  } from '@chakra-ui/react'
import { GoLocation } from 'react-icons/go'

const Popup = () => {
    const [value, setValue] = useState('')
    const handleChange = (event) => setValue(event.target.value)


const initRef = React.useRef()
  return (
    <Popover closeOnBlur={false} placement='bottom' initialFocusRef={initRef}>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <Button>{isOpen ? 'Select Pincode' : `Deliver to ${value}` }</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
            <PopoverArrow/>
              <PopoverHeader mr={2}>Select pincode to see product availability</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Flex justifyContent='space-between'>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<GoLocation color='gray.300' />}
                  />
                  <Input type='number' onChange={handleChange} value={value} max='999999' min="111111" />
                  {/* <NumberInput 
                    type="number"
                    value={value}
                    onChange={handleChange}
                    placeholder='Enter Pincode' 
                    size='md' 
                    w='80%'
                    max={999999}
                    min={111111} >
                      <NumberInputField/>
                  </NumberInput> */}
                </InputGroup>
                
                <Button
                  colorScheme='blue'
                  onClick={onClose}
                  ref={initRef}
                  ml={4}
                  size='sm'
                >
                  Submit
                </Button>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  )
      }
export default Popup