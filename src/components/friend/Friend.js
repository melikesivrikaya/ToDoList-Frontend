import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, ListGroup, Row } from "reactstrap";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
} from "reactstrap";
export default function Friend() {
  const { id } = useParams();
  const [friend, setFriend] = useState();
  const [friendListAll, setFriendListAll] = useState();

  useEffect(() => {
    axios(`http://localhost:2020/users/user?id=${id}`).then((res) =>
      setFriend(res.data)
    );
    axios(`  http://localhost:2020/listtitles/${id}`).then((res) =>
      setFriendListAll(res.data)
    );
  }, []);

  return (
    <Container>
      <Row>
        <Col xs="5">
          <h1>Friend Page</h1>
          <Container>
            <ListGroup>
              <ListGroup>
                <ListGroupItem>
                  <ListGroupItemHeading>Ad Soyad</ListGroupItemHeading>
                  <ListGroupItemText>{friend?.name}</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>Adres</ListGroupItemHeading>
                  <ListGroupItemText>{friend?.address}</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>Yaş</ListGroupItemHeading>
                  <ListGroupItemText>34</ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </ListGroup>

            <h1>Friend's List</h1>

            <ListGroup>
              {friendListAll?.map((l) => (
                <ListGroupItem color="info">
                  {l.listName}
                  {l.listResponce.map((r) => (
                    <ListGroupItem key={r.id} color="light">
                      {r.task}
                    </ListGroupItem>
                  ))}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Container>
        </Col>
        <Col xs="5">
          <ListGroup>
            <h1>Friend's Friend</h1>
            {friend?.friendList.map((ff) =>
              ff.friendState !== "WAIT" ? (
                <ListGroupItem key={ff.id}>{ff.name}</ListGroupItem>
              ) : (
                <div></div>
              )
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
