import { RestaurantCard } from "./RestaurantCard"

function RestaurantTable({data}){
    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Type</th>
                        <th>Number of Votes</th>
                        <th>Price Starts From</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.map((item) => {
                       return  <RestaurantCard 
                       name={item.name} 
                       rating={item.rating} 
                       type={item.type} 
                       votes={item.number_of_votes} 
                       price={item.price_starts_from}
                       />
                    })}
                </tbody>
            </table>
    )
}

export default RestaurantTable