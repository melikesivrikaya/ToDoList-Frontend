import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ListContext = createContext();


const ListContextProvider = ({ children }) => {
  const [list , setList] = useState([]);
  const [userId , setUserId] = useState(202);
  const [response, setResponse] = useState({});

  useEffect(() => {
    axios(`http://localhost:2020/listtitles/${userId}`)
    .then(res => setList(res.data))
    .then((response) => {
      setResponse(response)
    })
    .then((error) => {
      console.log(error);
    })
  },[response])
  const postListTitle = (text) => {
    const postData = {
      listName: text,
      userId,
    };
    console.log(postData);
    axios
      .post("http://localhost:2020/listtitles", postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setResponse(response);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  };
  const deleteListTitle = (itemId) => {
    console.log(itemId);
    axios
      .delete(`http://localhost:2020/listtitles/listtitle?id=${itemId}`)
      .then((response) => {
        setResponse(response);
      })
      .catch((error) => {
        console.error("Silme işlemi hatası:", error);
      });
  };
  const postTask = (listNameId , task) => {
    const postData = {
      userId : userId ,
      listNameId: listNameId,
      task: task
    };
    axios
      .post("http://localhost:2020/lists", postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setResponse(response);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  };
  function deleteTask(itemId) {
    axios
      .delete(`http://localhost:2020/lists/list?id=${itemId}`)
      .then((response) => {
        setResponse(response);
      })
      .catch((error) => {
        console.error("Silme işlemi hatası:", error);
      });
  }
  function changeTaskState(taskId, st) {
    const putData = {
      id: taskId,
      state: st,
    };
    console.log(putData);
    axios
      .put("http://localhost:2020/lists", putData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setResponse(response);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  }

  const values = {
    lists : list ,
    setResponse ,
    postListTitle ,
    deleteListTitle ,
    postTask :postTask,
    deleteTask ,
    changeTaskState 
  };

  return <ListContext.Provider value={values}>{children}</ListContext.Provider>;
};

export default ListContextProvider;
