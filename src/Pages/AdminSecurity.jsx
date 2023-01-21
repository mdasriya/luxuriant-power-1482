import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    ModalCloseButton,
    Button,
    Center,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'
import React, {useState} from 'react'
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function AdminSecurity() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const[password, setPassword] = useState(1234);
    const navigate = useNavigate();


const handlesubmit = () => {
if(password==1234){
    // <Navigate to='/admin' />
    navigate("/admin");
}else{
    alert("password Wrong")
}
}


    return (
        <>
            <Button onClick={onOpen}>ADMIN</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent p={6}>
                    <ModalHeader>Enter Your Admin Password</ModalHeader>
                    <ModalCloseButton />
                    <FormControl isRequired mt='40px'>
                        <FormLabel>Enter Password</FormLabel>
                        <Input placeholder='Password' type="password" onChange={(e)=> setPassword(e.target.value)}/>
                    </FormControl>
                    <Center>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={handlesubmit}>
                                Submin
                            </Button>
                        </ModalFooter>
                    </Center>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AdminSecurity