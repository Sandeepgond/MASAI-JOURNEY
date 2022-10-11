
import { useEffect,useState } from "react";
import CountriesCard from "./CountriesCard";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";

function getData(page,limit){   
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=${limit}&orderBy=ASC`)
  .then((res)=>res.json())
}

function Countries() { 
  const [countries,setCountries] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total,setTotal]=useState(0)
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    handeleData(page,limit)
  },[page, limit])

  const handeleData = async (page,limit) => {
    try {
      setLoading(true)
      const data = await getData(page,limit);
      console.log(data.data);
       setTotal(data.totalPages);
       setCountries(data.data);
       setLoading(false)
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  }
 
  const onChange=(val)=>{
      setPage(page+val)
  }
  
  if(loading){
    return <LoadingIndicator loading={loading} />
  }
  
  return (
    <>
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
      {countries.map((elem) => (
          <CountriesCard key={elem.id}
             country={elem.country}
             population={elem.population}
             />
        ))}
   
      </div>
      <div>
        <Pagination current={page} total={total} onChange={onChange}/>
      </div>
    </div>
    </>
  );
}

export default Countries;
