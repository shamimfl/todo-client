import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskPage = () => {
    const [task, setTask] = useState([])
    const [alltask, settask] =useState(false)
    const handlesubmit = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const task = e.target.task.value;
        const data = { name, task }
        // setTask(data)
        toast('Success')
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        settask(!alltask)
    }
useEffect(()=>{
    fetch('http://localhost:5000/task')
    .then(res => res.json())
    .then(data=> setTask(data))
},[settask])

// delete


const handleDelete =id =>{
    console.log(id)
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
        fetch(`http://localhost:5000/task/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))
            
    }

}
    return (
        <div className='mt-5 p-5'>
            <h1 className='text-center text-4xl text-slate-500'>To Do My App</h1>
            <form className='text-center lg:flex justify-center items-center' onSubmit={handlesubmit}>
                <input type="text" name='name' placeholder='Enter Name' className=' md:w-2/5   p-2 lg:mr-5 md:mr-5 rounded-xl font-bold text-black sm:block mt-10' />
                <input type="text" name='task' placeholder='Description' className=' md:w-2/5  p-2 lg:mr-5 md:mr-5 rounded-xl font-bold text-black sm:block mt-10' />
                <div className='flex justify-center'>
                    <input className='bg-black mt-10 btn block p-2' value='Add Task' type="submit" />
                </div>
            </form>
            <div className='lg:container'>
               {
                   task.map(task => <div className='flex justify-between items-center mt-10'>
                       <h1 className='mt-2 bg-slate-500 p-3 rounded-lg text-white font-bold  w-full'>{task?.name}</h1>
                       <h1 className='mt-2 bg-slate-500 p-3 rounded-lg text-white font-bold  w-full ml-2'>{task?.task}</h1>
                       <button onClick={()=>handleDelete(task?._id)} className='btn bg-red-500  mt-2 ml-2'>DELETE</button>
                        </div>
                     )
               }
            </div>
            <ToastContainer />
        </div>
    );
};

export default TaskPage;