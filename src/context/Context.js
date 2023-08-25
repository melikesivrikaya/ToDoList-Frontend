import { useState, useEffect, useContext } from "react";
import { createContext } from "react";
import axios from "axios";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState();
  const [listTitle, setListTitle] = useState();
  const [list, setList] = useState();

  useEffect(() => {
    axios("http://localhost:2020/users").then((res) => setUsers(res.data));
    axios(`http://localhost:2020/listtitles/${values.currentUserId}`).then((res) => setListTitle(res.data));
    axios(`http://localhost:2020/lists/${values.currentUserId}`).then((res) => setList(res.data));
  }, []);

  const values = {
    currentUserId : 1,
    usersValues: {
      users,
      setUsers,
    },
    listTitleValues: {
      listTitle,
      setListTitle,
    },
    listValues: {
      list,
      setList,
    },
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const useValues = () => useContext(Context);
