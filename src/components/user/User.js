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
} from "reactstrap";
import { Link } from "react-router-dom";
export default function User() {
    const currentUserId = 1;
  const [user, setUser] = useState();

  const [id, setId] = useState();
  const [complate, setComplate] = useState();
  const [complated, setComplated] = useState();

  useEffect(() => {
    console.log("geldi");
    axios(`http://localhost:2020/users/user?id=${currentUserId}`)
    .then((res) => setUser(res.data)
    ).then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  }, []);

  const acceptFriend = (f) => {
    setId(f.id);
    const putData = {
      id,
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
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  };

  const rejectFriend = (f) => {
    setId(f.id);
    console.log(f);
    // axios.delete(`http://localhost:2020/friends/${id}`)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Hata:", error);
    //   });
  };

  return (
    <div>
      <Container>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/900/270"
            style={{
              height: 270,
            }}
            width="100%"
          />
          <CardImgOverlay>
            <CardText>
              <small className="text-muted">{user?.name}</small>
            </CardText>
          </CardImgOverlay>
        </Card>
        <Row>
          <Col>
            <h4>Kişisel Bilgiler</h4>
            <ListGroup>
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
            </ListGroup>
          </Col>
          <Col>
            <h4>Arkadaşlar</h4>
            <ListGroup>
              <ListGroupItemText>
                {user?.friendList.map((f) =>
                  f.friendState === "SUCCESS" ? (
                    <ListGroupItem>
                      <Link to={`/${f.userId}`}>
                        <ListGroupItemHeading>{f.name}</ListGroupItemHeading>{" "}
                      </Link>
                    </ListGroupItem>
                  ) : (
                    <div></div>
                  )
                )}
              </ListGroupItemText>
            </ListGroup>
          </Col>
          <Col>
            <h4>İstekler</h4>
            <ListGroup>
              <ListGroupItemText>
                {user?.friendList.map((f) =>
                  f.friendState === "REQUEST" ? (
                    <ListGroupItem>
                      <ListGroupItemHeading>{f.name}</ListGroupItemHeading>{" "}
                      <Button onClick={() => acceptFriend(f)} color="success">
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
