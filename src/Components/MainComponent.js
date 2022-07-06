import React, { useEffect, useState } from 'react'
import TodoElement from './TodoElement';

const MainComponent = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const buttonHandler = () => {
    let newData = [...data];
    newData.push({id:data.length+1,content:text});
    setData(newData);
    setText("");
    document.getElementById('text-box').focus();
  }

  const keyUpHandler = (e) => {
    if(e.code == "Enter")
    buttonHandler();
  }

  return (
    <div className='todo-cont w-50'>
        <div className='w-100 p-2'>
            <input id="text-box" type='text' value={text} onChange={(e)=>{setText(e.target.value)}} onKeyUp={(e)=>keyUpHandler(e)} className='form-control' />
        </div>
        <div className='w-100 p-3'>
            {data.length?data.map(x=>{
                return <TodoElement key={x.id} data={x} dataArray={data} onDataChange={setData} />
            }):<div className='text-center'><p className='text-muted'>Please enter something!</p></div>}
        </div>
        <div className='w-100 p-2'>
            <button onClick={()=>buttonHandler()} className='btn btn-dark w-100'>Add</button>
        </div>
    </div>
  )
}

export default MainComponent