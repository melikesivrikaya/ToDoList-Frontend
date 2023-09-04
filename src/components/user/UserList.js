import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import "../../css/User.css";
import axios from "axios";
export default function UserList() {
  const currentUserId = 1;
  const [users, setUsers] = useState();
  const [click, setClick] = useState(false);
  const [response, setResponse] = useState({});
  useEffect(() => {
    axios(`http://localhost:2020/users/${currentUserId}`).then((res) =>
      setUsers(res.data)
    );
  }, [response]);

  const follow = (u) => {
    const data = {
      friendId : currentUserId,
      userId : u.id
    };
    console.log(data);
    axios
      .post("http://localhost:2020/friends", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("işlem başarılı")
        setResponse(response)
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  };
  const unFollow = (u) => {
    const url = 'http://localhost:2020/friends/friend'; 
    const dataToDelete = { userId: u.id, friendId : currentUserId }; 
    axios.delete(url, {
      data: dataToDelete, 
    })
      .then((response) => {
        console.log('Silme işlemi başarılı:', response);
        setResponse(response)
      })
      .catch((error) => {
        console.error('Silme işlemi başarısız:', error);
      });
  };

  return (
    <div>
      <Container className="user-list-container">
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
                <CardTitle> {u.name}</CardTitle>
                <CardSubtitle>User Title</CardSubtitle>
                <CardText>vhbnjk</CardText>

                {/* // backendden zaten sadece SENTED_REQUEST yada null geliyor */}

                {u.friendState === "SENTED_REQUEST" ? (
                  <Button
                    color="success"
                    outline
                    onClick={() => {setClick(!click)
                    unFollow(u)}}
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
      </Container>
    </div>
  );
}
