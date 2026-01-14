import React, { useEffect } from "react";
import { fetchUsers } from "../store/slices/usersSlice";
import { useAppDispatch, useAppSelector } from "../hook";

const Users = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, errorMessage } = useAppSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (errorMessage) return <p>{errorMessage}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default Users;
