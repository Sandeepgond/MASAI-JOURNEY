import React from "react"

const UserRow = ({username,gender,role,maritalStatus,id})=>{
    console.log("inside userrow page",username,gender,role,maritalStatus,id)
    return (
        <div style={{margin:"auto",width:"80%"}}>
           <table border="1px">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Role</th>
                        <th>MaritalStatus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{username}</td>
                        <td>{gender}</td>
                        <td>{role}</td>
                        <td>{maritalStatus}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export {UserRow}