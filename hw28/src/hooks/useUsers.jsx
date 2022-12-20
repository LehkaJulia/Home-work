import { useState, useEffect } from "react";
import { getUsers, deletUser as deletItem} from "./../services/userService";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setUsers(await getUsers());
      setLoading(false);
    })();
  }, []);

  const deleteUser = async id => {
    await deletItem(id);
    setUsers(prevState => prevState.filter(user => user.id !== id));
  }

  return {users, deleteUser, isLoading};
}
