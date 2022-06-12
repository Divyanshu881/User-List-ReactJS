import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [entredUserName, setEntredUserName] = useState("");
  const [entredUserAge, setEntredUserAge] = useState("");
    const [error,setError]=useState();
  const userNameChangehandler =(event)=>{
    setEntredUserName(event.target.value);
  }
  const userAgeChangehandler =(event)=>{
    setEntredUserAge(event.target.value);
  }
  const addUserHandler = (event) => {
    event.preventDefault();
    if(entredUserName.trim().length === 0 || entredUserAge.trim().length ===0)
    {
        setError({title:'Invalid Input',message:'Please enter valid name and age (non empty).'});
        return;
    }
    if(+entredUserAge <1){
        setError({title:'Invalid Age',message:'Please enter valid age (>0).'});
        return;
    }
    props.onAddUser(entredUserName,entredUserAge);
    setEntredUserAge('');
    setEntredUserName('');
  };
  const errorHandler=()=>{
    setError(null);
  };
  return (
    <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> }
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="text">Username</label>
        <input type="text" value={entredUserName} onChange={userNameChangehandler} />
        <label htmlFor="text">Age (Years)</label>
        <input type="number" value={entredUserAge} onChange={userAgeChangehandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
