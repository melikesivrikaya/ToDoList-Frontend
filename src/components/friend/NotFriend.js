import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Col, Container, Row, CardImg, Alert } from "reactstrap";
import { Button } from "reactstrap";
import "../../css/Friend.css";
import { FriendContext } from "../../context/FriendContext";

export default function NotFriend() {
  const { id } = useParams();
  const [friend, setFriend] = useState();

  const { follow, unFollow, rejectFriend, acceptFriend, userId } =
    useContext(UserContext);
  const { getFriendState , friendstate } = useContext(FriendContext);

  useEffect(() => {
    getFriendState(id);
  }, []);

  return (
    <Container>
      <Row>
        <Col xs="3">
          <CardImg
            className="friend-img"
            alt="Card image cap"
            src={`${friendstate?.profilFotoUrl}`}
          />
        </Col>
        <Col xs="3">
          {" "}
          <Alert color="danger">{friendstate?.name}</Alert>
          <Alert color="danger">{friendstate?.title}</Alert>
          <Alert color="danger">{31}</Alert>
          <Alert color="danger">{friendstate?.address}</Alert>
          <div>
            {friendstate?.friendState === "SENTED_REQUEST" ? (
              <Button color="success" outline onClick={() => unFollow(friend)}>
                Followed
              </Button>
            ) : (
              <div>
                {" "}
                {friendstate?.friendState === "REQUEST" ? (
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
                    {friendstate?.friendState === null ? (
                      <Button color="success" onClick={() => follow(friend)}>
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
