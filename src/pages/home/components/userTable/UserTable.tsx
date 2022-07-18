import React, { FunctionComponent, useState } from "react";
import Input from "../../../../components/input/Input";
import { useAppSelector } from "../../../../hooks/LocalReduxThunk";

import { Container, Table } from "./UserTable.styled";

interface IUserTable {}

const UserTable: FunctionComponent<IUserTable> = ({ ...props }: IUserTable) => {
  const users = useAppSelector((state) => state.usersReducer.users);
  const [filter, setFilter] = useState<string>("");
  const filterUsers = (word: string) => {
    if (!word || word.trim().length < 3) {
      return users;
    }
    return users.filter((user) => user.name.search(word) >= 0);
  };
  return (
    <Container>
      <h2>Users</h2>
      <Input
        value={filter}
        name="filter"
        label="Filter"
        onChange={(e: any) => setFilter(e.target.value)}
      />
      <Table>
        <thead>
          <tr>
            <th>Login</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {filterUsers(filter).map((user) => (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserTable;
