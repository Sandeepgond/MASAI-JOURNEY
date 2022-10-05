export  function RestaurantCard({name,rating,type,votes,price}){
    return (
        <tr data-testid="item">
            <td data-testid="name">{name}</td>
            <td data-testid="rating">{rating}
            </td>
            <td data-testid="type">{type}
            </td>
            <td data-testid="votes">{votes}
            </td>
            <td data-testid="price">{price}
            </td>
        </tr>
    )
}