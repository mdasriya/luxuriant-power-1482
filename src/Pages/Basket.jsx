import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import './Products.css'

import { GridItem, CardBody, Image, Stack, Heading, Text, ListItem, Card, CardFooter, Button, OrderedList, CardHeader, Box, Flex, Spacer, Grid } from '@chakra-ui/react'
import SingleProduct from './SingleProduct'

const Products = () => {
    const [prod, setProd] = useState([])

    const getData = () => {

        axios.get("http://localhost:8021/basket")
            .then((res) => {
                setProd(res.data)
            })
            .catch((err) => {
                alert("something went wrong")
            })
    }
    useEffect(() => {
        getData();
    }, [])


    return (
        <div>

            <Flex gap={10}>
                <Box pl='15px' mt='10px' border='1px solid black'>

                    <Box border='1px solid red' w='210px' mt='30px'>
                        <Text  as='b'>SHOP PLANT TYPES</Text>

                        <OrderedList>
                            <Grid templateColumns='repeat(1, 1fr)' gap={1} className='text' ml='-10px'>

                                <ListItem className='left' as='u'>Bestselling Plants</ListItem>
                                <ListItem className='left' as='u'>Same Day Plant Delivery</ListItem>
                                <ListItem className='left' as='u' >CDish Dardens</ListItem>
                                <ListItem className='left' as='u' >Bonsai Trees</ListItem>
                                <ListItem className='left' as='u' >Bamboo Plants</ListItem>
                                <ListItem className='left' as='u' >Sympathy Plants</ListItem>
                                <ListItem className='left' as='u' >Funeral Plants</ListItem>
                                <ListItem className='left' as='u' >Get Well Plants</ListItem>
                                <ListItem className='left' as='u' >Green Plants</ListItem>
                                <ListItem className='left' as='u' >House Plants</ListItem>
                                <ListItem className='left' as='u' >Celebration Tree</ListItem>
                                <ListItem className='left' as='u' >Outdoor Plants</ListItem>
                                <ListItem className='left' as='u' >Plant Sale</ListItem>
                                <ListItem className='left' as='u' >Fair Trade Plant</ListItem>
                                <ListItem className='left' as='u' >Birthday Plant</ListItem>
                                <ListItem className='left' as='u' >Zodiac Plants</ListItem>
                            </Grid>
                        </OrderedList>

                    </Box>
                    <Box border='1px solid red' w='210px' mt='30px'>
                        <Text ml='-0px' as='b'>SHOP FLOWERING PLANTS</Text>

                        <OrderedList>
                            <Grid templateColumns='repeat(1, 1fr)' gap={1} className='text' ml='-10px'>

                                <ListItem className='left' as='u'>All Flowering Plants</ListItem>
                                <ListItem className='left' as='u'>Azalea Plants</ListItem>
                                <ListItem className='left' as='u' >Hydrangea Plants</ListItem>
                                <ListItem className='left' as='u' >Rose Plants</ListItem>
                                <ListItem className='left' as='u' >Gardenia Plants</ListItem>
                                <ListItem className='left' as='u' >Chrysanthemums</ListItem>
                                <ListItem className='left' as='u' >Flower Delivery Same Day</ListItem>
                               
                            </Grid>
                        </OrderedList>

                    </Box>

                    <Box border='1px solid red' w='210px' mt='30px'>
                        <Text  as='b'>SHOP SEASONAL PLANTS</Text>

                        <OrderedList>
                            <Grid templateColumns='repeat(1, 1fr)' gap={1} className='text' ml='-10px'>

                                <ListItem className='left' as='u'>Flowers Bulbs-Coming February</ListItem>
                                <ListItem className='left' as='u'>Rrchids</ListItem>
                                <ListItem className='left' as='u' >Bamboo Plants</ListItem>
                                <ListItem className='left' as='u' >Bonsai Trees</ListItem>
                                <ListItem className='left' as='u' >Christmas Plants - Coming</ListItem>
                                <ListItem className='left' as='u' >December</ListItem>
                                <ListItem className='left' as='u' >Poinsettias-Coming December </ListItem>
                                
                            </Grid>
                        </OrderedList>

                    </Box>
                    <Box border='1px solid red' w='190px' mt='30px'>
                        <Text  as='b'>RELATED CONTENT</Text>

                        <OrderedList>
                            <Grid templateColumns='repeat(1, 1fr)' gap={1} className='text' ml='-10px'>

                                <ListItem className='left' as='u'>Gardening Gifts,Tips & DIY's</ListItem>
                                <ListItem className='left' as='u'>Plant Gift Guide</ListItem>
                               
                            </Grid>
                        </OrderedList>

                    </Box>
                    <Image ml='-0px'
                        src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltbd8e878899d3f1bd/5d52d450696dde105b7d59dd/smile_guarantee.jpg' ></Image>
                </Box>
                {/* ******************************************************Box2*************************************************** */}
                <Spacer />


                <Box p='auto' pt='10px' mr='0px'>
                    <Grid templateColumns='repeat(3, 1fr)' gap={6}  >
                        {
                            prod.map((prod) => <div key={prod.id}>

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
                                    <Button colorScheme='purple' > <SingleProduct image={prod.image} title={prod.title} price={prod.price} /> </Button>
                                </cardBody>
                            </div>
                            )
                        }








                    </Grid>

                </Box>
            </Flex>




        </div>
    )
}

export default Products
