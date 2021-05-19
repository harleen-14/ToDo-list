import React, { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
const ToDo = (props) =>{
    const [line,setLine] = useState(false);
    const cutIt =()=>{
       setLine(true);
    }
 
    return(
        <>
        <div className="todo_style">
            <span onClick={cutIt}>
                <CancelIcon  className="btn2" />
            </span>


            {/* <CancelIcon 
                onClick= () ='&gt;' {
                    props.onSelect(props.id);
                }
              /> */}
              
         <li style={{textDecoration:line ?'line-through':"none"}}>{props.text}</li>
         
         </div>
        </>
        );
};

export default ToDo;