import React, { useState, useEffect } from "react";
import "../../css/List.css";
import { Button, Input, Label, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Tasks from "./Tasks";

export default function ListTitle({ Lists, index, setResponse, id }) {
  const [newTaskID, setNewTaskId] = useState();
  const [task, setTask] = useState("");

  const [isNewTask, setIsNewTask] = useState(false);
  const [isOpenNewTask, setIsOpenNewTask] = useState(false);
  const [isOpenTasks, setIsOpenTasks] = useState(true);
  const [delListTitle, setDelListTitle] = useState(false);

  const deleteListTitle = (itemId) => {
    console.log(itemId);
    axios
      .delete(`http://localhost:2020/listtitles/listtitle?id=${itemId}`)
      .then((response) => {
        setResponse(response);
      })
      .catch((error) => {
        console.error("Silme işlemi hatası:", error);
      });
    setDelListTitle(!delListTitle);
  };

  const postTask = () => {
    const userId = id;
    const listNameId = newTaskID;
    const state = false;
    const postData = {
      userId,
      listNameId,
      task,
      state,
    };
    axios
      .post("http://localhost:2020/lists", postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setResponse(response);
        setTask("");
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  };

  return (
    // Burada Sadece list title silme yeni task oluşturma işlemleri gerçekleşecek
    <ListGroup>
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
              deleteListTitle(Lists.id);
            }}
          >
            X
          </Button>
          <Link onClick={() => setIsOpenTasks(!isOpenTasks)}>
            {Lists.listName}
          </Link>
          <Link
            onClick={(i) => {
              setNewTaskId(Lists.id);
              setIsNewTask(true);
              setIsOpenNewTask(!isOpenNewTask);
            }}
          >
            <Button color="light" size="sm">
              New Task
            </Button>
          </Link>
        </ListGroupItem>
      </div>

      <div>
        {isNewTask && Lists.id === newTaskID && isOpenNewTask ? (
          <div className="cretae-task">
            <Label>New Task </Label>
            <Input
              type="text"
              value={task}
              onChange={(i) => setTask(i.target.value)}
            ></Input>
            <Button color="success" outline onClick={() => postTask()}>
              Create Task
            </Button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {isOpenTasks && <Tasks listResponce={Lists.listResponce} setResponse={setResponse}></Tasks>}
    </ListGroup>
  );
}
