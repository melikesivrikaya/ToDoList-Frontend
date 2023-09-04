import React, { useEffect, useState } from "react";
import "../../css/List.css";
import { Container, Input, Label, Button, Alert } from "reactstrap";
import ListTitle from "./ListTitle";
import axios from "axios";

export default function Lists() {
  const currentUserId = 2;
  const [lists, setList] = useState();
  const [text, setText] = useState("");
  const [listName, setListName] = useState("");
  const [userId, setUserId] = useState(1);
  const [response, setResponse] = useState({});

  useEffect(() => {
    axios(`http://localhost:2020/listtitles/${currentUserId}`).then((res) =>
      setList(res.data)
    );
  }, [response]);
  
  useEffect(() => {
    postListTitle();
    setText("");
  }, [listName]);
  
  useEffect(() => {
    setUserId(currentUserId);
  }, []);

  const postListTitle = () => {
    const postData = {
      listName,
      userId,
    };
    axios
      .post("http://localhost:2020/listtitles", postData, {
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
  };

  return (
    <Container>
      <Alert color="danger">Listelerim ...</Alert>
      <div className="create-list">
        <Label>List Name</Label>

        <Input
          bsSize="sm"
          type="text"
          value={text}
          onChange={(i) => setText(i.target.value)}
        ></Input>

        <Button onClick={(i) => setListName(text)} color="light">
          Create List Name
        </Button>
      </div>

      {lists?.map((l, index) => (
        <ListTitle
          Lists={l}
          index={index}
          setList={setList}
          id={userId}
          setResponse={setResponse}
        ></ListTitle>
      ))}
    </Container>
  );
}
