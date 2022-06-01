import { Box } from '@chakra-ui/react';
import React from 'react';
import Footer from './footer';
import Header from './header';

export default function Layout() {
  return (
    <>
        <Header />
        <Box
            as='main'
        >

        </Box>
        <Footer />
    </>
  );
}
