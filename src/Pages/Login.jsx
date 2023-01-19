
import React from "react";
import { Navigate } from "react-router-dom";
import {
  Button,
  Input,
  InputGroup,
  Container,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import axios from "axios";
const initialState = {
  email: "",
  password: "",
};
const reducer = (state, action) => {
console.log(state)
  switch (action.type) {
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    case "password":
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};
 function Login() {
  const [auth, setauth] = React.useState(false)
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const handleSubmit = () => {
    axios
      .post(`https://reqres.in/api/login`, {
        email: state.email,
        password: state.password,
      })
      .then((res) => {
        console.log(res.data.token)
        if (res.data.token) {
          setauth(true)
        }
      });
  };
  if (auth) {
    return <Navigate to="/products"></Navigate>;
  }
  return (
    <>
      <Container>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          <Input
            placeholder="Email"
            onChange={(e) =>
              dispatch({
                type: "email",
                payload: e.target.value, 
              })
            }
          />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type="text"
              onChange={(e) =>
                dispatch({
                  type: "password",
                  payload: e.target.value,
                })
              }
              placeholder="Enter password"
            />
          </InputGroup>
          <Button onClick={handleSubmit} colorScheme="blue">
            Sign In
          </Button>
        </VStack>
      </Container>
    </>
  );
}
export default Login