import "./App.css";
import { Row, Col } from "reactstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lists from "./components/lists/Lists";
import Navi from "./components/navBar/Navi";
import UserList from "./components/user/UserList";
import Setting from './components/settings/Setting'
import User from "./components/user/User";
function App() {
  return (
    <div >
      <BrowserRouter>
        <Navi></Navi>
        <Routes>
          <Route path="/" Component={Lists}></Route>
          <Route path="users" Component={UserList}></Route>
          <Route path="setting" Component={Setting}></Route>
          <Route path="profile" Component={User}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
