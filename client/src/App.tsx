import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Login from './pages/login';
import Dashboard from './pages/dashboard'

const Footer = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Developed By
      <Link color="inherit" href="email://anand.mv2@gmail.com">
        Anand Moothedath Velluva
      </Link>
    </Typography>
  );
}

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}