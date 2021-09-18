import React,{useEffect} from "react";

import ShoppingList  from "./ShoppingList";
import ItemInput from "./ItemInput";
import TitleName from './TitleName';
import  ShoppingListMainFunction from "./ShoppingListMainFunction.js";
import "./App.css";
import {EasybaseProvider,useEasybase} from 'easybase-react';
import ebconfig from "./ebconfig";
import AddedItems from './AddedItems';
 
const App=()=>{
 
  return (
  <EasybaseProvider ebconfig={ebconfig}>  
  <ShoppingListMainFunction>
    <div className="app-cover">
      <div className="app-wrap">
        <TitleName/>
       <div className="app-m-class">
      <ItemInput/>
     <AddedItems/>
     <ShoppingList/>
     
       </div>
      </div>
    </div>
  </ShoppingListMainFunction> 

  </EasybaseProvider>
  );
}
export default App;
