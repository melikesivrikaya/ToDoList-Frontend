import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lists from "./components/lists/Lists";
import Navi from "./components/navBar/Navi";
import UserList from "./components/user/UserList";
import Setting from "./components/settings/Setting";
import User from "./components/user/User";
import Friend from "./components/friend/Friend";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NewNavi from "./components/navBar/NewNavi";
import FriendControl from "./components/friend/FriendControl";
import ListContextProvider from "./context/ListContext";
import { UserContextProvider } from "./context/UserContext";
import { FriendContextProvider } from "./context/FriendContext";
function App() {
  const currentUserId = 202;
  const [user, setUser] = useState();
  useEffect(() => {
    axios(`http://localhost:2020/users/user?id=${currentUserId}`).then((res) =>
      setUser(res.data)
    );
  }, []);
  return (
    <div>
      <FriendContextProvider>
      <UserContextProvider>
        <ListContextProvider>
          <BrowserRouter>
            <NewNavi user={user}></NewNavi>
            <Routes>
              <Route path="/" Component={Lists}></Route>
              <Route path="users" Component={UserList}></Route>
              <Route path="setting" Component={Setting}></Route>
              <Route path="profile" Component={User}></Route>
              <Route path=":id" Component={FriendControl}></Route>
            </Routes>
          </BrowserRouter>
        </ListContextProvider>
      </UserContextProvider></FriendContextProvider>
    </div>
  );
}

export default App;
