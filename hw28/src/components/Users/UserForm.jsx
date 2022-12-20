import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

import UserFormField from "./UserFormField";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function UserForm({ createUser }) {
  const { userId } = useParams();
  const {
    user,
    changeInput,
    createUser: create,
    changeUser: change,
    isLoading,
  } = useUser(userId);
  const navigation = useNavigate();

  const fields = [
    {
      value: user.name,
      label: "Name",
      name: "name",
    },
    {
      value: user.email,
      label: "Email",
      name: "email",
      type: "email",
    },
    {
      value: user.address,
      label: "Address",
      name: "address",
    },
    {
      value: user.phone,
      label: "Phone",
      name: "phone",
      type: "phone",
    },
  ];

  const changeFormInput = (e) => {
    changeInput(e.target.name, e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    createUser ? await create() : await change();
    navigation("/");
  };

  const cancelBtn = () => navigation("/");

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={submitForm}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "inherit" },
        my: "auto",
        width: "30ch",
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      {fields.map((field, index) => (
        <UserFormField
          key={index}
          isLoading={isLoading}
          value={field.value}
          label={field.label}
          name={field.name}
          type={field.type ? field.type : `text`}
          changeFormInput={changeFormInput}
        />
      ))}
      <div>
        <Stack direction="row" spacing={2}>
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            {createUser ? `Create user` : `Save changes`}
          </Button>

          <Button variant="outlined" onClick={cancelBtn}>
            Cancel
          </Button>
        </Stack>
      </div>
    </Box>
  );
}
