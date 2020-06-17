import React, { useState, useContext, useEffect} from 'react';
import { Container, CardTitle, CardSubtitle, CardHeader, Col} from 'reactstrap';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import '../styles/Profile.scss'; 
import { AuthContext } from '../App.js'; 
import { UserContext } from "../App";


const UpdateStyles = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const useStyles = makeStyles(theme => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 200
      }
    }
  }));

function Profile(){


  const { axios } = useContext(AuthContext)();
  const userId = useContext(UserContext);
  const id = userId.id; 

  const [user, setUser] = useState({name: "", email:""});
  const [changed, setChanged]= useState("")
  const classes = useStyles();

  useEffect(() => {
    function getUser(){
    axios
      .get(`/users/${id}`)
      .then(response =>  {
        console.log('User successfull: ', response);
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

    
const handleSubmit = event => {
      event.preventDefault();
      axios
      .put(`/users/${id}`, user)
      .then(response =>  {
        console.log('User successfully updated!: ', response);
        setChanged(response.data)
      })
      .catch(error => {
        console.log('Error in updating user!: ', error);
      });

      
  };
      
    return(
        <>
            <Container className='profile'>
              <UpdateStyles onSubmit={ handleSubmit} className={classes.root}>
                  <h1>Update Profile</h1>
                        <TextField
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        type="name"
                      
                        />
                        <TextField
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={user.email}
                        onChange={ handleChange}
                        type= "email"
                        required
                        />
                        <Button variant="contained" color='primary' type="submit">Save Changes</Button>
                    </UpdateStyles>
            </Container>           
        </>
    )
}

export default Profile;