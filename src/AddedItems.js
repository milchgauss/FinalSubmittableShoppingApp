import React,{useEffect} from 'react'
import {useEasybase} from 'easybase-react';

const AddedItems=()=>{
    const { Frame, sync, configureFrame } = useEasybase();
    useEffect(() => {
      configureFrame({ tableName: "SHOPPINGLISTTABLE", limit: 10});
      sync();
    }, []);
    return (
        <div className="databaseItems">
            <h3 className="dbHeader">Items from the DB</h3>
            {Frame().map(ele=>
            <p>{ele.itemName}</p>)
            }
            <div>  
        </div>
    </div>)
}
export default AddedItems;