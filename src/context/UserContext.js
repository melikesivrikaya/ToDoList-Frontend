import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [users, setUsers] = useState();
  const [userId, setUserId] = useState(202);
  const [response, setResponse] = useState({});
  const [userFriends, setUserFriends] = useState();
  const [gallery, setGallery] = useState();

  useEffect(() => {
    axios(`http://localhost:2020/users/${userId}`)
      .then((res) => setUsers(res.data))
      .then((response) => setResponse(response))
      .then((error) => console.log(error));
  }, [response]);
  useEffect(() => {
    axios(`http://localhost:2020/users/user?id=${userId}`)
      .then((res) => setUserFriends(res.data))
      .then((response) => setResponse(response))
      .catch((error) => console.error("Hata:", error));
    getUser();
    getGallery();
  }, []);
  const follow = (u) => {
    const dataToPost = {
      userId: u.id,
      friendId: userId,
    };
    console.log(dataToPost);
    axios
      .post("http://localhost:2020/friends", dataToPost)
      .then((response) => setResponse(response.data))
      .catch((error) => console.error("Kayıt işlemi başarısız:", error));
  };
  const unFollow = (u) => {
    const url = "http://localhost:2020/friends/friend";
    const dataToDelete = { userId: u.id, friendId: userId };
    axios
      .delete(url, {
        data: dataToDelete,
      })
      .then((response) => setResponse(response))
      .catch((error) => console.error("Silme işlemi başarısız:", error));
  };
  const acceptFriend = (f) => {
    const putData = {
      id: f.id,
      friendState: 0,
    };
    axios
      .put("http://localhost:2020/friends", putData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setResponse(response))
      .catch((error) => console.error("Hata:", error));
  };
  const rejectFriend = (f) => {
    axios
      .delete(`http://localhost:2020/friends/pair/${f.id}`)
      .then((response) => setResponse(response))
      .catch((error) => console.error("Hata:", error));
  };
  const getUser = () => {
    axios(`http://localhost:2020/users/user?id=${userId}`)
      .then((res) => setUser(res.data))
      .then((response) => console.log(response))
      .catch((error) => console.error("Hata:", error));
  };
  const getGallery = () => {
    axios(`http://localhost:2020/gallery/${userId}`)
      .then((res) => setGallery(res.data))
      .then((response) => setResponse(response))
      .catch((error) => console.error("Hata:", error));
  };
  const values = {
    users,
    userId,
    userFriends,
    follow,
    unFollow,
    userId,
    acceptFriend,
    rejectFriend,
    user,
    gallery,
    setResponse
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
