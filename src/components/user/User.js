import React, { useEffect, useState } from "react";
import { useValues } from "../../context/Context";
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
  const { currentUserId } = useValues();
  const [user, setUser] = useState();
  useEffect(() => {
    axios(`http://localhost:2020/users/user?id=${currentUserId}`).then((res) =>
      setUser(res.data)
    );
  }, []);
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
                      <Link>
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
                  f.friendState === "WAIT" ? (
                    <ListGroupItem>
                      <ListGroupItemHeading>{f.name}</ListGroupItemHeading>{" "}
                      <Button color="success"> Kabul Et</Button>
                      <Button color="danger"> Red Et</Button>
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
