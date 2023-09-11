import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, Row, CardImg, Alert } from "reactstrap";
import { ListGroupItem } from "reactstrap";
import "../../css/Friend.css";
import { FriendContext } from "../../context/FriendContext";

export default function Friend({ setChangeId, changeId }) {
  const { friend, friendListAll, userId, getFriendInfo } =
    useContext(FriendContext);

  useEffect(() => {
    getFriendInfo(changeId);
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
          <Alert color="danger">{friend?.title}</Alert>
          <Alert color="danger">{31}</Alert>
          <Alert color="danger">{friend?.address}</Alert>
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
                  {ff.userId === userId ? (
                    <Link
                      to={`/profile`}
                      style={{ textDecoration: "none", color: "gray" }}
                      onClick={() => setChangeId(ff.userId)}
                    >
                      You
                    </Link>
                  ) : (
                    <Link
                      to={`/${ff.userId}`}
                      style={{ textDecoration: "none", color: "gray" }}
                      onClick={() => setChangeId(ff.userId)}
                    >
                      {ff.name}
                    </Link>
                  )}
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
