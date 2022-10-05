import axios from "axios";
import React, { useContext, useEffect } from "react";
import {Image,Box,Container,Text,Button} from "@chakra-ui/react"
import { product } from "../Context/CartContext/action";
import { CartContext } from "../Context/CartContext/CartContextProvider";
import { loading, error} from "../Context/CartContext/action";
// 0. axios should be used for making network requests;

// 1. API request should be made to `https://fakestoreapi.com/products` on mount and get the data and the same data should be displayed in the form of cards ( 3 per row in large screens, 2 per row  in medium screens and 1 per row  in small screen  )

// 2. loading, error and data state should be maintained; show proper loading indicator and error state when required;

// 3. each product card should atleast contain product image, title , price and a add to cart button;

// 4. cart data is maintained in the cart context and based on the cart data if the product is already added to the cart, then the add to cart button should be disabled for that particular product;

// 5. clicking on add to cart button will add the product to the cart; this cart is maintained in the cart context; as useReducer has been used for state management in cart context; you need to dispatch some add_to_cart action to add new product to the cart.

const Home = () => {
  const {state,dispatch} = useContext(CartContext)

  useEffect(()=>{
    getdata()
  },[])

  const getdata=()=>{
    dispatch(loading(true))
     axios.get(`https://jabz-101-app.herokuapp.com/products`)
    .then((res)=>{
      dispatch(loading(false))
      dispatch(error(false));
      console.log(res)
      dispatch(product(res.data))
    })
    .catch((err)=>{
      dispatch(loading(false))
      dispatch(error(true));
      console.log(err)
    })
  }

  console.log(state.data)

  
  return (
    <Box display={"grid"} gridAutoColumns={"repeat(3,1fr)"} width={{base:"200px",md:"400px",sm:"600px"}}>
      {state.loading?<Text>....Loading</Text>:null}
      {state.error?<Text>Something went wrong</Text>:null}
    {
      state.data.map((el)=>(
        <Box key={el.id}>
        <Image src={el.image}/>
        <Text>{el.title}</Text>
        <Text>{el.price}</Text>
        <Button>Add to cart</Button>
      </Box>
      ))
    }

    </Box>


  );
};

export default Home;


