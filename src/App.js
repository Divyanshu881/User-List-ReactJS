import React,{useState,Fragment} from 'react';
import AddUser from './Component/User/AddUser';
import UserList from './Component/User/UserList';
function App() {
  const [entredUserData,setEntredUserData]=useState([]);
  const addUserHandler =(uName,uAge)=>{
    setEntredUserData((prevData)=>{
      return [...prevData,{userName:uName,userAge:uAge,id:Math.random().toString()}]
  });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={entredUserData}/>
    </Fragment>
  );
}

export default App;
