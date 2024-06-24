import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ backgroundColor: 'white', width: '1100px' }}>
        <Button color="inherit" component={Link} to="/components/video/VideoList" style={{ color: 'black', textDecoration: 'none',marginLeft: '10px' }}>Videos</Button>
        <Button color="inherit" component={Link} to="/dashboard/user" style={{ color: 'black', textDecoration: 'none',marginLeft: '20px' }}>Documents</Button>
        <Button color="inherit" component={Link} to="/dashboard/products" style={{ color: 'black', textDecoration: 'none',marginLeft: '30px' }}>Informations</Button>
        <div style={{ marginLeft: '900px', color: 'white' }}>
          <Searchbar style={{ color: 'white' }} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
