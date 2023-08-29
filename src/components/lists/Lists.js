import React, { useEffect, useState } from "react";
import { useValues } from "../../context/Context";
import "../../App.css";
import {
  ListGroup,
  Container,
  Row,
  Col,
  Input,
  Label,
  Button,
  Alert,
} from "reactstrap";
import ListTitle from "../listTitle/ListTitle";
import axios from "axios";

export default function Lists() {
  const { listTitleValues } = useValues();
  const { currentUserId } = useValues();
  const [listName, setListName] = useState("");
  const [userId, setUserId] = useState();

  const postListTitle = () => {
    
    setUserId(currentUserId);

    const postData = {
      listName,
      userId,
    };
    console.log(postData);
    // axios
    //   .post("http://localhost:2020/listtitles", postData, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Hata:", error);
    //   });
  };

  useEffect(() => {
    setListName("");
  }, [setUserId]);

  return (
    <Container>
      <Alert color="danger">Listelerim ...</Alert>
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
        </Col>
      </Row>
    </Container>
  );
}
