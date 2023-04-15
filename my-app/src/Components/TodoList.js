import React,{useState} from 'react'
import './TodoList.css'
import CreateTask from '../Modal/CreateTask'
import Card from './Card';
import {Link , useNavigate} from 'react-router-dom'
// import Button1 from '@mui/material/Button';


export default function TodoList() {
    const [modal, setModal] = useState(false);
    
    const [taskList,setTaskList] = useState([])

    const saveTask=(taskObj)=>{
      let tempList = taskList
      tempList.push(taskObj)
      setTaskList(tempList)
      setModal(false)
    }

    const toggle = () => setModal(!modal);

    const history = useNavigate()
    
    const deleteTask = (index)=>{
      let tempList = taskList
      tempList.splice(index,1)
      setTaskList(tempList)
      history('/')
    }
    
    // const history2 = useNavigate()
    const updateListArray = (taskObj , index)=>{
      let tempList = taskList
      tempList[index] = taskObj
      setTaskList(tempList)
      // history('/')
    }

  return (
    <>
    <div className='first_part'>
      <div className='header'>

      <h1>TODO List</h1>
      <button type="button" class="btn btn-primary mt-2" onClick={()=>{setModal(true)}}>Create A Task</button>


      </div>
    </div>
     <div className="TaskContainer container mx-auto">
     {taskList && taskList.map((obj,index)=>  <Card taskObj = {obj} index={index}  deleteTask = {deleteTask} updateListArray={updateListArray} /> )}
    </div>
    <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
    {/* <CreateTask/> */}
  
 </>
  )
}
