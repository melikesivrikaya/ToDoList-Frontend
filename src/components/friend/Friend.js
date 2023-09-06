import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, json, useParams } from "react-router-dom";
import { Col, Container, ListGroup, Row, CardImg, Alert } from "reactstrap";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
} from "reactstrap";
import '../../css/Friend.css'

export default function Friend() {
  const { id } = useParams();
  const [friend, setFriend] = useState();
  const [friendListAll, setFriendListAll] = useState();
  const [changeId , setChangeId] = useState();
  useEffect(() => {
    axios(`http://localhost:2020/users/user?id=${id}`).then((res) =>
      setFriend(res.data)
    );
    axios(`  http://localhost:2020/listtitles/${id}`).then((res) =>
      setFriendListAll(res.data)
    );
  }, [changeId]);

  return (
    <Container>
      <Row>
        <Col xs="3">
 
            <CardImg
            className="friend-img"
              alt="Card image cap"
              src={`${friend?.profilFotoUrl}`}
           
            />
            <Alert color="danger">{friend?.name}</Alert>
            <Alert color="danger">{31}</Alert>
            <Alert color="danger">{friend?.address}</Alert>
            {/* <ListGroup>
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
            </ListGroup> */}

           
    
        </Col>
        <Col xs="6">
        <Alert color="danger">{friend?.name + " Lists"}</Alert>

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
        </Col>

        <Col xs="3">
          <Alert color="danger">{friend?.name + " Friends"}</Alert>
          <ListGroup>
            {friend?.friendList.map((ff) =>
              ff.friendState !== "WAIT" ? (
                <ListGroupItem key={ff.id} color="info">
                  <Link  to={`/${ff.userId}`} style={{textDecoration : "none" , color : "gray"}} onClick={ () => setChangeId(ff.userId)}>{ff.name}</Link>
                </ListGroupItem>
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
