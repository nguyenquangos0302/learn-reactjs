import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
};

function InputField(props) {
  const { label, form, name } = props;
  const { control } = form;
  return (
    <Controller
      control={control}
      name={name}
      as={TextField}
      fullWidth
      label={label}
      variant="outlined"
    />
  );
}

export default InputField;
