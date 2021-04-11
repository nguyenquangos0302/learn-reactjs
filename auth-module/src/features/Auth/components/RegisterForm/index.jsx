import React from "react";
import PropTypes from "prop-types";
import InputField from "components/form-control/InputField";
import { useForm } from "react-hook-form";
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
  useTheme,
} from "@material-ui/core/styles";

RegisterForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

RegisterForm.defaultProps = {
  onSubmitForm: null,
};

const theme = createMuiTheme();

const useStyles = makeStyles({
  root: {},
  input: {
    padding: theme.spacing(2),
  },
  title: {},
});

function RegisterForm(props) {
  const classes = useStyles();
  const { onSubmitForm } = props;
  const handlerSubmitForm = (values) => {
    if (!onSubmitForm) return;
    onSubmitForm(values);
  };
  const form = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: true,
  });
  return (
    <form
      onSubmit={form.handleSubmit(handlerSubmitForm)}
      className={classes.title}
    >
      <InputField label="Full Name" form={form} name="fullName"></InputField>
      <InputField label="Email" form={form} name="email"></InputField>
      <InputField label="Password" form={form} name="password"></InputField>
      <InputField
        label="Retype Password"
        form={form}
        name="retypePassword"
      ></InputField>
    </form>
  );
}

export default RegisterForm;
