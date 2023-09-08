import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Friend from "./Friend";
import NotFriend from "./NotFriend";

export default function FriendControl() {
  const { id } = useParams();
  const currentUserId = 202;
  const [isFriend, setIsFriend] = useState();
  const [changeId , setChangeId] = useState();

  useEffect(() => {
    const data = {
      userId: parseInt(id),
      friendId: currentUserId,
    };
    axios
      .post("http://localhost:2020/friends/isFriend", data, {
        headers: {
          "Content-Type": "application/json", 
        },
      })
      .then((response) => {
        setIsFriend(response.data)
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  }, [changeId]);

  return (
    <div>
      {isFriend && <Friend setChangeId={setChangeId} changeId={changeId}></Friend>}
      {!isFriend && <NotFriend></NotFriend>}
    </div>
  );
}
