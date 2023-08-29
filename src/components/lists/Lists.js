import React, { useState } from "react";
import { useValues } from "../../context/Context";
import "../../App.css";
import {
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
  ListInlineItem,
  Input,
  Label,
  Button,Alert
} from "reactstrap";
import { Link } from "react-router-dom";
import ListTitle from "../listTitle/ListTitle";
import axios from "axios";

export default function Lists() {
  const { listTitleValues } = useValues();
  const { currentUserId } = useValues();
  let [listName, setListName] = useState("");

  const postListTitle = () => {
    const userId = currentUserId;
    const postData = {
      listName,
      userId,
    };
    console.log(postData);
    axios
      .post("http://localhost:2020/listtitles", postData, {
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

  return (
    <Container>
       <Alert color="danger">
        Listelerim ...
      </Alert>
      <Row>
        <Col>
          <ListGroup>
            {listTitleValues.listTitle?.map((listTitle) => (
              <div>
                <ListTitle listTitle={listTitle}></ListTitle>
              </div>
            ))}
          </ListGroup>
        </Col>
        <Col>
          <Label>List Name</Label>
          <Input
            type="text"
            onChange={(i) => setListName(i.target.value)}
          ></Input>
          <Button onClick={postListTitle}>Create List Name</Button>
          <h4>{listName}</h4>
        </Col>
      </Row>
    </Container>
  );
}
