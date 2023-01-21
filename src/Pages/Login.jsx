
import React from "react";
import {
  Flex,
  FormLabel,
  FormControl,
  Button,
  Input,
  Image,
  Text,
  ButtonGroup,
  Box,
  StackDivider,
} from "@chakra-ui/react";
import './Login.css'
import { Link } from 'react-router-dom'



 function Login() {
  const [show, setShow] = React.useState(false)
 
  const handleClick = () => setShow(!show)


 
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
  <div className="bg-img">

 <Box bg='white' w='35%' p={4}  m='auto'  height='auto'  className="content" mt='100px'>

 <FormControl >
  <FormLabel>Sign In </FormLabel>
</FormControl>
<Flex>

 <Box textAlign='start' mr='4px'>
  <Text>Not registered?  </Text> 
</Box>

<Link to='/register'>
 <Box >
 <Text as='u' color='blue' className="createAccount" >Create Account</Text>
</Box>
</Link>

</Flex>
 <FormControl isRequired>
  <FormLabel>Enter Email</FormLabel>
  <Input placeholder=' Email' />
</FormControl>

 <FormControl isRequired  mt='40px'>
  <FormLabel>Enter Password</FormLabel>
  <Input placeholder='Password' type="password"/>
</FormControl>
 


<Link to='/'>

<Button colorScheme='blue' mt='60px' width ='auto'>Sign In </Button>
</Link>
 
 
  <Flex>

<Box textAlign='start'>
  <Text fontSize='sm'>By Continuing, you agree to our </Text>  
</Box>
<Box >
 <Text as='u' color='blue' fontSize='sm' m='5px'> Term of Use </Text>
</Box>
 
<Text fontSize='sm'>and </Text> 
<Box >
 <Text as='u' color='blue' fontSize='sm' m='5px'> Privacy Notice </Text>
</Box>
  </Flex>





</Box>
</div>
   </>
  );
}
export default Login