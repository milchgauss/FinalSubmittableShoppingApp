import React, {useContext} from 'react'
import {ShoppingListMainFunction} from './ShoppingListMainFunction.js'
import Item from './Item'

 

const ShoppingList=()=>{
    const { itemm } = useContext(ShoppingListMainFunction);
 
    return (<div>
        <ul className="itemshop">
            {itemm.map(item=>{
                return <Item item={item}
                key={item.id}/>;
            })}   
        </ul>
       </div>);
};

export default ShoppingList;