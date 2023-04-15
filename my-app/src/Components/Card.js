import React, { useState } from 'react'
import EditTask from '../Modal/EditTask'
import './Card.css'
import Star from './Star'
import { Link} from 'react-router-dom'

export default function Card({ taskObj , index,deleteTask , updateListArray}) {
    
    const[modal,setModal] = useState(false)

    const colors = [
        {primaryColor : "#0ff1ce"},
        {primaryColor : "#fc00b1"},
        {primaryColor : "#c0ff33"},
        {primaryColor : "#800869"},
        {primaryColor : "#fa7a55"},
        {primaryColor : "#b00bee"},
        {primaryColor : "#01d1e5"},
        {primaryColor : "#abbfab"}

    ]
    
    // DeleteHandle = (index)=>{

    // }

    // const history = useNavigate()


    const handleDelete = ()=>{
        deleteTask(index)
        
        // history('/')
    }

    const toggle = ()=>{
        setModal(!modal)
    }

    const updateTask = ()=>{
        updateListArray(taskObj,index)
    }

    // const schema = ()=>{
    //     console.log(taskObj)
    // }

    return (<>
        <div class=" card shadow" style={{borderTop : `0.35rem solid ${colors[index%8].primaryColor}`}} >
            <div class="card-body">
                <div className='upper_part_card'>

                    <h5 class="card-title">{taskObj.name}</h5>
                    <div class="dropdown">
                        <button class="btn btn dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        </button>
                        <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                            <li><Link class="dropdown-item" to='/' onClick={()=>{setModal(true)}}>Edit</Link></li>
                            {/* <button >EDIT</button> */}
                            {/* <button onClick={handleDelete}>DELETE</button> */}

                            <li><Link class="dropdown-item" to='/' onClick={handleDelete}>Delete</Link></li>
                        </ul>
                    </div>
                </div>
                <p class="card-text">{taskObj.description}</p>
                <div className='d-flex'>
                    <div style={{width :"9.4rem"}}>
                        <p>Starting Date:</p>
                    </div>
                    <div>
                        <p>{taskObj.start_date}</p>
                    </div>
                </div>
                <div className='d-flex'>
                    <div style={{width :"9.4rem"}}>
                        <p>Expecting Date:</p>
                    </div>
                    <div>
                        <p>{taskObj.expect_date}</p>
                    </div>
                </div>
                {/* <p>Starting Date  :{taskObj.start_date}</p> */}
                {/* <p>Expected Date :{taskObj.expect_date} </p> */}
                <div className='cards-icons '>
                    <Star />
                </div>
                {/* <button ></button> */}
            </div>
        <EditTask modal={modal} toggle={toggle} updateTask ={updateTask} taskObj={taskObj}/>
        </div>
    </>
    )
}
