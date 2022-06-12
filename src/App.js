import React,{useState} from 'react';
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
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={entredUserData}/>
    </div>
  );
}

export default App;
