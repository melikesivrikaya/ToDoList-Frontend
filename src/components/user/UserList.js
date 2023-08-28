import React from "react";
import {useValues } from "../../context/Context";
import { Button, Col, Container, ListGroup, ListGroupItem } from "reactstrap";
import {Link} from 'react-router-dom'
export default function UserList() {
  const { usersValues} = useValues();
  const {currentUserId} = useValues();
  return (
    <div>
      <h4>User List</h4>
      <Container>
       <Col xs="3">
       <ListGroup>
           {usersValues.users?.map((u) => ( u.id != currentUserId ? 
          <ListGroupItem color="success"  >{u.name} 
          <Link><Button color="light">Follow</Button></Link>
          </ListGroupItem> : <div></div>
        ))}
        </ListGroup></Col>
       
      </Container>
    </div>
  );
}
