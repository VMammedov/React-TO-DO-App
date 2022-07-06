import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const TodoElement = ({data, dataArray, onDataChange}) => {

    const MySwal = withReactContent(Swal)

    const editHandler = () => {
        let newData = [...dataArray];
        let currentData = newData.filter(x=>x.id==data.id)[0];
        const { value: ipAddress } = MySwal.fire({
            title: 'Edit content of Task',
            input: 'text',
            inputLabel: 'Your current Task',
            inputValue: currentData.content,
            showCancelButton: true,
            inputValidator: (value) => {
              if (!value) {
                return 'You need to write something!'
              }
              else{
                newData.forEach(x=>{
                    if(x.id==currentData.id) x.content=value;
                })
                onDataChange(newData);
              }
            }
          }).then(()=>{
            MySwal.fire(
                'Success',
                'Task changed successfully!',
                'success'
              )
          })
          
    }
  
  const deleteHandler = () => {
        let newData = [...dataArray];
        let currentData = newData.filter(x=>x.id==data.id)[0];
        newData.splice(newData.indexOf(currentData),1);
        onDataChange(newData);
        MySwal.fire(
            'Success',
            'Task deleted successfully!',
            'success'
          );
  }

  return (
    <div className='d-flex justify-content-between align-items-center'>
        <div className='p-2 pt-1 pm-1'>
            {data.content}
        </div>
        <div className='d-flex justify-content-between align-items-center'>
            <i onClick={()=>editHandler()} className='bx bxs-edit fs-3 me-2'></i>
            <i onClick={()=>deleteHandler()} className='bx bxs-trash fs-3' ></i>
        </div>
    </div>
  )
}

export default TodoElement