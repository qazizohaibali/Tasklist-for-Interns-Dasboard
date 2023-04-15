
import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button1 from '@mui/material/Button';
import '../Modal/CreateTask.css'

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function CreateTask({modal,toggle,save}) {
    // const [modal, setModal] = useState(false);

    // const toggle = () => setModal(!modal);
    
    // const [value, setValue] = React.useState(null);

    const handleTask = ()=>{
      let taskObj = {}
      taskObj["name"]=Task
      taskObj["description"]=Description
      taskObj["start_date"]=Start_date
      taskObj["expect_date"]=Expect_date
      save(taskObj)
      console.log(taskObj)
    }


    const[Task,setTaskname]=useState('')
    const[Description,setdescription]=useState('')
    const[Start_date,setStart_date]=useState('')
    const[Expect_date,setExpect_date]=useState('')

    const tasknametext = (event)=>{
        setTaskname(event.target.value)
        console.log(setTaskname)
    }
    const desctext = (event)=>{
        setdescription(event.target.value)
        // console.log(setdescription)
    }
    const StartDate = (event)=>{
        setStart_date(event.target.value)
        // console.log(setdescription)
    }
    const ExpectDate = (event)=>{
        setExpect_date(event.target.value)
        // console.log(setdescription)
    }

    
    return (
    <>
    <div>
       
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
         <form action="">
            <div className='form-group'>
                {/* <label>Task Name</label>
                <input type="text" className='form-control' value={Task} onChange={tasknametext} /> */}
              <TextField id="outlined-basic" label="Task Name" value={Task} onChange={tasknametext} variant="outlined" 
              color="secondary" 
              fullWidth />
            </div>
            <div className='form-group mt-4'>
                {/* <label>Description</label>
                <textarea name="" id="" cols="5" rows="5" className='form-control' value={Description} onChange={desctext}></textarea> */}
                 <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          // defaultValue="Default Value"
          fullWidth
          color="secondary"
          value={Description}
          onChange={desctext}
        />
            </div>
            <div className="dates mt-3 mb-2 d-flex justify-content-center align-items-center" >
            <div className='form-group'>
               <label htmlFor="">Starting Date</label>
              <input type="date" name="" id="" value={Start_date} onChange={StartDate}/>
            </div>
            <div className='form-group'>
               <label htmlFor="">Expected Date</label>
              <input type="date" className='Calendertype' name="" id="" value={Expect_date} onChange={ExpectDate}/>
            </div>
            </div>
         </form>
        </ModalBody>
        <ModalFooter>
        <Button1 variant="contained" className='mx-1' color="secondary"  onClick={handleTask}>Create</Button1>
          {/* <Button color="primary" onClick={handleTask}> */}
            {/* Create */}
          {/* </Button> */}
          {' '}
          {/* <Button color="secondary" onClick={toggle}> */}
          <Button1 variant="outlined" className='mx-1' color="secondary"  onClick={toggle} >Cancel</Button1>
          {/* <Button variant="outlined">Primary</Button> */}


            
          {/* </Button> */}
        </ModalFooter>
      </Modal>
    </div>
   
    </>
  )
}

