import React from 'react'
import {
  Flex,
  FormLabel,
  FormControl,
  Button,
  Input,
  Checkbox,
  Text,
  Alert,
  Box,
  Spacer,
  AlertIcon,
  Image,
 
  AlertDescription
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
import './Login.css'
import logo from '../Logo/logo.png'


const RegisterPage = () => {
  const toast = useToast()


// const handleRegister = () => {
 

// }




  return (
    <>
<Flex >
  
    <Box bg='white' w='32%' p={5}  m='auto' mr="20px" mt='-2'  height='430px' className='content' marginTop='100px'>
      <center>
<Image   src={logo}></Image>

      </center>


      <center>
<Text alignContent='center' className='cont' mt='20px'>Welcome back! </Text>

      </center>
      {/* <center>
<Text>  Checkout and order tracking </Text>

      </center> */}
  
   </Box>





{/* ********************************************BOX 2******************************************* */}
<Box bg='white' w='32%' p={4}  m='auto' height='auto'  mt='100px' className="content">
    {/* <Box as ='b'  w='100%'  color='black' border='1px solid blue'>
    Sign In 
   </Box> */}
    <FormControl >
     <FormLabel>Create Account </FormLabel>
   </FormControl>


   <Flex gap={2}>
   <FormControl >
  <FormLabel>First name</FormLabel>
  <Input placeholder='First name' />
</FormControl>

<FormControl >
  <FormLabel>Last name</FormLabel>
  <Input placeholder='Last name' />
</FormControl> 
   </Flex>
   
    
    <FormControl mt='20px'>
     <FormLabel> Email</FormLabel>
     <Input placeholder=' Email' />
   </FormControl>
   
    <FormControl   mt='20px'>
     <FormLabel typeof='Password'> Password</FormLabel>
     <Input placeholder='Password' type="password"/>
   </FormControl>
    
   

   <Flex mt='10px'>
  <Checkbox >Email me about special offers, new products </Checkbox>
  <Spacer />
 
</Flex>

  <Link to='/login'>

   <Button  w='100%' p={4}  borderRadius='8px' colorScheme='blue' onClick={(()=> {
 toast({
  position: 'top',
  title: 'User Created Successfully!.',

  status: 'success',
  duration: 2000,
  isClosable: true,

})
   })}>
  Register
</Button>
    
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
   
   {/* <Text mt='5px'> Or Sign in with </Text> */}
   </Box>
{/* ********************************************BOX 2******************************************* */}








   </Flex>
      </>
  )
}

export default RegisterPage
