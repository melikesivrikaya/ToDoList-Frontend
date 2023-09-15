import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Alert,
  ListGroupItemHeading,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardTitle, CardSubtitle } from "reactstrap";
import "../../css/User.css";
import { UserContext } from "../../context/UserContext";

export default function UserList() {
  const { users, userFriends, follow, unFollow, userId } =
    useContext(UserContext);
  return (
    <div>
      <Container>
        <Row>
          <Col xs="9">
            <Alert color="info">{"Users"}</Alert>
            <div className="user-list-container">
              {users?.map((u, index) =>
                u.id != userId ? (
                  <div>
                    <Card key={index} className="user-cart">
                      <div className="user-img">
                        <Link to={`/${u.id}`}>
                          {" "}
                          <CardImg
                            top
                            width={"200"}
                            height={"300"}
                            src={`${u.profilFotoUrl}`}
                            alt="Card image cap"
                          />
                        </Link>
                      </div>
                      <div>
                        <CardTitle style={{ fontWeight: "bold" }}>
                          {" "}
                          {u.name}
                        </CardTitle>
                        <CardSubtitle>Title : {u.title}</CardSubtitle>
                        <CardText>{u.address}</CardText>

                        {/* // backendden zaten sadece SENTED_REQUEST yada null geliyor */}

                        {u.friendState === "SENTED_REQUEST" ? (
                          <Button
                            color="success"
                            outline
                            onClick={() => unFollow(u)}
                          >
                            Followed
                          </Button>
                        ) : (
                          <Button onClick={() => follow(u)} color="success">
                            Follow
                          </Button>
                        )}
                      </div>
                    </Card>
                  </div>
                ) : (
                  <div></div>
                )
              )}
            </div>
          </Col>
          <Col xs="3">
            <Alert color="info">{"My Friends"}</Alert>
            <ListGroup>
              {userFriends?.friendList.map((f) =>
                f.friendState === "SUCCESS" ? (
                  <ListGroupItem action>
                    <Link
                      to={`/${f.userId}`}
                      style={{ textDecoration: "none" }}
                    >
                      <ListGroupItemHeading style={{ color: "gray" }}>
                        {f.name}
                      </ListGroupItemHeading>{" "}
                    </Link>
                  </ListGroupItem>
                ) : (
                  <div></div>
                )
              )}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
