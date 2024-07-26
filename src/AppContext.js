  
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import  axios  from 'axios';


export const AppContext=createContext({})
export const AppProvider=({children})=>{
    const [data,setData]=useState([])
    const [count,setCount]=useState(11)
    const [cart,setCart]=useState([])
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

    const addCart=(id)=>{
        const res=data.find(item=>item.id===id)

        const index=cart.findIndex(item=>item.id===id)
        if(index>=0){
            let newCart=cart;
            newCart[index].quantity++
            setCart(newCart)
        }
        else{

            console.log(cart)
            setCart([...cart,{...res,quantity:1}])
        }
           
       
    }
    const deleteCart=(id)=>{
        setCart(cart.filter(item=>item.id!==id))
    }

    const updateByid=(id,flag)=>{
        let index=cart.findIndex(item=>item.id===id)
        let newCart=cart;
        if(flag===0){
            if(newCart[index].quantity>1)
            {
                
                newCart[index].quantity--;
            }
        }else{
            newCart[index].quantity++;
        }
        console.log(newCart)
    }
    return <AppContext.Provider value={{count,setCount,cart,addCart,deleteCart,updateByid}}>
                {children}
        </AppContext.Provider>
}