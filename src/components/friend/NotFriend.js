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
import "../../css/Friend.css";

export default function NotFriend() {
  const { id } = useParams();
  const currentUserId = 202;
  const [friend, setFriend] = useState();

  const [response, setResponse] = useState({});

  const follow = (friend) => {
    const dataToPost = {
      userId: friend.userId,
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
  const unFollow = (friend) => {
    const url = "http://localhost:2020/friends/friend";
    const dataToDelete = { userId: friend.userId, friendId: currentUserId };
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
  useEffect(() => {
    const data = {
      userId: parseInt(id),
      friendId: currentUserId,
    };
    console.log(data);
    axios
      .post(`http://localhost:2020/friends/friendState`, data)
      .then((res) => setFriend(res.data));
  }, [response]);

  const acceptFriend = (friend) => {
    const putData = {
      id: friend.id,
      friendState: 0,
    };
    console.log(putData);
    axios
      .put("http://localhost:2020/friends", putData, {
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

  const rejectFriend = (friend) => {
    axios
      .delete(`http://localhost:2020/friends/pair/${friend.id}`)
      .then((response) => {
        console.log(response.data);
        setResponse(response);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  };
  return (
    <Container>
      <Row>
        <Col xs="3">
          <CardImg
            className="friend-img"
            alt="Card image cap"
            src={`${friend?.profilFotoUrl}`}
          />
        </Col>
        <Col xs="3">
          {" "}
          <Alert color="danger">{friend?.name}</Alert>
          <Alert color="danger">{friend?.title}</Alert>
          <Alert color="danger">{31}</Alert>
          <Alert color="danger">{friend?.address}</Alert>
          <div>
            {friend?.friendState === "SENTED_REQUEST" ? (
              <Button color="success" outline onClick={() => unFollow(friend)}>
                Followed
              </Button>
            ) : (
              <div>
                {" "}
                {friend?.friendState === "REQUEST" ? (
                  <div>
                    <Button
                      style={{ marginRight: 10 }}
                      onClick={() => acceptFriend(friend)}
                      color="success"
                    >
                      {" "}
                      Kabul Et
                    </Button>
                    <Button onClick={() => rejectFriend(friend)} color="danger">
                      {" "}
                      Red Et
                    </Button>
                  </div>
                ) : (
                  <div>
                    {friend?.friendState === null ? (
                      <Button
                        color="success"
                    
                        onClick={() => follow(friend)}
                      >
                        Follow
                      </Button>
                    ) : (
                      <div>
                        {friend?.friendState === "SUCCESS" ? (
                          <Button>Arkadaş Olundu</Button>
                        ) : (
                          <div> </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </Col>

        <Col xs="4"></Col>
      </Row>
    </Container>
  );
}
