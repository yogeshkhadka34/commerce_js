import { Grid, TextField } from "@mui/material";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required, variant }) => {
  const { control } = useFormContext();
  return (
    <>
      <Grid item xs={11} md={5.3} sx={{ margin: "0.5rem 1rem" }}>
        <Controller
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              label={label}
              required={required}
              variant={variant}
            />
          )}
          name={name}
        ></Controller>
      </Grid>
    </>
  );
};

export default FormInput;
