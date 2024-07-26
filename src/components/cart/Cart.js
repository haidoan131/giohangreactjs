import React from 'react'
import { Table } from 'reactstrap';
import { useContext } from 'react';
import { AppContext } from './../../AppContext';
import { Button } from 'reactstrap';


export default function Cart() {
    const {cart,deleteCart,updateByid}=useContext(AppContext)
  return (
    <div>
      <Table
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        First Name
      </th>
      <th>
        Last Name
      </th>
      <th>
        Username
      </th>
    </tr>
  </thead>
  <tbody> 

    {

        cart.map((item,index)=>(
            <tr>
            <th scope="row">
           {item.id}
            </th>   
            <td>
       {item.name}
            </td>
            <td>
               <Button onClick={()=>updateByid(item.id,0)}>+</Button> 
              <span> {item.quantity} </span>
              <Button onClick={()=>updateByid(item.id,1)}>-</Button> 
            </td>
            <td>
            <Button onClick={()=>deleteCart(item.id)}>delete</Button> 
            </td>
          </tr>
        ))
    }
   
   
   
  </tbody>
</Table>
    </div>
  )
}
