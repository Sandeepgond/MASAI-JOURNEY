import Pagination from "../Components/Pagination";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { logoutsuccess } from "../Context/AppContext";
// import {axios} from "axios"


import { Box ,Image } from '@chakra-ui/react'

function Dashboard() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const changePage = (value) => {
    setPage(value);
  };

  const { dispatch, token } = useContext(AppContext);

  const getdata = (page) => {
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?_page=${page}&limit=10 `)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };
  useEffect(() => {
    getdata();
  }, [page]);
  console.log(data);
//   console.log(totalPages)
  return (
    <div>
      <h3>Dashboard</h3>
      <h4 data-testid="token">{token}</h4>
      <button data-testid="logout-btn" onClick={() => dispatch(logoutsuccess)}>
        Logout
      </button>
      
      
      

{data?.data?.map((el) => {
          return (
            <>
            
  
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={el.image} alt={el.image} />

      

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {el.title}
        </Box>

        <Box>
          {`Price-${el.price}`}
          <Box as='span' color='gray.600' fontSize='sm'>
            
          </Box>
        </Box>

        
    </Box>
    </>
          )
        })}
{/* } */}

<div >
        <Pagination changePage={changePage} total={data.length} />
      </div>
    </div>
  );
}

export default Dashboard;
