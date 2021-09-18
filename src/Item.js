import React,{useContext} from 'react'
import CounterIncrement from './CounterIncrement'
import UnitField from './UnitField'
import { ShoppingListMainFunction } from './ShoppingListMainFunction.js'


const Item=({item})=>{

    const {removeItem,searchItem}=useContext(ShoppingListMainFunction)
    return (<div>
        <li className="itemGroups">
            <div>{item.item}</div>
            <div>
             <UnitField/> 
             <button onClick={()=>searchItem(item.id)}
            className="buttonedit ta-button">
                <icon className="fas fa-edit">
                </icon>
                </button>
            <button 
            onClick={()=>removeItem(item.id)}
            className="buttondelete ta-button">
                <icon className="fas fa-trash">
                </icon>
            </button>
            <CounterIncrement/>
            </div>
        </li>
    </div>)
}
export default Item;