// function Dashboard() {
//   return (
//     <div>
//       <h3>Dashboard</h3>
//       <div>
//         <button data-testid="logout-btn">Logout</button>
//         <p>
//           Token:
//           <b data-testid="user-token"></b>
//         </p>
//       </div>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         {/* restaurant table */}
//       </div>
//       <div data-testid="pagination-container"></div>
//     </div>
//   );
// }
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Pagination from "../Components/Pagination";
import RestarantTable from "../Components/RestaurantTable";


const getRestaurant = (page=1, type='') => {
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10&filter=${type}`)
  .then(res=>res.json())
}
function Dashboard() {
  const {authState, logoutUser} = useContext(AuthContext);
  const [data, setData] = useState({})
  const [type, setType] = useState('');
  const [page, setpage] = useState(1)

  
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logoutUser} data-testid="logout-btn">Logout</button> 
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      <div>
        <select value={type} onChange={e=>setType(e.target.value)} data-testid="filter-box">
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
        {
          <RestarantTable data={data && data?.data}/>
        }
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
      </div>
      <br />
      <div data-testid="pagination-container">{/* Pagination */}
      <Pagination totalPages={data?.totalPages} currentPage={page} handlePageChange={page=>setpage(page)} />
      </div>
    </div>
  );
}

export default Dashboard;


