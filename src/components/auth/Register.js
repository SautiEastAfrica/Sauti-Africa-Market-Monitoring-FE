import React, { useContext, useState } from "react";
import { Form, Button, FormGroup, Spinner } from "reactstrap";
import { TextField } from '@material-ui/core'; 

import { AuthContext } from "../../App";

import '../../styles/Register.scss'; 
import '../auth/_auth-form.scss'; 

function Register(props) {
  const { axios, login } = useContext(AuthContext)();
  const [user, setUser] = useState({ name: '', password: '', email: '' })
  const [loading, setLoading] = useState(false);
  const { history } = props;

  function handleChange(e){
    setUser({ 
      ...user, [e.target.name]: e.target.value
    })
    console.log(user); 
  }

  function handleSubmit(e){
    e.preventDefault(); 
    setLoading(true);
    axios.post("/auth/register", user)
    .then(response => {
      console.log(response);
      const data = response.data;
      login(data);
      history.push("/dashboard");
    })
    .catch(error => {
        console.log(error); 
    });
  };

  return (
    <>
      <Form className="form auth-form" onSubmit={handleSubmit}>
        <FormGroup>
          <TextField 
            variant="outlined"
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            type="name"
          />
        </FormGroup>
        <FormGroup>
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <TextField   
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
        {!loading && (
          <Button color="primary" type="submit" size="lg">
            Register
          </Button>
        )}
        </FormGroup>
      </Form>
      {loading && <Spinner color="primary" />}
    </>
  );
}

export default Register;