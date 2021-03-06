import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{ margin: '90px 0' }}>{children}</Container>
    </>
  );
};

export default MainLayout;
