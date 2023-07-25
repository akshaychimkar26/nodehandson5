import React, { useState } from 'react'
import classes from './navbar.module.css'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const [userName, setUserName]= useState('')
  const [roomName, setRoomNAme]= useState('')

 const navi= useNavigate()
const handelName=(e)=>{
   setUserName(e.target.value)
}

const handleRoomName = (e)=>{
  setRoomNAme(e.target.value)
}

const handleSubmit=(e)=>{
   e.preventDefault()
   if(userName==='' || roomName===''){
    alert('please enter valid User Name/Room Name')
    
  } else{
    navi('/chat-room', {state:{userName,roomName}}) 
   }
}

  return (
    <nav className={classes.mainCtn}>
      <div className={classes.subCtn}>
        <h2 className={classes.text}>ChatSocket</h2>
        <div className={classes.btn}>
          <form className={classes.form}>
             <input type='text' className={`${classes.input}`} placeholder='enter user name' name='userName' onChange={handelName}/>
             <input type='text'  className={`${classes.input}`}  placeholder='enter user room' name='roomName' onChange={handleRoomName}/>
             <button className={classes.enter} onClick={handleSubmit}>Enter Room</button>
             </form>
        </div>
        </div>
    </nav>
  )
}

export default NavBar