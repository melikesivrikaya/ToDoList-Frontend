import React, { useContext } from "react";
import "../../css/List.css";
import {
  Button,
  Col,
  Input,
  ListGroupItem,
  Row,
} from "reactstrap";
import { ListContext } from "../../context/ListContext";
export default function Tasks({ tasks }) {

 const {changeTaskState , deleteTask} = useContext(ListContext);

  return (
    <div>
      <Row className="list-container">
        <Col className="list-title-card" xs="5">
           <h6 className="list-title-card-title">Yapılacaklar</h6>
          {tasks?.map((task , index) =>
            task.state == false ? (
             
              <div>
                <ListGroupItem action key={index}>
                  <div className="list-task-item">
                    <div>
                      {" "}
                      <Button
                        onClick={() => {
                          deleteTask(task.id);
                        }}
                        className="delete-button"
                        color="danger"
                        size="sm"
                      >
                        X
                      </Button>
                      {task.task}
                    </div>
                    <Input
                      className="task-input"
                      type="checkbox"
                      onClick={() => changeTaskState(task.id, true)}
                    ></Input>
                  </div>
                </ListGroupItem>
              </div>
            ) : (
              <div></div>
            )
          )}
        </Col>

        <Col className="list-title-card" xs="5">
        <h6 className="list-title-card-title">Tamamlananlar</h6>
          {tasks.map((task) =>
            task?.state === true ? (
              <div>
                <ListGroupItem action key={task.id}>
                  <div className="list-task-item">
                    
                    <div>
                      {" "}
                      <Button
                        onClick={() => {
                          deleteTask(task.id);
                        }}
                        className="delete-button"
                        color="danger"
                        size="sm"
                      >
                        X
                      </Button>
                      {task.task}
                    </div>
                    <Input
                      className="task-input"
                      type="checkbox"
                      defaultChecked
                      onClick={() => changeTaskState(task.id, false)}
                    ></Input>
                  </div>
                </ListGroupItem>
              </div>
            ) : (
              <div></div>
            )
          )}
        </Col>
      </Row>
    </div>
  );
}
