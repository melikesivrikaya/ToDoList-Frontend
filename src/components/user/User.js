import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  CardImg,
  Container,
  Row,
  Col,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  ListGroup,
  Button,
  Alert,
} from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
export default function User() {
  const { rejectFriend, acceptFriend, user, gallery } = useContext(UserContext);

  return (
    <div>
      <Container>
        <Row>
          <Col xs="3">
            <CardImg
              style={{ borderRadius: 20 }}
              alt="Card image cap"
              src={`${user?.profilFotoUrl}`}
              width="100%"
            />
            <Alert color="info">{"My Account"}</Alert>
            <Alert color="danger">{user?.name}</Alert>{" "}
            <Alert color="danger">{user?.title}</Alert>
            <Alert color="danger">{"28"}</Alert>
            <Alert color="danger">{user?.address}</Alert>
            {/* <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading>Ad Soyad</ListGroupItemHeading>
                <ListGroupItemText>{user?.name}</ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>Adres</ListGroupItemHeading>
                <ListGroupItemText>{user?.address}</ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>Yaş</ListGroupItemHeading>
                <ListGroupItemText>34</ListGroupItemText>
              </ListGroupItem>
            </ListGroup> */}
          </Col>
          <Col>
            <Alert color="info">{"My Galeries"}</Alert>
            <div className="gallery-list">
              {gallery?.map((g) => (
                <CardImg
                  style={{ borderRadius: 20, margin: 8, width: 180 }}
                  src={`${g.fotoUrl}`}
                  width={200}
                  height={200}
                />
              ))}
            </div>
          </Col>
          <Col xs="3">
            <ListGroup>
              <Alert color="info">{"My Friends Request"}</Alert>
              <ListGroupItemText>
                {user?.friendList.map((f) =>
                  f.friendState === "REQUEST" ? (
                    <div>
                      <ListGroupItem
                        key={f.id}
                        color="warning"
                        action
                        style={{ marginBottom: 20 }}
                      >
                        <ListGroupItemHeading>
                          <Link
                            to={`/${f.userId}`}
                            style={{ textDecoration: "none", color: "gray" }}
                          >
                            {" "}
                            {f.name}
                          </Link>
                        </ListGroupItemHeading>{" "}
                        <Button
                          style={{ marginRight: 10 }}
                          onClick={() => acceptFriend(f)}
                          color="success"
                        >
                          {" "}
                          Kabul Et
                        </Button>
                        <Button onClick={() => rejectFriend(f)} color="danger">
                          {" "}
                          Red Et
                        </Button>
                      </ListGroupItem>
                    </div>
                  ) : (
                    <div></div>
                  )
                )}
              </ListGroupItemText>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
