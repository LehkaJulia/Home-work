import React from "react";

import TextField from "@mui/material/TextField";
import Skeleton from "@mui/material/Skeleton";

export default function UserFormField({
  type = "text",
  label,
  name,
  value,
  isLoading,
  changeFormInput,
}) {
  return !isLoading ? (
    <TextField
      required
      label={label}
      name={name}
      type={type}
      defaultValue={value}
      onBlur={changeFormInput}
    />
  ) : (
    <Skeleton
      variant="rectangular"
      sx={{ width: "inherit", m: 1 }}
      height={55}
    />
  );
}
