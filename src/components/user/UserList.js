import React, { useEffect, useState } from "react";
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
import axios from "axios";

export default function UserList() {
  const currentUserId = 202;
  const [user, setUser] = useState();
  const [users, setUsers] = useState();
  const [click, setClick] = useState(false);
  const [response, setResponse] = useState({});

  useEffect(() => {
    // User List
    axios(`http://localhost:2020/users/${currentUserId}`)
    .then((res) =>
      setUsers(res.data)
    );
  }, [response]);

  useEffect(() => {
    // Userın Arkadaşları
    axios(`http://localhost:2020/users/user?id=${currentUserId}`)
      .then((res) => setUser(res.data))
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  }, []);

  const follow = (u) => {
    const dataToPost = {
      userId: u.id,
      friendId: currentUserId,
    };
    console.log(dataToPost);
    axios
      .post("http://localhost:2020/friends", dataToPost)
      .then((response) => {
        console.log("Kayıt işlemi başarılı:", response.data);
        setResponse(response.data);
      })
      .catch((error) => {
        console.error("Kayıt işlemi başarısız:", error);
      });
  };
  const unFollow = (u) => {
    const url = "http://localhost:2020/friends/friend";
    const dataToDelete = { userId: u.id, friendId: currentUserId };
    axios
      .delete(url, {
        data: dataToDelete,
      })
      .then((response) => {
        console.log("Silme işlemi başarılı:", response);
        setResponse(response);
      })
      .catch((error) => {
        console.error("Silme işlemi başarısız:", error);
      });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs="9">
            <Alert color="info">{"Users"}</Alert>
            <div className="user-list-container">
              {users?.map((u, index) =>
                u.id != currentUserId ? (
                  <Card key={index} className="user-cart">
                    <div className="user-img">
                      <CardImg
                        top
                        width={"200"}
                        height={"300"}
                        src={`${u.profilFotoUrl}`}
                        alt="Card image cap"
                      />
                    </div>
                    <div>
                      <CardTitle style={{ fontWeight: "bold" }}>
                        {" "}
                        {u.name}
                      </CardTitle>
                      <CardSubtitle>Title : </CardSubtitle>
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
                ) : (
                  <div></div>
                )
              )}
            </div>
          </Col>
          <Col xs="3">
            <Alert color="info">{"My Friends"}</Alert>
            <ListGroup>
              {user?.friendList.map((f) =>
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
