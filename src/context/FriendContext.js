import { createContext, useEffect, useParams, useState } from "react";
import axios from "axios";
export const FriendContext = createContext();
export const FriendContextProvider = ({ children }) => {
  const [friend, setFriend] = useState();
  const [userId, setUserId] = useState(202);
  const [friendListAll, setFriendListAll] = useState();

  const [response, setResponse] = useState();

  const getFriendInfo = (id) => {
    axios(`http://localhost:2020/users/user?id=${id}`)
      .then((res) => setFriend(res.data))
      .then((response) => setResponse(response))
      .then((error) => console.log(error));
    axios(`  http://localhost:2020/listtitles/${id}`)
      .then((res) => setFriendListAll(res.data))
      .then((response) => setResponse(response))
      .then((error) => console.log(error));
  };


  const values = {
    friend,
    friendListAll,
    getFriendInfo,
    userId,
  };
  return (
    <FriendContext.Provider value={values}>{children}</FriendContext.Provider>
  );
};
