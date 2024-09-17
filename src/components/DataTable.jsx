import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { usersContext } from "../contexts/usersContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";

export default function DataTable() {
  const { users, error, loading, setUsers } = useContext(usersContext);
  const [deleteStatus, setDeleteStatus] = useState(false);

  console.log(users);
  const deleteUser = async (userId) => {
    setDeleteStatus(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setDeleteStatus(false);
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone No.</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                {" "}
                <div className="actions">
                  <Link to={`/user/${user.id}`} className="userDetail-link">
                    <Button variant="contained">Full Detail</Button>
                  </Link>

                  <Link to={`/update/${user.id}`}>
                    <Button variant="contained" color="secondary">
                      Update User
                    </Button>
                  </Link>

                  <Button
                    variant="outlined"
                    color="error"
                    className="deleteUser-btn"
                    onClick={() => deleteUser(user.id)}
                    disabled={deleteStatus}
                  >
                    {deleteStatus ? "Deleting..." : "Delete"}
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
