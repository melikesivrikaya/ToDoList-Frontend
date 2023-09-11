import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Friend from "./Friend";
import NotFriend from "./NotFriend";
import { FriendContext } from "../../context/FriendContext";
import axios from "axios";
export default function FriendControl() {
  const { id } = useParams();
  const [changeId, setChangeId] = useState(id);
  const [isFriend, setIsFriend] = useState();
  const { userId } = useContext(FriendContext);

  useEffect(() => {
    const data = {
      userId: changeId,
      friendId: userId,
    };
    axios
      .post("http://localhost:2020/friends/isFriend", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setIsFriend(response.data))
      .catch((error) => console.error("Hata:", error));
  }, [changeId]);

  return (
    <div>
      {isFriend && (
        <Friend setChangeId={setChangeId} changeId={changeId}></Friend>
      )}
      {!isFriend && <NotFriend></NotFriend>}
    </div>
  );
}
