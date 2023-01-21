import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Center, Box,
    useDisclosure,
    Flex,

} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import './SingleProduct.css'

function SingleProduct({ title, image, price, id }) {
    const toast = useToast()
const[count, setCount] = useState(1)
    const { isOpen, onOpen, onClose } = useDisclosure()


const handleadd = () => {
    if(count===10){
        return;
    }
   setCount(count+1) 
}
const handlesub = () => {
    if(count===1){
        return
    }
   
  setCount(count-1)  
}


    const handlebuy = (id,price) => {
        toast({
            position: 'top',
            title: 'Product Succesefully Added to bag.',

            status: 'success',
            duration: 2000,
            isClosable: true,

        })
        axios.post('http://localhost:8021/update', {
            id, title, image, price
        })
   
   
    }





    return (
        <>
            <Button border='none' colorScheme='purple' onClick={onOpen} >More Details..</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <center>

                            <img width='320px' src={image} alt={title} />
                        </center>
                    </ModalBody>
                    <center>

                        <ModalHeader>{title}</ModalHeader>
                    </center>
                    <center>

                        <ModalHeader>Price:
                            
                             ${(price*count.toFixed(2))}
                             </ModalHeader>

                    </center>
                    <ModalCloseButton />
                    <Center gap={2}>
                        <Box >
                            <b color='#65388b'>★</b>
                            <b color='#65388b'>★</b>
                            <b color='#65388b'>★</b>
                            <b color='#65388b'>★</b>
                            <b color='#65388b'>★</b>
                        </Box>

                    </Center>

                    <ModalFooter>
                    <center >
                      <button className='button'
                      onClick={handleadd} >+</button>
                      <button className='button' >{count}</button>
                      <button className='button'   onClick={handlesub}>-</button>
                    </center>
               
                        <center>
                            <Button colorScheme='purple' mr={140}
                                onClick={(()=> handlebuy(id,price))}
                            >
                                Add to Cart
                            </Button>

                        </center>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    )
}
export default SingleProduct