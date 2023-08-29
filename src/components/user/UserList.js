import React from "react";
import { useValues } from "../../context/Context";
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import "../../App.css";
import { Link } from "react-router-dom";
export default function UserList() {
  const { usersValues } = useValues();
  const { currentUserId } = useValues();
  return (
    <div>
      <h4>User List</h4>
      <Container>
      {usersValues.users?.map((u) =>
          u.id != currentUserId ? (
            <Card className="cart">
              <CardBody className="user-card" color="success">
                <div>
                  <CardImg
                    top
                    width={"200px"}
                    height={"150px"}
                    src="https://picsum.photos/200/300/?blur=2"
                    alt="Card image cap"
                  />
                </div>
                <div className="context">
                  <CardTitle > {u.name}</CardTitle>
                  <CardSubtitle>User Title</CardSubtitle>
                  <CardText>
                    vhbnjk
                  </CardText>
                  <Link>
                    <Button color="success">Follow</Button>
                  </Link>
                </div>
              </CardBody>{" "}
            </Card>
          ) : (
            <div></div>
          )
        )}
      </Container>
    </div>
  );
}
