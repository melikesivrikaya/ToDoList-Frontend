import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
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
export default function User() {
  const currentUserId = 202;
  const [user, setUser] = useState();
  const [gallery , setGallery] = useState();
  const [response, setResponse] = useState();

const getUser = () => {
   axios(`http://localhost:2020/users/user?id=${currentUserId}`)
      .then((res) => setUser(res.data))
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
}
const getGallery = () => {
  axios(`http://localhost:2020/gallery/${currentUserId}`)
  .then((res) => setGallery(res.data))
  .then((response) => {
    setResponse(response)
  })
  .catch((error) => {
    console.error("Hata:", error);
  });
}
  useEffect(() => {
   getUser()
   getGallery()
  }, [response]);

  const acceptFriend = (f) => {
    const putData = {
      id : f.id,
      friendState: 0
    };
    console.log(putData);
    axios
      .put("http://localhost:2020/friends", putData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setResponse(response)
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  };

  const rejectFriend = (f) => {
    axios
      .delete(`http://localhost:2020/friends/${f.id}`)
      .then((response) => {
        console.log(response.data);
        setResponse(response);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  };

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
            {/* //<Alert color="info">{user?.name + " Friends"}</Alert> */}
            <Alert color="info">{"My Galeries"}</Alert>
            {/* <ListGroup>
              <ListGroupItemText>
                {user?.friendList.map((f) =>
                  f.friendState === "SUCCESS" ? (
                    <ListGroupItem color="warning" action>
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
              </ListGroupItemText>
            </ListGroup> */}
            <div className="gallery-list">
               {gallery?.map(g => (
                  <CardImg
                  style={{ borderRadius: 20 , margin : 8 , width : 180}}
                  src={`${g.fotoUrl}`}
                  width={200}
                  height={200}
                />
            ))}
            </div>
           

          </Col>

          <Col xs="3">
            <Alert color="info">{"My Friends Request"}</Alert>
            <ListGroup>
              <ListGroupItemText>
                {user?.friendList.map((f) =>
                  f.friendState === "REQUEST" ? (
                    <ListGroupItem
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
