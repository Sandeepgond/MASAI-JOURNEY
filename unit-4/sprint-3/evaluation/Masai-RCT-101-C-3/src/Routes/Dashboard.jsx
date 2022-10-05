import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantTable from "../Components/RestaurantTable";

const getdata = () => {
  return fetch(
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants"
  ).then((res) => res.json());
};


function Dashboard() {

  const [data, setdata] = useState([]);
  // const [page, setpage] = useState();

  // const changepage = (value) => {
  //   setpage(value);
  // };

  useEffect(() => {
    getdata().then((res) => {
      setdata(res);
      console.log(res.data);
    });
  }, []);
  // console.log(data.length);

  // if (data) {
  //   var n = new Array(data.length).fill(1).map((el, i) => {
  //     return i + 1;
  //   });
  // }




  return (
    <div>

      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token"></b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable data={data}/>
       </div> 
      <div data-testid="pagination-container"></div>


      

        
    </div>
  );
}

export default Dashboard;