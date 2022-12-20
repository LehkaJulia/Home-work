import { useState, useEffect } from "react";
import { getUser, updateUser, addUser } from "./../services/userService";

export default function useUser(userId) {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if(userId){
        setLoading(true);
        setUser(await getUser(userId));
        setLoading(false);
      }
    })();
  }, []);

  const changeInput = (option, value) => {
    setUser(prevState => ({...prevState, [option]: value}));
  }

  const changeUser = async () => {
    await updateUser(user.id, user);
  }

  const createUser = async () => {
    await addUser(user);
  }

  return { user, changeInput, createUser, changeUser, isLoading };
}
