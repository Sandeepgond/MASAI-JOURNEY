import React, { useEffect, useState } from "react";
import EmployeeName from "./EmployeeName";
import EmployeeSalary from "./EmployeeSalary";

export const Dashboard = () => {
  const [data, setdata]=useState([])
const [page,setPage]=useState(1)

const [sort,setSort]=useState(false)
  useEffect(() => {
    fetch( `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}`
    ).then((res)=>res.json()).then((res)=>setdata(res.data))
    
  }, []);
  
const handlesort=()=>{
  if(sort==false)
  {
    let newdata=data.sort((a,b)=>{
      return a.salary-b.salary
    })
    setdata([...newdata])
  }
  else{
    let newdata=data.sort((a,b)=>{
      return b.salary-a.salary
    })
    setdata([...newdata])
  }
  setSort(!sort)
}
console.log(data)
  return (
    <div>
      <button 
      onClick={handlesort}
        data-testid="sorting-btn"
      >
       {
        sort ? " Bottom 10 Employees" :"  Top 10 Employees"
       }
      </button>
      

      <div data-testid="employee-data">
      {
        data && data.map((el)=>(
          <div>
            <EmployeeName name={el.name} />
            <EmployeeSalary salary={el.salary}/>
            
          </div>
        ))
      }
        
        

        
      </div>
      
    </div>
  );
};
