import { useState } from 'react'
import './Cart.css'

export default function Cart(){

    const [count , setCount]=useState(0)
    const [total, settotal]=useState(0)

    const [count2 , setCount2]=useState(0)
    const [total2, settotal2]=useState(0)

    const [count3 , setCount3]=useState(0)
    const [total3, settotal3]=useState(0)

    

    const handleIncrement = (value) => {
        if (count === 0 && value < 0) {
          return;
        }
        setCount((prev) => prev + value);
        settotal((count+value)*30)
        
      };
    
      const handleDecrement = (value) => {
        setCount((prev) => prev - value);
        
        
      };



      const handleIncrement2 = (value) => {
        if (count2 === 0 && value < 0) {
          return;
        }
        setCount2((prev) => prev + value);
        settotal2((count2+value)*90)
        
      };
    
      const handleDecrement2 = (value) => {
        setCount2((prev) => prev - value);
        settotal2((count2-value)*90)
      };


      const handleIncrement3 = (value) => {
        if (count3 === 0 && value < 0) {
          return;
        }
        setCount3((prev) => prev + value);
        settotal3((count3+value)*10)
        
      };
    
      const handleDecrement3 = (value) => {
        setCount3((prev) => prev - value);
        settotal3((count3-value)*10)
      };



    // const Increment=()=>{
        
    //     setcount(count+1)
    //     settotal((count+1)*30)
    // }
    // const decrement=()=>{
    //     setcount(count-1)
    //     settotal((count-1)*30)
    // }
    


    return(
        <div>
            <h1>Cart Component</h1>

            <div className="main">
                <div>
                    <div><h2>Noodes</h2></div>
                    <div><h2>30</h2></div>
                    <div>
                        <button onClick={() => handleIncrement(-1)}>-</button>
                        <h2>{count}</h2>
                        <button onClick={() => handleIncrement(1)}>+</button>
                    </div>
                </div>
                <div>
                    <div><h2>Biriyani</h2></div>
                        <div><h2>90</h2></div>
                        <div>
                            <button onClick={() => handleIncrement2(-1)}>-</button>
                            <h2>{count2}</h2>
                            <button onClick={() => handleIncrement2(1)}>+</button>
                        </div>
                    </div>
                <div>
                    <div><h2>Chips</h2></div>
                        <div><h2>10</h2></div>
                        <div>
                            <button onClick={() => handleIncrement3(-1)}>-</button>
                            <h2>{count3}</h2>
                            <button onClick={() => handleIncrement3(1)}>+</button>
                        </div>
                    </div>

                    <div id='total'><h2>Total : {total+total2+total3}</h2></div>
                    
                    
            </div>
        </div>
    )
}