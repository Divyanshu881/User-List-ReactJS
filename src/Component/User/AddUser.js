import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  // const [entredUserName, setEntredUserName] = useState("");
  // const [entredUserAge, setEntredUserAge] = useState("");
  const [error, setError] = useState();
  const ageInputRef = useRef();
  const nameInputRef = useRef();

  // const userNameChangehandler = (event) => {
  //   setEntredUserName(event.target.value);
  // };
  // const userAgeChangehandler = (event) => {
  //   setEntredUserAge(event.target.value);
  // };
  const addUserHandler = (event) => {
    event.preventDefault();
    const entredAge = ageInputRef.current.value;
    const entredName = nameInputRef.current.value;
    //console.log(entredName);
    //console.log(entredAge);
    if (entredName.trim().length === 0 || entredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age (non empty).",
      });
      return;
    }
    if (+entredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter valid age (>0).",
      });
      return;
    }
    props.onAddUser(entredName, entredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEntredUserAge("");
    // setEntredUserName("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="text">Username</label>
          <input
            type="text"
            // value={entredUserName}
            // onChange={userNameChangehandler}
            ref={nameInputRef}
          />
          <label htmlFor="text">Age (Years)</label>
          <input
            type="number"
            // value={entredUserAge}
            // onChange={userAgeChangehandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
