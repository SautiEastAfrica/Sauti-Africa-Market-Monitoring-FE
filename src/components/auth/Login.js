import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, FormGroup, Spinner } from "reactstrap";

import { TextField } from '@material-ui/core'; 

import { AuthContext } from "../../App";

import './_auth-form.scss'; 
// import "antd/dist/antd.css";

import { Checkbox, Input } from 'antd';
// import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export const NormalLoginForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='login-container'>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </div>
  );
};


function Login(props) {
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

export default Login;