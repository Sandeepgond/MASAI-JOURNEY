import { useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import RestaurantTable from "../Components/RestaurantTable";
import { AuthContext } from "../Context/AppContext";
const getdata = (current,option) => {
  return fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?_page=${current}&limit=10&filter=${option}`
  ).then((res) => res.json());
};

function Dashboard() {
  const{handleLogOut,user}=useContext(AuthContext)
  const {token}=user
  const [data, setdata] = useState({});
  const[current,setCurrent]=useState(1)
  const[option,setOption]=useState("")
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    setLoading(true)
    getdata(current).then((res) => {
      setdata(res.data);
      setLoading(false)
      console.log(res.data);
    });
  }, [current,option]);
  const handlePageChange=(value)=>{
       setCurrent(value)
  }
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={handleLogOut}>Logout</button>
        <p>
          Token:{token}
          <b data-testid="user-token"></b>
        </p>
      </div>
      <br />
      <div>
        <select value={option} onChange={(e)=>setOption(e.target.value)} data-testid="filter-box">
          <option value="">All</option>
          <option value="fine_dining">Fine Dining</option>
          <option value="ethnic">Ethnic</option>
          <option value="fast_food">Fast Food</option>
          <option value="cafe">Cafe</option>
          <option value="casual_dining">Casual Dining</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading?<Loader />:<RestaurantTable data={data?.data}/>}
        
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
      </div>
      <br />
      <div data-testid="pagination-container"><Pagination handlePageChange={handlePageChange} currentPage={current} totalPages={data?.totalPages}/></div>
    </div>
  );
}

export default Dashboard;
