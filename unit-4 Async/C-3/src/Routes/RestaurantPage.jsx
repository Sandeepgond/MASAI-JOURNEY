import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
const getdata = (id) => {
  return fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/` + id
  ).then((res) => res.json());
};

export default function RestaurantPage() {
  const [data, setdata] = useState([]);
  const[loading,setLoading]=useState(false)
  const params = useParams();

  useEffect(() => {
    setLoading(true)
    getdata(params.id).then((res) => {
      setdata(res.data);
      // console.log(res)
      setLoading(false)
    });
  }, [params.id]);
  // console.log(params)
  console.log(data);
  if (loading) {
    return <Loader loading={loading} />;
  }
  return (
    <div data-testid="restaurant-container">
      <img data-testid="restaurant-image" width={"100%"} />
      <div>
        <h4 data-testid="restaurant-name">{data.name}</h4>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type">{data.type}</b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{data.rating}</b>
        </div>
          
        <div>
          Starting Price:
          <b data-testid="restaurant-price">{data.price_starts_from}</b>
        </div>
      </div>
    </div>
  );
}
// export default RestaurantPage;
