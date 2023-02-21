import React, { useState } from 'react'
import './Todocss.css';
import './Tocss.css';

const Todo = () => {

    const [data,setData] = useState('');
    const [value,setValue]=useState([]);
    
    const storeData = (e) =>{
        setData(e.target.value);
        
    }
    const changeValue = () =>{
        setValue((oldItems)=>{
            return [...oldItems,data];  
        });
        console.log(data);
        setData('');
    }
 

const cancelData = (ind)=>{
  const newArr = value.filter((ele,i)=>i != ind);
  setValue(newArr);

}

  return (
    <div className='main'>
      <h1>TODO</h1>
      <input type="text" onChange={storeData} placeholder="Add Items" value={data}/>
      <button onClick={changeValue}>Add</button>
      <p className='out'><ul>

        {
            value.map((val,index)=>{
               return <div className='out'><i class="fa fa-times new" aria-hidden="true" onClick={()=>cancelData(index)}></i><li>{val}</li></div>
            })
     
}

        </ul></p>
    </div>
  )
}

export default Todo
