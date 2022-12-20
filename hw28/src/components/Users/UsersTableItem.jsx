import React from "react";
import { Link } from "react-router-dom";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";

export default function UsersTableItem({ user, deleteUser }) {
  return (
    <TableRow>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.address}</TableCell>
      <TableCell>{user.phone}</TableCell>
      <TableCell>
        <Stack direction="row" spacing={2}>
          <Button
            component={Link}
            to={`/${user.id}`}
            variant="contained"
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button onClick={() => deleteUser(user.id)} variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  );
}
