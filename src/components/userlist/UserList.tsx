import React, { useEffect } from "react";
import { User } from "../user/User";
import { RootState } from "../../redux/store";
import { fetchUsers } from "../../redux/reducers/UserReducer";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

export const UserList: React.FC = () => {
  const userList = useAppSelector((state: RootState) => state.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {React.Children.toArray(
        userList.map((user: any) => {
          return (
            <User
              name={user.name}
              age={user.age}
              gender={user.gender}
              mail={user.mail}
              id={user._id}
            />
          );
        })
      )}
    </>
  );
};
