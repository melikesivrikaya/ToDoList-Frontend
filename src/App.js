import "./App.css";
import ListTitle from "./components/listTitle/ListTitle";
import UserList from "./components/user/UserList";
import List from "./components/list/List";
import Navi from "./components/navBar/Navi" 
import { Button, Col, Container, Row } from "reactstrap";
function App() {
  return (
    <div className="App">
      
      <Container>
        <Navi></Navi>
        <Row>
          <Col xs="4">
            <ListTitle></ListTitle>
          </Col>
          <Col xs="4">
            <List></List>
          </Col>
          <Col xs="4"> </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
