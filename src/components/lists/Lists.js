import React, { useContext, useState } from "react";
import "../../css/List.css";
import { Container, Input, Label, Button, Alert } from "reactstrap";
import ListTitle from "./ListTitle";
import { ListContext } from "../../context/ListContext";

export default function Lists() {
  const [text, setText] = useState("");
  const { postListTitle } = useContext(ListContext);

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

        <Button
          onClick={(i) => {
            postListTitle(text);
            setText("");
          }}
          color="light"
        >
          Create List Name
        </Button>
      </div>

      <ListTitle></ListTitle>
    </Container>
  );
}
