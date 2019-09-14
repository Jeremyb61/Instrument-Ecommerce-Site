import React from 'react'

import { Container } from '@material-ui/core';

import Header from './Layout/Header.js';
import Browse from './Browse.js'
import Footer from './Layout/Footer.js'



export default function HomePage() {
    return (
        <div>
            <Header />
            <Container maxWidth="xl">
                <Browse />
            </Container>
            <Footer />
        </div>
    )
}
