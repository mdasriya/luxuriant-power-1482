import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import './Products.css'
import { ButtonGroup, MenuItem,MenuList,
     HStack, Image, Stack, Heading, Text, ListItem, Menu, MenuButton, Button, OrderedList, SimpleGrid, Box, Flex, Spacer, Grid } from '@chakra-ui/react'
import SingleProduct from './SingleProduct'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../MiddleSection/Middle.css'


const Products = () => {
    const [prod, setProd] = useState([])
    const[or,setor]=useState(true)

const addproducttocard = (id) =>{
    console.log(id)
    console.log("urgvheh")
}




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

    useEffect(()=>{
 
    },[or])

    function handlesort(){
        setProd(prod.sort((a,b)=>a.price-b.price))
        setor(!or)
    }
   
    function handlesortdec(){
     
      setProd(prod.sort((a,b)=>b.price-a.price))
     
      setor(!or)
    }

  



    return (
        <div>
 <Navbar />
<HStack gap='5' mb={2}>
          <Menu >
            <MenuButton className='dorp' >
              VALENTINE'S
            </MenuButton>

            <MenuList border='none' marginTop='20px' >
              <Flex gap={5}>
                <SimpleGrid columns={1} spacing={1}>
                  <Text as='b'>Valentine's</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>All Valentine's Flowers & Gift</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Best Seller</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Flowers Subscription</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Attend a Workshop</MenuItem>
                  <Text as='b'>Shop by Flowers & Plants</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Bouques</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Plants</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Roes</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Farm Fresh Flowers</MenuItem>

                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <Box boxSize='sm'>
                  <Image src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf17b34ccacec190d/624524c196ee250ebe231f72/birthday-flower-subscriptions-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}' alt='Dan Abramov' />
                </Box>
              </Flex>
            </MenuList>
            {/* ****************************************222222222222222222************************************************************ */}
          </Menu>
          <Menu>
            <MenuButton className='dorp' >
              BIRTHDAY
            </MenuButton>

            <MenuList border='none' marginTop='20px' marginLeft='-100px'  >
              <Flex gap={5}>
                <SimpleGrid columns={1} spacing={1}>
                  <Text as='b'>Valentine's</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>All Valentine's Flowers & Gift</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Best Seller</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Flowers Subscription</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Attend a Workshop</MenuItem>
                  <Text as='b'>Shop by Flowers & Plants</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Bouques</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Plants</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Roes</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Farm Fresh Flowers</MenuItem>

                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>

                  <Box boxSize='sm'>
                    <Image src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf17b34ccacec190d/624524c196ee250ebe231f72/birthday-flower-subscriptions-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}' alt='Dan Abramov' />
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>
            {/* ******************************************3333333333333333333333333333333333333************************************ */}
          </Menu>
          <Menu>
            <MenuButton className='dorp' >
              SYMPATHY
            </MenuButton>
            <MenuList border='none' marginTop='20px' marginLeft='-200px'  >
              <Flex gap={5}>
                <SimpleGrid columns={1} spacing={1}>
                  <Text as='b'>Valentine's</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>All Valentine's Flowers & Gift</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Best Seller</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Flowers Subscription</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Attend a Workshop</MenuItem>
                  <Text as='b'>Shop by Flowers & Plants</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Bouques</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Plants</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Roes</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Farm Fresh Flowers</MenuItem>

                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>

                  <Box boxSize='sm'>
                    <Image src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf17b34ccacec190d/624524c196ee250ebe231f72/birthday-flower-subscriptions-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}' alt='Dan Abramov' />
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>

            {/* *******************************************4444444444444444444444444********************************** */}

          </Menu>
          <Menu>
            <MenuButton className='dorp'>
              OCCASIONS
            </MenuButton>
            <MenuList border='none' marginTop='20px' marginLeft='-300px'  >
              <Flex gap={5}>
                <SimpleGrid columns={1} spacing={1}>
                  <Text as='b'>Valentine's</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>All Valentine's Flowers & Gift</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Best Seller</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Flowers Subscription</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Attend a Workshop</MenuItem>
                  <Text as='b'>Shop by Flowers & Plants</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Bouques</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Plants</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Roes</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Farm Fresh Flowers</MenuItem>

                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>

                  <Box boxSize='sm'>
                    <Image src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf17b34ccacec190d/624524c196ee250ebe231f72/birthday-flower-subscriptions-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}' alt='Dan Abramov' />
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>

            {/* *****************************************5555555555555555555555555555555************************************ */}

          </Menu>
          <Menu>
            <Link to='/flower' className='flower' style={{textDecoration:'none'}}>
            <MenuButton className='dorp' border='none' >
              FLOWERS
            </MenuButton>
            </Link>
           

            {/* *********************************************************6666666666666666666666666666666666666666****************** */}

          </Menu>
          <Menu>
            <Link to='/products' style={{textDecoration:'none'}}>

            <MenuButton className='dorp' >
              PLANTS
            </MenuButton>
            </Link>
           

            {/* *********************************************777777777777777777777777777777777************************************ */}

          </Menu>
          <Menu>

            <Link to='/basket' style={{textDecoration:'none'}}>

            <MenuButton className='dorp'>
              GIFT BASKETS & FOOD
            </MenuButton>
            </Link>


            <MenuList border='none' marginTop='20px' marginLeft='-600px'  >
              <Flex gap={5}>
                <SimpleGrid columns={1} spacing={1}>
                  <Text as='b'>Valentine's</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>All Valentine's Flowers & Gift</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Best Seller</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Flowers Subscription</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Attend a Workshop</MenuItem>
                  <Text as='b'>Shop by Flowers & Plants</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Bouques</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Plants</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Roes</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Farm Fresh Flowers</MenuItem>

                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>

                  <Box boxSize='sm'>
                    <Image src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf17b34ccacec190d/624524c196ee250ebe231f72/birthday-flower-subscriptions-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}' alt='Dan Abramov' />
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>

            {/* **********************************************8888888888888888888888888888********************************* */}

          </Menu>
          <Menu>
            <MenuButton className='dorp' >
              GIFTS & MORE
            </MenuButton>
            <MenuList border='none' marginTop='20px' marginLeft='-800px'  >
              <Flex gap={5}>
                <SimpleGrid columns={1} spacing={1}>
                  <Text as='b'>Valentine's</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>All Valentine's Flowers & Gift</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Best Seller</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Flowers Subscription</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Attend a Workshop</MenuItem>
                  <Text as='b'>Shop by Flowers & Plants</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Bouques</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Plants</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Roes</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Farm Fresh Flowers</MenuItem>

                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>

                  <Box boxSize='sm'>
                    <Image src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf17b34ccacec190d/624524c196ee250ebe231f72/birthday-flower-subscriptions-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}' alt='Dan Abramov' />
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>

            {/* ***************************************99999999999999999999999999999999999999******************************** */}

          </Menu>
          <Menu>
            <MenuButton className='dorp'>
              SAME-DAY DELIVERY
            </MenuButton>
            <MenuList border='none' marginTop='20px' marginLeft='-920px'  >
              <Flex gap={5}>
                <SimpleGrid columns={1} spacing={1}>
                  <Text as='b'>Valentine's</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>All Valentine's Flowers & Gift</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Best Seller</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Flowers Subscription</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Attend a Workshop</MenuItem>
                  <Text as='b'>Shop by Flowers & Plants</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Bouques</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Plants</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Roes</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Farm Fresh Flowers</MenuItem>

                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>

                  <Box boxSize='sm'>
                    <Image src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf17b34ccacec190d/624524c196ee250ebe231f72/birthday-flower-subscriptions-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}' alt='Dan Abramov' />
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>

            {/* *****************************************10101010101010101010101010101*************************************** */}

          </Menu>
          <Menu>
            <MenuButton className='dorp' >
              SALE
            </MenuButton>
            <MenuList border='none' marginTop='20px' marginLeft='-1100px'  >
              <Flex gap={5}>
                <SimpleGrid columns={1} spacing={1}>
                  <Text as='b'>Valentine's</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>All Valentine's Flowers & Gift</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Best Seller</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Flowers Subscription</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Attend a Workshop</MenuItem>
                  <Text as='b'>Shop by Flowers & Plants</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Bouques</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Plants</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Roes</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Farm Fresh Flowers</MenuItem>

                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>

                  <Box boxSize='sm'>
                    <Image src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf17b34ccacec190d/624524c196ee250ebe231f72/birthday-flower-subscriptions-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}' alt='Dan Abramov' />
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>

            {/* *************************************11111111111111111111111111111111********************************************* */}

          </Menu>
          <Menu>
            <MenuButton className='dorp' >
              COMMUNITY
            </MenuButton>
            <MenuList border='none' marginTop='20px' marginLeft='-1160px'  >
              <Flex gap={5}>
                <SimpleGrid columns={1} spacing={1}>
                  <Text as='b'>Valentine's</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>All Valentine's Flowers & Gift</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Best Seller</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Flowers Subscription</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Attend a Workshop</MenuItem>
                  <Text as='b'>Shop by Flowers & Plants</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Bouques</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Plants</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Roes</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Farm Fresh Flowers</MenuItem>

                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} >
                  <Text as='b'>Shop by Gourment Food& Treats</Text>

                  <Box boxSize='sm'>
                    <Image src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf17b34ccacec190d/624524c196ee250ebe231f72/birthday-flower-subscriptions-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}' alt='Dan Abramov' />
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>
          </Menu>
        </HStack>


        
