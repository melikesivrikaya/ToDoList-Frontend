import React, { useState, useContext } from "react";
import "../../css/List.css";
import { Button, Input, Label, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import Tasks from "./Tasks";
import { ListContext } from "../../context/ListContext";

export default function ListTitle() {
  const [newTaskID, setNewTaskId] = useState();
 const [task, setTask] = useState("");
  const [isOpenNewTask , setIsOpenNewTask] = useState(false);
  const { deleteListTitle, postTask, lists } = useContext(ListContext);
 


  return (
    <ListGroup>
      <h1>List Title</h1>
      {lists?.map((l, index) => (
        <div>
          <ListGroupItem
            className="list-title-container"
            action
            key={index}
            color={"success"}
          >
            {" "}
            <Button
              color="danger"
              size="sm"
              onClick={(i) => {
                deleteListTitle(l.id);
              }}
            >
              X
            </Button>
            <Link
              className="list-title-item"
             
            >
              {l.listName}
            </Link>
            <Link
              onClick={(i) => {
                setNewTaskId(l.id);
                setIsOpenNewTask(!isOpenNewTask)
              }}
            >
              <Button color="light" size="sm">
                New Task
              </Button>
            </Link>
          </ListGroupItem>

          {l.id === newTaskID && isOpenNewTask ?(
            <div className="cretae-task">
              <Label>New Task </Label>
              <Input
                type="text"
                value={task}
                onChange={(i) => setTask(i.target.value)}
              ></Input>
              <Button
                color="success"
                outline
                onClick={() => postTask(newTaskID, task)}
              >
                Create Task
              </Button>
            </div>
          ) : (
            <div></div>
          )}

          {<Tasks tasks = {l.listResponce}></Tasks>}
        </div>
      ))}
    </ListGroup>
  );
}
