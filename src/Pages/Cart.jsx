import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Text, Box, Flex, Spacer, Button, Grid, Image,GridItem, Stack, Heading, Center } from '@chakra-ui/react'
import './Cart.css'
import { DeleteIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
const Cart = () => {
  const [data, setData] = useState([])
  const[totalItem, setTotalItem] = useState(0)

  function getData() {
    axios.get('http://localhost:8021/update')
        .then((res) => {
        console.log("res",res.data)
        setTotalItem(res.data.length)
      
            setData(res.data)
        })
}


useEffect(() => {
    getData();
},[])

function handledelete(id) {
    axios.delete(`http://localhost:8021/update/${id}`)
        .then(() => {
            getData();
        })
}

 

localStorage.setItem("total", totalItem);
  return (
    <div className='main' >
      <Box bg='RGBA(0, 0, 0, 0.04)' >
        
     
      <Flex>
  <Text p='4' as='b' fontSize='4xl'>
    Shopping Cart
  </Text>
  <Spacer />
  <Text p='4' as='b' fontSize='2xl'>
    TOTAL ITEM : {totalItem}
  </Text>
  
 
</Flex> 

     <Flex >
        <Box p='4' width='70%' height='auto'
        //  border='1px solid blue'
        >
          <Grid templateColumns='repeat(3, 1fr)' gap={6}
            // border='1px solid red'
            h='auto'>
            {
              data.map((prod) => <div key={prod.id} >

                <cardBody className='cart'>
                  <Image width='300px' mb='5px'
                    src={prod.image}
                    alt={prod.title}
                    borderRadius='lg'
                  />
                  <Stack direction='row'>
                    <Image
                      width='130px'
                      src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg'
                      alt='Dan Abramov'
                    />


                  </Stack>
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>{prod.title}</Heading>
                    <Text color='#805AD5' fontSize='2xl'>
                      ${prod.price}
                    </Text>
                  </Stack>
                  <Center gap={2}>
                    <Box >
                      <b color='#65388b'>★</b>
                      <b color='#65388b'>★</b>
                      <b color='#65388b'>★</b>
                      <b color='#65388b'>★</b>
                      <b color='#65388b'>★</b>
                    </Box>
                  </Center>


              

        <Center>
      <Button colorScheme='whatsapp'>Buy Now</Button>
       
        </Center>

        <DeleteIcon onClick={(()=>{handledelete(prod.id)})} />
        

                </cardBody>
              </div>
              )}

          </Grid>

        </Box>
        <Spacer />
        <Box p='4' width='30%' height='auto' mt="-85px"
          // border='1px solid blue'
        >
<Grid templateColumns='repeat(1, 1fr)' gap={210}>
  <GridItem w='100%' h='auto' bg='blue.500' />
<Spacer />

<Link to='/login'>
<Button w='100%' h='10' bg='blue.500' colorScheme='blue'> 
<Text as='b' > PLACE ORDER </Text>
</Button >
</Link>

</Grid>

        </Box>
      </Flex>

      </Box>
    </div>
  )
}

export default Cart
