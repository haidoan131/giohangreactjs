import React from 'react'
import { useState } from 'react';
import  axios  from 'axios';
import { useEffect } from 'react';
import { Container ,Row} from 'reactstrap';
import  Product  from "./../../components/product/Product";

export default function Products() {


    const [data,setData]=useState([])

    const url="https://66a07b887053166bcabb8cd6.mockapi.io/student"
    const fetchData=()=>{
        axios.get(url).then(function(res){
            setData(res.data)
        }).catch(function(err){
            console.log(err)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
    console.log(data)

  return (
    <div>
       Products
      <Container>
      <Row>
       {
          data.map((item,index)=>(
            <Product key={index} product={item} />
          ))
       }
        </Row>
        </Container>
    </div>
  )
}
