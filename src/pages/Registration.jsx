import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Navbar from '../component/Navbar';
import Topbar from '../component/Topbar';
import Footer from '../component/Footer';
import { TextField, Button, Container, Typography, Paper, Stack } from '@mui/material';

function App() {
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    password: '',
    comp_name: '',  
    address: '',
    telephone: '',
    holding: '',
    name_auth_person: '',
    designation: '',
    auth_tel: '',
    auth_cell: '',
    comp_st_no: '',
    vat_no: '',
    pan: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'password') {
      // Password validation logic
      if (value.length < 8) {
        setPasswordError('Password must be at least 8 characters long');
      } else {
        setPasswordError('');
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let demo = JSON.stringify(formData);
    console.log(JSON.parse(demo));

    fetch("http://localhost:8080/api/signup", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: demo,
    });

    alert("New Tour added");
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Navbar />
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>
          <Topbar />
          <Container maxWidth="false" >
            <Paper elevation={3} sx={{ padding: 3, marginTop: 4, marginBottom: 4 }}>
              <Typography variant="h4" gutterBottom>
                Registration Form
              </Typography>
              <form onSubmit={handleSubmit}>
              <TextField
                label="ID"
                type="text"
                name="id"
                fullWidth
                margin="normal"
                variant="outlined"
                required  
                onChange={handleChange}
              />
              <Stack direction="row" spacing={2} paddingTop={1}>
                <TextField
                  label="Username"
                  type="text"
                  name="username"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required  
                  onChange={handleChange}
                />
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  required
                  error={!!passwordError}
                  helperText={passwordError}
                />
                 </Stack>

<TextField
  label="address"
  type="text"
  name="address"
  fullWidth
  margin="normal"
  variant="outlined"
  onChange={handleChange}
  required  
/>

<Stack direction="row" spacing={2} paddingTop={1} >
  <TextField
    label="comp_name"
    type="text"
    name="comp_name"
    fullWidth
    margin="normal"
    variant="outlined"
    onChange={handleChange}
    required  
  />
  <TextField
    label="designation"
    type="text"
    name="Designation"
    fullWidth
    margin="normal"
    variant="outlined"
    onChange={handleChange}
    required  
  />
</Stack>


<TextField
  label="telephone"
  type="number"
  name="telephone"
  fullWidth
  margin="normal"
  variant="outlined"
  onChange={handleChange}
  required  
/>

<Stack direction="row" spacing={2} paddingTop={1}>
  <TextField
    label="name_auth_person"
    type="text"
    name="name_auth_person"
    fullWidth
    margin="normal"
    variant="outlined"
    onChange={handleChange}
    required  
  />

  <TextField
    label="auth_tel"
    type="text"
    name="auth_tel"
    fullWidth
    margin="normal"
    variant="outlined"
    onChange={handleChange}
    required  
  />
  <TextField
    label="auth_cell"
    type="text"
    name="auth_cell"
    fullWidth
    margin="normal"
    variant="outlined"
    onChange={handleChange}
    required  
  />
</Stack>
<TextField
  label="holding"
  type="text"
  name="holding"
  fullWidth
  margin="normal"
  variant="outlined"
  onChange={handleChange}
  required  
/>

<TextField
  label="PAN"
  type="text"
  name="PAN"
  fullWidth
  margin="normal"
  variant="outlined"
  onChange={handleChange}
  required  
/>


<TextField
  label="comp_st_no"
  type="text"
  name="comp_st_no"
  fullWidth
  margin="normal"
  variant="outlined"
  onChange={handleChange}
  required  
/>
<TextField
  label="vat_no"
  type="text"
  name="vat_no"
  fullWidth
  margin="normal"
  variant="outlined"
  onChange={handleChange}
  required  
/>
                <Button variant="contained" color="success" type="submit" sx={{marginTop: 2, minWidth: 150}}>
                  Submit
                </Button>
              </form>
            </Paper>
          </Container>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;