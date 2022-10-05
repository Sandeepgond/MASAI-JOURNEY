import {
  Button,
  Grid,
  HStack,
  Text,
  Box,
  Container,
  GridItem,
  Spacer,
  useDisclosure,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext/CartContextProvider";

// 1. cart page should contain all the cart items that are saved in cart context in the form of a table; ( you can display atleast product name and product price in first two cells of any row). the third cell contains remove from cart button clicking on which shall remove the item from the cart ( hint:  you need to dispatch remove from cart action and update your cart )

// 2. Below all the cart items list on table foot; there should be a Total in first cell of row and Total (Total price of all items in cart ) in second cell;

// 3. below the table; there should be a button called `Place Order` clicking on which will open an alert dialog box which asks `Are you sure you want to place this order ?` and two buttons Cancel and Yes; clicking on cancel will close the alert dialog; click on yes will dispatch checkout action which will empty all the cart items in cart context;

const Cart = () => {
  const { state ,dispatch} = useContext(CartContext);
  const [price, setPrice] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePrice = () => {
    let ans = 0;
    state.data.map((item) => (ans += item.price * item.quantity));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  }, []);

  const handlePlaceOrder = () => {
    alert(`Your order successfully placed of price ₹ ${price}`);
  };

  return (
    <Container style={{
      textAlign: "center"
    }}>
      <Grid
        w="800px"
        templateColumns={{
          base: "repeat(1,1fr)",
        }}
        gap={6}>
        <GridItem>
          <Box
            bg="grey.50"
            spacing="10"
            p={5}
            textAlign="center"
            rounded="lg"
            color="red.400">
            <HStack>
              <Box>
                <Text>PRODUCT</Text>
              </Box>
              <Spacer />
              <Box>
                <Text>PRICE ( INR )</Text>
              </Box>
              <Spacer />
              <Box>
                <Text>REMOVE FROM CART</Text>
              </Box>
            </HStack>
          </Box>
        </GridItem>
        {state.data.map((item) => (
          <GridItem key={item.id}>
            <Box
              bg="red.50"
              spacing="10"
              p={5}
              textAlign="center"
              rounded="lg"
              color="blue.400">
              {/* <Box>
                <Image boxSize="xs" src={item.image} alt={item.title} />
              </Box> */}
              <HStack>
                <Box>
                  <Text>{item.title}</Text>
                </Box>
                <Spacer />
                <Box>
                  <Text>₹ {item.price}</Text>
                </Box>
                <Spacer />
                <Box>
                  <Button>REMOVE PRODUCT</Button>
                </Box>
              </HStack>
            </Box>
          </GridItem>
        ))}
      </Grid>

      <Box>
        <Text>Total Price : ₹ {price}</Text>
      </Box>

      <Box>
        <Button onClick={onOpen}>PLACE ORDER</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Place Oreder</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Are you sure want place this order ?</Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Link to="/">
                <Button variant="ghost" Click={handlePlaceOrder}>
                  PLACE
                </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Container>
  );
};

export default Cart;