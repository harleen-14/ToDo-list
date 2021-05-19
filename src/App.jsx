import React, { useState } from "react";
import ToDo from './ToDo_list';
const App = () =>{
    const [inputList,setInputList] = useState();
    const [Items,setItems] = useState([]);


    const List = (event) =>{
        setInputList(event.target.value);
    }

    const ItemsOfList = () =>{
        setItems((preItems) =>{
            return [...preItems,inputList];
        });

        setInputList('');

    };
    const dltItem = (id) =>{
        console.log("d");
        setItems((preItems)=>{
            return preItems.filter((arrayEle,index)=>{
                return index!==id;
            })
        })
    };

    return(
        <>
            <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type='text' placeholder="Add a Item" onChange={List} 
                    value={inputList}
                />
                <button onClick={ItemsOfList}>+</button>
                <ol>
                    {/* <li>{inputList}</li> */}
                   { Items.map( (itemval,index) =>{
                    return<ToDo key={index}
                    id={index}
                     text={itemval}
                     onSelect={dltItem} />;
                    } 
                    )
                    }
                </ol>
                <br />
             </div>
             </div>
        </>
    );
}
export default App; 