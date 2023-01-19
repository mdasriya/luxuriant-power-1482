import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Text, Box, Flex, Spacer, Button, Grid, Image, Stack, Heading, Center, WrapItem } from '@chakra-ui/react'
import './Cart.css'


const Cart = () => {
  const [data, setData] = useState([])
  const[count, setCount] = useState(0)

  const getdata = () => {
    axios.get('http://localhost:8021/update')
      .then((res) => {
        setData(res.data)
      })
  }

  useEffect(() => {
    getdata();
  }, []);


  return (
    <div className='main'>
      <Flex >
        <Box p='4' width='70%' height='auto'
        //  border='1px solid blue'
        >
          <Grid templateColumns='repeat(3, 1fr)' gap={6}
            // border='1px solid red'
            h='auto'>
            {
              data.map((prod) => <div key={prod.id}>

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


                
                    <center >
                      <button className='button' onClick={(()=> setCount(count+1))} >+</button>
                      <button className='button' >{count}</button>
                      <button className='button' >-</button>
                    </center>
               


                </cardBody>
              </div>
              )}

          </Grid>

        </Box>
        <Spacer />
        <Box p='4' width='30%' height='auto'
        //  border='1px solid blue'
        >

          <Text as='kbd'>TOTAL PRICE : 900</Text>

        </Box>
      </Flex>


    </div>
  )
}

export default Cart