<Flex minWidth='max-content' alignItems='center' gap='2'>
 
  <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='gray' fontSize='13px' className = "sortByRentAsc" onClick={handlesort}>sort by Asc</Button>
    <Button colorScheme='gray' mr='10px' fontSize='13px' className = "sortByRentDesc" onClick={handlesortdec}>sort to Desc</Button>
  </ButtonGroup>
</Flex>
            <Flex>
                <Box pl='15px' mt='10px' border='1px solid red' mr='30px'
                //  border='1px solid black'
                 >

                    <Box
                    //  border='1px solid red'
                     className='Boxstyle'
                      w='210px' mt='7px'>
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
                    <Box className='Boxstyle'
                    //  border='1px solid red' 
                    w='210px' mt='30px'>
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

                    <Box 
                   //  border='1px solid red'
                     w='210px' mt='30px' className='Boxstyle'>
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
                    <Box className='Boxstyle'
                    //  border='1px solid red'
                      w='190px' mt='30px'>
                        <Text  as='b'>RELATED CONTENT</Text>

                        <OrderedList>
                            <Grid templateColumns='repeat(1, 1fr)' gap={1} className='text' ml='-10px'>

                                <ListItem className='left' as='u'>Gardening Gifts,Tips & DIY's</ListItem>
                                <ListItem className='left' as='u'>Plant Gift Guide</ListItem>
                               
                            </Grid>
                        </OrderedList>

                    </Box>
                    <Image ml='-0px' mt='30px' className='Boxstyle'
                        src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltbd8e878899d3f1bd/5d52d450696dde105b7d59dd/smile_guarantee.jpg' ></Image>
                </Box>
                {/* ******************************************************Box2*************************************************** */}
                <Spacer />


                <Box p='auto' pt='10px' mr='20px'  >
                    <Grid templateColumns='repeat(3, 1fr)' gap={8}  >
                        {
                            prod.map((prod) => <div key={prod.id} className='allcart'>

                                <cardBody  >
                                    <Image width='300px' ml='10px' mb='5px'
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
                                    <Button colorScheme='purple' > <SingleProduct id={prod.id} image={prod.image} title={prod.title} price={prod.price} /></Button>
                              
                              
                              
                              
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
