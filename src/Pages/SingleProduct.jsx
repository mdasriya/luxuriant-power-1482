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
   
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'


function SingleProduct({ title, image, price,id }) {
    const toast = useToast()
 
    const { isOpen, onOpen, onClose } = useDisclosure()


const handlebuy = () =>{
    toast({
        position: 'top',
      title: 'Product Succesefully Added to bag.',
     
      status: 'success',
      duration: 2000,
      isClosable: true,

    })
axios.post('http://localhost:8021/update',{
   id,title,image,price 
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

                        <ModalHeader>${price}</ModalHeader>
                       
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
                        <center>
                            <Button colorScheme='purple' mr={140} 
                             onClick={handlebuy}
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