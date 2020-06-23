import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom'; 
import { Card, Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { AuthContext } from "../../App";

import './_auth-form.scss'; 
// import "antd/dist/antd.css";

function Login(props) {

  const [form] = Form.useForm(); 
  console.log(form); 

  const { axios, login } = useContext(AuthContext)();
  const [user, setUser] = useState({ email: '', password: '' })

  const { history } = props;

  function handleChange(e){
    form.setFieldsValue({ [e.target.name]: e.target.value })
    console.log(form.values); 
  }

  function onFinish(values) {

    console.log('Received values of form: ', values);

    axios
      .post("/auth/login", values)
      .then(response => {
        console.log(response)
        const data = response.data;
        login(data);
        history.push("/dashboard");
      })
      .catch(({ response }) => {
        if (response.status === 400) {
            console.log(response); 
        } else {
            console.log(response);
        }
      });
  };

  return (
    <>
      <div className='login-container'>
        <Card 
          title='Log In'>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              email: '', 
              password: '',
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              value={user.email}
              onChange={handleChange}
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              value={user.password}
              onChange={handleChange}
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

              <a className="login-form-forgot" href="/register">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
               Or <Link to='/register'> register now!</Link>
            </Form.Item>
          </Form>
      </Card>
      </div>
    </>
  );
}

export default Login;