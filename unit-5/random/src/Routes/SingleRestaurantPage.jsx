// function SingleRestaurantPage() {
//   return (
//     <div data-testid="restaurant-container">
//       <div>
//         <h3 data-testid="restaurant-name"></h3>
//       </div>
//       <div data-testid="restaurant-type">Type:</div>
//       <div data-testid="restaurant-rating">Rating:</div>
//       <div data-testid="restaurant-votes">Votes:</div>
//       <div data-testid="restaurant-price">Starting Price:</div>
//       <div>
//         <img data-testid="restaurant-image" width={"100px"} />
//       </div>
//     </div>
//   );
// }
// export default SingleRestaurantPage;


// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { transformTypeToString } from "../Components/RestaurantCard";

// const getRestaurant = (id) => {
//   return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
//   .then(res=>res.json())
// }

// function SingleRestaurantPage() {

//   const {id} =useParams();
//   const [data, setData] = useState ({})
 
  
//   return (
//     <div data-testid="restaurant-container">
//       <img src={data.image} alt={data.name} width={"100%"} data-testid="restaurant-image" />
//       <div>
//         <h4 data-testid="restaurant-name">{data.name}</h4>
//       </div>
//       <div className="flex">
//         <div>
//           Type:
//           <b data-testid="restaurant-type">{transformTypeToString(data.type)}</b>
//         </div>
//         <div>
//           Rating:
//           <b data-testid="restaurant-rating">{data.rating}</b>
//         </div>
//       </div>
//       <div className="flex">
//         <div>
//           Votes:
//           <b data-testid="restaurant-votes">{data.number_of_votes}</b>
//         </div>
//         <div>
//           Starting Price:
//           <b data-testid="restaurant-price">{data.price_starts_from}</b>
//         </div>
//       </div>
//       <div></div>
//     </div>
//   );
// }
// export default SingleRestaurantPage;



import { useState } from "react";
import { useParams } from "react-router-dom";
// import { transformTypeToString } from "../Components/RestaurantCard";

const getRestaurant = (id) => {
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
  .then(res=>res.json())
}

function SingleRestaurantPage() {

  const {id} =useParams();
  const [data, setData] = useState ({})
 
  
  return (
    <div data-testid="restaurant-container">
      <img src={data.image} alt={data.name} width={"100%"} data-testid="restaurant-image" />
      <div>
        <h4 data-testid="restaurant-name">{data.name}</h4>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type">{transformTypeToString(data.type)}</b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{data.rating}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes">{data.number_of_votes}</b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price">{data.price_starts_from}</b>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default SingleRestaurantPage;
