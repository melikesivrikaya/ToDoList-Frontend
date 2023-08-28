import React, { useState } from "react";
import '../../App.css';
import { useValues } from "../../context/Context";
import { Button, Input, Label, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
export default function ListTitle({ listTitle }) {
  const [isNewTask, setIsNewTask] = useState(false);
  const [newTaskID, setNewTaskId] = useState(5);
  const { currentUserId } = useValues();
  const [task, setTask] = useState("");
  const [isOpenNewTask ,setIsOpenNewTask ] = useState(false)
  const postTask = () => {
    const userId = currentUserId;
    const listNameId = newTaskID;
    const state = false;
    const postData = {
      userId,
      listNameId,
      task,
      state,
    };
    console.log(postData);
    axios
      .post("http://localhost:2020/lists", postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  };

  function handleDelete(itemId){
    {
      console.log(itemId);
    }
    axios
      .delete(`http://localhost:2020/lists/list?id=${itemId}`)
      .then((response) => {
        console.log("Silme işlemi başarılı:", response.data);
      })
      .catch((error) => {
        console.error("Silme işlemi hatası:", error);
      });
  };


  return (
    <div>
      <ListGroupItem action key={listTitle.id} color={"success"}>
        {listTitle.listName}
        <Link
          onClick={(i) => {
            setNewTaskId(listTitle.id);
            setIsNewTask(true);
            setIsOpenNewTask(!isOpenNewTask);
          }}
        >
          {" "}
         <Button color="light" size="sm">New Task</Button>
        </Link>


      </ListGroupItem>
      

      {isNewTask && listTitle.id === newTaskID && isOpenNewTask? (
        <div>
          <Label>New Task </Label>
          <Input type="text" onChange={(i) => setTask(i.target.value)}></Input>
          <Button color="success" onClick={postTask}>Create Task</Button>
        </div>
      ) : (
        <div></div>
      )}



      {listTitle.listResponce.map((li) => (
        <ListGroupItem key={li.id}>
          {li.task}
          <Link
            onClick={(i) => {
              handleDelete(li.id);
            }}
          >
            <Button color="danger" size="sm"  >X</Button>
          </Link>
        </ListGroupItem>
      ))}
    </div>
  );
}
