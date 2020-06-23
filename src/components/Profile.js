import React, { useState, useContext, useEffect} from 'react';
import { AuthContext } from '../App.js'; 
import { UserContext } from "../App";

import { Card, Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';

import '../styles/Profile.scss'; 

function Profile(props){

  const { axios } = useContext(AuthContext)();
  const userId = useContext(UserContext);
  const id = userId.id; 

  const [user, setUser] = useState({name: "", email:""});
  const [changed, setChanged]= useState("")

  useEffect(() => {
    function getUser(){
    axios
      .get(`/users/${id}`)
      .then(response =>  {
        console.log('GET Request successfull! ', response);
        setUser(response.data)
      })
      .catch(error => {
        console.log('Error in loading user!: ', error);
      });
    }

    getUser()
  }, [changed])
    
  const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
        console.log(user)
      };
    
function updateProfile(values){
      console.log(values); 
      axios
      .put(`/users/${id}`, values)
      .then(response =>  {
        console.log('User successfully updated!: ', response);
        // setChanged(response.data)
      })
      .catch(error => {
        console.log('Error in updating user!: ', error);
      });      
};
      
    return(
        <div className='profile'>
                <Card title='Profile'>
                    <Form name="normal_login" className="login-form" initialValues={{
                        email: user.email, password: '', remember: true, }}  onFinish={updateProfile} >
                      <Form.Item name='name' value={user.name} onChange={handleChange}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={user.name} />
                      </Form.Item>
                      <Form.Item name="email" value={user.email} onChange={handleChange} placeholder={user.email}
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Email!',
                          }, ]} >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder={user.email} />
                      </Form.Item>
                      <Button type='primary' htmlType='submit'>
                        Update Profile
                      </Button>
                    </Form>
                </Card>
        </div>
    )
}

export default Profile;