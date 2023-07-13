import React from 'react';
import {FaArrowUp, FaArrowDown} from "react-icons/fa";
function Counter({count, name, setCount, play}){
    
    const handleUP=(e)=>{
        e.preventDefault();
        if(play===false){
            if(count.minute ===60){
                return;
            }
            setCount((count)=>{
                return({
                    ...count,
                    minute: count.minute+ 1,
                    second:0
                })
            });
            
        }

        
    }
    const handleDown=(e)=>{
        e.preventDefault();
        if(play ===false ){
            if(count.minute ===0){
                return;
            }
            setCount((count)=>{
                return({
                    ...count,
                    minute: count.minute - 1,
                    second:0
                })
            });

        }
        
    }
    
    return(
        <div className="counter">
            <h3>{name}</h3>
            <div className="number">
                <div className="icon" onClick={handleDown}><FaArrowDown className="icon" /></div>
                <div >{count.minute}</div>
                <div className="icon" onClick={handleUP}><FaArrowUp className="icon" /></div>
            </div>
            
        </div>

    )
}
export default Counter;
