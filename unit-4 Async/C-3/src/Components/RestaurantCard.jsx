import { Link } from "react-router-dom";


export  function RestaurantCard({name,rating,type,price,id}){
    return (
        <tr data-testid="item">
            <td data-testid="name">
            <Link to={`/resturants/${id}`}>
              {name}
            </Link></td>
            <td data-testid="rating">{rating}
            </td>
            <td data-testid="type">{type}
            </td>
            <td data-testid="price">{price}
            </td>
        </tr>
    )
}
