import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button, FormGroup, Label, Spinner } from "reactstrap";

import { TextField } from '@material-ui/core'; 

import { AuthContext } from "../../App";

import '../../styles/Register.scss'; 
import '../auth/_auth-form.scss'; 

function Register(props) {
  const { axios, login } = useContext(AuthContext)();
  const [loading, setLoading] = useState(false);
  const { history } = props;

  const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Please enter a valid email address"
      ),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters long"),
    role: yup.string().notOneOf(["Choose one"], "Please select a role")
  });

  const { handleSubmit, register, errors } = useForm({
    defaultValues: { role: "Choose one" },
    validationSchema: schema
  });

  const onSubmit = values => {
    setLoading(true);
    delete values.role;
    console.log(values); 
    axios.post("/auth/register", values)
    .then(response => {
      console.log(response);
      const user = response.data;
      login(user);
      history.push("/dashboard");
    })
    .catch(error => {
        console.log(error); 
    });
  };

  return (
    <>
      <form className="form auth-form" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          {/* <Label for="name">Name: </Label> */}
          <TextField 
            variant="outlined"
            label="Name"
            className="form-control"
            name="name"
            type="name"
            id="name"
            placeholder="Your Name"
            ref={register()}
          />
          <span className="error">{errors.name && errors.name.message}</span>
        </FormGroup>
        <FormGroup>
          {/* <Label for="name">Username: </Label> */}
          <TextField
            variant="outlined"
            label="Username"
            className="form-control"
            name="username"
            type="username"
            id="username"
            placeholder="Username"
            ref={register()}
          />
          <span className="error">{errors.name && errors.name.message}</span>
        </FormGroup>
        <FormGroup>
          {/* <Label for="email">Email: </Label> */}
          <TextField
            variant="outlined"
            label="Email"
            className="form-control"
            name="email"
            type="email"
            id="email"
            placeholder="you@example.com"
            ref={register()}
          />
          <span className="error">{errors.email && errors.email.message}</span>
        </FormGroup>
        <FormGroup>
          {/* <Label for="password">Password: </Label> */}
          <TextField   
            variant="outlined"
            label="Password"
            className="form-control"
            type="password"
            name="password"
            id="password"
            ref={register()}
          />
          <span className="error">
            {errors.password && errors.password.message}
          </span>
        </FormGroup>
        {!loading && (
          <Button color="primary" type="submit" size="lg">
            Register
          </Button>
        )}
      </form>
      {loading && <Spinner color="primary" />}
    </>
  );
}

export default Register;