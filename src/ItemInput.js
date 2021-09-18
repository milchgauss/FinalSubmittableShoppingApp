import React, {useContext, useState,useEffect} from 'react'
import { ShoppingListMainFunction} from './ShoppingListMainFunction.js'
import {useEasybase} from 'easybase-react';
 
const ItemInput=()=>{
const {addItem,changedProduct,editItem}=useContext(ShoppingListMainFunction);
const { Frame, sync} = useEasybase();
const[nameOfItem, setName]=useState("");


useEffect(()=>
{if(changedProduct!==null){
    setName(changedProduct.nameOfItem)
    console.log(changedProduct)
}else{
    setName("")
}
},[changedProduct])

const handleClick=()=>{ 
Frame().push({
    itemName:nameOfItem
  })
  sync();
}

const doChange = e =>{
    setName(e.target.value)
    console.log("Name of item is"+nameOfItem)
}
const doEnter= e =>{
    e.preventDefault()
    if(changedProduct===null){
        addItem(nameOfItem);
        setName("");
    } else{
        editItem(nameOfItem,changedProduct.id)
        console.log("Name of edited item is "+nameOfItem);
    }
};

return (
    <form onSubmit ={doEnter}
        className="inputProcess">
        <input type="text"
        onChange={doChange}
        required
        className="listinput"
        placeholder="Enter your item here"
        value={nameOfItem}
        
        />
        <div className="buttons">
            <button type="submit" 
            onClick={handleClick}
            className=
            "bttn addbutton">
                 Add Item
            </button>
        </div>
    </form>
)
}
export default ItemInput