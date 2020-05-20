import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label, Spinner } from "reactstrap";

import { AuthContext } from "../../App";

function LoginForm(props) {
  const { axios, login } = useContext(AuthContext)();
  const [loading, setLoading] = useState(false);
  const { history } = props;
  const { handleSubmit, register, errors, setError } = useForm();

  const onSubmit = values => {
    setLoading(true);
    axios
      .post("/auth/login", values)
      .then(response => {
        const user = response.data;
        login(user);
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
  };

  return (
    <>
      <form className="form auth-form" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="username">Username</Label>
          <input
            className="form-control"
            name="username"
            type="username"
            id="username"
            ref={register({
              required: "Required",
            })}
          />
          <span className="error">{errors.email && errors.email.message}</span>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            ref={register({
              required: "Required",
              validate: value => value !== "password" || "Use a better password"
            })}
          />
          <span className="error">
            {errors.password && errors.password.message}
          </span>
        </FormGroup>

        {!loading && (
          <>
            <Button type="submit" color="primary" size="lg" block>
              Login
            </Button>
            <Button
              color="info"
              size="lg"
              block
              onClick={() => history.push("/register")}
            >
              Register
            </Button>
          </>
        )}
      </form>
      {loading && <Spinner color="primary" />}
    </>
  );
}

export default LoginForm;