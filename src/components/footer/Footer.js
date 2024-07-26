import React, {useContext} from 'react'

import { Button } from 'reactstrap';
import { AppContext } from './../../AppContext';



export default function Footer() {
    const {count,setCount}=useContext(AppContext)
    console.log(count)
  return (
    <div>

      <h1>count:{count}</h1>
      <Button onClick={()=>setCount(count+1)}>count up</Button>
    </div>
  )
}
