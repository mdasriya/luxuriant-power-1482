import React from 'react'
import { Link } from 'react-router-dom'

import './nav.css'
import logo from '../Logo/logo.png'
import { FaCartArrowDown } from "react-icons/fa";
import { TfiUser } from "react-icons/tfi";
import { Image, Flex, Text, Box, Spacer, ButtonGroup, Button, Center, Input, } from '@chakra-ui/react'
import AdminSecurity from '../Pages/AdminSecurity'

const Navbar = () => {
let cartCount = localStorage.getItem("total")


    return (
        <>
      <Flex minWidth='max-content' alignItems='center' gap='2'>


        <ButtonGroup gap='3'>
          <Button borderRadius="none" colorScheme='' className='but1'>
            <Image

              boxSize='120px'
              src='https://images.contentstack.io/v3/assets/blt95e0138311135214/blt13b0f02cd71877df/5f08974a8b0e59084c9f7570/hd-logo-v3.svg?height=32&width=78'
              alt='Dan Abramov'
            />
          </Button>
          <Button borderRadius="none" colorScheme='' className='but1'>
            <Image

              boxSize='60px'
              src='https://images.contentstack.io/v3/assets/blt95e0138311135214/bltac334446d6f9e89c/5f96fc4f2425cd7a8af6845e/pmall_svg-logo-v2.svg?height=32&width=78'
              alt='Dan Abramov'
            />
          </Button>
          <Button borderRadius="none" colorScheme='' className='but1'>
            <Image

              boxSize='60px'
              src='https://images.contentstack.io/v3/assets/blt95e0138311135214/bltf0b1021465476e4f/5f08974b0d1d2008538ce15a/SharisLogo_r.svg?height=32&width=78'
              alt='Dan Abramov'
            />
          </Button>
          <Button borderRadius="none" colorScheme='' className='but1'>
            <Image

              boxSize='60px'
              src='https://images.contentstack.io/v3/assets/blt95e0138311135214/bltac303abaae751c40/5f08974af394777f87099a07/18b-logo-v2.svg?height=32&width=78'
              alt='Dan Abramov'
            />
          </Button>
          <Button borderRadius="none" colorScheme='' className='but1'>
            <Image

              boxSize='60px'
              src='https://images.contentstack.io/v3/assets/blt95e0138311135214/blt71adcb0696952e83/5f08974baa5d1801639286b4/sch-logo-v2.svg?height=32&width=78'
              alt='Dan Abramov'
            />
          </Button>
          <Button borderRadius="none" colorScheme='' className='but1'>
            <Image

              boxSize='60px'
              src='https://images.contentstack.io/v3/assets/blt95e0138311135214/bltef2e14ec247ab827/5f08974a2cd8e87f92bdd257/fb-logo-v2.svg?height=32&width=78'
              alt='Dan Abramov'
            />
          </Button>
          <Button borderRadius="none" colorScheme='' className='but1'>
            <Image

              boxSize='60px'
              src='https://images.contentstack.io/v3/assets/blt95e0138311135214/blte1e2eb25cfd09fb6/5f08974a91afb901b86d5251/cco-logo-v2.svg?height=32&width=78'
              alt='Dan Abramov'
            />
          </Button>
          <Button borderRadius="none" colorScheme='' className='but1'>
            <Image

              boxSize='60px'
              src='https://images.contentstack.io/v3/assets/blt95e0138311135214/bltf9903ccf2408c217/5f0897552cd8e87f92bdd25b/tpf-logo-v2.svg?height=32&width=78'
              alt='Dan Abramov'
            />
          </Button>
          <Button borderRadius="none" colorScheme='' className='but1'>
            <Image

              boxSize='60px'
              src='https://images.contentstack.io/v3/assets/blt95e0138311135214/blt7ef824d3f9f5074d/5f0897558b0e59084c9f7574/wlf-logo-v2.svg?height=32&width=78'
              alt='Dan Abramov'
            />
          </Button>
          <Button borderRadius="none" colorScheme='' className='but1'>
            <Image

              boxSize='60px'
              src='https://images.contentstack.io/v3/assets/blt95e0138311135214/blta2ba2ac7606f6c15/5f08974bceebbf7e87c30215/sy-logo-v2.svg?height=32&width=78'
              alt='Dan Abramov'
            />
          </Button>
          <Button borderRadius="none" colorScheme='' className='but1'>
            <Image

              boxSize='60px'
              src='https://images.contentstack.io/v3/assets/blt0281495b20b504a0/blta4f709f645453ff0/61b4eeeea000c90ecc6e15bd/VC_Logo_w_tag.svg?height=32&width=78'
              alt='Dan Abramov'
            />
          </Button>
          <Button borderRadius="none" colorScheme='' className='but1'>
            <Image

              boxSize='40px'
              src='https://images.contentstack.io/v3/assets/blt95e0138311135214/blta2ba2ac7606f6c15/5f08974bceebbf7e87c30215/sy-logo-v2.svg?height=32&width=78'
              alt='Dan Abramov'
            />
          </Button>


        </ButtonGroup>
      </Flex>
      <hr />
      {/* *************************************************** */}
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'>

<Link to='/'>

          <Image src={logo} marginLeft="20px" width="220px" height="80px">
          </Image>
</Link>


        </Box>
        <Spacer />
        <Center gap="5px" bg='' h='100px' border="black" color='white'>
          <Input placeholder='Search...' width="320px" color='black'/>


          <Button colorScheme='blue'>Search</Button>


        </Center>
        <Spacer />
        <ButtonGroup gap='2' mr="12px" bgColor="none">

          <Link to='/Cart'>
          <Center>
          
            <Button textDecor='none'>
              < FaCartArrowDown />
            
            </Button>
          </Center>
            </Link>  
          <Center bgColor="none" mr="12px">
          
           <Link to='/login'>
              <Button>
                <TfiUser />
              </Button>
           </Link>
          
          </Center>
   {/* <Link to='./admin'> */}
<Text mt='5px'> <AdminSecurity /> </Text>
    {/* </Link>        */}

        </ButtonGroup>
      </Flex>
      <hr />
      <br />
  
</>
    )
}

export default Navbar
