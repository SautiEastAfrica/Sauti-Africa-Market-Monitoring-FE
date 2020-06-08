import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FormGroup, Form, Button, Spinner } from "reactstrap";

import { TextField } from '@material-ui/core'; 

import { AuthContext } from "../../App";

import './_auth-form.scss'; 

function LoginForm(props) {
  const { axios, login } = useContext(AuthContext)();
  const [user, setUser] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false);

  const { history } = props;
  const { errors, setError } = useForm();

  function handleChange(e){
      setUser({
          ...user, [e.target.name]: e.target.value
      })
  }

  function handleSubmit(e){
    e.preventDefault(); 
    setLoading(true);
    console.log(user); 
    axios
      .post("/auth/login", user)
      .then(response => {
        console.log(response)
        const data = response.data;
        login(data);
        history.push("/dashboard");
      })
      .catch(({ response }) => {
        if (response.status === 401) {
            console.log(response); 
          setError(
            "password",
            "unauthorized",
            "There was a problem with your login info"
          );
        } else {
            console.log(response); 
          setError(
            "password",
            "login_problem",
            "There was a problem logging in"
          );
        }
      });
  }

  return (
    <>
      <Form className="form auth-form" onSubmit={handleSubmit}>
        <FormGroup>
          {/* <Label for="email">email</Label> */}
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            type="email"
            id="email"
          />
          <span className="error">{errors.email && errors.email.message}</span>
        </FormGroup>
        <FormGroup>
          <TextField
            variant="outlined"
            label="password"
            className="form-control"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            id="password"
          />
          <span className="error">
            {errors.password && errors.password.message}
          </span>
        </FormGroup>
        
        <FormGroup>
        {!loading && (
          <>  
            <Button type="submit" color="primary" size="lg">
              Login
            </Button>
          </>
        )}
        </FormGroup>
      </Form>
      {loading && <Spinner color="primary" />}
    </>
  );
}

export default LoginForm;