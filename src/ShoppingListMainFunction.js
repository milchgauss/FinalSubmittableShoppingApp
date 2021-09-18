import React, {createContext,useState} from 
'react';
import {v1 as uuid} from "uuid"; 
 
export const ShoppingListMainFunction = createContext();

const ShopListMainFunc=props=>{

    const [itemm,setItems]=useState([
    {id:1,item:"Milk"},
    {id:2,item:"Apples"},
    {id:3,item:"Bananas"}
    ]);

    var id= itemm.map(items=>(items.id));
    var itemName=itemm.map(items=>(items.item));

    const [changedProduct,newEditedProduct]= useState(null)
    
    const editItem=(item,id)=>{
        const newItems=itemm.map(items=>(items.id===id?{item,id}:items))
        setItems(newItems);
        newEditedProduct(null)
    }

    const removeItem=id=>{
        setItems(itemm.filter(item=>item.id!==id))
    }
 
    const addItem=(item)=>{
        setItems([...itemm,{item,id:uuid()}])
    }
  
    const searchItem=id=>{
        const product=itemm.find(item=>item.id===id)
        newEditedProduct(product)
    }

    return ( 
    <ShoppingListMainFunction.Provider value={{itemm,searchItem,addItem,removeItem,editItem,changedProduct}}>
        {props.children}
    </ShoppingListMainFunction.Provider>);
};
export default ShopListMainFunc;