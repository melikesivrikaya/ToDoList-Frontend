import React from "react";
import "../../css/List.css";
import {
  Button,
  Col,
  Input,
  ListGroupItem,
  Row,
} from "reactstrap";
import axios from "axios";
export default function Tasks({ listResponce, setResponse }) {
 

  function deleteTask(itemId) {
    axios
      .delete(`http://localhost:2020/lists/list?id=${itemId}`)
      .then((response) => {
        setResponse(response);
      })
      .catch((error) => {
        console.error("Silme işlemi hatası:", error);
      });
  }

  function changeTaskState(taskId, st) {
    const putData = {
      id: taskId,
      state: st,
    };
    console.log(putData);
    axios
      .put("http://localhost:2020/lists", putData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setResponse(response);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  }

  return (
    <div>
      <Row className="list-container">
        <Col className="list-title-card" xs="5">
          <h5>Yapılacaklar</h5>
          {listResponce.map((li) =>
            li.state == false ? (
              <div>
                <ListGroupItem action key={li.id}>
                  <div className="list-task-item">
                    <div>
                      {" "}
                      <Button
                        onClick={() => {
                          deleteTask(li.id);
                        }}
                        className="delete-button"
                        color="danger"
                        size="sm"
                      >
                        X
                      </Button>
                      {li.task}
                    </div>
                    <Input
                      className="task-input"
                      type="checkbox"
                      onClick={() => changeTaskState(li.id, true)}
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
          <h5>Tamamlananlar</h5>
          {listResponce.map((li) =>
            li.state == true ? (
              <div>
                <ListGroupItem action key={li.id}>
                  <div className="list-task-item">
                    <div>
                      {" "}
                      <Button
                        onClick={() => {
                          deleteTask(li.id);
                        }}
                        className="delete-button"
                        color="danger"
                        size="sm"
                      >
                        X
                      </Button>
                      {li.task}
                    </div>
                    <Input
                      className="task-input"
                      type="checkbox"
                      defaultChecked
                      onClick={() => changeTaskState(li.id, false)}
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
